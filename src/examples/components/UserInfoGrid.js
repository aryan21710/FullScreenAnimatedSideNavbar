import React from "react";

const UserInfoGrid = (props) => {
  const { name, email, secondaryColor }=props
  return (
    <React.Fragment>
      <div style={{...styles.UserInfoGrid,background:secondaryColor}}>
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
    background: 'rgb(0, 51, 153,1)'
  },
  borderSeparator: {
    width: window.innerWidth > 768 ? "20vw" : "100vw",
    height: "1px",
    backgroundColor: "rgba(255,255,255,0.3)",
    marginBottom: "3vh",
  },
  profilePicWrapper: {
    width: window.innerWidth > 768 ? "5vw" : "20vw",
    height: window.innerWidth > 768 ? "5vh" : "10vh",
    position: "absolute",
    left: window.innerWidth > 768 ? "1vw" : "8vw",
    top: window.innerWidth > 768 ? "40%" : "30%"
  },
  profileInfoWrapper: {
    justifyContent: "flex-start",
    position: "absolute",
    width: window.innerWidth > 768 ? "12vw" : "60vw",
    height: window.innerWidth > 768 ? "5vh" : "10vh",
    left: window.innerWidth > 768 ? "6.5vw" : "35vw",
    top: window.innerWidth > 768 ? "40%" : "30%"
  },
  profilePic: {
    background: "white",
    padding: window.innerWidth > 768 ? "0.25vh 0.25vw": "0.5vh 0.5vw",
    borderRadius: "10px",
  },
  profileInfo: {
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "flex-start",
  },
  uname: {
    fontSize: window.innerWidth > 768 ? "1.1vw" : "5vw",
    color: "white",
    margin: "0.7vh 0vw",
  },
  role: {
    fontSize: window.innerWidth > 768 ? "1vw" : "4.5vw",
    color: "white",
    margin: "0.7vh 0vw",
  },
  profilePicIcon: {
    fontSize: window.innerWidth > 768 ? "4vw" : "20vw"
  },
};
