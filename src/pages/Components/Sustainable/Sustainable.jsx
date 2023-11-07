import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Practisewomen from "../../../../public/Assets/womenpractice.svg";

const Sustainable = () => {
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
                  Sustainable practices & initiatives
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
                  Our innovation is all about making your experience better.
                  From our dedicated team, Troy, who crafts authentic and
                  outstanding recipes, to our chefs who blend culinary expertise
                  with technology, we're committed to bringing you the best.
                  <br /> But it's not just about us – it's about you and the
                  community we cherish. By embracing processes that enhance
                  quality, we ensure that every bite you take is a delight. And
                  as we strive for excellence, we also actively participate in
                  community initiatives, because sustainable success means
                  sharing joy with everyone.
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
              <img src={Practisewomen} alt="" style={{ maxWidth: "100%" }} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Sustainable;
