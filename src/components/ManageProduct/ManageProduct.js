import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { Box, Container, Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  title: {
    borderRadius: "0px",
    "& h5": {
      fontWeight: "bold",
    },
  },
  delete: {
    cursor: "pointer",
    background: "#FF444A",
    color: "#fff",
    borderRadius: theme.spacing(0.8),
    padding: theme.spacing(0.1),
  },
  edit: {
    cursor: "pointer",
    background: "#3BC83B",
    color: "#fff",
    borderRadius: theme.spacing(0.8),
    padding: theme.spacing(0.2),
    marginRight: theme.spacing(1),
  },
  tableContainer: {
    marginBottom: theme.spacing(6),
  },
  table: {
    borderRadius: theme.spacing(1.5),
  },
}));

export default function BasicTable() {
  const classes = useStyles();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://pwr-grocery-store-bd.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }, []);
  const handleDelete = (id) => {
    fetch(`https://pwr-grocery-store-bd.herokuapp.com/deletePproduct/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setProducts(products.filter((product) => product._id !== id));
        }
      })
      .catch((error) => console.error(error.message));
  };
  return (
    <>
      <Paper className={classes.title} component={Box} p={2} mb={3}>
        <Typography variant="h5">Manage Product</Typography>
      </Paper>
      <Container className={classes.tableContainer}>
        <TableContainer className={classes.table} component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography color="textSecondary">Product Name</Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography color="textSecondary">Wight</Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography color="textSecondary">Price</Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography color="textSecondary">Action</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => {
                const { _id, name, price, wight } = product;
                return (
                  <TableRow key={_id}>
                    <TableCell>
                      <Typography>{name}</Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography>{wight}</Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography>${price}</Typography>
                    </TableCell>
                    <TableCell align="right">
                      <EditIcon className={classes.edit} />
                      <DeleteIcon
                        onClick={() => handleDelete(_id)}
                        className={classes.delete}
                      />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
}
