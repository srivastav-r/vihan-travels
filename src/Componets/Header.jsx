import React from "react";
import { AppBar, Toolbar, Typography, Button, Stack } from "@mui/material";

export const Header = ({ setActiveTab })=> {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#0078D7" }}>
      <Toolbar>
        {/* Logo or Title */}
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, fontWeight: "bold" }}
        >
          VIHANA TRAVELS
        </Typography>

        {/* Navigation Buttons */}
        <Stack direction="row" spacing={2}>
          <Button color="inherit" onClick={() => setActiveTab("home")}>
            Home
          </Button>
          <Button color="inherit" onClick={() => setActiveTab("services")}>
            Services
          </Button>
          <Button color="inherit" onClick={() => setActiveTab("about")}>
            About
          </Button>
          <Button color="inherit" onClick={() => setActiveTab("contact")}>
            Contact
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Header;


