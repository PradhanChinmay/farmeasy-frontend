import React from 'react';
import { Container, Typography, Box, List, ListItem, ListItemText } from '@mui/material';

import '../Styles/About.css';

const About = () => {
    return (
        <Container maxWidth="md" sx={{ mt: 5, mb: 5 }} className='about-container'>
            <Typography className='about-title' variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 4, textAlign: 'center', color: '#795548' }}>
                About Farm Equipment Marketplace
            </Typography>
            <Typography className='about-title' variant="body1" paragraph>
                Welcome to the Farm Equipment Marketplace, a platform designed to optimize the use of agricultural resources by enabling farmers to rent out and borrow farm equipment. Our goal is to alleviate the financial burden of equipment ownership and promote a sustainable sharing economy within the agricultural community.
            </Typography>
            <Typography className='about-title' variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold', mt: 4 }}>
                Our Mission
            </Typography>
            <Typography className='about-title' variant="body1" paragraph>
                Our mission is to support farmers by providing a platform where they can easily rent out their idle equipment and find the tools they need without the high upfront costs. We aim to foster collaboration, enhance resource efficiency, and promote environmental sustainability in agriculture.
            </Typography>
            <Typography className='about-title' variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold', mt: 4 }}>
                Key Features
            </Typography>
            <List>
                <ListItem>
                    <ListItemText primary="List Equipment: Farmers can list their idle equipment with details on availability, rental rates, and terms." />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Browse Listings: Farmers in need can browse available equipment, compare options, and request rentals based on their needs." />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Scheduling: Facilitates the scheduling of pick-up and drop-off times, with options for doorstep delivery." />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Payment Management: Secure and streamlined payment processes for both renters and owners." />
                </ListItem>
                <ListItem>
                    <ListItemText primary="User Reviews: Build trust within the community through user reviews and ratings." />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Admin Portal: A comprehensive admin portal for managing users, rentals, deliveries, and payments." />
                </ListItem>
            </List>
            <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold', mt: 4 }}>
                Benefits
            </Typography>
            <Typography variant="body1" paragraph>
                By leveraging the sharing economy model, our platform offers numerous benefits:
            </Typography>
            <List>
                <ListItem>
                    <ListItemText primary="Financial Savings: Rent equipment without the high costs of ownership and generate income by renting out idle machinery." />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Resource Efficiency: Optimize the use of existing resources, reducing waste and maximizing productivity." />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Environmental Sustainability: Promote sustainable practices by sharing resources within the community." />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Community Collaboration: Strengthen ties within the farming community through collaboration and mutual support." />
                </ListItem>
            </List>
            <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold', mt: 4 }}>
                Join Us
            </Typography>
            <Typography variant="body1" paragraph>
                We invite you to join our mission to create a more sustainable and resilient agricultural sector. Whether you're looking to rent equipment or list your own, the Farm Equipment Marketplace is here to support you.
            </Typography>
        </Container>
    );
}

export default About;
