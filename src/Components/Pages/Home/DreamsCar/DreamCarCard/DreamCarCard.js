import { Card, Grid } from '@mui/material';
import React from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const DreamCarCard = ({ car }) => {
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ maxWidth: 345 }} data-aos="flip-right">
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="200"
                    image={car.picture || `data:image/*;base64,${car.picture2}`}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {car.name}
                    </Typography>
                    <Typography sx={{ fontWeight: 'bold' }} variant="subtitle2" gutterBottom component="div">
                        Price: ${car.price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {car.details.slice(0, 110)}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link className='themeBtn' style={{
                        padding: '4px 16px', fontSize: '12px', fontWeight: '500'
                    }} to={`/carDetails/${car._id}`}>Buy Now <i className='fas fa-angle-double-right'></i></Link>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default DreamCarCard;