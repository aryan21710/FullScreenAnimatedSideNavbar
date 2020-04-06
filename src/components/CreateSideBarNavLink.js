import React, { Component } from "react";
import { BrowserRouter, NavLink, Route } from "react-router-dom";
import "../../node_modules/@fortawesome/fontawesome-free/css/all.css";
class CreateSideBarNavLink extends Component {
  state = {
    slide: "SideBarWrapper",
  };

  componentDidUpdate(prevProps) {
    const openSideNavBar = this.props.openSideNavBar;
    if (prevProps.openSideNavBar !== openSideNavBar) {
      this.toggleClass();
    }
  }

  toggleClass = () => {
    const openSideNavBar = this.props.openSideNavBar;
    if (openSideNavBar) {
      this.setState({ slide: "slideOutSideBar" });
    } else {
      this.setState({ slide: "slideInSideBar" });
    }
  };

  render() {
    const ParentLinksGrid = (props) => {
      const {
        parentLink,
        Text,
        children,
        ExpandableLevel,
      } = this.props.myData.navbarLinks;
      return Text.length == parentLink
        ? Text.map((_, idx) => {
            return (
              <div style={styles.parentLinkWrapper}>
                <div style={styles.parentLinkIcon}></div>
                <div style={styles.parentLinkText}></div>
                <div style={styles.parentLinkExpandIcon}></div>
                {ExpandableLevel == idx && (
                  <div style={styles.parentLinkChildren}></div>
                )}
              </div>
            );
          })
        : null;
    };

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

    return (
      <BrowserRouter>
        <Route
          render={({ location, history }) => (
            <React.Fragment>
              <div className={this.state.slide}>
                <div className="sideNavBarLinks">
                  <UserInfoGrid />
                  <ParentLinksGrid />
                </div>
              </div>
            </React.Fragment>
          )}
        />
      </BrowserRouter>
    );
  }
}

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
    marginBottom: "7vh",
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
  },
  parentLinkWrapper: {
    display: "grid",
    gridTemplateColumns: "5vw 10vw 2vw",
    gridColumnGap: "1vw",
    gridTemplateRows: "5vh 15vh",
    width: "20vw",
    borderBottom: "1px solid rgba(255,255,255,0.5)",
  },
  parentLinkIcon: {
    gridArea: "1/1/2/2",
    background: "green",
  },
  parentLinkText: {
    gridArea: "1/2/2/3",
    background: "yellow",
  },
  parentLinkExpandIcon: {
    gridArea: "1/3/2/4",
    background: "blue",
  },
  parentLinkChildren: {
    gridArea: "2/1/3/4",
    background: "orange",
  },
};

export default CreateSideBarNavLink;
