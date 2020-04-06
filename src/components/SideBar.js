import React from "react";
import CreateSideBarNavLink from "./CreateSideBarNavLink";
import '../styles/createsidebarnavlink.css'


export const SideBar = () => {
  const myData = {
    navbarLinks: {
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
    <div>
      <CreateSideBarNavLink data={myData} />
    </div>
  );
};
