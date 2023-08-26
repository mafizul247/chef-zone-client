import React from 'react';
import { Container } from 'react-bootstrap';
import { Link, useNavigate, useRouteError } from 'react-router-dom';
import errorLogo from './../../assets/404-error1.png'

const ErrorPage = () => {
    const error = useRouteError();
    const errorMessage = error.error.statusText;
    const navigate = useNavigate();
    // console.log(error);
    return (
        <Container className='text-center'>
            <div>
                <img src={errorLogo} alt="Error" />
            </div>
            <div>
                <h2>{error?.status} Error</h2>
                <p className='text-danger'>{error?.statusText}</p>
            </div>
            <div>
                <Link to='/'><button className="btn btn-primary">Go Home</button></Link>
                <button onClick={() => navigate(-1)} className="btn btn-outline-primary ms-3">Go Back</button>
            </div>
        </Container>
    );
};

export default ErrorPage;