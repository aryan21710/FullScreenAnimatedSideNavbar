import React, { Component } from "react";
import { BrowserRouter, NavLink, Route } from "react-router-dom";
import "../../node_modules/@fortawesome/fontawesome-free/css/all.css";
import UserInfoGrid from './UserInfoGrid';

class CreateSideBarNavLink extends Component {
  state = {
    slide: "SideBarWrapper",
    error: false,
    expandStatus: false,
    findLinkToExpand: "",
  };

  componentDidUpdate(prevProps, prevState) {
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

  onExpand = (linkText) => {
    this.setState({
      expandStatus: !this.state.expandStatus,
      findLinkToExpand: linkText,
    });
  };

  attachClassToExpand = (Text) => {
    if (Text === this.state.findLinkToExpand) {
      return this.state.expandStatus
        ? styles.expandChildren
        : styles.collapseChildren;
    } else {
      return styles.collapseChildren;
    }
  };

  createChildLinks = (children, Text) => {
    if (this.state.expandStatus && Text === this.state.findLinkToExpand) {
      return (
        <React.Fragment>
          <div style={{ ...styles.flexStyling, ...styles.iconChildren }}>
            {children.map((_) => {
              return <div style={styles.childIcon}>{_.IconSet}</div>;
            })}
          </div>
          <div style={{ ...styles.flexStyling, ...styles.textChildren }}>
            {children.map((_) => {
              return <div style={styles.childText}>{_.Text}</div>;
            })}
          </div>
        </React.Fragment>
      );
    }
  };

  toggleExpandIcon = (Text) => {
    const { expandStatus } = this.state;
 
    if (expandStatus && Text === this.state.findLinkToExpand) {
        return styles.expandIcon
    } else {
        return styles.collapseIcon

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
          <div style={styles.parentLinkWrapper}>
            <div
              style={{ ...styles.flexStyling, ...styles.parentLinkIconWrapper }}
            >
              <div style={styles.parentLinkIcon}>{IconSet}</div>
            </div>
            <div style={{ ...styles.flexStyling, ...styles.parentLinkText }}>
              {Text}
            </div>
            {Expandable && (
              <div
                style={this.toggleExpandIcon(Text)}
                data-value={Text}
                onClick={() => {
                  this.onExpand(Text);
                }}
              >
                {ExpandableIconset}
              </div>
            )}

            {Expandable && (
              <div style={this.attachClassToExpand(Text)}>
                {this.createChildLinks(children, Text)}
              </div>
            )}
          </div>
        );
      }
      console.log("returnData", returnData);

      return returnData.map((_) => _);
    };



    return (
      <BrowserRouter>
        <Route
          render={({ location, history }) => (
            <React.Fragment>
              <div className={this.state.slide}>
                <div className="sideNavBarLinks">
                  <UserInfoGrid />
                  <NavbarLinksGrid />
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

 
  parentLinkWrapper: {
    display: "grid",
    gridTemplateColumns: "4vw 13vw 3vw",
    gridTemplateRows: "5vh",
    width: "20vw",
    margin: "1vh 0vw",
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
  collapseChildren: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "0.5vh",
    background: "rgb(140, 140, 140)",
    boxShadow: "black 0px 0px 4px 0px",
    width: "20vw",
    padding: "0vh 0vw",
  },
  expandChildren: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "0.5vh",
    background: "rgb(140, 140, 140)",
    boxShadow: "black 0px 0px 4px 0px",
    width: "20vw",
    padding: "2vh 0vw",
  },
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
