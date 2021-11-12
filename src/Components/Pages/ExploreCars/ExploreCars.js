import { CircularProgress, Container, Grid } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import DreamCarCard from '../Home/DreamsCar/DreamCarCard/DreamCarCard';

const ExploreCars = () => {
    const [cars, setCars] = useState();
    useEffect(() => {
        fetch('https://boiling-escarpment-25426.herokuapp.com/cars/all')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])
    return (
        <>
            <Header></Header>
            <Container>
                <div style={{
                    width: 'fit-content',
                    margin: '4rem auto',
                    textAlign: 'center',
                    padding: '0 2rem',
                    borderLeft: '4px solid #1e88e5',
                    borderRight: '4px solid #1e88e5'
                }}>
                    <p style={{
                        backgroundColor: '#1e88e5',
                        color: 'white',
                        fontWeight: 'bold'
                    }}>GET READY TO EXPLORE</p>
                    <h2> WORLD CLASS LUXURY CARS</h2>
                </div>
                {!cars ?
                    <div style={{ textAlign: 'center' }}>
                        <CircularProgress sx={{ my: 3 }} />
                    </div>
                    :
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                            cars?.map(car => <DreamCarCard
                                key={car._id}
                                car={car}
                            ></DreamCarCard>)
                        }
                    </Grid>
                }

            </Container>
            <Footer></Footer>
        </>
    );
};

export default ExploreCars;