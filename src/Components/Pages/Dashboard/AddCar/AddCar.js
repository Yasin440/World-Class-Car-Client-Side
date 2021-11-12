import React from 'react';
import TextField from '@mui/material/TextField';
import { useForm } from "react-hook-form";
import useAuth from '../../../../Hooks/useAuth';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

const style2 = {
    width: '75%',
    my: '.7rem',
}

const AddCar = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();

    //add new car to cars in database
    const addNewCar = data => {
        const confirm = window.confirm('All info & URL Is correct?');
        if (confirm) {
            fetch('https://boiling-escarpment-25426.herokuapp.com/addCars', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(event => {
                    if (event.insertedId) {
                        alert('Your Car Added to Cars to Explore')
                        reset();
                    }
                })
        }
    }
    return (
        <div>
            <div style={{
                width: 'fit-content',
                margin: '1rem auto 2rem auto',
                textAlign: 'center',
                padding: '0 2rem',
                borderLeft: '4px solid #1e88e5',
                borderRight: '4px solid #1e88e5'
            }}>
                <p style={{
                    backgroundColor: '#1e88e5',
                    color: 'white',
                    fontWeight: 'bold'
                }}>EXPLORE A NEW CAR</p>
                <h2>ADD BRAND NEW CARD</h2>
            </div>
            <form style={{ textAlign: 'center' }} className='w-75 m-auto' onSubmit={handleSubmit(addNewCar)} >
                <Typography id="modal-modal-title" variant="h5" component="h2">
                    Add a New Car
                </Typography>
                <TextField
                    required
                    {...register("clientName")}
                    defaultValue={user.displayName}
                    id="standard-basic"
                    label="Your Name"
                    type='text'
                    variant="standard"
                    sx={style2}
                />
                <TextField
                    disabled
                    {...register("email")}
                    defaultValue={user.email}
                    id="standard-basic"
                    label="Email"
                    type='email'
                    variant="standard"
                    sx={style2}
                />
                <TextField
                    required
                    {...register("name")}
                    id="standard-basic"
                    label="Car Name"
                    type='text'
                    variant="standard"
                    sx={style2}
                />
                <TextField
                    required
                    {...register("picture")}
                    id="standard-basic"
                    label="Car IMG URL"
                    variant="standard"
                    sx={style2}
                />
                <TextField
                    required
                    {...register("price")}
                    id="standard-basic"
                    label="Car Price"
                    variant="standard"
                    type='number'
                    sx={style2}
                />
                <TextField
                    required
                    {...register("details")}
                    id="standard-textarea"
                    label="Car Details"
                    variant="standard"
                    sx={style2}
                />
                <Button type='submit' sx={{ width: 'fitContent', textAlign: 'center', fontWeight: 'bold', margin: '20px auto', display: 'block' }} variant="outlined">Add Car</Button>
            </form>
        </div>
    );
};

export default AddCar;