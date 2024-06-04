import { Box, Button, IconButton, Typography } from "@mui/material";
import React from "react";

import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

import "../Styles/Footer.css";

function Footer() {
    return (
        <div className="footer">
            <Box className='footer-contact' sx={{
                    width: '100%',
                    height: '55vh'
                }}>
                    <Typography variant='h3' component='div' sx={{ color: '#ffffff', textAlign: 'center', fontWeight: 500,
                        textShadow: '0px -1px 1px rgba(128, 0, 0, 1)' }}>
                        We connect farmer and buyer for better future
                    </Typography>
                    <Button variant='contained' sx={{ mt: '30px' }}>Contact us</Button>
                </Box>
                <Box className='footer-copyright' sx={{
                    width: '100%',
                    height: '10vh',
                    backgroundColor: '#181a21',
                    color: 'white'
                }}>
                    <Box>
                        <IconButton sx={{ color: 'white', px: '20px' }}>
                            <InstagramIcon />
                        </IconButton>
                        <IconButton sx={{ color:'white', px: '20px'  }}>
                            <XIcon />
                        </IconButton>
                        <IconButton sx={{ color: 'white', px: '20px'  }}>
                            <FacebookIcon />
                        </IconButton>
                    </Box>
                    <Typography variant='p' component='div'>
                        copyright &copy; Agro-Allies
                    </Typography>
            </Box>
        </div>
    );
}

export default Footer;