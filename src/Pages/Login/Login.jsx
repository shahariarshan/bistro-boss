import { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate,  validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';


import GoogleSignIn from '../../hooks/GoogleSignIn';
import Swal from 'sweetalert2';

const Login = () => {
    // const ref =useRef(null)
    const [disabled,setDisabled] =useState(true)
    const {signIn} =useContext(AuthContext)
    const navigate =useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname|| '/'
    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])
    const handelLoginForm =event =>{
        event.preventDefault()
        const form =event.target
        const email = form.email.value
        const password = form.password.value
        // console.log(email,password);
       
        event.target.reset();


        signIn(email,password)
        .then(result => {
            const user =result.user
            console.log(user);
            // toast('User logged in')
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `User logged in`,
                showConfirmButton: false,
                timer: 1500
            });
        })
        navigate (from,{replace:true})
    }
    const handelCaptcha =(e)=>{
        const captchaValue = e.target.value
        // console.log(captchaValue);
        if(validateCaptcha(captchaValue)){
            setDisabled(false)
        }
        else{
            setDisabled(true)
        }
    }
    return (
        <div className="hero min-h-screen">
             <Helmet>
                <title>
                    Bistro Boss | Login
                </title>
            </Helmet>
           
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:w-1/2 lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card lg:w-1/2 shadow-2xl bg-base-100">
                    <form onSubmit={handelLoginForm} className="card-body">
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

                        {/* captcha  */}

                        <div className="form-control">
                            <label className="label">
                            <LoadCanvasTemplate />
                            </label>
                            <input onBlur={handelCaptcha} type="text"  name="captcha" placeholder="Type the Captcha  " className="input input-bordered" required />
                            {/* <button  className="btn  text-[#111] border-0 border-b-4 btn-outline btn-xs">Validate</button> */}
                          
                        </div>
                        <div className="form-control mt-6">
                            
                            <input  disabled={disabled} className="btn  text-[#BB8506] border-0 border-b-4 btn-outline" type="submit" value="Login" />
                        </div>
                    </form>
                    <GoogleSignIn></GoogleSignIn>
                    <p className='text-center mb-4'>New Here? Please <Link to='/signUp' className='text-[#BB8506]'>SignUp</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;