import { Box, Typography } from "@mui/material";
import { purple } from "@mui/material/colors";
import React from "react";

const BcCards = ({ icon, title, semesterCount }) => {
  return (
    <Box
      width={"100%"}
      borderRadius={5}
      border={`3px dashed ${purple[50]}`}
      py={5}
    >
      <Box display={"flex"} justifyContent={"center"} mb={3}>
        {icon}
      </Box>
      <Typography textAlign={"center"}>{title}</Typography>
      <Typography textAlign={"center"} color={"primary"}>
        {semesterCount} Semester
      </Typography>
    </Box>
  );
};

export default BcCards;
