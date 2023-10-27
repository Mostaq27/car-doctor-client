import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { CirclesWithBar } from "react-loader-spinner";


const Services = () => {
    const [services, setServices] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }, []);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="mt-4">
            <div className="text-center space-y-5">
                <h3 className="text-2xl font-bold text-orange-600">Our services</h3>
                <h1 className="text-5xl font-semibold">Our Services Area</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10 pl-5">
                        {
                            services.map(service => <ServiceCard
                                key={service._id}
                                service={service}
                            >

                            </ServiceCard>)
                        }
                    </div>
            }
        </div>
    );
};
export default Services;