import React from "react";
import { useState } from "react";

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
  justify-content: space-evenly;
`;

const InputForm = () => {
  const [text, setText] = useState("");

  function textChange(e) {
    setText(e.target.value);
  }
  console.log(text);

  const addSquats = async function (e) {
    e.preventDefault();

    const response = await fetch("http://localhost:3000/squatLog", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ no_squats: text }),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <InputFieldContainer>
      <TextBox onChange={textChange} type="text" className="input" />
      <Button addSquats={addSquats}>SUBMIT</Button>
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
