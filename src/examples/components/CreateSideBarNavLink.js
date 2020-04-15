import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import "../../../node_modules/@fortawesome/fontawesome-free/css/all.css";
import UserInfoGrid from "./UserInfoGrid";

class CreateSideBarNavLink extends Component {
  state = {
    slide: styles.sideBarWrapper,
    whichLinkToToggle: [],
    linksAndStatus: {},
    toggleBtnStatus: false,
    userStyleSideNavLink: {},
    userStyleToggleBtn: {},
  };

  componentDidMount() {
    this.updateTextArray();
    this.applyUserStyles();
  }

  componentDidUpdate(prevProps, prevState) {
    const { toggleBtnStatus } = this.state;
    if (prevState.toggleBtnStatus !== toggleBtnStatus) {
      this.toggleClassForSideBar();
    }
  }

  toggleClassForSideBar = () => {
    const { toggleBtnStatus, userStyleSideNavLink } = this.state;
    if (toggleBtnStatus) {
      this.setState({
        slide: { ...styles.slideOutSideBar, ...userStyleSideNavLink },
      });
    } else {
      this.setState({ slide: styles.slideInSideBar });
    }
  };

  onExpand = (linkText, children) => {
    const { theme } = this.props.myData.navBarSettings;
    const { linksAndStatus } = this.state;
    this.setState({
      whichLinkToToggle: linkText,
    });

    const myobj = {};
    const childrenLinkWrapperHeight = 4 * children.length + "vh";
    for (let i in linksAndStatus) {
      const _ = {};

      if (i === linkText) {
        _["toggle"] = !linksAndStatus[i]["toggle"];
        _["rotateIcon"] = _["toggle"] ? styles.expandIcon : styles.collapseIcon;
        _["childLinkWrapper"] = _["toggle"]
          ? {
              ...styles.expandChildren,
              background: theme.secondaryColor,
              height: childrenLinkWrapperHeight,
            }
          : { ...styles.collapseChildren, background: theme.secondaryColor };

        myobj[i] = _;
      } else {
        _["toggle"] = linksAndStatus[i]["toggle"] === true ? false : false;
        _["rotateIcon"] = _["toggle"] ? styles.expandIcon : styles.collapseIcon;
        _["childLinkWrapper"] = _["toggle"]
          ? styles.expandChildren
          : styles.collapseChildren;
        myobj[i] = _;
      }
    }
    this.setState({
      linksAndStatus: myobj,
    });
  };

  updateStyleForToggleIcon = (linkText) => {
    const { linksAndStatus } = this.state;

    for (let i in linksAndStatus) {
      if (i === linkText) {
        return linksAndStatus[i]["rotateIcon"];
      }
    }
  };

  updateStyleForChildLinkWrapper = (linkText) => {
    const { linksAndStatus } = this.state;

    for (let i in linksAndStatus) {
      if (i === linkText) {
        return linksAndStatus[i]["childLinkWrapper"];
      }
    }
  };

  createChildLinks = (children, Text) => {
    const {navBarWidth}=this.props.myData.navBarSettings
    if (Text === this.state.whichLinkToToggle) {
      const returnData = [];
      children.forEach((_, idx) => {
        returnData.push(
          <div className="childLinkWrapper">
            <div style={{ ...styles.flexStyling, ...styles.iconChildren }}>
              <div
                className={this.updateStyleForChidrenIconAndText(Text)}
                style={styles.childIcon}
              >
                {_.IconSet}
              </div>
            </div>
            <div style={{ ...styles.flexStyling, ...styles.childTextWrapper }}>
              <div
                className={this.updateStyleForChidrenIconAndText(Text)}
                style={styles.childText}
              >
                <NavLink activeStyle={styles.navlinks} to={_.Route}
                onClick={() => {
                  navBarWidth==='100vw' && this.setState({
                    toggleBtnStatus: !this.state.toggleBtnStatus,
                  });
                }}
                >
                  {" "}
                  {_.Text}
                </NavLink>
              </div>
            </div>
          </div>
        );
      });

      return returnData.map((_) => _);
    }
  };

  updateStyleForChidrenIconAndText = (linkText) => {
    const { linksAndStatus } = this.state;

    for (let i in linksAndStatus) {
      if (i === linkText) {
        return linksAndStatus[i]["childLinkData"];
      }
    }
  };

  updateTextArray = () => {
    const { myData } = this.props;
    const myObj = {};

    for (let i in myData) {
      if (i !== "userInfo" && i !== "navBarSettings") {
        const { Text } = myData[i];
        myObj[Text] = {
          toggle: false,
          rotateIcon: styles.collapseIcon,
          childLinkWrapper: styles.collapseChildren,
        };
      }
    }

    this.setState({
      linksAndStatus: myObj,
    });
  };

  applyUserStyles = (props) => {
    const { navBarWidth, theme } = this.props.myData.navBarSettings;
    const newStyle = {};

    const validateWidth =
      Number(navBarWidth.replace("vw", "")) < 20 ? "20vw" : navBarWidth;

    newStyle["width"] =
      validateWidth !== styles.sideNavBarLinks.width
        ? validateWidth
        : styles.sideNavBarLinks.width;

    newStyle["background"] =
      theme.primaryColor !== styles.sideNavBarLinks.background
        ? theme.primaryColor
        : styles.sideNavBarLinks.background;

    this.setState({
      userStyleSideNavLink: newStyle,
      userStyleToggleBtn: {
        ...styles.toggleBarWrapper,
        background: theme.toggleButtonColor,
      },
    });
  };

  navBarLinksGrid = (props) => {
    const { myData } = this.props;
    const returnData = [];
    const {navBarWidth}=this.props.myData.navBarSettings


    for (let i in myData) {
      if (i !== "userInfo" && i !== "navBarSettings") {
        const {
          Expandable,
          IconSet,
          Text,
          children,
          Route,
          ExpandableIconset,
        } = myData[i];

        returnData.push(
          <React.Fragment>
            <div style={{...styles.flexStyling,...styles.parentLinkWrapper}} className="parentLinkWrapper">
              <div
                style={{
                  ...styles.flexStyling,
                  ...styles.parentLinkIconWrapper,
                }}
              >
                <div style={styles.parentLinkIcon}>{IconSet}</div>
              </div>
              <div style={{ ...styles.parentLinkText }}>
                <NavLink activeStyle={styles.navlinks} to={Route}
                onClick={() => {
                  navBarWidth==='100vw' && this.setState({
                    toggleBtnStatus: !this.state.toggleBtnStatus,
                  });
                }}
                >
                  {Text}
                </NavLink>
              </div>

              {Expandable && (
                <div
                  style={this.updateStyleForToggleIcon(Text)}
                  data-value={Text}
                  onClick={() => {
                    this.onExpand(Text, children);
                  }}
                >
                  {" "}
                  {ExpandableIconset}
                </div>
              )}
            </div>
            {Expandable && (
              <div
                className="childLinkWrapper"
                style={this.updateStyleForChildLinkWrapper(Text)}
              >
                {this.createChildLinks(children, Text)}
              </div>
            )}
          </React.Fragment>
        );
      }
    }
    return returnData.map((_) => _);
  };

  render() {
    const { toggleBtnStatus } = this.state;
    const { name, email, lastLogin } = this.props.myData.userInfo;

    return (
      <Route
        render={({ location, history }) => (
          <React.Fragment>
            <div
              style={this.state.userStyleToggleBtn}
              onClick={() => {
                this.setState({
                  toggleBtnStatus: !toggleBtnStatus,
                });
              }}
            >
              <span className={toggleBtnStatus ? "hideme " : "bar1"}></span>
              <span
                className={toggleBtnStatus ? "rotate45 bar2" : "bar2"}
              ></span>
              <span
                className={toggleBtnStatus ? "rotate-45 bar3" : "bar3"}
              ></span>
            </div>
            <div className="SideBarWrapper" style={this.state.slide}>
              <div
                className="sideNavBarLinks"
                style={this.state.userStyleSideNavLink}
              >
                <div style={styles.borderSeparator}>
                  <UserInfoGrid
                    name={name}
                    email={email}
                    lastLogin={lastLogin}
                  />
                  {this.navBarLinksGrid()}
                </div>
              </div>
            </div>
          </React.Fragment>
        )}
      />
    );
  }
}

const styles = {
  toggleBarWrapper: {
    width: window.innerWidth > 768 ? "3.2vw" : "10vw",
    height: "4.6vh",
    lineHeight: "4.6vh",
    cursor: "pointer",
    top:'0vh',
    left: '0vw',
    position: "absolute",
    background: "rgba(255, 102, 0, 0.877)",
    zIndex: '1000'
  },
  sideBarWrapper: {
    position: "absolute",
    top: "0vh",
    left: "-100vw",
    height: "100vh",
    zIndex: "2",
  },
  borderSeparator: {
    width: window.innerWidth > 768 ? "20vw" : "100vw",
    height: "100vh",
    borderRight: "1px solid rgba(255,255,255,0.3)",
  },
  sideNavBarLinks: {
    width: window.innerWidth > 768 ? "20vw" : "100vw",
    height: "100vh",
  },
  slideOutSideBar: {
    width: window.innerWidth > 768 ? "20vw" : "100vw",
    display: " flex",
    flexDirection: " row",
    position: " absolute",
    top: " 0vh",
    left: " -100vw",
    height: " 100vh",
    zIndex: "2",
    animation: " slideOut 0.5s ease-in-out 1 forwards",
  },
  slideInSideBar: {
    position: "absolute",
    top: "0vh",
    height: "100vh",
    zIndex: "2",
    animation: "slideIn 0.5s ease-in-out 1 forwards",
  },
  flexStyling: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  parentLinkWrapper: {
    position: 'relative',
    width: window.innerWidth > 768 ? "20vw" : "100vw",
    height: window.innerWidth > 768 ? "5vh" : "9vh",
  },
  parentLinkIconWrapper: {
    position: 'absolute',
    left: window.innerWidth > 768 ? '1vw' : "3vw",
    width: window.innerWidth > 768 ? "3vw" : "15vw",
    justifyContent: "flex-end",
  },
  parentLinkIcon: {
    borderRadius: "5px",
    background: "black",
    color: "rgba(255,255,255,0.6)",
    padding: window.innerWidth > 768 ? "0.5vh 0.5vw" : "2vh 2vw",
    boxShadow: " black 0px 0px 4px 0px",
  },
  expandIcon: {
    transform: "rotate(90deg)",
    transition: "transform 0.1s ease-out",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: 'absolute',
    left: window.innerWidth > 768 ? '18vw' : '60vw',
    width: window.innerWidth > 768 ? "1vw" : "3vw",
    color: "rgba(255,255,255,0.6)",

  },

  collapseIcon: {
    transform: "rotate(0deg)",
    transition: "transform 0.1s ease-out",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: 'absolute',
    left: window.innerWidth > 768 ? '18vw' : '60vw',
    width: window.innerWidth > 768 ? "1vw" : "3vw",
    color: "rgba(255,255,255,0.6)",

  },
  parentLinkText: {
    position: 'absolute',
    left: window.innerWidth > 768 ? '4.5vw' : '22vw',
    width: window.innerWidth > 768 ? "12vw" : "40vw",
    fontSize: window.innerWidth > 768 ? "1.1vw" : "5vw",
    color: "rgba(255,255,255,0.6)",
    marginLeft: "10px",
  },
  navlinks: {
    textDecoration: "none",
    color: "rgba(255,255,255,1)",
  },
  parentLinkExpandIcon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  },
  error: {
    fontSize: window.innerWidth > 768 ? "1.1vw" : "4.5vw",
    color: "red",
    fontWeight: "900",
  },

  collapseChildren: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    boxShadow: "black -1px 2px 0px 0px",
    width: window.innerWidth > 768 ? "20vw" : "100vw",
    transition: "height 200ms ease-in",
    color: "rgba(255,255,255,0.6)",
    height: "0vh",
    overflow: "hidden",
  },
  expandChildren: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    boxShadow: "black -1px 2px 0px 0px",
    width: window.innerWidth > 768 ? "20vw" : "100vw",
    transition: "height 200ms ease-in",
    color: "rgba(255,255,255,0.6)",
    height: "0vh",
    padding: "2vh 0vw",
    overflow: "hidden",
  },

  childTextWrapper: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    color: "rgba(255,255,255,0.6)",
    fontSize: window.innerWidth > 768 ? "1vw" : "4vw"
  },
  iconChildren: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  childText: {
    margin: window.innerWidth > 768 ? " 1vh 0vw 1vh 1vw" : " 1vh 0vw 1vh 5vw",
    fontSize: window.innerWidth > 768 ? "1vw" : "4vw",
    cursor: "pointer",
  },
  childIcon: {
    margin: " 0.5vh 0vw",
    borderRadius: "5px",
    background: "black",
    color: "rgba(255,255,255,0.6)",
    padding: "0.35vh 0.35vw",
    boxShadow: "black 0px 0px 4px 0px",
    fontSize: window.innerWidth > 768 ? "1vw" : "5vw",
  },
};

export default CreateSideBarNavLink;
