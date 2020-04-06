import React, { useState } from "react";
import Header from "../src/components/Header";
import SideBar from "./components/SideBar";
import CreateSideBarNavLink from './components/CreateSideBarNavLink'

const App = () => {
  const [toggle, setToggle] = useState(false);

  const toggleSideBar=(value)=>{
    setToggle(value);
  }

  const myData = {
    navbarLinks: {
      parentLink: 3,
      IconSet: [
        '<i className="fa fa-fw fa-list" style={{ marginLeft: "15px", fontSize: "1vw" }}/>',
        '<i className="fa fa-fw fa-edit" style={{ marginLeft: "15px", fontSize: "1vw" }}/>',
        '<i className="fa fa-fw fa-file" style={{ marginLeft: "15px", fontSize: "1vw" }}/>',
      ],
      Text: [
        "My Cases",
        "New Submission",
        "Upload Documents",
      ],
      Route: [
        "/mycases",
        "/petitionersection",
        "/upload-documents-section",
      ],
      Expandable: true,
      ExpandableLevel: 0,
      children: [
        {
          IconSet: ['<i class="fas fa-gavel"></i>','<i class="fas fa-gavel"></i>','<i class="fas fa-gavel"></i>'],
          Text: ["MC2830-2017", "GNWC175-2019", "XYZA-18"],
          Expandable: false,
          ExpandableLevel: -1,
          Route: [
            "/mycases/mc2830-2017",
            "/mycases/mc2831-2017",
          ],
          children: null,
        },
      ],
    },
  };

  return (
    <div className="App">
      <Header toggle={toggleSideBar}/>
      <CreateSideBarNavLink openSideNavBar={toggle}
      myData={myData}
      />
    </div>
  );
}

export default App;
