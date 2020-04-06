import React, { Component } from "react";
import { BrowserRouter, NavLink, Route } from "react-router-dom";

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
    return (
      <BrowserRouter>
        <Route
          render={({ location, history }) => (
            <React.Fragment>
              <div className={this.state.slide}>
                <div className="sideNavBarLinks">
                </div>
              </div>
            </React.Fragment>
          )}
        />
      </BrowserRouter>
    );
  }
}

export default CreateSideBarNavLink;
