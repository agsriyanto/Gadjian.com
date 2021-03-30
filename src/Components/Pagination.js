import React from "react";
import { Button } from "@material-ui/core";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { useSelector, useDispatch } from "react-redux";

import allActions from "../Store/Actions";

export default function Pagination() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.user);
  const page = useSelector((state) => state.users.page);

  const changePage = (move) => () => {
    if (move === "next") {
      dispatch(allActions.userAction.setPages(page + 1));
    } else {
      dispatch(allActions.userAction.setPages(page - 1));
    }
  };

  const styles = {
    title: {
      fontSize: 15,
      textTransform: "none",
    },
    icon: {
      fontSize: 15,
    },
  };

  return (
    <div style={styles.container}>
      <Button onClick={changePage("back")} disabled={page === 1}>
        <ArrowBackIos style={styles.icon} />
        <span style={styles.title}>Previous Page</span>
      </Button>
      <Button onClick={changePage("next")} disabled={page * 4 >= users.length}>
        <span style={styles.title}>Next Page</span>
        <ArrowForwardIos style={styles.icon} />
      </Button>
    </div>
  );
}
