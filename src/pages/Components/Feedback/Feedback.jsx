import { Box, Container, Grid, Rating, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Costumer1 from "../../../../public/Assets/Customer1.webp";
import Costumer2 from "../../../../public/Assets/Customer2.webp";
import Costumer3 from "../../../../public/Assets/Customer3.webp";

const Feedback = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/feedback/`)
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
        <Box sx={{ marginTop: "3rem" }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: "44px",
              fontWeight: "700",
              fontFamily: "Montserrat, sans-serif",
              letterSpacing: "-0.5px",
              color: "#383033",
            }}
          >
            Our customer <span style={{ color: "#e44b99" }}> feedback</span>
          </Typography>
          <Typography
            variant="h5"
            sx={{
              paddingTop: "1.5rem",
              fontSize: "18px",
              fontFamily: "Montserrat, sans-serif",
              lineHeight: "180%",
            }}
          >
            Don’t take our word for it. Trust our customers
          </Typography>
        </Box>
      </Container>
      <Box sx={{ paddingBlock: "5rem" }}>
        <Container>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container columns={12} spacing={4}>
              {data.map((item, i) => {
                return (
                  <Grid item sm={12} md={6} lg={4} key={i}>
                    <Box
                      sx={{
                        display: "block",
                        padding: "3rem 2rem",
                        backgroundColor: "#fdf2fa",
                        borderRadius: "8px",
                      }}
                    >
                      <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <Image
                          draggable="false"
                          src={item?.image_detail}
                          alt=""
                          width={100}
                          height={100}
                          layout="fixed"
                        />
                      </Box>
                      <Box
                        sx={{
                          paddingTop: "1rem",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Typography
                          variant="h4"
                          sx={{ fontWeight: "600", fontSize: "24px" }}
                        >
                          {item?.name}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          paddingTop: "2rem",
                          display: "flex",
                          justifyContent: "center",
                          height: "8rem",
                        }}
                      >
                        <Typography
                          sx={{
                            textAlign: "center",
                            fontSize: "15px",
                            fontFamily: "Montserrat, sans-serif",
                            lineHeight: "22px",
                          }}
                        >
                          {item?.text}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          marginTop: "2rem",
                          display: "flex",
                          "@media (max-width: 370px)": {
                            display: "block",
                          },
                          justifyContent: "space-between",
                          alignItems: "baseline",
                        }}
                      >
                        <Typography variant="h5" sx={{ fontWeight: "600" }}>
                          {item?.star}
                          <span style={{ fontSize: "16px" }}>/5.0 rating</span>
                        </Typography>
                        <Rating defaultValue={item?.starvalue} />
                      </Box>
                    </Box>
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

export default Feedback;
