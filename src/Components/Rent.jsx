import React, { useState } from 'react';
import {
    Container,
    TextField,
    Button,
    Grid,
    Card,
    CardContent,
    CardActionArea,
    Typography,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Rating,
    Box
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import '../Styles/Rent.css';

const dummyDatabase = [
    { id: 1, name: 'Tractor', description: 'A powerful tractor for heavy-duty tasks.', age: '2 years', available: true, location: 'Farm A', price: '$100/day', rating: 4.5 },
    { id: 2, name: 'Tractor', description: 'A compact tractor for smaller tasks.', age: '1 year', available: true, location: 'Farm B', price: '$80/day', rating: 4.0 },
    { id: 3, name: 'Tractor', description: 'A versatile tractor with multiple attachments.', age: '3 years', available: false, location: 'Farm C', price: '$120/day', rating: 3.5 },
    { id: 4, name: 'Tractor', description: 'A high-performance tractor with advanced features.', age: '4 years', available: true, location: 'Farm D', price: '$150/day', rating: 4.8 },
    { id: 5, name: 'Plow', description: 'A sturdy plow for tilling the soil.', age: '1 year', available: false, location: 'Farm E', price: '$50/day', rating: 3.8 },
    { id: 6, name: 'Plow', description: 'A lightweight plow for small farms.', age: '2 years', available: true, location: 'Farm F', price: '$40/day', rating: 4.1 },
    { id: 7, name: 'Plow', description: 'A heavy-duty plow for large fields.', age: '3 years', available: true, location: 'Farm G', price: '$60/day', rating: 4.2 },
    { id: 8, name: 'Harvester', description: 'A modern harvester for efficient harvesting.', age: '3 years', available: true, location: 'Farm H', price: '$200/day', rating: 4.6 },
    { id: 9, name: 'Harvester', description: 'A compact harvester for small fields.', age: '2 years', available: false, location: 'Farm I', price: '$180/day', rating: 4.3 },
    { id: 10, name: 'Harvester', description: 'A high-capacity harvester for large farms.', age: '4 years', available: true, location: 'Farm J', price: '$220/day', rating: 4.7 },
    // Add more dummy data as needed
];

const Rent = () => {
    const [query, setQuery] = useState('');
    const [filteredEquipment, setFilteredEquipment] = useState([]);
    const [selectedEquipment, setSelectedEquipment] = useState(null);

    const handleSearch = (event) => {
        event.preventDefault();
        setQuery('');
        const results = dummyDatabase.filter((item) =>
            item.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredEquipment(results);
    };

    const handleCardClick = (equipment) => {
        setSelectedEquipment(equipment);
    };

    const handleClose = () => {
        setSelectedEquipment(null);
    };

    const handlePayment = () => {
        alert("Proceeding to payment for " + selectedEquipment.name);
    };

    return (
        <Container className="container">
            <Typography variant="h4" align="center" gutterBottom sx={{color: "#795548", mb: 3, textShadow: "1px -1px 1px rgba(0, 0, 0, 0.5);"}}>
                Rent Equipment
            </Typography>
            <form onSubmit={handleSearch} className="form">
                <TextField
                    label="Search for equipment"
                    variant="outlined"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="input"
                />
                <Button variant="contained" color="primary" type="submit" sx={{ml:2}}>
                    <SearchIcon />
                </Button>
            </form>
            <Grid container spacing={3} className="list">
                {filteredEquipment.length > 0 ? (
                    filteredEquipment.map((eq) => (
                        <Grid item xs={12} sm={6} md={4} key={eq.id}>
                            <Card className="card">
                                <CardActionArea onClick={() => handleCardClick(eq)}>
                                    <CardContent>
                                        <Typography variant="h6">{eq.name}</Typography>
                                        <Typography variant="body2">{eq.description}</Typography>
                                        <Box component="fieldset" mb={3} borderColor="transparent">
                                            <Rating value={eq.rating} readOnly />
                                        </Box>
                                        <Typography variant="body2" color={eq.available ? 'primary' : 'error'}>
                                            {eq.available ? 'Available' : 'Not Available'}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))
                ) : (
                    <Box className='no-equip' sx={{textAlign: 'center', mt: 4}}>
                        <SentimentDissatisfiedIcon sx={{ fontSize: 60, color: 'grey.500' }} />
                        <Typography variant="h6" sx={{ mt: 2 }}>
                            Sorry, no equipment found.
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            Try searching with different keywords.
                        </Typography>
                    </Box>
                )}
            </Grid>

            {selectedEquipment && (
                <Dialog open={true} onClose={handleClose}>
                    <DialogTitle>{selectedEquipment.name}</DialogTitle>
                    <DialogContent>
                        <Typography variant="body1">{selectedEquipment.description}</Typography>
                        <Typography variant="body2">Age: {selectedEquipment.age}</Typography>
                        <Typography variant="body2">Location: {selectedEquipment.location}</Typography>
                        <Typography variant="body2">Price: {selectedEquipment.price}</Typography>
                        <Box component="fieldset" mb={3} borderColor="transparent">
                            <Typography component="legend">Rating</Typography>
                            <Rating value={selectedEquipment.rating} readOnly />
                        </Box>
                        <Typography variant="body2" color={selectedEquipment.available ? 'primary' : 'error'}>
                            {selectedEquipment.available ? 'Available' : 'Not Available'}
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Close
                        </Button>
                        <Button onClick={handlePayment} color="secondary">
                            Proceed to Payment
                        </Button>
                    </DialogActions>
                </Dialog>
            )}
        </Container>
    );
};

export default Rent;
