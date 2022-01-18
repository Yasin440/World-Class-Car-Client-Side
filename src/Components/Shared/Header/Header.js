import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import swal from 'sweetalert';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    const handleLogOut = e => {
        logOut();
        swal("SignOut Successful!", "Please Click Ok!", "success");
        e.preventDefault()
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light header">
            <div className='container'>
                <img style={{ width: '3%' }} src="https://i.ibb.co/vwvfCpH/World-class-car-logo.png" alt="logo" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="pages navbar-nav me-auto mb-2 mb-lg-0">
                        <NavLink to="/home">Home</NavLink>
                        <NavLink to="/explore_all_cars">Explore</NavLink>
                        <NavLink to="/services">Services</NavLink>
                        <NavLink to="/shop">Shop</NavLink>
                        <NavLink to="/blog">Blog</NavLink>
                        <NavLink to="/aboutUs">About Us</NavLink>
                        <NavLink to="/dashboard">Dashboard</NavLink>
                    </div>
                    <form className="d-flex">
                        {user?.email ?
                            <>
                                <NavLink to="/dashboard" style={{ color: '#fff', display: 'flex', alignItems: 'center', marginRight: '9px' }}>
                                    <i className="fas fa-user-circle me-1" style={{ color: 'white', fontSize: '1.2rem' }}></i>
                                    {user?.displayName}
                                </NavLink>

                                <button onClick={handleLogOut} className="logOut navButton"><i className="fas fa-sign-out-alt me-1"></i>logOut</button>
                            </>
                            :
                            <NavLink to='/login'>
                                <button className="navButton"><i className="fas fa-sign-in-alt me-1"></i>SignIn</button>
                            </NavLink>
                        }
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Header;