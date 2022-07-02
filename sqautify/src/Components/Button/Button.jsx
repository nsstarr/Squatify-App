import React from "react";
import styled from 'styled-components'

const SubmitButton = styled.button`
  width: 147.2px;
  height: 51.87px;
  left: 439px;
  top: 293px;
  background-color: #1ed760;
  color: #2941ab;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
`;

const Button = (props) => {
  return (
    <div>
      <SubmitButton className="submit">{props.children}</SubmitButton>
    </div>
  );
};

export default Button;
