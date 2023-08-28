import Section from "@/templates/Section";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import PrimaryButton from "@/templates/PrimaryButton";

const About = () => {
  return (
    <Section>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={6}>
          <img
            src="/images/about-1.jpg"
            alt="Students"
            width={"100%"}
            height={300}
            style={{ borderRadius: "20px" }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h4" mb={2}>
            Why Students Choose Us for Gaining Knowledge !
          </Typography>
          <Typography>
            Per sed, mattis. Integer viverra euismod maecenas incidunt,
            phasellus consequatur aliquam nihil temporibus in assumens deserunt
            convallis. Inceptos per consectetur consequatur proin. Per sed,
            mattis. Integer viverra euismod maecenas incidunt, phasellus
            consequatur aliquam nihil temporibus in assumens deserunt convallis.
            Inceptos per consectetur consequatur proin.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container spacing={5}>
            <Grid item xs={6}>
              <Box display={"flex"}>
                <Box>
                  <WorkspacePremiumIcon fontSize="large" color="primary" />
                </Box>
                <Box>
                  <Typography variant="h5" mb={2}>
                    Certified Institute
                  </Typography>
                  <Typography>
                    Lacinia asperiores incididunt saepe corrupti quos eros
                    cupidatat faucibus natus.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box display={"flex"}>
                <Box>
                  <WorkspacePremiumIcon fontSize="large" color="primary" />
                </Box>
                <Box>
                  <Typography variant="h5" mb={2}>
                    Certified Institute
                  </Typography>
                  <Typography>
                    Lacinia asperiores incididunt saepe corrupti quos eros
                    cupidatat faucibus natus.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Box py={5} display={"flex"} justifyContent={"center"}>
            <PrimaryButton>More About Us</PrimaryButton>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <img
            src="/images/about-2.jpg"
            alt="Students"
            width={"100%"}
            height={300}
            style={{ borderRadius: "20px" }}
          />
        </Grid>
      </Grid>
    </Section>
  );
};

export default About;
