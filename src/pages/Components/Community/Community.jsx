import React, { useState } from "react";
import Image from "next/image";
import { Box, Container, Grid, IconButton, Typography } from "@mui/material";
import Businesswomen from "../../../../public/Assets/Businesswomen.png";
import Post1 from "../../../../public/Assets/insta-post-1.jpeg";
import Post2 from "../../../../public/Assets/insta-post-2.png";
import Post3 from "../../../../public/Assets/insta-post-3.jpeg";
import Post4 from "../../../../public/Assets/insta-post-4.jpeg";
import Post5 from "../../../../public/Assets/insta-post-5.png";
import Post6 from "../../../../public/Assets/insta-post-6.jpeg";
import FavoriteBorderSharpIcon from "@mui/icons-material/FavoriteBorderSharp";

const postImages = [Post1, Post2, Post3, Post4, Post5, Post6];

const Community = () => {
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
            style={{ maxWidth: "50%" }}
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
              {postImages.map((post, index) => (
                <Grid item key={index} xs={12} sm={4}>
                  <Box
                    sx={{ overflow: "hidden", borderRadius: "9px" }}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Image
                      src={post}
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
