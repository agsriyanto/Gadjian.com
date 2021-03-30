import React from "react";
import clsx from "clsx";
import {
  makeStyles,
  useTheme,
  Drawer,
  Avatar,
  AppBar,
  Toolbar,
  List,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
} from "@material-ui/core";
import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from "@material-ui/icons";

import img from "../Assets/logo-gadjian.png";

const drawerWidth = 180;
const matrix = {
  width: window.innerWidth,
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: "#ffff",
    boxShadow: "none",
    zIndex: theme.zIndex.drawer + 1,
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 0,
    color: "black",
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const isMobile = () => matrix.width <= 414;

  const styles = {
    icon: {
      marginLeft: 10,
      marginRight: -30,
      fontSize: 12,
    },
    text: {
      fontSize: 12,
      margin: 0,
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
    },
    logo: {
      width: 100,
    },
    title: {
      color: "black",
      display: "flex",
      alignItems: "center",
    },
    span: {
      color: "#33C7C6",
    },
    avatar: {
      fontSize: 10,
      marginLeft: 20,
      backgroundColor: "white",
      color: "black",
      border: "1px solid #bababa",
    },
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar style={{ display: "flex" }}>
          {isMobile() && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
          )}
          <div style={styles.header}>
            <img style={styles.logo} src={img} alt="logo-gadjian" />
            <div style={styles.title}>
              {!isMobile() && (
                <p>
                  Hallo, <span style={styles.span}>Gadjian User</span>
                </p>
              )}
              <Avatar style={styles.avatar}>Photo</Avatar>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
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
      </Drawer>
    </div>
  );
}
