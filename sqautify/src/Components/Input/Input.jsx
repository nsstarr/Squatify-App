import React from "react";
// import InputField from "../Input Field/InputField";
import Button from "../Button/Button";
import styled from "styled-components";

// Inputcontainer is a div at the moment. We may need to change it
// to form for submit logic to work
const InputFieldContainer = styled.div`
  display: flex;
  flex-direction: column;

`;

// const InputContainer = styled.div`
// display: flex;
// flex-direction: : column;
// background-color: red;
// color: yellow;
// `;

const InputStyle = styled.input`
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

const h3Container = styled.div`
display: flex;
flex-direction: row;
`

const Input = () => {
  return (
    <InputFieldContainer>
      <InputField />
      <Button>SUBMIT</Button>
    </InputFieldContainer>

);
};



const InputField = () => {
  return (
    <h3Container>
      <h3>How many squats did you do today?</h3>
      <InputStyle type="text" className="input" />
    </h3Container>
  );
};

export default Input;
