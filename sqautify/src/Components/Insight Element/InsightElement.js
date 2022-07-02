import React from "react";

const InsightElement = (props) => {
  return (
    <div className="insight-elements">
      <div>{props.children}</div>
    </div>
  );
};

export default InsightElement;
