import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
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
        <Container>
          <Grid container sx={{ paddingTop: "3rem" }}>
            <Grid item md={4} sx={{display:'flex', justifyContent:'center', width:'100%'}}>
              <Image
                draggable="false"
                src={Storywomen}
                alt=""
                style={{ maxWidth: "100%", height: "100%" }}
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
                  Creating a delightful food experience by operating as an
                  incubation hub, that nurtures brands with distinct identities.
                  Our sustained innovation benefits our ecosystem, while the
                  Pink Adrak Foundation spreads kindness through impactful
                  community endeavours, completing the circle of our purposeful
                  journey.
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
