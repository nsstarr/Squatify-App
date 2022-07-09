import React from "react";
import styled from "styled-components";

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

const InputField = () => {
  return (
    <div>
      <h3>How many squats did you do today?</h3>
      <InputStyle type="text" className="input" />
    </div>
  );
};

export default InputField;
