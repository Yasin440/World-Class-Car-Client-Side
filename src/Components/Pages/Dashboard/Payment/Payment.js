import { Grid } from '@mui/material';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51Jw5oAIx2cW7CINyTZL0otbf4z0WptxUfH1DVQpxSX2pNomeQDHsZe4UkMDpOcmgj6JT0tNO9nxRA07CJeOL2HZB00PU8kG8vw');

const Payment = () => {
    const { id } = useParams();
    const [paymentFor, setPaymentFor] = useState();
    useEffect(() => {
        fetch(`https://nameless-river-31605.herokuapp.com/orderedCars/payment/${id}`)
            .then(res => res.json())
            .then(data => setPaymentFor(data))
    }, [id])
    return (
        <>
            <Grid sx={{ textAlign: 'center' }}>
                <h1>{paymentFor?.carDetails.name}</h1>
                <h5>Price: ${paymentFor?.carDetails.price}</h5>
                <img style={{ borderRadius: '2rem' }} item xs={12} src={paymentFor?.carDetails.picture} alt="img" />
                <h5 style={{ margin: '2rem 0' }}>Pay for ^=^</h5>
            </Grid>
            <Elements stripe={stripePromise}>
                <CheckoutForm
                    paymentFor={paymentFor}
                />
            </Elements>
        </>

    );
};

export default Payment;





















