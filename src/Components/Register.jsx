import { Alert, Button, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

import '../Styles/Register.css';

function Register() {
    const [userId, setUserId] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState(''); 
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [pincode, setPincode] = useState('');
    const [country,setCountry] = useState('');

    const [registerSuccess, setRegisterSuccess] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const body = { userId, username, password, phone, email, address, city, state, pincode, country };
        console.log(JSON.stringify(body)); 
    
        const response = await fetch('http://192.168.99.193:5000/user_signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body), // Convert body to JSON string
        });
        const data = await response.json();
        console.log(data);
        if (data.success) {
            setRegisterSuccess(true);
        } else {
            console.log(data.status);
            if (data.status === 'user id already exists') {
                setErrorMessage('User ID already exists. Please choose a different one.');
            } else {
                setErrorMessage('Registration failed. Please try again.');
            }
            setRegisterSuccess(false);
        }
    
        setTimeout(() => {
            setRegisterSuccess(null);
        }, 5000);
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className='register-form'>
            <Typography variant='h4' component='h1' gutterBottom sx={{color: '#795548',mb:3, textAlign:'center', textShadow:'1px -1px 1px rgba(0, 0, 0, 0.5);'}}>
                        Welcome
                </Typography>
                <Grid container spacing={2} className='register-form-container'>
                    <Grid item xs={12} md={6} spacing={5}>
                        <TextField label='User id' variant='outlined' fullWidth required sx={{mb:2}}
                            value={userId} onChange={(e) => { setUserId(e.target.value) }} className='custom-textfield' />
                        <TextField label='Username' variant='outlined' fullWidth required sx={{mb:2}}
                            value={username} onChange={(e) => { setUsername(e.target.value) }} className='custom-textfield' />
                        <TextField label='Password' variant='outlined' fullWidth required sx={{mb:2}}
                            value={password} onChange={(e) => { setPassword(e.target.value) }} className='custom-textfield' />
                        <TextField label='Phone No.' variant='outlined' fullWidth required sx={{mb:2}}
                            value={phone} onChange={(e) => { setPhone(e.target.value) }} className='custom-textfield' />
                        <TextField label='Email' variant='outlined' fullWidth sx={{mb:2}}
                            value={email} onChange={(e) => { setEmail(e.target.value) }} className='custom-textfield' />
                    </Grid>
                    <Grid item xs={12} md={6} spacing={5}>
                        <TextField label='Address' variant='outlined' fullWidth required sx={{mb:2}}
                            value={address} onChange={(e) => { setAddress(e.target.value) }} className='custom-textfield' />
                        <TextField label='City' variant='outlined' fullWidth required sx={{mb:2}}
                            value={city} onChange={(e) => { setCity(e.target.value) }} className='custom-textfield' />
                        <TextField label='State' variant='outlined' fullWidth required sx={{mb:2}}
                            value={state} onChange={(e) => { setState(e.target.value) }} className='custom-textfield' />
                        <TextField label='Pincode' variant='outlined' fullWidth required sx={{mb:2}}
                            value={pincode} onChange={(e) => { setPincode(e.target.value) }} className='custom-textfield' />
                        <TextField label='Country' variant='outlined' fullWidth required sx={{mb:2}}
                            value={country} onChange={(e) => { setCountry(e.target.value) }} className='custom-textfield' />
                    </Grid>
                </Grid>
                <Button variant='contained' id='submit-btn' color='primary' type='submit' sx={{mt:3,backgroundColor: '#0a8d48'}}>Login</Button>
            </form>
            {registerSuccess != null && (
                <Alert severity={registerSuccess ? 'success' : 'error'} sx={{ mt: 3 }}>
                    {registerSuccess ? 'Registration successful!' : errorMessage}
                </Alert>
            )}
        </div>
    )
}

export default Register;