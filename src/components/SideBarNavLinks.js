import React, { Component } from "react";

class SideBarNavLinks extends Component {
  state = {
    slide: "SideBarWrapper"
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
      <React.Fragment>
        <div className={this.state.slide}>
          <ul className="flexStyling mainList ">
            <li className="flexStyling">
              <div>
                <i
                  className="fa fa-fw fa-list"
                  style={{ marginLeft: "15px", fontSize: "1em" }}
                />{" "}
                <span style={{ marginLeft: "5px", fontSize: "1vw" }}>
                  {" "}
                  My Cases
                </span>
                <ul className="mycases">
                  <li >
                    <div>
                      
                      <span style={{ marginRight: "10px", fontSize: "1vw" }}>
                        {" "}
                        MC2830
                      </span>
                    </div>
                  </li>
                  <li>
                  <div>
                    
                    <span style={{ marginRight: "10px", fontSize: "1vw" }}>
                      {" "}
                      MC2831
                    </span>
                  </div>
                </li>

                <li>
                <div>
                  
                  <span style={{ marginRight: "10px", fontSize: "1vw" }}>
                    {" "}
                    MC2832
                  </span>
                </div>
              </li>
                </ul>
              </div>
            </li>
            <li className="flexStyling">
              {" "}
              <div>
                <i
                  className="fa fa-fw fa-edit"
                  style={{ marginLeft: "15px", fontSize: "1em" }}
                />{" "}
                <span style={{ marginLeft: "5px", fontSize: "1vw" }}>
                  {" "}
                  New Submission
                </span>
              </div>
            </li>
            <li className="flexStyling">
              {" "}
              <div>
                <i
                  className="fa fa-fw fa-file"
                  style={{ marginLeft: "15px", fontSize: "1em" }}
                />{" "}
                <span style={{ marginLeft: "5px", fontSize: "1vw" }}>
                  {" "}
                  Upload Documents
                </span>
              </div>
            </li>
            <li className="flexStyling">
              {" "}
              <div>
                <i
                  className="fa fa-fw fa-file"
                  style={{ marginLeft: "15px", fontSize: "1em" }}
                />{" "}
                <span
                  style={{
                    marginLeft: "5px",
                    fontSize: "1vw",
                    height: "100%"
                  }}
                >
                  {" "}
                  Browse Documents
                </span>
              </div>
            </li>
            <li className="flexStyling">
              {" "}
              <div>
                <i
                  className="fa fa-fw fa-bell"
                  style={{ marginLeft: "15px", fontSize: "1em" }}
                />{" "}
                <span style={{ marginLeft: "5px", fontSize: "1vw" }}>
                  {" "}
                  Notifications
                </span>
              </div>
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default SideBarNavLinks;
