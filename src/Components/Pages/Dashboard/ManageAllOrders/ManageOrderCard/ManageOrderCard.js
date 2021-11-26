import { Card, Grid } from '@mui/material';
import React from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import useAuth from '../../../../../Hooks/useAuth';

const ManageOrderCard = ({ manageOrders }) => {
    const { manageAllOrders, setManageAllOrders } = useAuth()
    const { _id, name, email, status } = manageOrders;
    const { picture, price, details } = manageOrders.carDetails;
    const handleDelete = () => {
        const confirm = window.confirm("Are You Sure To DELETE This CarsOrder..?");
        if (confirm) {
            fetch(`https://nameless-river-31605.herokuapp.com/orderedCars/delete/${_id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert("DELETE Successfully");
                        const remain = manageAllOrders.filter(manageAllOrder => manageAllOrder._id !== _id);
                        setManageAllOrders(remain);
                    }
                })
        }

    }
    const handleApprovedStatus = () => {
        fetch(`https://nameless-river-31605.herokuapp.com/ordered_car/status/${_id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert("Approved Successfully. Please ReloadPage..");
                }

            })

    }
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card data-aos="zoom-in" sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="200"
                    image={picture}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {manageOrders.carDetails.name}
                    </Typography>
                    <Typography sx={{ fontWeight: 'bold' }} variant="subtitle2" gutterBottom component="div">
                        Price: ${price}
                    </Typography>
                    <Typography sx={{ fontWeight: 'bold' }} variant="subtitle2" gutterBottom component="div">
                        Order By: {name}
                    </Typography>
                    <Typography sx={{ fontWeight: 'bold' }} variant="subtitle2" gutterBottom component="div">
                        Status: {status}
                    </Typography>
                    <Typography sx={{ fontWeight: 'bold' }} variant="subtitle2" gutterBottom component="div">
                        Email: {email}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {details.slice(0, 110)}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        onClick={handleDelete}
                        sx={{ fontWeight: 'bold' }}
                        startIcon={<DeleteIcon />}
                        color="error"
                        variant="outlined">Delete
                    </Button>
                    {status === 'Pending' &&
                        <Button
                            variant="outlined"
                            onClick={handleApprovedStatus}
                        >Approve</Button>
                    }
                </CardActions>
            </Card>
        </Grid>
    );
};

export default ManageOrderCard;