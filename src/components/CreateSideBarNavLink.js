import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import "../../node_modules/@fortawesome/fontawesome-free/css/all.css";
import UserInfoGrid from "./UserInfoGrid";

class CreateSideBarNavLink extends Component {
  state = {
    slide: "slideOutSideBar",
    whichLinkToToggle: [],
    linksAndStatus: {},
  };

  componentDidMount() {
    this.updateTextArray();
  }

  componentDidUpdate(prevProps, prevState) {
    const openSideNavBar = this.props.openSideNavBar;
    if (prevProps.openSideNavBar !== openSideNavBar) {
      this.toggleClassForSideBar();
    }
  }

  toggleClassForSideBar = () => {
    const openSideNavBar = this.props.openSideNavBar;
    if (openSideNavBar) {
      this.setState({ slide: "slideOutSideBar" });
    } else {
      this.setState({ slide: "slideInSideBar" });
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
      if (i !== "userInfo") {
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
      if (i !== "userInfo") {
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

  render(props) {
    console.count("render");

    const { name, email, lastLogin } = this.props.myData.userInfo;

    return (
      <Route
        render={({ location, history }) => (
          <React.Fragment>
            <div className={this.state.slide}>
              <div className="sideNavBarLinks">
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
