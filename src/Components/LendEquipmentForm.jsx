import React, { useState } from "react";
import {
  Button,
  Stack,
  TextField,
  Typography,
  Box,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";

import "../Styles/LendEquipmentForm.css";

const equipmentTypes = [
  "Tractor",
  "Plow",
  "Harrow",
  "Seeder",
  "Sprayer",
  "Harvester",
  "Other",
];

const LendEquipmentForm = ({ userId }) => {
  const [equipmentName, setEquipmentName] = useState("");
  const [equipmentType, setEquipmentType] = useState("");
  const [equipmentDescription, setEquipmentDescription] = useState("");
  const [ageOfEquipment, setAgeOfEquipment] = useState("");
  const [location, setLocation] = useState("");
  const [priceProposed, setPriceProposed] = useState("");
  const [availability, setAvailability] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("equipment_name", equipmentName);
    formData.append("equipment_type", equipmentType);
    formData.append("equipment_description", equipmentDescription);
    formData.append("age", ageOfEquipment);
    formData.append("location", location);
    formData.append("rent", priceProposed);
    formData.append("availability", availability);
    if (image) {
      formData.append("image_file", image);
    }

    try {
      const response = await fetch(`http://localhost:5000/${userId}/equipment_lending`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        alert(data.status);
      } else {
        alert("Failed to list equipment.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error listing equipment.");
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <Box>
      <form onSubmit={handleSubmit} className="lend-form">
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{ color: "#795548", mb: 3, textAlign: "center", textShadow: "1px -1px 1px rgba(0, 0, 0, 0.5);" }}
        >
          List Your Equipment
        </Typography>
        <Stack spacing={2} className="lend-form-container">
          <TextField
            label="Equipment Name"
            variant="outlined"
            fullWidth
            required
            value={equipmentName}
            onChange={(e) => setEquipmentName(e.target.value)}
            className="custom-textfield"
          />
          <FormControl fullWidth required className="custom-textfield">
            <Select
              value={equipmentType}
              onChange={(e) => setEquipmentType(e.target.value)}
              displayEmpty
            >
              <MenuItem value="" disabled>Select Equipment Type</MenuItem>
              {equipmentTypes.map((type) => (
                <MenuItem key={type} value={type}>
                  {type}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            label="Equipment Description"
            variant="outlined"
            fullWidth
            required
            value={equipmentDescription}
            onChange={(e) => setEquipmentDescription(e.target.value)}
            className="custom-textfield"
          />
          <TextField
            label="Age of Equipment"
            variant="outlined"
            fullWidth
            required
            value={ageOfEquipment}
            onChange={(e) => setAgeOfEquipment(e.target.value)}
            className="custom-textfield"
          />
          <TextField
            label="Location"
            variant="outlined"
            fullWidth
            required
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="custom-textfield"
          />
          <TextField
            label="Price"
            variant="outlined"
            fullWidth
            required
            value={priceProposed}
            onChange={(e) => setPriceProposed(e.target.value)}
            className="custom-textfield"
          />
          <TextField
            label="Availability in months"
            variant="outlined"
            fullWidth
            required
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
            className="custom-textfield"
          />
          <FormControl fullWidth className="custom-textfield">
            <input
              accept="image/*"
              id="contained-button-file"
              type="file"
              onChange={handleImageChange}
            />
          </FormControl>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{ backgroundColor: "#0a8d48" }}
          >
            Create Listing
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default LendEquipmentForm;
