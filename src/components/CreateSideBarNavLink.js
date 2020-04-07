import React, { Component } from "react";
import { BrowserRouter, NavLink, Route } from "react-router-dom";
import "../../node_modules/@fortawesome/fontawesome-free/css/all.css";
class CreateSideBarNavLink extends Component {
  state = {
    slide: "SideBarWrapper",
    error: false,
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

  validateData = (props) => {
    const {
      parentLink,
      Text,
      IconSet,
      Route,
      children,
    } = this.props.myData.navbarLinks;
    if (
      Text.length == parentLink &&
      parentLink == IconSet.length &&
      parentLink == Route.length
    ) {
      while (children.length > 0 || children != null) {}
    } else {
      this.setState({ error: true })(
        <div styles={{ ...styles.flexStyling, ...styles.error }}>
          DATA INCOMPATIBLE TO CREATE THE SIDEBAR. NUMBER OF ICON's, ROUTE's and
          TEXT PROVIDED NEEDS TO BE SAME
        </div>
      );
    }
  };

  render(props) {
    console.count("render");

    const NavbarLinksGrid = (props) => {
      const { myData } = this.props;
      const returnData = [];

      for (let i in myData) {
        const {
          Expandable,
          IconSet,
          Text,
          Route,
          children,
          ExpandableIconset,
        } = myData[i];

        returnData.push(
          <div
            style={
              !Expandable
                ? styles.parentLinkWrapperNoChildren
                : styles.parentLinkWrapperWithChildren
            }
          >
            <div style={{ ...styles.flexStyling, ...styles.parentLinkIcon }}>
              {IconSet}
            </div>
            <div style={{ ...styles.flexStyling, ...styles.parentLinkText }}>
              {Text}
            </div>
            {Expandable && (
              <div
                style={{
                  ...styles.flexStyling,
                  ...styles.parentLinkExpandIcon,
                }}
              >
                {ExpandableIconset}
              </div>
            )}

            {Expandable && (
              <div style={styles.parentLinkChildren}>
                <div style={{ ...styles.flexStyling, ...styles.iconChildren }}>
                  {children.map((_) => {
                    return <div style={styles.childIcon}>{_.IconSet}</div>;
                  })}
                </div>
                <div
                  style={{ ...styles.flexStyling, ...styles.textChildren }}
                  className={`${Text.replace(" ", "").toLowerCase()}_child`}
                >
                  <div>
                    {children.map((_) => {
                      return <div style={styles.childIcon}>{_.Text}</div>;
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      }
      console.log("returnData", returnData);

      return returnData.map((_) => _);
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
                  <NavbarLinksGrid/>
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
  parentLinkWrapperWithChildren: {
    display: "grid",
    gridTemplateColumns: "4vw 13vw 3vw",
    gridTemplateRows: "5vh 15vh",
    width: "20vw",
    margin: "2vh 0vw",
    borderBottom: "1px solid rgba(255,255,255,0.5)",
  },
  parentLinkWrapperNoChildren: {
    display: "grid",
    gridTemplateColumns: "4vw 16vw",
    gridTemplateRows: "5vh",
    width: "20vw",
    margin: "2vh 0vw",
    borderBottom: "1px solid rgba(255,255,255,0.5)",
  },
  parentLinkIcon: {
    gridArea: "1/1/2/2",
    justifyContent: "center",
    // background: "green",
    color: "white",
    borderRadius: "5px",
    background: "#cccccc",
    marginLeft: "1vw",
  },
  parentLinkText: {
    gridArea: "1/2/2/3",
    // background: "yellow",
    justifyContent: "flex-start",
    color: "white",
    marginLeft: "10px",
    cursor: "pointer",
  },
  parentLinkExpandIcon: {
    gridArea: "1/3/2/4",
    cursor: "pointer",
  },
  parentLinkChildren: {
    gridArea: "2/1/3/4",
    display: "grid",
    gridTemplateColumns: "4vw 16vw",
  },
  error: {
    fontSize: "1.5vw",
    color: "red",
    fontWeight: "900",
  },
  textChildren: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    color: "white",
    fontSize: "1vw",
  },
  iconChildren: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    color: "white",
    fontSize: "1vw",
  },
  childText: {
    margin: " 1vh 0 1vh 1vw",
  },
  childIcon: {
    margin: " 1vh 0 1vh 0vw",
  },
};

export default CreateSideBarNavLink;
