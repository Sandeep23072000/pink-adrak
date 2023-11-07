import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Chefwomen from "../../../../public/Assets/Chefwomen.png";
import Image from "next/image";

const Hygienic = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "#383033" }}>
        <Container>
          <Grid container sx={{ paddingTop: "3rem" }}>
            <Grid
              item
              md={4}
              sx={{ display: "flex", justifyContent: "center", width: "100%" }}
            >
              <Image draggable="false" src={Chefwomen} alt="" width={200} />
            </Grid>
            <Grid item md={8}>
              <Box sx={{ paddingTop: "3rem" }}>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: "44px",
                    fontWeight: "700",
                    fontFamily: "Montserrat",
                    color: "white",
                  }}
                >
                  Clean & hygienic
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
                  We uphold rigorous hygiene and cleanliness standards and
                  meticulously prepare our meals in impeccably clean
                  environments. So savour our meals worry-free!
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Hygienic;
