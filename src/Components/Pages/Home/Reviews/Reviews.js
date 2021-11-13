import { Container } from '@mui/material';
import React from 'react';

const Reviews = () => {
    return (
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
                }}>Wall of Love</p>
                <h2>Happy Clients Reviews</h2>
            </div>
        </Container>
    );
};

export default Reviews;