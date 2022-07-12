import React from "react";
import InsightElement from "../Insight Element/InsightElement";

const Insight = () => {
  return (
    <div>
      <InsightElement title="squats today" number="15" />
      <InsightElement title="Squats this week: total" number="150" />
      <InsightElement title="Squats this week: average" number="20" />
    </div>
  );
};
//Comment
export default Insight;
