import React, { useState } from "react";
import Header from "../src/components/Header";
import SideBar from "./components/SideBar";
import CreateSideBarNavLink from "./components/CreateSideBarNavLink";

const App = () => {
  const [toggle, setToggle] = useState(false);

  const toggleSideBar = (value) => {
    setToggle(value);
  };

  const myData = {
    link1: {
      IconSet: <i className="fa fa-fw fa-list" style={{ fontSize: "1vw" }} />,
      Text: "My Cases",
      Expandable: true,
      ExpandableIconset: (
        <i
          className="fas fa-angle-right angleIcon"
          style={{ fontSize: "1vw", color: "white" }}
        />
      ),

      Route: "/mycases",
      children: [
        {
          IconSet: (
            <i
              className="fas fa-gavel"
              style={{ fontSize: "1vw", color: "white" }}
            ></i>
          ),
          Text: "MC2830-2017",
          Expandable: false,
          children: null,
          Route: "/mycases/mc2830-2017",
        },

        {
          IconSet: (
            <i
              className="fas fa-gavel"
              style={{ fontSize: "1vw", color: "white" }}
            ></i>
          ),
          Text: "MC2831-2017",
          Expandable: false,
          children: null,
          Route: "/mycases/mc2831-2017",
        },

        {
          IconSet: (
            <i
              className="fas fa-gavel"
              style={{ fontSize: "1vw", color: "white" }}
            ></i>
          ),
          Text: "MC2832-2017",
          Expandable: false,
          children: null,
          Route: "/mycases/mc2832-2017",
        },
      ],
    },

    link2: {
      IconSet: <i className="fa fa-fw fa-edit" style={{ fontSize: "1vw" }} />,
      Text: "New Submission",
      Expandable: true,
      ExpandableIconset: (
        <i
          className="fas fa-angle-right angleIcon"
          style={{ fontSize: "1vw", color: "white" }}
        />
      ),

      Route: "/newsubmission",
      children: [
        {
          IconSet: (
            <i
              className="fas fa-gavel"
              style={{ fontSize: "1vw", color: "white" }}
            ></i>
          ),
          Text: "petitionersection",
          Expandable: false,
          children: null,
          Route: "/mycases/petitionersection",
        },

        {
          IconSet: (
            <i
              className="fas fa-gavel"
              style={{ fontSize: "1vw", color: "white" }}
            ></i>
          ),
          Text: "respondentsection",
          Expandable: false,
          children: null,
          Route: "/mycases/respondentsection",
        },

        {
          IconSet: (
            <i
              className="fas fa-gavel"
              style={{ fontSize: "1vw", color: "white" }}
            ></i>
          ),
          Text: "uploadDocuments",
          Expandable: false,
          children: null,
          Route: "/mycases/uploadDocuments",
        },
      ],
    },

    link3: {
      IconSet: <i className="fa fa-fw fa-file" style={{ fontSize: "1vw" }} />,
      Text: "My Documents",
      Expandable: false,
      ExpandableIconset: (
        <i
          className="fas fa-angle-right angleIcon"
          style={{ fontSize: "1vw", color: "white" }}
        />
      ),

      Route: "/mydocuments",
      children: null,
    },
  };

  return (
    <div className="App">
      <Header toggle={toggleSideBar} />
      <CreateSideBarNavLink openSideNavBar={toggle} myData={myData} />
    </div>
  );
};

export default App;
