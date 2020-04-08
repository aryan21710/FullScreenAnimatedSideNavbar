import React from "react";

const UserInfoGrid = () => {
  return (
    <div style={styles.UserInfoGrid}>
      <div style={{ ...styles.profilePicWrapper, ...styles.flexStyling }}>
        <div style={{ ...styles.flexStyling, ...styles.profilePic }}>
          <i className="fas fa-user-tie" style={styles.profilePicIcon}></i>
        </div>
      </div>
      <div style={{ ...styles.flexStyling, ...styles.profileInfoWrapper }}>
        <div style={{ ...styles.flexStyling, ...styles.profileInfo }}>
          <span style={styles.uname}>FirstName LastName</span>
          <span style={styles.role}>Description/Role/Alias</span>
          <span style={styles.role}>Email</span>
        </div>
      </div>
    </div>
  );
};

export default UserInfoGrid;

const styles = {
  flexStyling: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  UserInfoGrid: {
    display: "grid",
    gridTemplateColumns: "8vw 12vw",
    height: "20vh",
    borderBottom: "1px solid rgba(255,255,255,0.5)",
    boxSizing: "border-box",
  },
  profilePicWrapper: {
    width: "100%",
    height: "100%",
  },
  profileInfoWrapper: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-start",
  },
  profilePic: {
    background: "white",
    padding: "1vh 1vw",
    borderRadius: "10px",
  },
  profileInfo: {
    padding: "1vh 1vw",
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "flex-start",
  },
  uname: {
    fontSize: "1vw",
    color: "white",
    margin: "0.5vh 0vw",
  },
  role: {
    fontSize: "0.8vw",
    color: "white",
    margin: "0.5vh 0vw",
  },
  profilePicIcon: {
    fontSize: "4vw",
  }
};
