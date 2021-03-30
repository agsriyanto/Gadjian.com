import React, { useEffect, useState } from "react";
import { LinearProgress } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import allActions from "../Store/Actions";

import {
  Navbar,
  Sidebar,
  SubNavbar,
  CardPersonnel,
  Pagination,
} from "../Components";

const matrix = {
  width: window.innerWidth,
};

export default function Home() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.user);
  const loading = useSelector((state) => state.users.loading);
  const page = useSelector((state) => state.users.page);
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(allActions.userAction.getUsers());
  }, []);

  const offset = () => (page - 1) * 4;
  const isMobile = () => matrix.width <= 414;
  const findPersonnal = (search) => setSearch(search);

  const styles = {
    root: {
      margin: !isMobile() ? "94px 30px 0 270px" : "79px 15px 0 15px",
    },
    personnel: {
      display: "flex",
      flexDirection: isMobile() ? "column" : "",
    },
    pagination: {
      marginTop: 10,
      display: "flex",
      justifyContent: "center",
    },
  };

  if (loading) return <LinearProgress />;

  return (
    <div style={styles.root}>
      <Navbar />
      {!isMobile() && <Sidebar />}
      <SubNavbar isMobile={isMobile()} findPersonnal={findPersonnal} />
      <div style={styles.personnel}>
        {users
          .filter((personnal) => personnal.name.first.includes(search))
          .slice(offset(), offset() + 4)
          .map((user, i) => (
            <CardPersonnel
              index={i}
              key={i}
              user={user}
              isMobile={isMobile()}
            />
          ))}
      </div>
      <div style={styles.pagination}>
        <Pagination />
      </div>
    </div>
  );
}
