import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingRow from "./BookingRow";
import { CirclesWithBar } from "react-loader-spinner";
import axios from "axios";



const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(true);
    const [bookings, setBookings] = useState([]);
    console.log(user)

    useEffect(() => {

        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }, []);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    useEffect(() => {

        axios.get(url, {withCredentials: true})
        .then(res => {
            setBookings(res.data);
        })
        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => setBookings(data))
    }, []);

    const handleDelete = id => {
        const proceed = confirm('Are You sure want to delete');
        if (proceed) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = bookings.filter(booking => booking._id !== id)
                        setBookings(remaining);
                    }
                })
        }
    }

    const handleBookingConfirm = id => {
        const proceed = confirm('Are You sure want to change')
        if (proceed) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ status: 'confirm' })
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.modifiedCount > 0) {
                        // Update state
                        const remaining = bookings.filter(booking => booking._id !== id);
                        const updated = bookings.find(booking => booking._id == id);
                        updated.status = 'confirm'
                        const newBookings = [updated, ...remaining];
                        setBookings(newBookings);
                    }
                })
        }
    }

    return (
        <div className="py-10">
            <h2 className="text-5xl text-center font-semibold py-10">Your Bookings: {bookings.length}</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                Delete
                            </th>
                            <th>Image</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    {
                        isLoading ? <div className=" justify-center items-center flex py-20"> 
                        <CirclesWithBar
                            height="100"
                            width="100"
                            color="#4fa94d"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                            outerCircleColor=""
                            innerCircleColor=""
                            barColor=""
                            ariaLabel='circles-with-bar-loading'
                        />
                        </div>
                            :
                            <tbody>
                                {
                                    bookings.map(booking => <BookingRow
                                        key={booking._id}
                                        booking={booking}
                                        handleDelete={handleDelete}
                                        handleBookingConfirm={handleBookingConfirm}
                                    >
                                    </BookingRow>)
                                }

                            </tbody>
                    }

                </table>
            </div>
        </div>
    );
};
export default Bookings;