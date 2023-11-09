import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import styles from "../../../styles/Experience.module.css";
import Womenhome from "../../../../public/Assets/storywomen.webp";
import Scalepng from "../../../../public/Assets/scale.png";
import VerifyIcon from "../../../../public/Assets/vefificationhome.png";
import Saveearth from "../../../../public/Assets/saveearth.png";
import Image from "next/image";
import axios from "axios";

const Experience = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/story/`)
      .then((response) => {
        setData(response?.data?.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  console.log(data, "dddddddddddddddddddd");
  const Array = [
    {
      id: 1,
      image: Scalepng,
      name: "Incubation",
      text: "Proudly incubating unique brands with distinct identities to reshape the culinary world.",
    },
    {
      id: 2,
      image: VerifyIcon,
      name: "Sustained-innovations",
      text: "Long-lasting innovations that benefit our ecosystem.",
    },
    {
      id: 3,
      image: Saveearth,
      name: "Purposeful journey",
      text: "We believe in spreading kindness through our CSR activities and giving back to our community.",
    },
  ];
  return (
    <>
      <Container sx={{ marginBlock: "4rem" }}>
        <Grid container>
          <Grid
            item
            md={8}
            sx={{
              order: { xs: 2, md: 1 },
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box sx={{ display: "block" }}>
              <Typography
                variant="h1"
                sx={{
                  fontWeight: "700",
                  fontFamily: "Montserrat",
                  letterSpacing: "-0.5px",
                  color: "#383033",
                  marginTop: "1rem",
                  fontSize: "64px",
                  "@media (max-width: 900px)": {
                    marginTop: "0",
                    fontSize: "49px",
                  },
                  "@media (max-width: 768px)": {
                    fontSize: "42px",
                  },
                  "@media (max-width: 567px)": {
                    fontSize: "38px",
                  },
                }}
              >
                {data?.heading}{" "}
                <span style={{ color: "#e44b99" }}>{data?.title}</span>
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  paddingTop: "1.7rem",
                  fontSize: "18px",
                  fontFamily: "Montserrat",
                  lineHeight: "180%",
                  "@media (max-width: 900px)": {
                    paddingTop: "1rem",
                  },
                }}
              >
                {data?.desc}
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                sx={{
                  fontSize: "20px",
                  fontFamily: "Montserrat",
                  fontWeight: "600",
                  padding: "12px 40px",
                  textTransform: "none",
                  backgroundColor: "#e44b99",
                  marginTop: "2.8rem",
                  "@media (max-width: 900px)": {
                    marginTop: "0.5rem",
                  },
                  "@media (max-width: 400px)": {
                    fontSize: "14px",
                  },
                }}
              >
                Explore Pink Adrak
              </Button>
            </Box>
          </Grid>
          <Grid
            item
            md={4}
            sx={{
              order: { xs: 1, md: 2 },
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Box>
              <Image
                draggable="false"
                src={Womenhome}
                alt=""
                className={styles.experience_homepage_first_img}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Container>
        <Box sx={{ flexGrow: 1, marginBlock: "5rem" }}>
          <Grid
            container
            columns={{ xs: 4, sm: 12, md: 12 }}
            spacing={{ xs: 3, sm: 6, md: 6 }}
          >
            {Array.map((item, i) => {
              return (
                <Grid item xs={12} sm={6} md={4} key={i}>
                  <Box>
                    <Image
                      draggable="false"
                      src={item?.image}
                      alt=""
                      width={80}
                    />
                  </Box>
                  <Typography
                    sx={{
                      paddingTop: "10px",
                      fontSize: "20px",
                      fontWeight: "600",
                      fontFamily: "Montserrat",
                    }}
                  >
                    {item?.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontFamily: "Montserrat",
                      lineHeight: "180%",
                      paddingTop: "10px",
                    }}
                  >
                    {item?.text}
                  </Typography>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Experience;
