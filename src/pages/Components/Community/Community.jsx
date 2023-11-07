import React from "react";
import Image from "next/image";
import { Box, Container, Typography } from "@mui/material";
import Businesswomen from "../../../../public/Assets/Businesswomen.png";

const Community = () => {
  return (
    <>
      <Container>
        <Box sx={{ marginBlock: "3rem" }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: "44px",
              fontWeight: "700",
              fontFamily: "Montserrat",
              letterSpacing: "-0.5px",
              color: "#383033",
            }}
          >
            Giving back
            <span style={{ color: "#e44b99" }}> to the community</span>
          </Typography>
          <Typography
            variant="h5"
            sx={{
              paddingTop: "1.5rem",
              fontSize: "18px",
              fontFamily: "Montserrat",
              lineHeight: "180%",
            }}
          >
            We take pride in building a food experience company and spreading
            kindness through our CSR activities at the "Pink Adrak Foundation".
            Our promise to society is to create a sustainable work culture to
            balance people & profit, producing success and viability in the long
            term.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            draggable="false"
            src={Businesswomen}
            alt=""
            style={{ maxWidth: "50%" }}
            
          />
        </Box>
      </Container>
      <Box height={700} sx={{ backgroundColor: "#edbcc45e" }}>
        <Box
          sx={{
            paddingBlock: "2rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: "44px",
              fontWeight: "700",
              fontFamily: "Montserrat",
              letterSpacing: "-0.5px",
              color: "#383033",
            }}
          >
            Follow us
            <span style={{ color: "#e44b99" }}> on instagram</span>
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Community;
