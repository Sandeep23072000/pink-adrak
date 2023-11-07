import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Navbarlogo from "../../Assets/Navlogo.webp";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "#383033" }}>
        <Container>
          <Grid
            container
            spacing={3}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              paddingBlock: "4rem",
            }}
          >
            <Grid item md={4}>
              <Box>
                <img src={Navbarlogo} height={40} />
              </Box>
              <Box sx={{ paddingTop: "2rem" }}>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontFamily: "Montserrat",
                    lineHeight: "180%",
                    color: "white",
                  }}
                >
                  Follow us on social media to keep up with our latest news and
                  happenings!
                </Typography>
              </Box>
              <Box sx={{ color: "#ffffff", paddingTop: "2rem" }}>
                <FacebookOutlinedIcon fontSize="large" />
                <LinkedInIcon fontSize="large" />
                <InstagramIcon fontSize="large" />
              </Box>
            </Grid>
            <Grid item md={4}>
              <Box sx={{ display: "block", color: "white" }}>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: "600", fontSize: "22px" }}
                >
                  Our Brands
                </Typography>
                <Box sx={{ display: "block" }}>
                  <Typography
                    sx={{ fontFamily: "Montserrat", paddingTop: "1.5rem" }}
                  >
                    Everyday9
                  </Typography>
                  <Typography
                    sx={{ fontFamily: "Montserrat", paddingTop: "1.5rem" }}
                  >
                    Sattva
                  </Typography>
                  <Typography
                    sx={{ fontFamily: "Montserrat", paddingTop: "1.5rem" }}
                  >
                    Wichwich
                  </Typography>
                  <Typography
                    sx={{ fontFamily: "Montserrat", paddingTop: "1.5rem" }}
                  >
                    Coldplay
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
