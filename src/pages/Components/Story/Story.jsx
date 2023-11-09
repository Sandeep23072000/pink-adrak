import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Storywomen from "../../../../public/Assets/storywomen.webp";
import Image from "next/image";

const Story = () => {
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
  return (
    <>
      <Box sx={{ backgroundColor: "#383033" }}>
        <Container sx={{paddingBottom:"1rem"}}>
          <Grid container sx={{ paddingTop: "3rem" }}>
            <Grid
              item
              md={4}
              sx={{ display: "flex", justifyContent: "center", width: "100%" }}
            >
              <img
                draggable="false"
                src={data?.image_detail}
                alt=""
                style={{ maxWidth: "100%", height: "100%", marginRight:'30px' }}
              />
            </Grid>
            <Grid item md={8}>
              <Box>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: "44px",
                    fontWeight: "700",
                    fontFamily: "Montserrat",
                    color: "white",
                  }}
                >
                  Our Story
                </Typography>
                <Typography
                  sx={{
                    paddingTop: "2rem",
                    fontSize: "18px",
                    fontFamily: "Montserrat",
                    lineHeight: "180%",
                    color: "white",
                  }}
                >
                  {data?.desc}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Story;
