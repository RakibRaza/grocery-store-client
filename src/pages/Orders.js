import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  Button,
  Container,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import { useAuthContext } from "../context/AuthContext";
import spinner from "../images/spinner.svg";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";

const useStyle = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(6, 0),
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
const Orders = () => {
  const classes = useStyle();
  const { currentUserInfo } = useAuthContext();
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const totalPrice = orders.reduce(
    (total, order) => total + Number(order.price),
    0
  );
  useEffect(() => {
    fetch(
      `https://pwr-grocery-store-bd.herokuapp.com/orders?email=${currentUserInfo.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setIsLoading(false);
      });
  }, [currentUserInfo.email]);

  if (isLoading) {
    return (
      <Container>
        <NavBar />
        <Box align="center" className={classes.root}>
          <img src={spinner} alt="spinner" />
        </Box>
      </Container>
    );
  }

  return (
    <Container>
      <NavBar />
      <Box className={classes.root}>
        {orders.length < 1 ? (
          <Box align="center">
            <Typography className={classes.title} variant="h4">
              Your Cart Is Empty.
            </Typography>
            <Button
              component={Link}
              to="/"
              startIcon={<ShoppingCartIcon />}
              variant="contained"
              size="large"
              color="primary"
            >
              Buy now
            </Button>
          </Box>
        ) : (
          <>
            <Typography className={classes.title} variant="h4">
              Order Summary
            </Typography>
            <Typography className={classes.title} variant="h6">
              Order Recived From {currentUserInfo.email}
            </Typography>
            <TableContainer className={classes.table} component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <Typography color="textSecondary">Time</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography color="textSecondary">Product</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography color="textSecondary">Picture</Typography>
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
                  {orders.map((order) => {
                    const { _id, name, price, wight, time, image } = order;
                    return (
                      <TableRow key={_id}>
                        <TableCell>
                          <Typography>{time}</Typography>
                        </TableCell>
                        <TableCell>
                          <Typography>
                            {name} - {wight}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <img
                            style={{ width: "64px", display: "block" }}
                            src={image}
                            alt=""
                          />
                        </TableCell>
                        <TableCell align="right">
                          <Typography variant="h6">1</Typography>
                        </TableCell>
                        <TableCell align="right">
                          <Typography variant="h6">${price}</Typography>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                  <TableRow>
                    <TableCell component="th" scope="row">
                      <Typography variant="h6">Total</Typography>
                    </TableCell>
                    <TableCell colSpan={4} align="right">
                      <Typography variant="h6">${totalPrice}</Typography>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <Box align="center" mt={4}>
              <Button
                component={Link}
                to="/"
                startIcon={<ShoppingCartIcon />}
                variant="contained"
                size="large"
                color="primary"
              >
                Buy More
              </Button>
            </Box>
          </>
        )}
      </Box>
    </Container>
  );
};

export default Orders;
