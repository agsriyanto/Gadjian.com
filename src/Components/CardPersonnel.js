import React from "react";
import { Card } from "@material-ui/core";
import moment from "moment";

export default function CardPersonnel({ index, user, isMobile }) {
  const styles = {
    card: {
      marginRight: index === 3 ? 0 : 30,
      width: isMobile ? "100%" : "25%",
      borderRadius: 20,
      display: "flex",
      flexDirection: "column",
      fontSize: 12,
      marginTop: isMobile ? 20 : 0,
    },
    header: {
      borderBottom: 1,
      borderBottomStyle: "solid",
      borderBottomColor: "#bababa",
      display: "flex",
      justifyContent: "space-between",
      padding: "10px 20px",
    },
    personalId: {
      margin: 0,
    },
    span: {
      color: "#33C7C6",
    },
    body: {
      padding: 20,
      display: "flex",
      flexDirection: isMobile ? "" : "column",
      alignItems: "center",
    },
    image: {
      width: isMobile ? 100 : 150,
      height: isMobile ? 100 : 150,
      borderRadius: 100,
      justifyContent: "center",
      marginBottom: 20,
      marginRight: isMobile ? 30 : 0,
    },
    description: {
      alignSelf: "flex-start",
    },
    title: {
      fontWeight: "bold",
      margin: 0,
    },
    content: {
      marginTop: 0,
    },
  };

  return (
    <Card style={styles.card}>
      <div style={styles.header}>
        <p style={styles.personalId}>
          Personal ID:{" "}
          <span style={styles.span}>{user.id.name ? user.id.name : "-"}</span>
        </p>
        <i className="fas fa-ellipsis-h"></i>
      </div>
      <div style={styles.body}>
        <img style={styles.image} src={user.picture.large} alt="avatar" />
        {isMobile && (
          <div>
            <div style={styles.description}>
              <p style={styles.title}>Name</p>
              <p style={styles.content}>
                {user.name.first + " " + user.name.last}
              </p>
            </div>
            <div style={styles.description}>
              <p style={styles.title}>Telephone</p>
              <p style={styles.content}>{user.phone}</p>
            </div>
          </div>
        )}
        {!isMobile && (
          <div style={styles.description}>
            <p style={styles.title}>Name</p>
            <p style={styles.content}>
              {user.name.first + " " + user.name.last}
            </p>
          </div>
        )}
        {!isMobile && (
          <div style={styles.description}>
            <p style={styles.title}>Telephone</p>
            <p style={styles.content}>{user.phone}</p>
          </div>
        )}
        {!isMobile && (
          <div style={styles.description}>
            <p style={styles.title}>Birthday</p>
            <p style={styles.content}>
              {moment(user.dob.date).format("DD-MM")}
            </p>
          </div>
        )}
        {!isMobile && (
          <div style={styles.description}>
            <p style={styles.title}>Email</p>
            <p style={styles.content}>{user.email}</p>
          </div>
        )}
      </div>
    </Card>
  );
}
