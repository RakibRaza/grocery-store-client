import { Box, Typography } from "@material-ui/core";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";
import { GrGoogle } from "react-icons/gr";
import { useHistory } from "react-router";
import { useAuthContext } from "../../context/AuthContext";
import { useStyles } from "./ContinueWithStyle";

const ContinueWith = ({ from, setError }) => {
  const { googleSignIn, fbSignIn, githubSignIn } = useAuthContext();
  const classes = useStyles();
  const history = useHistory();
  const handleGoogleSignIn = async () => {
    try {
      setError("");
      await googleSignIn();
      history.replace(from);
    } catch (error) {
      setError("User alredy exist.");
    }
  };
  const handleFacebookSignIn = async () => {
    try {
      setError("");
      await fbSignIn();
      history.replace(from);
    } catch (error) {
      setError("User alredy exist.");
    }
  };
  const handleGithubSignIn = async () => {
    try {
      setError("");
      await githubSignIn();
      history.replace(from);
    } catch (error) {
      setError("User alredy exist.");
    }
  };
  return (
    <>
      <h6 className={classes.divider}>
        <span>or</span>
      </h6>
      <Box onClick={handleFacebookSignIn} className={classes.continue}>
        <ImFacebook />
        <Typography>Continue with Facebook</Typography>
      </Box>
      <Box
        style={{ background: "#e91e63" }}
        onClick={handleGoogleSignIn}
        className={classes.continue}
      >
        <GrGoogle />
        <Typography>Continue with Google</Typography>
      </Box>
      <Box
        onClick={handleGithubSignIn}
        style={{ background: "black" }}
        className={classes.continue}
      >
        <FaGithub />
        <Typography>Continue with Github</Typography>
      </Box>
    </>
  );
};

export default ContinueWith;
