import React, { useState } from "react";

export const About = () => {
  const [state, setstate] = useState(false);

  return (
    <React.Fragment>
      <button
        onClick={() => {
          setstate(!state);
        }}
      >
        slide
      </button>
      <div className={"collapseChildren1"}></div>
      <div className={state ? "expandChildren" : "collapseChildren"}>
      cnxcnxzcxncmxnzc
      bxcxcxcbc
      bxcxbcxbcxzc
      xcxcmxznczcx
      </div>
      <div className={"collapseChildren2"}></div>
    </React.Fragment>
  );
};
