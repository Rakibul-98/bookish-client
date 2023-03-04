import React from 'react';
import { Link } from 'react-router-dom';
import loginImg from '../../assets/images/login/login.svg';

const handleLogin=(event)=>{
    event.preventDefault();
}

const Login = () => {

    return (
        <div className="hero my-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 text-center lg:text-left sm:w-2/3">
                    <img className='w-3/4' src={loginImg} alt="" />
                </div>
                <div className="w-1/2 card flex-shrink-0  max-w-sm shadow-2xl sm:w-screen">
                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-center text-5xl font-bold pb-3">Login now!</h1>
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
                            <label className="label">
                                <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className='btn btn-primary' type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='pl-5 pb-5 italic'>New to Bookish? <Link className='text-primary underline' to='/signup'>Register now!</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;