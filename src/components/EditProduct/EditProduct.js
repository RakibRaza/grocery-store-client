import React from "react";
import {
  Typography,
  Button,
  Grid,
  TextField,
  makeStyles,
  Paper,
  Box,
} from "@material-ui/core";

import BackupIcon from "@material-ui/icons/Backup";
const useStyle = makeStyles((theme) => ({
  title: {
    borderRadius: "0px",
    "& h5": {
      fontWeight: "bold",
    },
  },
  imgInput: {
    display: "none",
  },
  form: {
    margin: theme.spacing(3),
    padding: theme.spacing(3),
    borderRadius: theme.spacing(1.5),
    boxShadow: theme.shadows[2],
    background: theme.palette.background.paper,
    "& p": {
      fontWeight: "bold",
    },
    "& .MuiFormControl-root": {
      marginBottom: theme.spacing(3),
    },
  },
}));
const AddProduct = () => {
  const classes = useStyle();

  return (
    <>
      <Paper className={classes.title} component={Box} p={2} mb={3}>
        <Typography variant="h5">Edit Product</Typography>
      </Paper>
      <form className={classes.form}>
        <Grid container spacing={4}>
          <Grid xs={12} item md={6}>
            <Typography>Product Name</Typography>
            <TextField fullWidth size="small" variant="outlined" name="name" />
            <Typography>Add Price</Typography>
            <TextField variant="outlined" fullWidth size="small" name="price" />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography>Wight</Typography>
            <TextField variant="outlined" fullWidth size="small" name="wight" />
            <Typography>Add Photo</Typography>
            <input className={classes.imgInput} type="file" id="image" />
            <Button
              startIcon={<BackupIcon />}
              component="label"
              htmlFor="image"
              variant="contained"
              color="secondary"
            >
              Upload Photo
            </Button>
          </Grid>
        </Grid>
        <Box align="right">
          <Button variant="contained" color="primary" size="large">
            Save
          </Button>
        </Box>
      </form>
    </>
  );
};

export default AddProduct;
