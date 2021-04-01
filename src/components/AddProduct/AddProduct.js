import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Typography,
  Button,
  Grid,
  TextField,
  makeStyles,
  Paper,
  Box,
} from "@material-ui/core";
import axios from "axios";
import BackupIcon from "@material-ui/icons/Backup";
import { Alert } from "@material-ui/lab";
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
  const [image, setImage] = useState("");
  const [alert, setAlert] = useState({ type: "", message: "" });
  const { register, handleSubmit, reset, errors } = useForm();
  const onSubmit = async (data) => {
    if (image) {
      try {
        const res = await axios.post(
          "https://pwr-grocery-store-bd.herokuapp.com/addProduct",
          {
            ...data,
            image,
          }
        );
      } catch (error) {
        console.error(error.message);
      }
      reset();
      setAlert({ type: "success", message: "Product Saved Successfully." });
    } else {
      setAlert({ type: "error", message: "Image Uploding....." });
    }
  };
  const handleImageUpload = async (event) => {
    const imageData = new FormData();
    imageData.set("key", "f3b82a821ec5aaf73bfb1b9a1e2b1a56");
    imageData.append("image", event.target.files[0]);

    try {
      const res = await axios.post("https://api.imgbb.com/1/upload", imageData);
      const image = res.data.data.url;
      setImage(image);
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setAlert({ type: "", message: "" });
    }, 3000);
    return () => clearTimeout(timeOut);
  }, [alert.message]);

  return (
    <>
      <Paper className={classes.title} component={Box} p={2} mb={3}>
        <Typography variant="h5">Add Product</Typography>
      </Paper>
      {alert.message && (
        <Box mx={3}>
          <Alert variant="filled" severity={alert.type}>
            {alert.message}
          </Alert>
        </Box>
      )}
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <Grid container spacing={4}>
          <Grid xs={12} item md={6}>
            <Typography>Product Name</Typography>
            <TextField
              fullWidth
              size="small"
              variant="outlined"
              name="name"
              inputRef={register({
                required: "First Name is required.",
                minLength: {
                  value: 3,
                  message: "Product Name at least 3 caracters",
                },
              })}
              helperText={errors.name?.message}
              error={Boolean(errors.name)}
            />
            <Typography>Add Price</Typography>
            <TextField
              variant="outlined"
              fullWidth
              size="small"
              name="price"
              inputRef={register({
                required: "Price is required.",
                pattern: {
                  value: /\d+/,
                  message: "Accept only number.",
                },
              })}
              helperText={errors.price?.message}
              error={Boolean(errors.price)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography>Wight</Typography>
            <TextField
              variant="outlined"
              fullWidth
              size="small"
              name="wight"
              inputRef={register({
                required: "wight is required.",
              })}
              helperText={errors.wight?.message}
              error={Boolean(errors.wight)}
            />
            <Typography>Add Photo</Typography>
            <input
              className={classes.imgInput}
              onChange={handleImageUpload}
              type="file"
              id="image"
            />
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
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
          >
            Save
          </Button>
        </Box>
      </form>
    </>
  );
};

export default AddProduct;
