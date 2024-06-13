import { Box, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          bgcolor: "black",
          color: "white",
          p: 2,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            "@media (max-width: 600px)": {
              fontSize: "1rem",
            },
          }}
        >
          All Rights Reserved &copy; AKSHAY
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
