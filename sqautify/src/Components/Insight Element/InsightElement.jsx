import React from "react";
import styled from "styled-components";

const InsightTitle = styled.div`
  font-size: 16px;
  width: 3em;
  height: 3em;

  ${"" /* position: absolute; */}

  color: #1ed760;
`;


const InsightCircle = styled.div`
  border: 5px solid #1ed760;
  border-radius: 50px;
  color: #1ed760;
  width: 5em;
  height: 5em;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding:5px;
`;

const InsightNumber = styled.div`
  font-size: 24px;
  ${'' /* width: 3em;
  height: 3em; */}
  text-align: center;
  justify-content: center;
  vertical-align: center;
  color: #1ed760;
`;

const InsightCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
`;

//font weight

const InsightElement = ({ title, number }) => {
  return (
    <InsightCard>
      <InsightTitle>{title}</InsightTitle>
      <InsightCircle>
      <InsightNumber>{number}</InsightNumber>
      </InsightCircle>
    </InsightCard>
  );
};

export default InsightElement;
