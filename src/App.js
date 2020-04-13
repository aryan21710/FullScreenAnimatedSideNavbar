import React, { useState } from "react";
import CreateSideBarNavLink from "./components/CreateSideBarNavLink";

const App = () => {
  const myData = {
    navBarSettings: {
      navBarWidth: "100vw",
      theme: {
        primaryColor: "rgb(0, 51, 153,0.5)",
        secondaryColor: "rgb(0, 85, 255)",
        toggleButtonColor: "rgb(0, 85, 255)",
      },
    },
    userInfo: {
      name: "aryan sharma",
      email: "aryan@gmail.com",
      lastLogin: "12/12/2019",
    },

    link1: {
      IconSet: <i className="fa fa-fw fa-list" style={{ fontSize: "1vw" }} />,
      Text: "Products",
      Expandable: true,

      Route: "/products",
      children: [
        {
          IconSet: <i className="fas fa-gavel" style={{ fontSize: "1vw" }}></i>,
          Text: "Product1",
          Expandable: false,
          children: null,
          Route: "/products/product1",
        },

        {
          IconSet: <i className="fas fa-gavel" style={{ fontSize: "1vw" }}></i>,
          Text: "Product2",
          Expandable: false,
          children: null,
          Route: "/products/product2",
        },
        {
          IconSet: <i className="fas fa-gavel" style={{ fontSize: "1vw" }}></i>,
          Text: "Product3",
          Expandable: false,
          children: null,
          Route: "/products/product3",
        },
        {
          IconSet: <i className="fas fa-gavel" style={{ fontSize: "1vw" }}></i>,
          Text: "Product4",
          Expandable: false,
          children: null,
          Route: "/products/product4",
        },
      ],
    },

    link2: {
      IconSet: <i className="fa fa-fw fa-edit" style={{ fontSize: "1vw" }} />,
      Text: "Portfolio",
      Expandable: true,
      Route: "/portfolio",
      children: [
        {
          IconSet: <i className="fas fa-gavel" style={{ fontSize: "1vw" }}></i>,
          Text: "Portfolio1",
          Expandable: false,
          children: null,
          Route: "/portfolio/portfolio1",
        },
      ],
    },

    link3: {
      IconSet: <i className="fa fa-fw fa-bell" style={{ fontSize: "1vw" }} />,
      Text: "About",
      Expandable: false,
      Route: "/about",
      children: null,
    },

    link4: {
      IconSet: <i className="fa fa-fw fa-file" style={{ fontSize: "1vw" }} />,
      Text: "Catelogues",
      Expandable: true,
      Route: "/catelogue",
      children: [
        {
          IconSet: <i className="fas fa-gavel" style={{ fontSize: "1vw" }}></i>,
          Text: "Catelogues1",
          Expandable: false,
          children: null,
          Route: "/catelogue/catelogue1",
        },

        {
          IconSet: <i className="fas fa-gavel" style={{ fontSize: "1vw" }}></i>,
          Text: "Catelogues2",
          Expandable: false,
          children: null,
          Route: "/catelogue/catelogue2",
        },
      ],
    },
    link5: {
      IconSet: <i className="fa fa-fw fa-list" style={{ fontSize: "1vw" }} />,
      Text: "Contact Us",
      Expandable: false,
      Route: "/contactus",
      children: null,
    },
  };

  return (
    <div className="App">
      <CreateSideBarNavLink myData={myData} />
    </div>
  );
};

export default App;
