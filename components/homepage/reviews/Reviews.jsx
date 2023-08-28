import Section from "@/templates/Section";
import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import ReviewTemplate from "./ReviewTemplate";

const Reviews = () => {
  const students = [
    {
      id: 1,
      title: "Jenny Wilson",
      job: "SCIENCE STUDENT",
      img: "/images/testy_1.jpg",
    },
    {
      id: 2,
      title: "William Wright",
      job: "ART STUDENT",
      img: "/images/testy_2.jpg",
    },
  ];
  return (
    <Section>
      <Typography variant="h3" textAlign={"center"}>
        Review's From Students
      </Typography>
      <Typography textAlign={"center"} color={"gray"} mb={5}>
        Saepe quo labore aenean dictumst expedita commodi auctor, <br /> nisl,
        lorem iusto feugiat nemo reiciendis laboris.
      </Typography>
      <Container>
        <Grid container spacing={5}>
          {students.map((student) => (
            <Grid item xs={12} sm={6} key={student.id}>
              <ReviewTemplate
                title={student.title}
                job={student.job}
                img={student.img}
              />
            </Grid>
          ))}{" "}
        </Grid>
      </Container>
    </Section>
  );
};

export default Reviews;
