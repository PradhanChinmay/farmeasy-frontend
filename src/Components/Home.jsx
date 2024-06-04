import { Button, IconButton, Typography } from "@mui/material";
import React from "react";

import "../Styles/Home.css";

function Home() {
    return (
        <div className='carouselHome'>
            <div className="carouselHome-intro">
                <IconButton className='carouselHome-image'>
                    <img src="https://farmdrop.us/wp-content/uploads/2020/11/farmdrop-logo-lg.png" alt="" />
                </IconButton>
                <Typography variant='h3' component='div' sx={{ fontSize: '3.12rem', mb: '30px', wordSpacing: '2px' }}>
                    Collaborate and create a bright future for your farm
                </Typography>
                <Typography variant='p' component='div' sx={{ fontSize: '1.2rem', lineHeight : '2rem' }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum soluta voluptate nesciunt quasi sin!
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, quae.
                </Typography>
                <Button variant="contained"
                    onClick={() => window.location.hash = 'service-buy'}
                    sx={{
                        mt: '20px',
                        backgroundColor: '#0a8d48'
                    }}
                >
                    Explore now
                </Button>
            </div>
        </div>
    );
}

export default Home;