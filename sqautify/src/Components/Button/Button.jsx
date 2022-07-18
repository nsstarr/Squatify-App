import React from "react";
import styled from "styled-components";

const SubmitButton = styled.button`
  width: 6em;
  height: 2.5em;
  left: 439px;
  top: 293px;
  background-color: #1ed760;
  color: #2941ab;
  box-shadow: 3px 3px 10px 1px rgb(0, 0, 0, 0.4);
  border-radius: 50px;
  border: none;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
`;

const Button = ({ children, addSquats, handleTrigger }) => {
  function handleClick() {
    addSquats();
    // handleTrigger();
  }
  return (
    <div>
      <SubmitButton onClick={handleClick} className="submit">
        {children}
      </SubmitButton>
    </div>
  );
};

export default Button;
