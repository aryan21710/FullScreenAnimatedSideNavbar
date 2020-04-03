import React, { useState } from "react";

 const SideBar = () => {
  const [toggle, setToggle] = useState(false);



  return (
    <React.Fragment>
      <div className="SideBarWrapper">
      <div className="toggleBarWrapper"
      onClick={()=>{
          setToggle(toggle=>!toggle);
      }}
      >
      <span className={toggle ? "hideme " : "bar1"}></span>
      <span className={toggle ? "rotate45 bar2" : "bar2"}></span>
      <span className={toggle ? "rotate-45 bar3" : "bar3"}></span>
      </div>
  
        <ul className="flexStyling mainList ">
          <li>MY CASES</li>
          <li> NEW SUBMISSION</li>
          <li> UPLOAD DOCUMENTS</li>
          <li> BROWSE DOCUMENTS</li>
          <li> NOTIFICATIONS</li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default SideBar;
