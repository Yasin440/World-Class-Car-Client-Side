import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import DreamCarCard from './DreamCarCard/DreamCarCard';

const DreamsCar = () => {
    const [cars, setCars] = useState();
    useEffect(() => {
        fetch('http://localhost:4000/clients')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])
    return (
        <Container>
            <div style={{ width: 'fit-content', margin: '4rem auto', textAlign: 'center', padding: '0 2rem', borderLeft: '4px solid #1e88e5', borderRight: '4px solid #1e88e5' }}>
                <p style={{
                    backgroundColor: '#1e88e5', color
                        : 'white', fontWeight: 'bold'
                }}>EVERYTHING YOU NEED TO KNOW</p>
                <h2>THE WORLD OF AUTOS</h2>
            </div>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    cars?.map(car => <DreamCarCard
                        key={car._id}
                        car={car}
                    ></DreamCarCard>)
                }
            </Grid>
        </Container>
    );
};

export default DreamsCar;