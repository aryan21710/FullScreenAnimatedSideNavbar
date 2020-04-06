import React, { useState } from "react";
import Header from "../src/components/Header";
import SideBar from "./components/SideBar";
import CreateSideBarNavLink from './components/CreateSideBarNavLink'

const App = () => {
  const [toggle, setToggle] = useState(false);

  const toggleSideBar=(value)=>{
    setToggle(value);
  }

  return (
    <div className="App">
      <Header toggle={toggleSideBar}/>
      <CreateSideBarNavLink openSideNavBar={toggle}/>
    </div>
  );
}

export default App;
