import { Grid, Typography, TextField, Button, Container } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import { useLocation, useHistory } from "react-router";
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';

const Login = () => {
    const [loginData, setLoginData] = useState();
    const { signInWithGoogle, logInWithEmailPassword } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';

    //redirect user with google
    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                history.push(redirect_url);
            })
    }
    //redirect user with google
    const logInWithEmailPass = (email, password) => {
        logInWithEmailPassword(email, password)
            .then(result => {
                history.push(redirect_url);
            })
    }
    //get input field value
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLogInWithEmailPass = (e) => {
        logInWithEmailPass(loginData.email, loginData.password);
        e.preventDefault()
    }
    return (
        <>
            <Header></Header>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <img width='90%' src="https://i.ibb.co/Jn9Kx4x/loginimg.png" alt="img" />
                    </Grid>
                    <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                        <Typography variant="h6" gutterBottom component="div">
                            Please Login
                        </Typography>
                        <form onSubmit={handleLogInWithEmailPass}>
                            <TextField
                                required
                                sx={{ width: '75%', mt: 2 }}
                                name="email"
                                onBlur={handleOnBlur}
                                type="email"
                                label="Your Email"
                                variant="standard" />
                            <TextField
                                required
                                sx={{ width: '75%', mt: 2 }}
                                label="Your Password"
                                name="password"
                                onBlur={handleOnBlur}
                                type="password"
                                variant="standard" />
                            <Button
                                sx={{ width: '75%', my: 3, fontWeight: 600 }}
                                type="submit"
                                variant="contained">Login</Button>
                            <Button
                                onClick={handleGoogleLogin}
                                sx={{ fontWeight: 600 }}
                                style={{ display: 'block' }}
                                variant="outlined" color="primary">
                                + GOOGLE
                            </Button>
                            <Link style={{ textDecoration: 'none', }} to="/register">
                                <Button
                                    sx={{ fontWeight: 600 }}
                                    variant="text">New User? Please Register</Button>
                            </Link>
                        </form>
                    </Grid>
                </Grid>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default Login;