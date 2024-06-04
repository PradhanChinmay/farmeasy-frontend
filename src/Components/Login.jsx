import { Alert, Button, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

import '../Styles/Login.css';
import { Link } from 'react-router-dom';

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginSuccess, setLoginSuccess] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setUsername(''); //nullify the input fields.
        setPassword(''); 
        
        const response = await fetch('/api/login', { // Ensure this matches your backend route
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();

        if (data.success) {
            setLoginSuccess(true);
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
                    <TextField label='Username' variant='outlined' fullWidth required 
                        value={username} onChange={(e)=>{setUsername(e.target.value)}} className='custom-textfield'/>
                    
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
                    {loginSuccess ? 'Login successful!' : 'Login failed. Please try again.'}
                </Alert>
            )}
        </div>
    );

}

export default Login;