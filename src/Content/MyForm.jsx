import React, { useState } from "react";
import {
  TextField,
  Checkbox,
  Radio,
  FormControlLabel,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Switch,
  Button,
  FormLabel,
  Container,
  Box,
} from "@mui/material";
import { green } from "@mui/material/colors";
// import { Flare } from "@mui/icons-material";

const MyForm = () => {
  // State variables for each input field
  const [textValue, setTextValue] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [selectedRadio, setSelectedRadio] = useState("option1");
  const [selectedValue, setSelectedValue] = useState("");
  const [isSwitched, setIsSwitched] = useState(false);

  // Handlers for form inputs
  const handleTextChange = (e) => setTextValue(e.target.value);
  const handleCheckboxChange = (e) => setIsChecked(e.target.checked);
  const handleRadioChange = (e) => setSelectedRadio(e.target.value);
  const handleSelectChange = (e) => setSelectedValue(e.target.value);
  const handleSwitchChange = (e) => setIsSwitched(e.target.checked);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      textValue,
      isChecked,
      selectedRadio,
      selectedValue,
      isSwitched,
    });
  };

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "10vh", // Ensures the container takes full height of the viewport
      }}
    >
      <Box
        sx={{
          // backgroundColor: "grey", // Change background color
          // border: "2px solid red",
          padding: 4, // Add padding to the form
          borderRadius: 2, // Optional: Add border radius for rounded corners
          width: "50%", // Full width inside container
          // margin: "10px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            border: "2px solid #f3ebeb",
            padding: "20px",
            borderRadius: "5px",
            boxShadow: green,
          }}
        >
          {/* Text Field */}
          <TextField
            label="Your Name"
            value={textValue}
            onChange={handleTextChange}
            variant="outlined"
            fullWidth
            margin="normal"
          />

          {/* Checkbox */}
          <FormControlLabel
            control={
              <Checkbox checked={isChecked} onChange={handleCheckboxChange} />
            }
            label="Accept Terms and Conditions"
          />

          {/* Radio Buttons */}
          <FormLabel component="legend">Choose an Option</FormLabel>
          <FormControlLabel
            control={
              <Radio
                checked={selectedRadio === "option1"}
                value="option1"
                onChange={handleRadioChange}
              />
            }
            label="Option 1"
          />
          <FormControlLabel
            control={
              <Radio
                checked={selectedRadio === "option2"}
                value="option2"
                onChange={handleRadioChange}
              />
            }
            label="Option 2"
          />

          {/* Select (Dropdown) */}
          <FormControl fullWidth margin="normal">
            <InputLabel>Choose a Fruit</InputLabel>
            <Select
              value={selectedValue}
              onChange={handleSelectChange}
              label="Choose a Fruit"
            >
              <MenuItem value="apple">Apple</MenuItem>
              <MenuItem value="banana">Banana</MenuItem>
              <MenuItem value="cherry">Cherry</MenuItem>
            </Select>
          </FormControl>

          {/* Switch */}
          <FormControlLabel
            control={
              <Switch checked={isSwitched} onChange={handleSwitchChange} />
            }
            label="Enable Feature"
          />

          {/* Submit Button */}
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default MyForm;
