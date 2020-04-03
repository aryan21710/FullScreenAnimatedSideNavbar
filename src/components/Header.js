import React, { useState,useEffect } from "react";

const Header = props => {
  const [clickStatus, setClickStatus] = useState(false);

  useEffect(() => {
    props.toggle(clickStatus);
  }, [clickStatus])

  return (
    <React.Fragment>
      <div className="header">
        <div
          className="toggleBarWrapper"
          onClick={() => {
            setClickStatus(clickStatus => !clickStatus);
          }}
        >
          <span className={clickStatus ? "hideme " : "bar1"}></span>
          <span className={clickStatus ? "rotate45 bar2" : "bar2"}></span>
          <span className={clickStatus ? "rotate-45 bar3" : "bar3"}></span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
