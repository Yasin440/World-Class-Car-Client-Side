import { Container, Grid, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';
import { useHistory } from 'react-router-dom';

const Register = () => {
    const [loginData, setLoginData] = useState();
    const [retypePassError, setRetypePassError] = useState();
    const { registerWithEmailPassword, loading, error } = useAuth();
    const history = useHistory()


    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            setRetypePassError(true);
            return;
        }
        else {
            registerWithEmailPassword(loginData.email, loginData.password, loginData.name, history);
        }

        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="h6" gutterBottom component="div">
                        Please Register
                    </Typography>
                    {loading ?
                        <div style={{ textAlign: 'center' }}>
                            <CircularProgress sx={{ my: 3 }} />
                        </div>
                        :
                        <form onSubmit={handleLoginSubmit} data-aos="flip-right">
                            {error &&
                                <Alert severity="error">{error}</Alert>
                            }
                            <TextField
                                sx={{ width: '75%', mt: 2 }}
                                required
                                name="name"
                                onBlur={handleOnBlur}
                                type="text"
                                label="Your Name"
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', mt: 2 }}
                                required
                                name="email"
                                onBlur={handleOnBlur}
                                type="email"
                                label="Your Email"
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', mt: 2 }}
                                required
                                label="Your Password"
                                name="password"
                                onBlur={handleOnBlur}
                                type="password"
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', mt: 2 }}
                                required
                                label="Retype Your Password"
                                name="password2"
                                onBlur={handleOnBlur}
                                type="password"
                                variant="standard" />
                            {retypePassError &&
                                <Alert sx={{ width: '75%', mt: 2, mx: 'auto' }} severity="error">Password didn't Match — check it out!</Alert>
                            }
                            <Button sx={{ width: '75%', my: 4, fontWeight: 600 }} type="submit" variant="contained">Register</Button>
                            <Link style={{ textDecoration: 'none' }} to="/login"><Button sx={{ fontWeight: 600 }} variant="text">Already Registered? Please Login</Button></Link>
                        </form>
                    }
                </Grid>
                <Grid item xs={12} md={6}>
                    <img width='90%' src="https://i.ibb.co/2vDHcBQ/register.png" alt="img" data-aos="zoom-in" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;