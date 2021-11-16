import { Alert, Button, Container } from '@mui/material';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import PaymentIcon from '@mui/icons-material/Payment';

const CheckoutForm = ({ paymentFor }) => {
    const [error, setError] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log(error);
            setError(error);
        }
        else {
            setError('');
            console.log(paymentMethod);
        }
    }

    return (
        <Container sx={{ textAlign: 'center' }}>
            <form onSubmit={handleSubmit}>
                <CardElement
                    style={{ width: '75%' }}
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <Button
                    sx={{ my: 3 }}
                    type="submit"
                    size='small'
                    disabled={!stripe}
                    variant="contained"
                    endIcon={<PaymentIcon />}>
                    Pay ${paymentFor?.carDetails.price}
                </Button>
            </form>
            {
                error &&
                <Alert severity="error">{error.code}</Alert>
            }
        </Container>
    );
};

export default CheckoutForm;