import {
  Box,
  Button,
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
      width: "400px",
    },
  },
}));
const SearchInput = () => {
  const classes = useStyle();
  return (
    <div>
      <Typography className={classes.title} align="center" variant="h4">
        Buy everyday grocery from grocery store.
      </Typography>
      <Box pb={30} align="center">
        <TextField
          className={classes.input}
          variant="outlined"
          size="small"
          placeholder="Search..."
        />
        <Button variant="contained" color="primary" size="large">
          Search
        </Button>
      </Box>
    </div>
  );
};

export default SearchInput;
