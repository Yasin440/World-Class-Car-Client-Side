import { Card, Grid } from '@mui/material';
import React from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import useAuth from '../../../../../Hooks/useAuth';

const ManageCarCard = ({ car }) => {
    const { cars, setCars } = useAuth()
    const handleDelete = () => {
        const confirm = window.confirm("Are You Sure To DELETE This CarsOrder..?");
        if (confirm) {
            fetch(`https://nameless-river-31605.herokuapp.com/all_Cars/delete/${car._id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert("DELETE Successfully");
                        const remain = cars.filter(data => data._id !== car._id);
                        setCars(remain);
                    }
                })
        }

    }
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ maxWidth: 345 }} data-aos="fade-up">
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="200"
                    image={car.picture}
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
                    <Button
                        onClick={handleDelete}
                        sx={{ fontWeight: 'bold' }}
                        color="error"
                        startIcon={<DeleteIcon />}
                        variant="outlined">Delete
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default ManageCarCard;