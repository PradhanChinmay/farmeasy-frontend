import { Alert, Button, Stack, TextField, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';

import '../Styles/Login.css';
import '../Screen/LandingHomePage.jsx';
import { Link,useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthCotext.js';

function Login() {

    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [loginSuccess, setLoginSuccess] = useState(null);

    const navigate = useNavigate();
    const { login } = useContext(AuthContext);


    const handleSubmit = async (event) => {
        event.preventDefault();
        setUserId(''); //nullify the input fields.
        setPassword(''); 
        
        const response = await fetch('http://192.168.99.193:5000/user_login', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userId, password }),
        });

        const data = await response.json();

        if (data.status === 'valid user') {
            login(data.userId);
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
                    <TextField label='UserId' variant='outlined' fullwidth required 
                        value={userId} onChange={(e)=>{setUserId(e.target.value)}} className='custom-textfield'/>
                    
                    <TextField label='Password' type='password' variant='outlined' fullwidth required 
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