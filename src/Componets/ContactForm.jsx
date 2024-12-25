import React, { useState } from "react";
import { TextField, Button, Box, Typography, Container } from "@mui/material";

export const ContactForm = () => {
  // State to store form values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <Container maxWidth="sm">
      <Box 
        component="form" 
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          padding: 3,
          boxShadow: 3,
          borderRadius: 2,
          bgcolor: "background.paper",
        }}
      >
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Contact Us
        </Typography>

        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Phone Number"
          type="tel"
          variant="outlined"
          fullWidth
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <TextField
          label="Message"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
        >
          Send
        </Button>
      </Box>

      {/* Displaying the email and phone number after submission */}
      {submitted && (
        <Box sx={{ marginTop: 3, padding: 2, backgroundColor: "background.default" }}>
          <Typography variant="h6">Submitted Details:</Typography>
          <Typography variant="body1"><strong>Email:</strong> {email}</Typography>
          <Typography variant="body1"><strong>Phone:</strong> {phone}</Typography>
        </Box>
      )}
    </Container>
  );
};

export default ContactForm;
