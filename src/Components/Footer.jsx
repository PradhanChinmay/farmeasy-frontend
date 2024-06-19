import { Box, Button, IconButton, Typography, TextField, Rating, Snackbar, Alert } from "@mui/material";
import React, { useState } from "react";

import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

import "../Styles/Footer.css";

function Footer() {
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState("");
    const [userId, setUserId] = useState("");
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");
    const [snackbarSeverity, setSnackbarSeverity] = useState("success");

    const handleSubmitReview = async (event) => {
        event.preventDefault();
        const data = {
            user_id: userId,
            rating: rating,
            review: review,
            updated_on: new Date().toISOString()
        };
        try {
            const response = await fetch('http://localhost:5000/platform_review', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            if (response.ok) {
                setSnackbarMessage("Review submitted successfully!");
                setSnackbarSeverity("success");
            } else {
                setSnackbarMessage("Failed to submit review.");
                setSnackbarSeverity("error");
            }
        } catch (error) {
            console.error('Error:', error);
            setSnackbarMessage("Error submitting review.");
            setSnackbarSeverity("error");
        }
        setSnackbarOpen(true);
    };

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    return (
        <div className="footer">
            <Box className='footer-contact' sx={{
                    width: '100%',
                    height: '60vh'
                }}>
                <Typography variant='h3' component='div' sx={{ color: '#ffffff', textAlign: 'center', fontWeight: 500,
                    textShadow: '0px -1px 1px rgba(128, 0, 0, 1)' }}>
                    We connect farmer and buyer for better future
                </Typography>
                <Button variant='contained' sx={{ mt: '30px' }}>Contact us</Button>
                <Box component="form" className='review' onSubmit={handleSubmitReview} sx={{ mt: '20px', textAlign: 'center' }}>
                    <TextField
                        label="User ID"
                        variant="outlined"
                        fullWidth
                        required
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        label="Review"
                        variant="outlined"
                        fullWidth
                        required
                        multiline
                        rows={4}
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                        sx={{ mb: 2 }}
                    />
                    <Rating
                        name="rating"
                        value={rating}
                        onChange={(event, newValue) => setRating(newValue)}
                        sx={{ mb: 2, mr: 2 }}
                    />
                    <Button variant="contained" color="primary" type="submit" sx={{ backgroundColor: "#0a8d48" }}>
                        Submit Review
                    </Button>
                </Box>
            </Box>
            <Box className='footer-copyright' sx={{
                    width: '100%',
                    height: '10vh',
                    backgroundColor: '#181a21',
                    color: 'white',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    px: '20px'
                }}>
                <Box>
                    <IconButton sx={{ color: 'white' }}>
                        <InstagramIcon />
                    </IconButton>
                    <IconButton sx={{ color:'white' }}>
                        <XIcon />
                    </IconButton>
                    <IconButton sx={{ color: 'white' }}>
                        <FacebookIcon />
                    </IconButton>
                </Box>
                <Typography variant='body2' component='div'>
                    copyright &copy; FarmEazy
                </Typography>
            </Box>
            <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
                <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </div>
    );
}

export default Footer;
