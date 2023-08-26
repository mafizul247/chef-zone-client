import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../providers/AuthProvider';
import { FaGoogle } from 'react-icons/fa';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const { user, createUser, loginGoogle, setReload } = useContext(AuthContext)
    const [show, setShow] = useState(true);
    const [email, setEmail] = useState();
    const [name, setName] = useState();
    const [photo, setPhoto] = useState();
    const [photoErr, setPhotoErr] = useState();
    const [emailErr, setEmailErr] = useState();
    const [password, setPassword] = useState();
    const [passErr, setPassErr] = useState();
    const [confirm, setConfirm] = useState();
    const [confErr, setConfErr] = useState();
    const [confSuc, setConfSuc] = useState();

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handlePhoto = (event) => {
        const inputPhoto = event.target.value;
        setPhotoErr('')
        setPhoto(inputPhoto);
        if (!/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(inputPhoto)) {
            setPhotoErr('Input valid url');
        }
    }

    const handleEmail = (event) => {
        const inputEmail = event.target.value;
        setEmailErr('');
        setEmail(inputEmail);
        if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(inputEmail)) {
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

    const handleConfirmPassword = (event) => {
        const inputConfirm = event.target.value;
        setConfErr('');
        setConfSuc('')
        setConfirm(inputConfirm);

        if (!/(?=.*[a-z])/.test(inputConfirm)) {
            setConfErr('Password should at least one lowercase a-z');
        } else if (!/(?=.*[A-Z])/.test(inputConfirm)) {
            setConfErr('Password should at least one lowercase A-Z');
        } else if (!/(?=.*[!@#$%^&*])/.test(inputConfirm)) {
            setConfErr('Password should at least one special character !@#$%^&*')
        } else if (!/(?=.*[0-9])/.test(inputConfirm)) {
            setConfErr('Password should at least one number 0-9')
        } else if (inputConfirm.length < 6) {
            setConfErr('Password should minimum 6 character')
        } else if (password !== inputConfirm) {
            setConfErr('Password and Confirm Password not match')
        } else if (password === inputConfirm) {
            setConfSuc('Password and Confirm Password Match');
        }
    }

    const handleRegister = (event) => {
        event.preventDefault();
        if (password !== confirm) {
            toast.error('Password and Confirm Password Not Match')
            return;
        }
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                profileUpdate(loggedUser, name, photo);
                navigate(from, { replace: true })
                toast.success(`${name} Successfully Registration`);
                event.target.reset();
            }).catch(error => toast.error(error.message))
    }

    const profileUpdate = (user, name, photo) => {
        updateProfile(user, {
            displayName: name, photoURL: photo
        })
        .then(() => {
            // console.log(user, name, photo);
            setReload(true);
        }).catch(error => console.log(error))
    }

    const handleGoogleLogin = () => {
        loginGoogle()
            .then(result => {
                const loggedUser = result.user;
                // console.log(loggedUser);
                navigate(from, { replace: true });
                toast.success(`${loggedUser.displayName} Registration Successfully`);
            }).catch(error => toast.error(error.message))
    }

    return (
        <div className='col-12 col-md-8 col-lg-6 mx-auto my-5 border p-4 rounded'>
            <h2 className='text-center mb-3'>Registration</h2>
            <form onSubmit={handleRegister}>
                <div className="form-group mb-2">
                    <label htmlFor="exampleInputName">Your Name</label>
                    <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Enter email" required />
                </div>
                <div className="form-group mb-2">
                    <label htmlFor="exampleInputPhoto">Your Photo URL</label>
                    <input type="url" name='photo' value={photo} onChange={handlePhoto} className="form-control" id="exampleInputPhoto" aria-describedby="emailHelp" placeholder="Enter photo" required />
                    <p className='text-danger'><small>{photoErr}</small></p>
                </div>
                <div className="form-group mb-2">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" name='email' value={email} onChange={handleEmail} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required />
                    <p className='text-danger'><small>{emailErr}</small></p>
                </div>
                <div className="form-group mb-2">
                    <label htmlFor="exampleInputPassword1">Confirm Password</label>
                    <input type={show ? 'password' : 'text'} name='password' value={password} onChange={handlePassword} className="form-control" id="exampleInputPassword1" placeholder="Confirm Password" required />
                    <p className='text-danger'><small>{passErr}</small></p>
                </div>
                <div className="form-group mb-2">
                    <label htmlFor="exampleInputConfirm">Password</label>
                    <input type={show ? 'password' : 'text'} name='password' value={confirm} onChange={handleConfirmPassword} className="form-control" id="exampleInputConfirm" placeholder="Password" required />
                    <p className='text-danger m-0'><small>{confErr}</small></p>
                    <p className='text-success m-0'><small>{confSuc}</small></p>
                </div>
                <div className="form-check mb-2">
                    <input onClick={() => setShow(!show)} type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Show Password</label>
                </div>
                <button type="submit" className="btn btn-primary w-100">Registration</button>
            </form>
            <p className='mt-2'>Already have an Account? <Link to='/login'>Please Login</Link></p>
            <hr />
            <div className='text-center my-2'>
                <button onClick={handleGoogleLogin} className='btn btn-outline-primary '><FaGoogle /> Login with Google</button>
            </div>
        </div>
    );
};

export default Register;