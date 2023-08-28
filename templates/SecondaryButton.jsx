import { Button } from "@mui/material";
import { purple } from "@mui/material/colors";
import React from "react";

const SecondaryButton = ({ children }) => {
  return (
    <Button
      variant="contained"
      sx={{ bgcolor: purple[500], height: 60, borderRadius: 50, px: 5 }}
    >
      {children}
    </Button>
  );
};

export default SecondaryButton;
