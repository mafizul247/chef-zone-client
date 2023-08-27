import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from './../../assets/chefzone-footer-logo.webp'
import facebook from './../../assets/facebook-logo1.avif'
import linkedin from './../../assets/linkdin-logo.avif'
import instagram from './../../assets/instagram-icon.avif'
import youtube from './../../assets/youtube-logo.avif'
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_mbphvry', 'template_cf0xf1a', form.current, 'AHnzkos0nUk-w7aTB')
            .then((result) => {
                console.log(result.text);
                toast.success('Your Message Successfully Sent');
                e.target.reset();
            }, (error) => {
                console.log(error.text);
                toast.error(error.text);
            });
    };

    return (
        <div className='mt-5'>
            <div className='row g-4 bg-dark text-white px-3 pt-3 px-md-5 pt-md-5 w-100'>
                <div className="col-12 col-md-6 col-lg-3 ">
                    <img src={logo} alt="Logo" />
                    <address className='my-2'>Mohammadpur, Dhaka-1207, Bangladesh</address>
                    <p className='m-0'><b>Support Number</b></p>
                    <Link className='text-decoration-none text-white d-block' to="tel:+8801912007697">+8801912007697</Link>
                    <Link className='text-decoration-none text-white d-block' to="tel:+88017126650187">+8801712665018</Link>
                    <Link className='text-decoration-none text-white d-block'>mafizul247@gmail.com</Link>
                    <p className='mt-2'><b>Find Us Social</b></p>
                    <div>
                        <Link to='https://www.facebook.com/'><img style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }} src={facebook} alt="Facebook" /></Link>
                        <Link to='https://www.linkedin.com/'><img style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }} src={linkedin} alt="Facebook" /></Link>
                        <Link to='https://www.instagram.com/'><img style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }} src={instagram} alt="Facebook" /></Link>
                        <Link to='https://www.youtube.com/'><img style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }} src={youtube} alt="Facebook" /></Link>
                    </div>
                </div>
                <div className='col-12 col-md-6 col-lg-3'>
                    <h3>Site Navigation</h3>
                    <Link className='text-decoration-none text-white d-block' to='/'>Home</Link>
                    <Link className='text-decoration-none text-white d-block' to='/about'>About</Link>
                    <Link className='text-decoration-none text-white d-block' to='/blog'>Blog</Link>
                </div>
                <div className='col-12 col-md-12 col-lg-6'>
                    <h3>Stay Informed</h3>
                    <p>Keep up to date with the latest from ChefZone. If you have any advice please send us your message</p>
                    <div>
                        <form ref={form} onSubmit={sendEmail}>
                            <div className='row row-cols-1 row-cols-md-2 mb-2'>
                                <div className='mb-2 mb-md-0'>
                                    <input className="form-control" type="text" name="from_name" id="name" placeholder='Entry Your Name' required />
                                </div>
                                <div>
                                    <input className="form-control" type="text" name="from_phone" id="phone" placeholder='Entry Your Phone' required />
                                </div>
                            </div>
                            <div className="mb-2">
                                <input type="email" className="form-control" name="from_email" id="email" placeholder="Enter Your Email" required />
                            </div>
                            <div className="mb-2">
                                <textarea name="message" className="form-control" id="message" cols="30" rows="2" placeholder='Entry Your Message' required></textarea>
                            </div>
                            <button type="submit" className="btn btn-secondary form-control"><b>Send Your Message</b></button>
                        </form>
                    </div>
                </div>
                <div>
                    <hr />
                    <p className='text-center text-gray'><small>Copyright @{currentYear} All Reserve || The ChefZone</small></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;