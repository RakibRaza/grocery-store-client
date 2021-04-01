import {
  Box,
  Button,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
const useStyle = makeStyles((theme) => ({
  title: {
    fontWeight: "bold",
    textTransform: "uppercase",
    margin: theme.spacing(6, 0),
  },
  input: {
    "& input": {
      background: "#fff",
    },
  },
}));
const SearchInput = () => {
  const classes = useStyle();
  return (
    <>
      <Typography className={classes.title} align="center" variant="h4">
        Buy everyday grocery from grocery store.
      </Typography>
      <Box pb={30} align="center">
        <Grid container justify="center">
          <Grid item xs={12} sm={5}>
            <TextField
              className={classes.input}
              variant="outlined"
              size="small"
              placeholder="Search..."
              fullWidth
            />
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" size="large">
              Search
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default SearchInput;
