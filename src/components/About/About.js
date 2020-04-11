import React, { useState } from "react";

export const About = () => {
  const [state, setstate] = useState(false);


 

  return (
    <React.Fragment>
      <div
        className={state? "expandChildren" : "collapseChildren"}
      ></div>
      <button
      className={state? "slideBtnUp" : "slideBtnDwn"}

        onClick={() => {
          setstate(!state);
        }}
      >slide</button>
    </React.Fragment>
  );
};
