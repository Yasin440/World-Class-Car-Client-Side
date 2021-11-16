import { Alert, Button, CircularProgress, Container } from '@mui/material';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState, useEffect } from 'react';
import PaymentIcon from '@mui/icons-material/Payment';

const CheckoutForm = ({ paymentFor }) => {
    const { price } = paymentFor.carDetails;
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [processing, setProcessing] = useState(false);
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState('');
    useEffect(() => {
        fetch('https://nameless-river-31605.herokuapp.com/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => setClientSecret(data.clientSecret))
    }, [price])
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        setProcessing(true);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            setError(error);
            setSuccess(false);
            setProcessing(false);
        }
        else if (paymentMethod) {
            setError('');
        }
        //payment intent
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: paymentFor.name,
                        email: paymentFor.email
                    },
                },
            },
        );



        if (intentError) {
            setError(intentError);
            setSuccess('')
        }
        else if (paymentIntent) {
            setError('');
            setSuccess(true);
            setProcessing(false);
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
                {processing ?
                    <CircularProgress sx={{ width: '50%' }} />
                    :
                    <Button
                        sx={{ my: 3 }}
                        type="submit"
                        size='small'
                        disabled={!stripe}
                        variant="contained"
                        endIcon={<PaymentIcon />}>
                        Pay ${paymentFor?.carDetails.price}
                    </Button>
                }

            </form>
            {
                error &&
                <Alert severity="error">{error.code}</Alert>
            }
            {
                success &&
                <Alert severity="success">Your payment process successful</Alert>
            }
        </Container>
    );
};

export default CheckoutForm;