import Section from "@/templates/Section";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import EngineeringIcon from "@mui/icons-material/Engineering";
import CodeOffIcon from "@mui/icons-material/CodeOff";
import ScienceIcon from "@mui/icons-material/Science";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import EditOffIcon from "@mui/icons-material/EditOff";
import BcCards from "./BcCards";
import SecondaryButton from "@/templates/SecondaryButton";
import PrimaryButton from "@/templates/PrimaryButton";

const BestCategories = () => {
  const categories = [
    {
      id: 1,
      title: "Engineering",
      icon: <EngineeringIcon fontSize="large" color="secondary" />,
      semesterCount: 2,
    },
    {
      id: 2,
      title: "IT & Software",
      icon: <CodeOffIcon fontSize="large" color="secondary" />,
      semesterCount: 6,
    },
    {
      id: 3,
      title: "Chemistry",
      icon: <ScienceIcon fontSize="large" color="secondary" />,
      semesterCount: 9,
    },
    {
      id: 4,
      title: "Management ",
      icon: <WorkHistoryIcon fontSize="large" color="secondary" />,
      semesterCount: 4,
    },
    {
      id: 5,
      title: "Literature",
      icon: <EditOffIcon fontSize="large" color="secondary" />,
      semesterCount: 8,
    },
  ];
  return (
    <Section>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={6} md={3}>
          <Box>
            <Typography variant="h3" mb={2}>
              Our Best Categories
            </Typography>
            <SecondaryButton>More Categories</SecondaryButton>
          </Box>
        </Grid>
        {categories.map((cat) => (
          <Grid key={cat.id} item xs={12} sm={6} md={3}>
            <BcCards
              title={cat.title}
              icon={cat.icon}
              semesterCount={cat.semesterCount}
            />
          </Grid>
        ))}

        <Grid item xs={12} sm={12} md={6}>
          <Box borderRadius={5} bgcolor={"#f1f1f1"} py={5}>
            <Container>
              <Typography variant="h5" mb={3} textAlign={"center"}>
                Get Free Courses ! Book Your Seat Now.
              </Typography>
              <Box display={"flex"} justifyContent={"center"}>
                <PrimaryButton>Book Now</PrimaryButton>
              </Box>
            </Container>
          </Box>
        </Grid>
      </Grid>
    </Section>
  );
};

export default BestCategories;
