import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import profile from './profile_1-removebg-preview (3).png'

const Header = () => {
    return (
        <div className='header d-lg-flex flex-lg-row justify-content-around align-items-center mx-0 px-0'>
            
            <div className='my-0 py-3'>
                <img src={profile} alt="" className='rounded-circle' width={300} />
                <h1 className='text-light'>Md Abdur Rahman</h1>
                <h3 className='text-danger'>Mern-stack Web Developer</h3>
                <h5 className='text-light'>Khulna,Bangladesh</h5>
                
            </div>
            
        </div>
    );
};

export default Header;