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
  Snackbar
} from "@mui/material";
// import { green } from "@mui/material/colors";
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
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "10vh",
      }}
    >
      <Box
        sx={{
          padding: 4,
          borderRadius: 2,
          width: "50%",
          display: "flex",
          flexDirection: "column", // Allows elements to stack vertically
          alignItems: "center", // Center align the button
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            border: "2px solid #f3ebeb",
            padding: "20px",
            borderRadius: "5px",
            width: "100%", // Ensure the form takes full width of the box
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

        {/* Additional Button */}
        <Button
          variant="contained"
          color="secondary"
          sx={{ marginTop: 2 }}
          onClick={handleClick}
          
        >
          Check Now
        </Button>
        <Snackbar
        open={open}
        message="This is a Snackbar message!"
        autoHideDuration={3000}
        onClose={handleClose}
      />
      </Box>
    </Container>
  );
};

export default MyForm;
