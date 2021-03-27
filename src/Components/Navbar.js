import React from "react";
import { makeStyles, Drawer, AppBar, Toolbar, List } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import img from "../Assets/logo-gadjian.png";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "#ffff",
    boxShadow: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    borderRight: "none",
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  logo: {
    width: 100,
  },
  icon: {
    marginLeft: 10,
    marginRight: 0,
  },
}));

export default function ClippedDrawer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <img className={classes.logo} src={img} alt="logo-gadjian" />
          {/* <Typography variant="h6" noWrap>
            Clipped drawer
          </Typography> */}
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <ListItem button>
              <ListItemIcon className={classes.icon}>
                <i class="fas fa-home"></i>
              </ListItemIcon>
              <ListItemText primary="Beranda" />
            </ListItem>
            <ListItem button>
              <ListItemIcon className={classes.icon}>
                <i class="fas fa-users"></i>
              </ListItemIcon>
              <ListItemText primary="Personal List" />
            </ListItem>
            <ListItem button>
              <ListItemIcon className={classes.icon}>
                <i class="far fa-calendar-alt"></i>
              </ListItemIcon>
              <ListItemText primary="Daily Attendance" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </div>
  );
}
