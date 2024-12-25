import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

export const Service = ({ title, description }) => {
  return (
    <Box sx={{ padding: 2 }}>
      <Card 
        sx={{ 
          maxWidth: 345, 
          boxShadow: 3, 
          borderRadius: 2,
          "&:hover": { boxShadow: 6 } // Hover effect
        }}
      >
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Service;
