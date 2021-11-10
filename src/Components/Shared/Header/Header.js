import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light header">
            <div className='container'>
                <img style={{ width: '10%' }} src="https://i.ibb.co/Wc690Sj/logo-removebg-preview.png" alt="logo" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="pages navbar-nav me-auto mb-2 mb-lg-0">
                        <NavLink to="/home">Home</NavLink>
                        <NavLink to="/my-order">My Orders</NavLink><NavLink to="/contact">Contact Us</NavLink>
                    </div>
                    <form className="d-flex">
                        {/* <small className='me-2 user'>
                        <p className='m-0'>Sign as:</p>
                        <p className='m-0'>{user?.displayName || user?.email}</p>
                    </small> */}
                        <NavLink to='/register'>
                            <button className="logOut"><i className="fas fa-sign-out-alt me-1"></i>logOut</button>
                        </NavLink>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Header;