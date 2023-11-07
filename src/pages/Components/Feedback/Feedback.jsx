import { Box, Container, Grid, Rating, Typography } from "@mui/material";
import React from "react";
import Costumer1 from "../../Assets/Customer1.webp";
import Costumer2 from "../../Assets/Customer2.webp";
import Costumer3 from "../../Assets/Customer3.webp";

const Feedback = () => {
  const Array = [
    {
      id: 1,
      image: Costumer1,
      name: "Sameena Shad",
      text: "Pink Adrak is my go-to place for an amazing food experience. The diverse menu options from Everyday9, Sattva, Coldplay, and Whichwich never cease to impress.",
      star: "4.0",
      starvalue: "4",
    },
    {
      id: 2,
      image: Costumer2,
      name: "Saksham Chauhan",
      text: "It is a culinary haven! The attention to detail is remarkable. I always leave with a satisfied palate and a smile.",
      star: "3.0",
      starvalue: "3",
    },
    {
      id: 3,
      image: Costumer3,
      name: "Pallavi Guram",
      text: "As a corporate employee, Pink Adrak's lunch options have been a delicious delight.",
      star: "4.0",
      starvalue: "4",
    },
  ];
  return (
    <>
      <Container>
        <Box sx={{ marginTop: "3rem" }}>
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
            Our customer <span style={{ color: "#e44b99" }}> feedback</span>
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
            Don’t take our word for it. Trust our customers
          </Typography>
        </Box>
      </Container>
      <Box sx={{ paddingBlock: "5rem" }}>
        <Container>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container columns={12} spacing={4}>
              {Array.map((item, i) => {
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
                        <img src={item?.image} alt="" width={100} />
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
                            fontFamily: "Montserrat",
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
