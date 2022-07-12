import React from "react";
import styled from "styled-components";

const InsightCard = styled.div`
  box-sizing: border-box;

  position: absolute;
  width: 91.9px;
  height: 84.85px;
  left: 145px;
  top: 468px;

  border: 5px solid #1ed760;
  border-radius: 50px;

  color: #1ed760;
`;

const InsightElement = ({children}) => {
  return (
    <>
      <InsightCard>{children}</InsightCard>
    </>
  );
};

export default InsightElement;
