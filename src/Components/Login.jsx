import { Alert, Button, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

import '../Styles/Login.css';
import { Link, useNavigate } from 'react-router-dom';


function Login() {

    const [userId, setuserId] = useState('');
    const [password, setPassword] = useState('');
    const [loginSuccess, setLoginSuccess] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const response = await fetch('http://192.168.99.193:5000/user_login', { // Ensure this matches your backend route
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userId, password }),
        });

        const data = await response.json();

        if (data.status === 'valid user') {
            setLoginSuccess(true);
            setTimeout(() => {
                navigate(`/${data.userId}`);
            }, 1000);
        } else {
            setLoginSuccess(false);
        }

        setTimeout(() => {
            setLoginSuccess(null);
        }, 5000);
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className='login-form'>
                <Typography variant='h4' component='h1' gutterBottom sx={{color: '#795548',mb:3, textAlign:'center', textShadow:'1px -1px 1px rgba(0, 0, 0, 0.5);'}}>
                        Login
                </Typography>
                <Stack spacing={5} className='login-form-container'>
                    <TextField label='UserId' variant='outlined' fullWidth required 
                        value={userId} onChange={(e)=>{setuserId(e.target.value)}} className='custom-textfield'/>
                    
                    <TextField label='Password' variant='outlined' fullwidth required 
                        value={password} onChange={(e) => {setPassword(e.target.value)}} className='custom-textfield'/>
                    
                    <Button variant='contained' color='primary' type='submit' sx={{backgroundColor: '#0a8d48'}}>Login</Button>
                </Stack>
                <Typography variant='h6' component='p' sx={{mt:3, textAlign:'center'}}>
                    Don't have an account? <Link to='/register' className='create-account-link' style={{ color: '#0a8d48', textDecoration: 'underline' }}>Create account.</Link>
                </Typography>
            </form>
            {loginSuccess != null && (
                <Alert severity={loginSuccess ? 'success' : 'error'} sx={{ mt: 3 }}>
                    {loginSuccess ? 'Login successful! Redirecting...': 'Invalid credentials. Please try again.'}
                </Alert>
            )}
        </div>
    );

}

export default Login;