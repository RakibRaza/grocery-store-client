import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  divider: {
    width: "100%",
    textAlign: "center",
    borderBottom: "1px solid #000",
    lineHeight: "0.1em",
    margin: "50px 0 40px",
    "& span": {
      background: theme.palette.background.default,
      padding: "0 10px",
      fontSize: "20px",
    },
  },
  continue: {
    display: "flex",
    color: "#fff",
    justifyContent: "space-between",
    padding: theme.spacing(1),
    borderRadius: theme.spacing(0.6),
    alignItems: "center",
    cursor: "pointer",
    margin: theme.spacing(2),
    background: "#3076FF",
    "& svg": {
      fontSize: theme.spacing(4),
      color: "#fff",
    },
    "& p": {
      fontWeight: "bold",
    },
  },
}));
