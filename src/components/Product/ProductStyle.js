const { makeStyles } = require("@material-ui/core");

export const useStyle = makeStyles((theme) => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(2),
    borderRadius: theme.spacing(2),
    boxShadow: theme.shadows[4],
    "& h4,h6": {
      fontWeight: "bold",
    },
    "& img": {
      width: "70%",
      display: "block",
      margin: "0 auto",
    },
  },
  cardAction: {
    marginTop: "auto",
    justifyContent: "space-between",
  },
}));
