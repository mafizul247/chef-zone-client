import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { toast } from 'react-toastify';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
    const { loginUser, loginGoogle } = useContext(AuthContext);
    const [show, setShow] = useState(true);
    const [email, setEmail] = useState();
    const [emailErr, setEmailErr] = useState();
    const [password, setPassword] = useState();
    const [passErr, setPassErr] = useState();

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleEmail = (event) => {
        const inputEmail = event.target.value;
        setEmailErr('');
        setEmail(inputEmail);
        if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(inputEmail)) {
            setEmailErr('Please Provide Valid Email');
        }
    }

    const handlePassword = (event) => {
        const inputPass = event.target.value;
        setPassErr('');
        setPassword(inputPass);
        if (!/(?=.*[a-z])/.test(inputPass)) {
            setPassErr('Password should at least one lowercase a-z');
        } else if (!/(?=.*[A-Z])/.test(inputPass)) {
            setPassErr('Password should at least one lowercase A-Z');
        } else if (!/(?=.*[!@#$%^&*])/.test(inputPass)) {
            setPassErr('Password should at least one special character !@#$%^&*')
        } else if (!/(?=.*[0-9])/.test(inputPass)) {
            setPassErr('Password should at least one number 0-9')
        } else if (inputPass.length < 6) {
            setPassErr('Password should minimum 6 character')
        }
    }

    const handleLogin = (event) => {
        event.preventDefault();
        loginUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                navigate(from, { replace: true });
                toast.success(`${email} Login Successfully`);
                event.target.reset();
            }).catch(error => toast.error(error.message))
    }

    const handleGoogleLogin = () => {
        loginGoogle()
        .then(result => {
            const loggedUser = result.user;
            // console.log(loggedUser);
            navigate(from, { replace: true });
            toast.success(`${loggedUser.displayName} Login Successfully`);
        }).catch(error => toast.error(error.message))
    }

    return (
        <div className='col-12 col-md-8 col-lg-6 mx-auto my-5 border p-4 rounded'>
            <h2 className='text-center mb-3'>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="form-group mb-2">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" name='email' value={email} onChange={handleEmail} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required />
                    <p className='text-danger'><small>{emailErr}</small></p>
                </div>
                <div className="form-group mb-2">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type={show ? 'password' : 'text'} name='password' value={password} onChange={handlePassword} className="form-control" id="exampleInputPassword1" placeholder="Password" required />
                    <p className='text-danger'><small>{passErr}</small></p>
                </div>
                <div className="form-check mb-2">
                    <input onClick={() => setShow(!show)} type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Show Password</label>
                </div>
                <button type="submit" className="btn btn-primary w-100 my-2">Login</button>
            </form>
            <p className='mt-2'>Don't have an Account? <Link to='/register' state={location.state}>Please Register</Link></p>
            <hr />
            <div className='text-center my-2'>
                <button onClick={handleGoogleLogin} className='btn btn-outline-primary '><FaGoogle/> Login with Google</button>
            </div>
        </div>
    );
};

export default Login;