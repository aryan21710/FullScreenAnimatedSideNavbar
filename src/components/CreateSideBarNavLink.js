import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import "../../node_modules/@fortawesome/fontawesome-free/css/all.css";
import UserInfoGrid from "./UserInfoGrid";

class CreateSideBarNavLink extends Component {
  state = {
    slide: styles.sideBarWrapper,
    whichLinkToToggle: [],
    linksAndStatus: {},
    clickStatus: false,
    userStyle: {}
  };

  componentDidMount() {
    this.updateTextArray();
    this.applyUserStyles();
  }

  componentDidUpdate(prevProps, prevState) {
    const { clickStatus } = this.state;
    if (prevState.clickStatus !== clickStatus) {
      this.toggleClassForSideBar();
    }
  }

  toggleClassForSideBar = () => {
    const { clickStatus,userStyle } = this.state;
    if (clickStatus) {
      this.setState({ slide: {...styles.slideOutSideBar,...userStyle}});
    } else {
      this.setState({ slide: styles.slideInSideBar });
    }
  };

  onExpand = (linkText) => {
    const { linksAndStatus } = this.state;
    this.setState({
      whichLinkToToggle: linkText,
    });

    const myobj = {};
    for (let i in linksAndStatus) {
      const _ = {};

      if (i === linkText) {
        _["toggle"] = !linksAndStatus[i]["toggle"];
        _["rotateIcon"] = _["toggle"] ? styles.expandIcon : styles.collapseIcon;
        _["childLinkWrapper"] = _["toggle"]
          ? styles.expandChildren
          : styles.collapseChildren;

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
    if (Text === this.state.whichLinkToToggle) {
      return (
        <React.Fragment>
          <div style={{ ...styles.flexStyling, ...styles.iconChildren }}>
            {children.map((_, idx) => {
              return (
                <div
                  key={idx}
                  className={this.updateStyleForChidrenIconAndText(Text)}
                  style={styles.childIcon}
                >
                  {_.IconSet}
                </div>
              );
            })}
          </div>
          <div style={{ ...styles.flexStyling, ...styles.textChildren }}>
            {children.map((_, idx) => {
              return (
                <div
                  key={idx}
                  className={this.updateStyleForChidrenIconAndText(Text)}
                  style={styles.childText}
                >
                  <NavLink activeStyle={styles.navlinks} to={_.Route}>
                    {" "}
                    {_.Text}
                  </NavLink>
                </div>
              );
            })}
          </div>
        </React.Fragment>
      );
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

  navBarLinksGrid = (props) => {
    const { myData } = this.props;
    const returnData = [];

    for (let i in myData) {
      if (i !== "userInfo" && i !== "navBarSettings") {
        const {
          Expandable,
          IconSet,
          Text,
          children,
          ExpandableIconset,
          Route,
        } = myData[i];

        returnData.push(
          <React.Fragment>
            <div style={styles.parentLinkWrapper}>
              <div
                style={{
                  ...styles.flexStyling,
                  ...styles.parentLinkIconWrapper,
                }}
              >
                <div style={styles.parentLinkIcon}>{IconSet}</div>
              </div>
              <div style={{ ...styles.flexStyling, ...styles.parentLinkText }}>
                <NavLink activeStyle={styles.navlinks} to={Route}>
                  {Text}
                </NavLink>
              </div>

              {Expandable && (
                <div
                  style={this.updateStyleForToggleIcon(Text)}
                  data-value={Text}
                  onClick={() => {
                    this.onExpand(Text);
                  }}
                >
                  {ExpandableIconset}
                </div>
              )}
            </div>
            {Expandable && (
              <div style={this.updateStyleForChildLinkWrapper(Text)}>
                {this.createChildLinks(children, Text)}
              </div>
            )}
          </React.Fragment>
        );
      }
    }
    console.log("returnData", returnData);
    return returnData.map((_) => _);
  };

  applyUserStyles = (props) => {
    const { navBarWidth, theme } = this.props.myData.navBarSettings;
    const newStyle = {};

    const validateWidth=Number(navBarWidth.replace('vw','')) < 20 ? '20vw' : navBarWidth;
    
    newStyle["width"] =
      validateWidth !== styles.sideNavBarLinks.width
        ? validateWidth
        : styles.sideNavBarLinks.width;

    newStyle["background"] =
      theme.primaryColor !== styles.sideNavBarLinks.background
        ? theme.primaryColor
        : styles.sideNavBarLinks.background;

     

    console.log('newStyle',newStyle)
    this.setState({
      userStyle: newStyle,
    }) 
  };

  render(props) {
    console.count("render");
    const { clickStatus } = this.state;
    const { name, email, lastLogin } = this.props.myData.userInfo;

    return (
      <Route
        render={({ location, history }) => (
          <React.Fragment>
            <div
              className="toggleBarWrapper"
              onClick={() => {
                this.setState({
                  clickStatus: !clickStatus,
                });
              }}
            >
              <span className={clickStatus ? "hideme " : "bar1"}></span>
              <span className={clickStatus ? "rotate45 bar2" : "bar2"}></span>
              <span className={clickStatus ? "rotate-45 bar3" : "bar3"}></span>
            </div>
            <div className="SideBarWrapper" style={this.state.slide}>
              <div className="sideNavBarLinks" style={this.state.userStyle}>
                <UserInfoGrid name={name} email={email} lastLogin={lastLogin} />
                {this.navBarLinksGrid()}
              </div>
            </div>
          </React.Fragment>
        )}
      />
    );
  }
}

const styles = {
  sideBarWrapper: {
    background: 'rgba(0, 0, 0, 1)',
    position: 'absolute',
    top: '4.6vh',
    left: '-100vw',
    height: '95.4vh',
    zIndex: '2',
  
  },
  sideNavBarLinks: {
    width: "20vw",
    height: "95vh",
    background: "black",
  },
  slideOutSideBar: {
    width: "20vw",
    display: " flex",
    flexDirection: " row",
    position: " absolute",
    top: " 4.6vh",
    left: " -100vw", 
    /* left: ' 0vw', */
    height: " 95.4vh",
    zIndex: " 1000",
    animation: " slideOut 0.5s ease-in-out 1 forwards",
  },
  slideInSideBar: {
    position: "absolute",
    top: "4.6vh",
    height: "95.4vh",
    zIndex: "2",
    animation: "slideIn 0.5s ease-in-out 1 forwards",
  },
  flexStyling: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  parentLinkWrapper: {
    display: "grid",
    gridTemplateColumns: "4vw 13vw 3vw",
    gridTemplateRows: "5vh",
    width: "20vw",
    background: "black",
    height: "5vh",
  },
  parentLinkIconWrapper: {
    gridArea: "1/1/2/2",
    justifyContent: "flex-end",
  },
  parentLinkIcon: {
    borderRadius: "5px",
    background: "#cccccc",
    color: "white",
    padding: "0.5vh 0.5vw",
    boxShadow: " black 0px 0px 4px 0px",
  },
  parentLinkText: {
    gridArea: "1/2/2/3",
    justifyContent: "flex-start",
    fontSize: "1.1vw",
    color: "white",
    marginLeft: "10px",
    cursor: "pointer",
  },
  navlinks: {
    textDecoration: "none",
    color: "white",
  },
  parentLinkExpandIcon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gridArea: "1/3/2/4",
    cursor: "pointer",
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
    color: "rgba(255,255,255,0.6)",
    fontSize: "1vw",
  },
  iconChildren: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  childText: {
    margin: " 1vh 0vw 1vh 1vw",
    fontSize: "1vw",
    cursor: "pointer",
  },
  childIcon: {
    margin: " 0.75vh 0vw",
    borderRadius: "5px",
    background: "#cccccc",
    color: "rgba(255,255,255,0.6)",
    padding: "0.15vh 0.15vw",
    boxShadow: "black 0px 0px 4px 0px",
    fontSize: "1vw",
    border: "1px solid black",
  },
  collapseChildren: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    background: "rgb(140, 140, 140)",
    boxShadow: "black 0px 0px 4px 0px",
    width: "20vw",
    transition: "height 400ms ease-in",
    color: "white",
    height: "0vh",
    overflow: "hidden",
  },
  expandChildren: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    background: "rgb(140, 140, 140)",
    boxShadow: "black 0px 0px 4px 0px",
    width: "20vw",
    transition: "height 400ms ease-in",
    color: "white",
    height: "10vh",
    overflow: "hidden",
  },
  expandIcon: {
    transform: "rotate(90deg)",
    transition: "transform 0.1s ease-in-out",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gridArea: "1/3/2/4",
    cursor: "pointer",
  },

  collapseIcon: {
    transform: "rotate(0deg)",
    transition: "transform 0.1s ease-in-out",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gridArea: "1/3/2/4",
    cursor: "pointer",
  },
};

export default CreateSideBarNavLink;
