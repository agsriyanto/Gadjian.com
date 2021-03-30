import React from "react";
import {
  makeStyles,
  Drawer,
  Toolbar,
  List,
  ListItem,
  ListItemIcon,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    borderRight: "none",
    width: 240,
  },
}));

export default function Sidebar() {
  const classes = useStyles();
  const styles = {
    drawer: {
      width: 240,
      flexShrink: 0,
      zIndex: -99,
    },
    drawerContainer: {
      overflow: "auto",
    },
    icon: {
      marginLeft: 10,
      marginRight: -30,
      fontSize: 12,
    },
    text: {
      fontSize: 12,
      margin: 0,
    },
  };

  return (
    <Drawer
      style={styles.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Toolbar />
      <div style={styles.drawerContainer}>
        <List>
          <ListItem button>
            <ListItemIcon style={styles.icon}>
              <i className="fas fa-home"></i>
            </ListItemIcon>
            <p style={styles.text}>Beranda</p>
          </ListItem>
          <ListItem button>
            <ListItemIcon style={styles.icon}>
              <i className="fas fa-users"></i>
            </ListItemIcon>
            <p style={styles.text}>Personal List</p>
          </ListItem>
          <ListItem button>
            <ListItemIcon style={styles.icon}>
              <i className="far fa-calendar-alt"></i>
            </ListItemIcon>
            <p style={styles.text}>Daily Attendance</p>
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
}
