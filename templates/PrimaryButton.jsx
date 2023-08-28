import { Button } from "@mui/material";
import { pink } from "@mui/material/colors";
import React from "react";

const PrimaryButton = ({ children }) => {
  return (
    <Button
      variant="contained"
      sx={{ bgcolor: pink[500], height: 60, borderRadius: 50, px: 5 }}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
