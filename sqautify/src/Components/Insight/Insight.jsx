import React, { useEffect, useState } from "react";
import InsightElement from "../Insight Element/InsightElement";
import styled from "styled-components";

const InsightRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 60%;
  margin-top: 4em;
`;

const Insight = ({ trigger }) => {
  const [stats, setStats] = useState({
    squatsToday: 0,
    squatsThisWeekTotal: 0,
    squatsThisWeekAverage: 0,
  });

  useEffect(() => {
    const getStats = async function () {
      const response = await fetch(
        `${process.env.REACT_APP_DATABASE_URL}/squatLog`
      );
      const data = await response.json();

      // console.log(data);

      const squatsToday = data[data.length - 1].no_squats;

      let squatsThisWeekTotal = 0;
      for (let i = 0; i < data.length; i++) {
        squatsThisWeekTotal += data[i].no_squats;
      }

      let squatsThisWeekAverage = Math.floor(
        squatsThisWeekTotal / data.length,
        2
      );

      console.log({ squatsToday, squatsThisWeekTotal, squatsThisWeekAverage })

      setStats({ squatsToday, squatsThisWeekTotal, squatsThisWeekAverage });
    };

    getStats();
  }, [trigger]);

  return (
    <InsightRow>
      <InsightElement title="Squats Today" number={stats.squatsToday} />
      <InsightElement title="Total Squats" number={stats.squatsThisWeekTotal} />
      <InsightElement
        title="Daily Average"
        number={stats.squatsThisWeekAverage}
      />
    </InsightRow>
  );
};
//Comment
export default Insight;
