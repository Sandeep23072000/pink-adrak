import { Box, Container, Typography, Grid, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../../../styles/Delight.module.css";
import Image from "next/image";

const Delight = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/brand/`)
      .then((response) => {
        setData(response?.data?.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  console.log(data, "fffffffffffffffff");

  return (
    <>
      <Container>
        <Box sx={{ padding: "1rem" }}>
          <Typography
            variant="h1"
            sx={{
              display: "flex",
              justifyContent: "center",
              fontSize: "11rem",
              fontWeight: "700",
              transform: "uppercase",
              color: "#fdf2facc",
              "@media (max-width: 1200px)": {
                fontSize: "9rem",
              },
              "@media (max-width: 992px)": {
                fontSize: "7rem",
              },
              "@media (max-width: 768px)": {
                fontSize: "5rem",
              },
              "@media (max-width: 567px)": {
                fontSize: "4rem",
              },
            }}
          >
            PINK ADRAK
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography
              variant="h3"
              sx={{
                marginTop: "-7.5rem",
                fontSize: "30px",
                color: "#e44b99",
                transform: "uppercase",
                "@media (max-width: 1200px)": {
                  fontSize: "25px",
                  marginTop: "-5.5rem",
                },
                "@media (max-width: 768px)": {
                  fontSize: "15px",
                  marginTop: "-3.5rem",
                },
                "@media (max-width: 567px)": {
                  marginTop: "-2.5rem",
                },
                "@media (max-width: 453px)": {
                  marginTop: "0",
                },
              }}
            >
              CREATING A DELIGHTFUL FOOD EXPERIENCE
            </Typography>
          </Box>
        </Box>
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
            Indulge in an array of culinary wonders through{" "}
            <span style={{ color: "#e44b99" }}>our beloved brands.</span>
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
            Through Pink Adrak, we foster the growth of multiple brands,
            moulding them from inception to making them market-ready and
            successful. Our unwavering dedication is reinforced by strategic
            guidance from Ripplewalk.
          </Typography>
        </Box>
      </Container>
      <Box sx={{ backgroundColor: "#fdf2f9" }}>
        <Container>
          <Box sx={{ flexGrow: 1, paddingBlock: "5rem" }}>
            <Grid container columns={12} spacing={2}>
              {data.map((item, i) => {
                return (
                  <Grid key={i}
                    item
                    sm={12}
                    md={6}
                    lg={3}
                    sx={{ paddingTop: "5rem !important" }}
                  >
                    <Box className={styles.delight_image_content}>
                      <img draggable="false" src={item?.logo} alt="" width={250} />
                    </Box>
                    <Box className={styles.delight_text_content}>
                      <Typography
                        sx={{
                          color: "#0f172a",
                          fontSize: "16px",
                          fontFamily: "Montserrat",
                          lineHeight: "160%",
                        }}
                      >
                        {item?.description}
                      </Typography>
                    </Box>
                    <Button
                      className={styles.delight_button_content}
                      variant="contained"
                      color="secondary"
                    >
                      Know More
                    </Button>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Delight;
