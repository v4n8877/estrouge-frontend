import React from 'react'
import styled, { css } from 'styled-components';

const Checkboxes = styled.label`
  display: block;
  position: relative;
  padding-left: 24px;
  cursor: pointer;
  font-size: 14px;
  font-family: 'Rubik', Helvetica, Arial, sans-serif;
  color: #abbbcc;
  user-select: none;
  /* Hide the browser's default checkbox */
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  /* Create a custom checkbox */
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 18px;
    width: 18px;
    background-color: transparent;
    border-radius: 2px;
    border: solid 2px #248afd;
  }

  /* On mouse-over, add a grey background color */
  &:hover input ~ .checkmark {
    background-color: #dbe5f0;
  }

  /* When the checkbox is checked, add a blue background */
  input:checked ~ .checkmark {
    background-color: #205488;
  }

  input:disabled ~ .checkmark {
    background-color: #dddddd;
  }

  input:disabled ~ .checkmark:hover {
    background-color: #dddddd;
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the checkmark when checked */
  input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  .checkmark:after {
    left: 34%;
    top: 7%;
    width: 4px;
    height: 10px;
    border: solid #fff;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }

  ${props => props.disabled && css`
    .checkmark {
      background-color: rgba(0, 0, 0, 0.26);
    }
    &:hover input ~ .checkmark {
      background-color: rgba(0, 0, 0, 0.26);
    }
    &:hover {
      cursor: not-allowed;
    }
  `}
`;

export default function CheckboxCustom({ label, ...props }) {
  return (
    <Checkboxes
      {...props}
    >
      {label}
      <input type="checkbox" {...props} />
        <span className="checkmark" />
    </Checkboxes>
  );
}
