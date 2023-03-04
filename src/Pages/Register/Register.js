import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import loginImg from '../../assets/images/login/login.svg';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';



const Register = () => {
    const {createUser} = useContext(AuthContext);

    const handleSignUp=(event)=>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
        .then((result)=>{
            alert("User created successfully");
            form.reset();
        })
        .catch((err)=>{
            console.error(err);
        })
    }

    return (
        <div className="hero my-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 text-center lg:text-left sm:w-2/3">
                    <img className='w-3/4' src={loginImg} alt="" />
                </div>
                <div className="w-1/2 card flex-shrink-0  max-w-sm shadow-2xl sm:w-screen">
                    <form onSubmit={handleSignUp} className="card-body">
                        <h1 className="text-center text-5xl font-bold pb-3">Register here!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="your name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input input-bordered" required/>
                        </div>
                        <div className="form-control mt-6">
                            <input className='btn btn-primary' type="submit" value="Register" />
                        </div>
                    </form>
                    <p className='pl-5 pb-5 italic'>Already have an account? <Link className='text-primary underline' to='/login'>Please Login!</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;