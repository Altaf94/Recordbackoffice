import React, { useState } from "react";
import { connect } from "react-redux";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  CssBaseline,
  Box,
  Divider,
  IconButton,
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Button, // Import Button component
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import EmailIcon from "@mui/icons-material/Email";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { useHistory } from "react-router-dom";

function Dashboard(props) {
  const history = useHistory();
  const [menuItems] = useState([
    { text: "Home", icon: <HomeIcon /> },
    { text: "Profile", icon: <AccountCircleIcon /> },
    { text: "Settings", icon: <SettingsIcon /> },
    { text: "Logout", icon: <LogoutIcon /> },
  ]);

  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("emailRequest");

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value); // Update selected radio button
  };

  const handleContinue = () => {
    if (selectedOption === "emailRequest") {
      history.push("/newemail");
    } else if (selectedOption === "createUser") {
      history.push("/createUser");
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* AppBar for the header */}
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>
          <Avatar sx={{ marginLeft: 2 }}>U</Avatar>
        </Toolbar>
      </AppBar>

      {/* Left Sidebar (Drawer) */}
      <Drawer
        variant="temporary"
        open={open}
        onClose={toggleDrawer}
        sx={{
          width: 240,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
            backgroundColor: "#333",
            color: "#fff",
            paddingTop: 8,
          },
        }}
      >
        <List>
          {menuItems.map((item, index) => (
            <ListItem
              button
              key={index}
              sx={{
                "&:hover": {
                  backgroundColor: "#555",
                },
                paddingLeft: 3,
              }}
            >
              {item.icon}
              <ListItemText
                primary={item.text}
                sx={{
                  marginLeft: 2,
                  color: "#fff",
                  fontWeight: "bold",
                }}
              />
            </ListItem>
          ))}
        </List>
        <Divider sx={{ backgroundColor: "#444" }} />
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, marginLeft: { xs: 0, sm: 30 }, mt: 10 }} // Added margin-top to push content below the AppBar
      >
        {/* Toolbar spacer to account for the AppBar */}
        <Toolbar />

        {/* <Typography variant="h4" gutterBottom>
          Home
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 2 }}>
          Welcome to your dashboard! This is the home section.
        </Typography> */}

        {/* Radio Button Section */}
        <FormControl component="fieldset">
          <FormLabel component="legend">Select an Action</FormLabel>
          <RadioGroup
            row
            value={selectedOption}
            onChange={handleRadioChange}
            sx={{ marginBottom: 3 }}
          >
            <FormControlLabel
              value="emailRequest"
              control={<Radio />}
              label={
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <EmailIcon sx={{ marginRight: 1 }} />
                  Change Email Request
                </Box>
              }
            />
            <FormControlLabel
              value="createUser"
              control={<Radio />}
              label={
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <PersonAddIcon sx={{ marginRight: 1 }} />
                  Create User (Above 18)
                </Box>
              }
            />
          </RadioGroup>
        </FormControl>

        {/* Continue Button */}
        <Box
          sx={{ display: "flex", justifyContent: "flex-start", marginTop: 2 }}
        >
          <Button variant="contained" color="primary" onClick={handleContinue}>
            Continue
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.loggedIn,
});

export default connect(mapStateToProps)(Dashboard);
