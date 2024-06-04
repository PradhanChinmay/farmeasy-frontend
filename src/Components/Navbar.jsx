import { AppBar, Button, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

import '../Styles/Navbar.css';


function Navbar() {

    const [showNavbar, setShowNavbar] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition >= window.innerHeight / 2) {
            setShowNavbar(false);
        } else {
            setShowNavbar(true);
        }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navbarStyle = {
        position: 'fixed',
        top: 0,
        zIndex: 100,
        transition: 'transform 0.3s ease-in-out',
        transform: showNavbar ? 'translateY(0)' : 'translateY(-100%)',
    };

    return (
        <AppBar position="static" className="navbar" style={navbarStyle}>
            <Toolbar>
                <Link to="/">
                    <IconButton 
                    size="large"
                    edge="start"
                    color="inherit"
                    aris-aria-label="logo"
                    sx={{ mr: 2 }}
                    >
                        <img src="https://png.pngtree.com/element_our/sm/20180411/sm_5ace062b08f53.jpg" alt="App-logo" 
                        className="navbar-logo"/>
                    </IconButton>
                </Link>

                <Typography component="div" variant="h5" sx={{fontWeight: 600}}>
                    Farm App
                </Typography>

                <Stack direction="row" spacing={5} className="navbar-options" sx={{ marginRight: 2, marginLeft: 'auto' }}>
                    <Link to="/about">
                        <Button color="inherit"
                            sx={{
                                color: "#795548",
                                fontWeight: 800,
                                ':hover':{
                                    background:'transparent',
                                    color:'#0a8d48'
                                }
                            }}
                        >About</Button>
                    </Link>
                    <ScrollLink to='services' smooth={true} duration={800}>
                        <Button color="inherit"  sx={{color: "#795548",fontWeight: 800}} >Services</Button>
                    </ScrollLink>
                    <ScrollLink to="footer" smooth={true} duration={800}>
                        <Button color="inherit" sx={{color: "#795548",fontWeight: 800}}>Contact Us</Button>
                    </ScrollLink>
                    <Link to="/login">
                        <Button color="inherit" className='navbar-loginBtn' sx={{color:'#795548', fontWeight:800}}>Login</Button>
                    </Link>
                </Stack>
            </Toolbar>
        </AppBar>
    );
}


export default Navbar;