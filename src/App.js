import React from "react";
import CreateSideBarNavLink from "./examples/components/CreateSideBarNavLink.js";

const App = () => {
  const myData = {
    navBarSettings: {
      navBarWidth: "100vw",
      theme: {
        primaryColor: "rgb(0, 51, 153,0.5)",
        secondaryColor: "rgb(0, 51, 153,1)",
        toggleButtonColor: "rgb(0, 51, 153,1)",
      },
    },
    userInfo: {
      name: "aryan sharma",
      email: "aryan@gmail.com",
    },

    link1: {
      IconSet: (
        <i
          className="fa fa-fw fa-list"
          style={{ fontSize: window.innerWidth > 768 ? "1vw" : "4vw" }}
        />
      ),
      Text: "Products",
      Expandable: true,
      ExpandableIconset: (
        <i
          className="fas fa-angle-right angleIcon"
          style={{ fontSize: window.innerWidth > 768 ? "1vw" : "4vw" }}
        />
      ),

      Route: "/products",
      children: [
        {
          IconSet: (
            <i
              className="fas fa-gavel"
              style={{ fontSize: window.innerWidth > 768 ? "1vw" : "4vw" }}
            ></i>
          ),
          Text: "Product1",
          Expandable: false,
          children: null,
          Route: "/products/product1",
        },

        {
          IconSet: (
            <i
              className="fas fa-gavel"
              style={{ fontSize: window.innerWidth > 768 ? "1vw" : "4vw" }}
            ></i>
          ),
          Text: "Product2",
          Expandable: false,
          children: null,
          Route: "/products/product2",
        },
        {
          IconSet: (
            <i
              className="fas fa-gavel"
              style={{ fontSize: window.innerWidth > 768 ? "1vw" : "4vw" }}
            ></i>
          ),
          Text: "Product3",
          Expandable: false,
          children: null,
          Route: "/products/product3",
        },
        {
          IconSet: (
            <i
              className="fas fa-gavel"
              style={{ fontSize: window.innerWidth > 768 ? "1vw" : "4vw" }}
            ></i>
          ),
          Text: "Product4",
          Expandable: false,
          children: null,
          Route: "/products/product4",
        },
      ],
    },

    link2: {
      IconSet: (
        <i
          className="fa fa-fw fa-edit"
          style={{ fontSize: window.innerWidth > 768 ? "1vw" : "4vw" }}
        />
      ),
      Text: "Portfolio",
      Expandable: true,
      ExpandableIconset: (
        <i
          className="fas fa-angle-right angleIcon"
          style={{ fontSize: window.innerWidth > 768 ? "1vw" : "4vw" }}
        />
      ),

      Route: "/portfolio",
      children: [
        {
          IconSet: (
            <i
              className="fas fa-gavel"
              style={{ fontSize: window.innerWidth > 768 ? "1vw" : "4vw" }}
            ></i>
          ),
          Text: "Portfolio1",
          Expandable: false,
          children: null,
          Route: "/portfolio/portfolio1",
        },
      ],
    },

    link3: {
      IconSet: (
        <i
          className="fa fa-fw fa-bell"
          style={{ fontSize: window.innerWidth > 768 ? "1vw" : "4vw" }}
        />
      ),
      Text: "About",
      Expandable: false,
      ExpandableIconset: (
        <i
          className="fas fa-angle-right angleIcon"
          style={{ fontSize: window.innerWidth > 768 ? "1vw" : "4vw" }}
        />
      ),

      Route: "/about",
      children: null,
    },

    link4: {
      IconSet: (
        <i
          className="fa fa-fw fa-file"
          style={{ fontSize: window.innerWidth > 768 ? "1vw" : "4vw" }}
        />
      ),
      Text: "Catelogues",
      Expandable: true,
      ExpandableIconset: (
        <i
          className="fas fa-angle-right angleIcon"
          style={{ fontSize: window.innerWidth > 768 ? "1vw" : "4vw" }}
        />
      ),

      Route: "/catelogue",
      children: [
        {
          IconSet: (
            <i
              className="fas fa-gavel"
              style={{ fontSize: window.innerWidth > 768 ? "1vw" : "4vw" }}
            ></i>
          ),
          Text: "Catelogues1",
          Expandable: false,
          children: null,
          Route: "/catelogue/catelogue1",
        },

        {
          IconSet: (
            <i
              className="fas fa-gavel"
              style={{ fontSize: window.innerWidth > 768 ? "1vw" : "4vw" }}
            ></i>
          ),
          Text: "Catelogues2",
          Expandable: false,
          children: null,
          Route: "/catelogue/catelogue2",
        },
      ],
    },
    link5: {
      IconSet: (
        <i
          className="fa fa-fw fa-list"
          style={{ fontSize: window.innerWidth > 768 ? "1vw" : "4vw" }}
        />
      ),
      Text: "Contact Us",
      Expandable: false,
      ExpandableIconset: (
        <i
          className="fas fa-angle-right angleIcon"
          style={{
            fontSize: window.innerWidth > 768 ? "1vw" : "4vw",
            color: "rgba(255,255,255,0.6)",
          }}
        />
      ),

      Route: "/contactus",
      children: null,
    },
  };

  return (
    <React.Fragment>
      <CreateSideBarNavLink myData={myData} />
    </React.Fragment>
  );
};

export default App;
