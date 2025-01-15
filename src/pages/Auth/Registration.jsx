import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import NavBar from "../Shared/NavBar/NavBar";
import Header from "../Shared/Header/Header";


const Registration = () => {
    const {createUser} = useContext(AuthContext);

    const handleRegister = (e)=>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const email = form.get('email');
        const password = form.get('password');

        createUser(email,password)
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.log(error.message);
        })
        console.log(email, password)
    }

    return (
        <div>
            <Header></Header>
            <NavBar></NavBar>
            <div className="w-11/12 mx-auto">
                <div>
                <h2 className="text-center text-3xl font-bold my-5">Please Register</h2>
                <div className="card bg-base-100 md:w-3/4 lg:w-1/3 mx-auto shrink-0 shadow-2xl">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered"  />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <p className="text-center mb-5">Do you have an account? <Link to={'/login'} className="font-bold text-blue-500">Login</Link></p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;