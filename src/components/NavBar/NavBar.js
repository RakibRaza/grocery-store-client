import {
  AppBar,
  Box,
  Button,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState } from "react";

import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
const useStyles = makeStyles((theme) => ({
  drawer: {
    width: "250px",
  },
  appBar: {
    background: "none",
    boxShadow: "none",
    color: "black",
  },
  title: {
    fontWeight: "bold",
    flexGrow: "1",
    textTransform: "uppercase",
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { currentUserInfo, logOut } = useAuthContext();
  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography className={classes.title} variant="h5">
            Grocery Store
          </Typography>
          <Hidden smDown>
            <Button component={Link} to="/">
              Home
            </Button>
            <Button component={Link} to="/orders">
              Orders
            </Button>
            <Button component={Link} to="/admin">
              Admin
            </Button>
            <Button component={Link} to="/about">
              Deals
            </Button>
            <Box ml={6}>
              {currentUserInfo ? (
                <Button
                  onClick={handleLogOut}
                  color="primary"
                  variant="contained"
                >
                  Logout
                </Button>
              ) : (
                <Button
                  component={Link}
                  to="/login"
                  color="primary"
                  variant="contained"
                >
                  Login
                </Button>
              )}
            </Box>
            <Box>
              <Button>{currentUserInfo?.displayName}</Button>
            </Box>
          </Hidden>
          <Hidden mdUp>
            <Box>
              <IconButton onClick={() => setOpen(true)} color="inherit">
                <MenuIcon />
              </IconButton>
            </Box>
            <Drawer open={open} onClose={() => setOpen(false)}>
              <List disablePadding className={classes.drawer}>
                <ListItem button>
                  <ListItemText primary="News" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Destination" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Blog" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Contact" />
                </ListItem>
              </List>
            </Drawer>
          </Hidden>
        </Toolbar>

        <ScrollToTop showBelow={250} />
      </AppBar>
    </>
  );
};

export default NavBar;
