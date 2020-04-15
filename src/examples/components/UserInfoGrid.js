import React from "react";

const UserInfoGrid = ({ name, email }) => {
  return (
    <React.Fragment>
      <div style={styles.UserInfoGrid}>
        <div style={{ ...styles.flexStyling, ...styles.profilePicWrapper }}>
          <div style={{ ...styles.flexStyling, ...styles.profilePic }}>
            <i className="fas fa-user-tie" style={styles.profilePicIcon}></i>
          </div>
        </div>
        <div style={{ ...styles.flexStyling, ...styles.profileInfoWrapper }}>
          <div style={{ ...styles.flexStyling, ...styles.profileInfo }}>
            <span style={styles.uname}>{name.toUpperCase()}</span>
            <span style={styles.role}>{email}</span>
          </div>
        </div>
      </div>
      <div style={styles.borderSeparator}></div>
    </React.Fragment>
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
    height: "22vh",
    boxSizing: "border-box",
    position: "relative",
  },
  borderSeparator: {
    width: "20vw",
    height: "1px",
    backgroundColor: "rgba(255,255,255,0.3)",
    marginBottom: "3vh",
  },
  profilePicWrapper: {
    width: "5vw",
    height: "5vh",
    position: "absolute",
    left: "1vw",
    top: "40%",
  },
  profileInfoWrapper: {
    justifyContent: "flex-start",
    position: "absolute",
    width: "12vw",
    height: "5vh",
    left: "6.5vw",
    top: "40%",
  },
  profilePic: {
    background: "white",
    padding: "0.25vh 0.25vw",
    borderRadius: "10px",
  },
  profileInfo: {
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "flex-start",
  },
  uname: {
    fontSize: "1.1vw",
    color: "white",
    margin: "0.7vh 0vw",
  },
  role: {
    fontSize: "1vw",
    color: "white",
    margin: "0.7vh 0vw",
  },
  profilePicIcon: {
    fontSize: "4vw",
  },
};
