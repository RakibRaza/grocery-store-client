import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Zoom,
} from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStyle } from "./ProductStyle";

const Product = ({ _id, name, price, wight, image }) => {
  const classes = useStyle();
  return (
    <Grid item sm={6} md={4}>
      <Zoom in={true} style={{ transitionDelay: "500ms" }}>
        <Card className={classes.card}>
          <CardMedia component="img" alt={name} image={image} />
          <CardContent>
            <Typography variant="h6">
              {name} - {wight}
            </Typography>
          </CardContent>

          <CardActions className={classes.cardAction}>
            <Typography color="primary" variant="h4">
              ${price}
            </Typography>
            <Button
              component={Link}
              to={`/checkout/${_id}`}
              startIcon={<ShoppingCartIcon />}
              variant="contained"
              size="large"
              color="primary"
            >
              Buy Now
            </Button>
          </CardActions>
        </Card>
      </Zoom>
    </Grid>
  );
};

export default Product;
