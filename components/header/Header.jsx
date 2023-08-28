import React from "react";
import Navbar from "../navbar/Navbar";
import { Box, Container, Typography } from "@mui/material";
import PrimaryButton from "@/templates/PrimaryButton";

const Header = () => {
  return (
    <header>
      <Navbar />
      <Container sx={{ height: "80%" }}>
        <Box height={"100%"} display={"flex"} justifyContent={"space-between"}>
          {/* Left side */}
          <Box
            height={"100%"}
            display={{ xs: "none", sm: "none", md: "flex" }}
            flexDirection={"column"}
            justifyContent={"center"}
          >
            <Typography variant="h2" fontWeight={"bold"} mb={2}>
              Providing Best <br /> Education For <br /> Brighter future
            </Typography>
            <Typography mb={4}>
              Per sed, mattis. Integer viverra euismod maecenas incidunt,
              phasellus <br /> consequatur aliquam nihil temporibus in assumens
              deserunt <br /> convallis. Inceptos per consectetur consequatur
              proin.
            </Typography>
            <Box width={"fit-content"}>
              <PrimaryButton>Learn more</PrimaryButton>
            </Box>
          </Box>

          {/* Left side on small screen */}
          <Box
            height={"100%"}
            display={{ xs: "flex", sm: "flex", md: "none" }}
            flexDirection={"column"}
            justifyContent={"center"}
          >
            <Typography variant="h3" fontWeight={"bold"} mb={2}>
              Providing Best <br /> Education For <br /> Brighter future
            </Typography>
            <Typography mb={4}>
              Per sed, mattis. Integer viverra euismod maecenas incidunt,
              phasellus <br /> consequatur aliquam nihil temporibus in assumens
              deserunt <br /> convallis. Inceptos per consectetur consequatur
              proin.
            </Typography>
            <Box width={"fit-content"}>
              <PrimaryButton>Learn more</PrimaryButton>
            </Box>
          </Box>
          <Box
            display={{ xs: "none", sm: "flex" }}
            flexDirection={"column"}
            justifyContent={"flex-end"}
          >
            <img src="/images/hero.png" alt="Hero" width={"100%"} />
          </Box>
        </Box>
      </Container>
    </header>
  );
};

export default Header;
