import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaRegWindowClose } from "react-icons/fa";
import { AuthContext } from '../../providers/AuthProvider';
import { toast } from 'react-toastify';

const NavBer = () => {
    const {user, logOut} = useContext(AuthContext)
    const [open, setOpen] = useState(true);

    const handleLogOut = () => {
        logOut()
            .then(() => toast.success(`${user.email} Successfully Logout`))
            .catch(error => toast.error(error.message))
    }

    return (
        <nav >
            <div onClick={() => setOpen(!open)} className='d-md-none bg-light ps-3 py-2'>
                {open ? <FaBars className='fs-3 text-primary' /> : <FaRegWindowClose className='fs-3 text-primary' />}
            </div>
            <div onClick={() => setOpen(!open)} className={`d-md-flex justify-content-between align-items-center bg-light ${open && 'd-none'}`}>
                <div className='ps-2 d-none d-md-block'>
                    <Link to='/' className='text-decoration-none fw-bold text-dark fs-4'>ChefZone</Link>
                </div>
                <div className='d-inline-block gap-2'>
                    <NavLink className={({ isActive }) => isActive ? 'text-success fw-bold text-decoration-none d-block d-md-inline p-2' : 'fw-bold text-decoration-none d-block d-md-inline p-2'} to='/'>Home</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'text-success fw-bold text-decoration-none d-block d-md-inline p-2' : 'fw-bold text-decoration-none d-block d-md-inline p-2'} to='/about'>About</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'text-success fw-bold text-decoration-none d-block d-md-inline p-2' : 'fw-bold text-decoration-none d-block d-md-inline p-2'} to='/blog'>Blog</NavLink>
                </div>
                <div className='d-md-flex gap-2 align-items-center p-2'>
                    {user &&
                        <div className='mb-2 mb-md-0'>
                            <img title={user?.displayName} style={{ height: '40px', borderRadius: '50%', border: '2px solid white' }} src={user?.photoURL} alt="Profile" />
                        </div>}
                    {user ?
                        <Link><button onClick={handleLogOut} className="btn btn-outline-success ">logout</button></Link> : <Link to='/login'><button className="btn btn-outline-success ">Login</button></Link>
                    }
                </div>
            </div>
        </nav>
    );
};

export default NavBer;