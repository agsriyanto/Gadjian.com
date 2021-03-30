import React from "react";
import { Button } from "@material-ui/core";

export default function SubNavbar({ isMobile, findPersonnal }) {
  const styles = {
    root: {
      display: "flex",
      justifyContent: "space-between",
      backgroundColor: "white",
      padding: 20,
      marginBottom: isMobile ? 0 : 30,
      flexDirection: isMobile ? "column" : "",
    },
    title1: {
      margin: 0,
      color: "#33C7C6",
    },
    title2: {
      margin: 0,
      color: "#bababa",
    },
    right: {
      display: "flex",
      flexDirection: isMobile ? "column" : "",
    },
    search: {
      marginTop: isMobile ? 10 : 0,
      marginRight: isMobile ? 0 : 10,
    },
    icon: {
      color: "#33C7C6",
      // margin: 8,
      padding: "10px",
      textAlign: "center",
      border: "1px solid #bababa",
      borderRightStyle: "none",
    },
    input: {
      height: 35,
      width: "100%",
      outline: "none",
      border: "1px solid #bababa",
      borderLeftStyle: "none",
    },
    button: {
      marginRight: isMobile ? 0 : 10,
      backgroundColor: "#33C7C6",
      borderRadius: 0,
      height: 40,
    },
    inputContainer: {
      display: "flex",
      width: "100%",
      marginBottom: "15px",
    },
  };

  return (
    <div style={styles.root}>
      <div>
        <h3 style={styles.title1}>PERSONNEL LIST</h3>
        <p style={styles.title2}>List of all personnels</p>
      </div>
      <div style={styles.right}>
        <form style={styles.search}>
          <div style={styles.inputContainer}>
            <i style={styles.icon} className="fas fa-search"></i>
            <input
              onChange={(e) => findPersonnal(e.target.value)}
              style={styles.input}
              type="text"
              placeholder="Find Personnels"
            />
          </div>
        </form>
        <Button style={styles.button} variant="contained" color="primary">
          ADD PERSONNEL <i className="fas fa-plus"></i>
        </Button>
      </div>
    </div>
  );
}
