import { Box, Container, Typography } from "@mui/material";
import React from "react";

const ReviewTemplate = ({ title, img, job }) => {
  return (
    <Box boxShadow={10} py={5} borderRadius={5}>
      <Container>
        <Typography mb={3}>
          “Per sed, mattis. Integer viverra euismod maecenas incidunt, phasellus
          consequatur aliquam nihil temporibus in assumenda? Aute praesentium
          fugiat. Perspiciatis, ultrices deserunt convallis, eius at non.”
        </Typography>
        <Box display={"flex"} justifyContent={"flex-end"}>
          <Box display={"flex"}>
            <Box color={"gray"} mr={2}>
              <Typography>{title}</Typography>
              <Typography>{job}</Typography>
            </Box>
            <Box>
              <img
                src={img}
                alt={title}
                width={60}
                height={60}
                style={{
                  borderRadius: "100%",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ReviewTemplate;
