import React from "react";
import styled from "styled-components";

const InsightTitle = styled.div`
  font-size: 16px;
  width: 3em;
  height: 3em;

  ${"" /* position: absolute; */}

  color: #1ed760;
`;

const InsightNumber = styled.div`
  font-size: 28px;
  width: 3em;
  height: 3em;
  ${"" /* box-sizing: border-box; */}

  ${"" /* position: absolute; */}

  border: 5px solid #1ed760;
  border-radius: 50px;
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
      <InsightNumber>{number}</InsightNumber>
    </InsightCard>
  );
};

export default InsightElement;
