import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg"
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const  SignUp =() => {
    const {createUser} = useContext(AuthContext);

    const handleSignUp = event =>{
        event.preventDefault();

        const form =event.target;

        const name = form.name.value;
        const email =form.email.value;
        const password = form.password.value;
        console.log(name,email,password)

        createUser(email,password)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(error => {
            console.error(error);
        })
    }
    return(
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
            <div className="w-1/2 mr-12">
                
                <img src= {img} alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleSignUp} className="card-body">
                <h1 className="text-5xl text-center font-bold">Sign Up</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                        
                    </div>
                    <div className="form-control mt-6">
                         <input className="btn btn-primary capitalize" type="submit" value="Sign Up" />
                    </div>
                </form>
                <p className="my-4 text-center">Already have an account?  <Link className="text-orange-600 font-bold" to="/login">Login</Link></p>
            </div>
        </div>
    </div>
    );
};
export default SignUp;