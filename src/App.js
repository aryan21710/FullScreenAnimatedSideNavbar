import React, { useState } from "react";
import Header from "../src/components/Header";
import CreateSideBarNavLink from "./components/CreateSideBarNavLink";

const App = () => {
  const [toggle, setToggle] = useState(false);

  const toggleSideBar = (value) => {
    setToggle(value);
  };

  const myData = {
    userInfo: {
      name: 'aryan sharma',
      email: 'aryan@gmail.com',
      lastLogin: '12/12/2019'

    },
    // link1: {
    //   IconSet: <i className="fa fa-fw fa-file" style={{ fontSize: "1vw" }} />,
    //   Text: "Home",
    //   Expandable: false,
    //   ExpandableIconset: (
    //     <i
    //       className="fas fa-angle-right angleIcon"
    //       style={{ fontSize: "1vw", color: "white" }}
    //     />
    //   ),

    //   Route: "/",
    //   children: null,
    // },
    link2: {
      IconSet: <i className="fa fa-fw fa-list" style={{ fontSize: "1vw" }} />,
      Text: "Products",
      Expandable: true,
      ExpandableIconset: (
        <i
          className="fas fa-angle-right angleIcon"
          style={{ fontSize: "1vw", color: "white" }}
        />
      ),

      Route: "/products",
      children: [
        {
          IconSet: (
            <i
              className="fas fa-gavel"
              style={{ fontSize: "1vw", color: "white" }}
            ></i>
          ),
          Text: "PRODUCT1",
          Expandable: false,
          children: null,
          Route: "/products/product1",
        },

        {
          IconSet: (
            <i
              className="fas fa-gavel"
              style={{ fontSize: "1vw", color: "white" }}
            ></i>
          ),
          Text: "PRODUCT2",
          Expandable: false,
          children: null,
          Route: "/products/product2",
        },

      ],
    },

    link3: {
      IconSet: <i className="fa fa-fw fa-edit" style={{ fontSize: "1vw" }} />,
      Text: "PORTFOLIO",
      Expandable: true,
      ExpandableIconset: (
        <i
          className="fas fa-angle-right angleIcon"
          style={{ fontSize: "1vw", color: "white" }}
        />
      ),

      Route: "/portfolio",
      children: [
        {
          IconSet: (
            <i
              className="fas fa-gavel"
              style={{ fontSize: "1vw", color: "white" }}
            ></i>
          ),
          Text: "PORTFOLIO1",
          Expandable: false,
          children: null,
          Route: "/portfolio/portfolio1",
        },

      ],
    },

  

    link4: {
      IconSet: <i className="fa fa-fw fa-file" style={{ fontSize: "1vw" }} />,
      Text: "About",
      Expandable: false,
      ExpandableIconset: (
        <i
          className="fas fa-angle-right angleIcon"
          style={{ fontSize: "1vw", color: "white" }}
        />
      ),

      Route: "/about",
      children: null,
    },

    // link5: {
    //   IconSet: <i className="fa fa-fw fa-file" style={{ fontSize: "1vw" }} />,
    //   Text: "CATELOGUES",
    //   Expandable: true,
    //   ExpandableIconset: (
    //     <i
    //       className="fas fa-angle-right angleIcon"
    //       style={{ fontSize: "1vw", color: "white" }}
    //     />
    //   ),

    //   Route: "/catelogues",
    //   children: [
    //     {
    //       IconSet: (
    //         <i
    //           className="fas fa-gavel"
    //           style={{ fontSize: "1vw", color: "white" }}
    //         ></i>
    //       ),
    //       Text: "CATELOGUE1",
    //       Expandable: false,
    //       children: null,
    //       Route: "/catelogues/catelogue1",
    //     },

    //     {
    //       IconSet: (
    //         <i
    //           className="fas fa-gavel"
    //           style={{ fontSize: "1vw", color: "white" }}
    //         ></i>
    //       ),
    //       Text: "CATELOGUE2",
    //       Expandable: false,
    //       children: null,
    //       Route: "/catelogues/catelogue2",
    //     },

       
    //   ],
    // },
  };

  return (
    <div className="App">
      <Header toggle={toggleSideBar} />
      <CreateSideBarNavLink openSideNavBar={toggle} myData={myData} />
    </div>
  );
};

export default App;
