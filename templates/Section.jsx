import { Box, Container } from "@mui/material";
import React from "react";

const Section = ({ children }) => {
  return (
    <section>
      <Box py={5}>
        <Container>{children}</Container>
      </Box>
    </section>
  );
};

export default Section;
