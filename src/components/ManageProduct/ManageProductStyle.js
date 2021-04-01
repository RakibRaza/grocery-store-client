import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
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
  },
  tableContainer: {
    marginBottom: theme.spacing(6),
  },
  table: {
    borderRadius: theme.spacing(1.5),
  },
  "@media (min-width: 530px)": {
    edit: {
      marginRight: theme.spacing(1),
    },
  },
}));
