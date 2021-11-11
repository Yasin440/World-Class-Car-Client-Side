import React, { useState, useEffect } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { Link, useParams } from 'react-router-dom';
import { Button, CircularProgress, Container } from '@mui/material';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

const DetailsOfCar = () => {
    const { detailId } = useParams();
    const [carDetails, setCatDetails] = useState();
    useEffect(() => {
        fetch(`http://localhost:4000/carDetails/${detailId}`)
            .then(res => res.json())
            .then(data => setCatDetails(data))
    }, [detailId])
    return (
        <div>
            <Header></Header>
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
                }}>GET LEARN IN DETAILS</p>
                <h2>and ONE CLICK TO GET THIS CAR</h2>
            </div>
            {!carDetails ?
                <div style={{ textAlign: 'center' }}>
                    <CircularProgress sx={{ my: 3 }} />
                </div>
                :
                <Container>
                    <Grid container spacing={2}>
                        <Grid item>
                            <ButtonBase sx={{ width: 348, height: 260 }}>
                                <Img alt="img" src={carDetails.picture} />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={5}>
                                <Grid item xs>
                                    <Typography variant="h5" component="div">
                                        {carDetails.name}
                                    </Typography>
                                    <Typography style={{ fontWeight: 'bold' }} variant="subtitle2." color="text.secondary">
                                        Price: $ {carDetails.price}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {carDetails.details}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Link to={`/orderCar/${detailId}`}><Button sx={{ fontWeight: 'bold' }} variant="outlined">Place Order</Button></Link>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            }

            <Footer></Footer>
        </div>
    );
};

export default DetailsOfCar;