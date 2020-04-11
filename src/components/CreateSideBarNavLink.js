import React, { Component } from "react";
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";
import "../../node_modules/@fortawesome/fontawesome-free/css/all.css";
import UserInfoGrid from "./UserInfoGrid";

class CreateSideBarNavLink extends Component {
  state = {
    slide: "slideOutSideBar",
    toggle1: false,
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
      toggle1: !this.state.toggle1,
    });

    const myobj = {};
    for (let i in linksAndStatus) {
      const _ = {};

      if (i === linkText) {
        _["toggle"] = !linksAndStatus[i]["toggle"];
        _["rotateIcon"] = _["toggle"] ? styles.expandIcon : styles.collapseIcon;
        _["childLinkWrapper"] = _["toggle"]
          ? "expandChildren"
          : "collapseChildren";
        _["childLinkData"] = _["toggle"] ? "show" : "hide";

        myobj[i] = _;
      } else {
        _["toggle"] = linksAndStatus[i]["toggle"] === true ? false : false;
        _["rotateIcon"] = _["toggle"] ? styles.expandIcon : styles.collapseIcon;
        _["childLinkData"] = _["toggle"] ? "hide" : "show";
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

  updateParentLinkWrapperStyle = (linkText) => {
    const { linksAndStatus } = this.state;

    for (let i in linksAndStatus) {
      if (i === linkText) {
        return linksAndStatus[i]["topPos"];
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
          childLinkWrapper: "collapseChildren",
          childLinkData: "hide",
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

    returnData.push(
      <div
        style={styles.collapseIcon}
        data-value={Text}
        onClick={() => {
          this.onExpand(Text);
        }}
      >
        <i
          className="fas fa-angle-right angleIcon"
          style={{ fontSize: "2vw", color: "black" }}
        />{" "}
      </div>
    );

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
           
            </div>
            {Expandable && (
              <div
                className={
                  this.state.toggle1 ? "expandChildren" : "collapseChildren"
                }
              ></div>
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

    return <div>{this.navBarLinksGrid()}</div>;
  }
}

const styles = {
  flexStyling: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  parentLinkWrapper: {
    width: "20vw",
    margin: "1vh 0vw",
    background: "black",
    height: "5vh",
    border: "1px solid white",
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
  },
  // collapseChildren: {
  //   padding: "0vh 0vw",
  //   display: "flex",
  //   flexDirection: "row",
  //   justifyContent: "center",
  //   marginTop: "0.5vh",
  //   background: "rgb(140, 140, 140)",
  //   boxShadow: "black 0px 0px 4px 0px",
  //   width: "20vw",
  // },
  // expandChildren: {
  //   padding: "2vh 0vw",
  //   display: "flex",
  //   flexDirection: "row",
  //   justifyContent: "center",
  //   marginTop: "0.5vh",
  //   background: "rgb(140, 140, 140)",
  //   boxShadow: "black 0px 0px 4px 0px",
  //   width: "20vw",
  // },
  expandIcon: {
    transform: "rotate(90deg)",
    transition: "transform 1s ease-in-out",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gridArea: "1/3/2/4",
    cursor: "pointer",
  },

  collapseIcon: {
    transform: "rotate(0deg)",
    transition: "transform 1s ease-in-out",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gridArea: "1/3/2/4",
    cursor: "pointer",
  },
};

export default CreateSideBarNavLink;
