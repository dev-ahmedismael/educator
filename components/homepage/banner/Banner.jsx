import PrimaryButton from "@/templates/PrimaryButton";
import { Box, Container, Typography } from "@mui/material";
import { purple } from "@mui/material/colors";
import React from "react";

const Banner = () => {
  return (
    <Box id={"home-banner"} bgcolor={purple[500]} color={"white"} height={500}>
      <Box
        position={"absolute"}
        top={0}
        left={0}
        width={"100%"}
        zIndex={3}
        height={500}
        display={"flex"}
        alignItems={"center"}
      >
        <Container>
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Typography variant="h3" mb={3} textAlign={"center"}>
              Limitless Learning, Limitless Possibilities !
            </Typography>
            <Typography textAlign={"center"}>
              Per sed, mattis. Integer viverra euismod maecenas incidunt, <br />
              phasellus consequatur aliquam nihil temporibus in assumens.
            </Typography>

            <Box pt={5} display={"flex"} justifyContent={"center"}>
              <PrimaryButton>Join Us Now</PrimaryButton>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Banner;
