import React from "react";
import Image from "next/image";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import { Box, Container } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Navbarlogo from "../../../../public/Assets/Navlogo.webp";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <AppBar position="static" sx={{ backgroundColor: "#383033" }}>
      <Container>
        <Toolbar>
          <Image src={Navbarlogo} height={40} />
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "end",
            }}
          >
            <IconButton onClick={handleOpenNavMenu} color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem>
                <Button color="inherit">Home</Button>
              </MenuItem>
              <MenuItem>
                <Button color="inherit">Our Brands </Button>
              </MenuItem>
              <MenuItem>
                <Button color="inherit">Products</Button>
              </MenuItem>
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
                display: "flex",
                justifyContent: "end",
              },
              gap: 3,
            }}
          >
            <Button
              color="inherit"
              sx={{
                textTransform: "none",
                fontFamily: "Montserrat",
                fontSize: "16px",
              }}
            >
              Home
            </Button>
            <Button
              color="inherit"
              sx={{
                textTransform: "none",
                fontFamily: "Montserrat",
                fontSize: "16px",
              }}
            >
              Our Brands{" "}
            </Button>
            <Button
              color="inherit"
              sx={{
                textTransform: "none",
                fontFamily: "Montserrat",
                fontSize: "16px",
              }}
            >
              Products
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
