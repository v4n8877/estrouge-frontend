import React from 'react'
import styled, { css } from 'styled-components';

const Input = styled.input`
  font-size: 14px;
  font-family: 'Rubik', Helvetica, Arial, sans-serif;
  width: 100%;
  background-color: #ffffff;
  text-indent: 5px;
  height: 3.5rem;
  padding: 0.94rem 1.94rem;
  border-radius: 0;
  border: solid 1px #dddddd;
  outline: none;
  box-sizing: border-box;
  ${props => props.disabled && css`
    opacity: 0.5;
    background-color: #dbe5f0;
    :hover {
      cursor: not-allowed;
    }
  `}
  ::placeholder {
    color: #bfbfbf;
    text-align: ${props => props.textRight ? 'right' : ''};
  }
`;

export default function InputCustom({ children, inputRef, textRight, ...props }) {
  return (
    <Input
      {...props}
      ref={inputRef}
      textRight= {textRight}

    >
    </Input>
  );
}
