import React from "react";
import { useState } from "react";

import Button from "../Button/Button";
import styled from "styled-components";

const TextBox = styled.input`
  width: 7em;
  height: 2.5em;
  left: 439px;
  top: 293px;
  background-color: rgba(200, 200, 200, 0.2);
  border-radius: 10px;
  border: none;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  margin-right: 1.2em;
  text-align: center;
  box-shadow: 3px 3px 10px 1px rgb(0, 0, 0, 0.4);
  &:focus {
    outline: none;
  }
`;

const InputFieldContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

const H3Container = styled.div`
  margin-top: 80px;
`;

const InputForm = ({ handleTrigger }) => {
  const [text, setText] = useState("");

  function textChange(e) {
    setText(e.target.value);
  }

  const addSquats = async function (e) {
    console.log(typeof(text));
    // e.preventDefault();

    const response = await fetch(
      `${process.env.REACT_APP_DATABASE_URL}/squatLog`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ no_squats: text }),
      }
    );
    const data = await response.json();
    console.log(data);
    setText("");
    handleTrigger();
  };

  return (
    <InputFieldContainer>
      <TextBox
        value={text}
        onChange={textChange}
        type="text"
        className="input"
      />
      <Button addSquats={addSquats} handleTrigger={handleTrigger}>
        SUBMIT
      </Button>
    </InputFieldContainer>
  );
};

const InputSection = ({ handleTrigger }) => {
  return (
    <H3Container>
      <h3>How many squats did you do today?</h3>
      <InputForm handleTrigger={handleTrigger} />
    </H3Container>
  );
};
//Comment
export default InputSection;
