import React from "react";
import { Card, makeStyles, Button, Input } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 20,
    borderRadius: 0,
    boxShadow: "none",
    // height: 90,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  search: {
    border: 1,
    borderColor: "black",
  },
  button: {
    backgroundColor: "#33C7C6",
    borderRadius: 0,
    height: 50,
  },
  title: {
    margin: 20,
  },
  title1: {
    color: "#33C7C6",
  },
}));

export default function CardInfo() {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}>
        <div className={classes.title}>
          <h2 className={classes.title1}>PERSONNEL LIST</h2>
          <h5>List of all personnels</h5>
        </div>
        <div>
          <div className={classes.search}>
            <i class="fas fa-search"></i>
            <Input placeholder=" Find Personnels" />
          </div>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
          >
            ADD PERSONNEL <i class="fas fa-plus"></i>
          </Button>
        </div>
      </Card>
    </div>
  );
}
