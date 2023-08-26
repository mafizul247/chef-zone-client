import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import NavBer from '../components/Header/NavBer';

const Main = () => {
    return (
        <div className='container'>
            <NavBer/>
            {/* <div className='min-vh-100'> using Bootstrap*/}
            <div style={{minHeight: '85vh'}}>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;