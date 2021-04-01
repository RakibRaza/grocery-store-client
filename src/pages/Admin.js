import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import AddIcon from "@material-ui/icons/Add";
import DashboardIcon from "@material-ui/icons/Dashboard";
import EditIcon from "@material-ui/icons/Edit";
import AddProduct from "../components/AddProduct/AddProduct";
import ManageProduct from "../components/ManageProduct/ManageProduct";
import NavBar from "../components/NavBar/NavBar";
import EditProduct from "../components/EditProduct/EditProduct";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    minHeight: "calc(100vh - 64px)",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    background: "#203D37",
    width: "200px",
    color: "#fff",

    "& .MuiTab-wrapper": {
      flexDirection: "row",
    },
  },
  tabPanel: {
    background: "#F4FCFB",
  },
}));
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Admin = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <NavBar />
      <div className={classes.root}>
        <Tabs
          orientation="vertical"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
        >
          <Tab
            icon={<DashboardIcon />}
            label="Manage Product"
            {...a11yProps(0)}
          />
          <Tab icon={<AddIcon />} label="Add Product" {...a11yProps(1)} />
          <Tab icon={<EditIcon />} label="Edit Product" {...a11yProps(2)} />
        </Tabs>
        <TabPanel
          className={classes.tabPanel}
          value={value}
          index={0}
          style={{ flexGrow: "1" }}
        >
          <ManageProduct />
        </TabPanel>
        <TabPanel
          className={classes.tabPanel}
          value={value}
          index={1}
          style={{ flexGrow: "1" }}
        >
          <AddProduct />
        </TabPanel>
        <TabPanel
          style={{ flexGrow: "1" }}
          className={classes.tabPanel}
          value={value}
          index={2}
        >
          <EditProduct />
        </TabPanel>
      </div>
    </>
  );
};

export default Admin;
