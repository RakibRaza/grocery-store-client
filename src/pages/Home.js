import { Container, Grid, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import SearchInput from "../components/SearchInput/SearchInput";
import banner from "../images/home-bg.jpg";
import Product from "../components/Product/Product";
import spinner from "../images/spinner.svg";
const useStyle = makeStyles((theme) => ({
  root: {
    background: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)),url('${banner}') no-repeat center/cover`,
  },
  container: {
    marginTop: "-200px",
    marginBottom: "100px",
  },
}));
const Home = () => {
  const classes = useStyle();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://pwr-grocery-store-bd.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className={classes.root}>
        <Container>
          <NavBar />
          <SearchInput />
        </Container>
      </div>
      <Container>
        <Grid
          className={classes.container}
          container
          spacing={2}
          justify="center"
        >
          {products.length < 1 ? (
            <Grid item>
              <img src={spinner} alt="spinner" />
            </Grid>
          ) : (
            <>
              {products.map((product) => (
                <Product key={product._id} {...product} />
              ))}
            </>
          )}
        </Grid>
      </Container>
    </>
  );
};

export default Home;
