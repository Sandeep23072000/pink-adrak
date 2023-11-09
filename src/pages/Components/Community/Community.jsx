import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { Box, Container, Grid,  Typography } from "@mui/material";
import Businesswomen from "../../../../public/Assets/Businesswomen.png";

const Community = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/instagram/`)
      .then((response) => {
        setData(response?.data?.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  console.log(data, "insssssss");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
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
            style={{ maxHeight: "100%", maxWidth: "50%" }}
          />
        </Box>
      </Container>
      <Box sx={{ backgroundColor: "#edbcc45e" }}>
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
        <Container>
          <Box sx={{ paddingBlock: "6rem" }}>
            <Grid container spacing={2}>
              {data?.map((post, index) => (
                <Grid item key={index} xs={12} sm={4} >
                  <Box
                    sx={{ overflow: "hidden", borderRadius: "9px" }}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <img
                      src={post.image_detail}
                      alt={`Post ${index + 1}`}
                      width="100%"
                      height={370}
                      className="community_images"
                    />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Community;
