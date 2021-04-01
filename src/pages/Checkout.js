import {
  Box,
  Button,
  Container,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import NavBar from "../components/NavBar/NavBar";
import { useAuthContext } from "../context/AuthContext";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import spinner from "../images/spinner.svg";
const useStyle = makeStyles((theme) => ({
  root: {
    minHeight: "calc(100vh - 64px)",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  box: {
    display: "flex",
    justifyContent: "space-between",
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: theme.spacing(2),
  },
  table: {
    borderRadius: theme.spacing(1.5),
    boxShadow: theme.shadows[6],
  },
}));
const Checkout = () => {
  const classes = useStyle();
  const { id } = useParams();
  const histoy = useHistory();
  const [product, setProduct] = useState([]);
  const { currentUserInfo } = useAuthContext();
  useEffect(() => {
    fetch(`https://pwr-grocery-store-bd.herokuapp.com/product/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error(error));
  }, [id]);

  const handleClick = async () => {
    try {
      const res = await axios.post(
        "https://pwr-grocery-store-bd.herokuapp.com/placeOrders",
        {
          ...product[0],
          email: currentUserInfo.email,
          time: new Date().toLocaleString(),
          _id: new Date().getTime(),
        }
      );
      if (res.data) {
        histoy.push("/orders");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  if (product.length < 1) {
    return (
      <Container>
        <NavBar />
        <Box mt={8} align="center">
          <img src={spinner} alt="spinner" />
        </Box>
      </Container>
    );
  }
  const { price, name, wight } = product[0];
  return (
    <Container>
      <NavBar />
      <Box className={classes.root}>
        <Typography className={classes.title} variant="h4">
          Checkout
        </Typography>
        <TableContainer className={classes.table} component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography color="textSecondary">Description</Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography color="textSecondary">Quantity</Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography color="textSecondary">Price</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  <Typography variant="h6">
                    {name} - {wight}
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="h6">1</Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="h6">${price}</Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  <Typography variant="h6">Total</Typography>
                </TableCell>
                <TableCell colSpan={2} align="right">
                  <Typography variant="h6">${price}</Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Box mt={4} align="right">
          <Button
            startIcon={<AddShoppingCartIcon />}
            onClick={handleClick}
            variant="contained"
            color="primary"
            size="large"
          >
            Checkout
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Checkout;
