import React from "react";

import Button from "../Button/Button";
import styled from "styled-components";

const TextBox = styled.input`
  width: 7em;
  height: 1.5em;
  left: 439px;
  top: 293px;
  background-color: rgba(200, 200, 200, 0.5);
  border-radius: 10px;
  border: none;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
`;

const InputFieldContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const InputForm = () => {
  return (
    <InputFieldContainer>
      <TextBox type="text" className="input" />
      <Button>SUBMIT</Button>
    </InputFieldContainer>
  );
};

const InputSection = () => {
  return (
    <h3Container>
      <h3>How many squats did you do today?</h3>
      <InputForm />
    </h3Container>
  );
};
//Comment
export default InputSection;
