import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { Box, Container, Grid, Typography } from "@mui/material";

const Sustainable = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/initiatives/`)
      .then((response) => {
        setData(response?.data?.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  console.log(data, "iiiiiiiiiiiiiiiiiii");

  return (
    <>
      <Box sx={{ backgroundColor: "#383033" }}>
        <Container>
          <Grid container sx={{ paddingBlock: "3rem" }}>
            <Grid item lg={8} sx={{ order: { xs: 2, md: 2, lg: 1 } }}>
              <Box>
                <Typography
                  variant="h1"
                  sx={{
                    paddingTop: "3rem",
                    fontSize: "44px",
                    fontWeight: "700",
                    fontFamily: "Montserrat",
                    color: "white",
                  }}
                >
                  {data?.name}
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
                  {data?.description}
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              lg={4}
              sx={{
                order: { xs: 1, md: 1, lg: 2 },
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <Image
                draggable="false"
                src={data?.image_detail}
                alt=""
                width={400}
                height={400}
                style={{ maxWidth: "100%" }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Sustainable;
