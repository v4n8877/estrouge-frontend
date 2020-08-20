import React from 'react'
import styled, { css } from 'styled-components';
import LoaderCustom from './loaded';

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  box-shadow: 0 5px 10px -10px rgba(0, 0, 0, 0.2);
  border: solid 1px #205488;
  background-color: transparent;
  outline: none;
  font-size: 13px;
  font-family: 'Rubik', Helvetica, Arial, sans-serif;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #205488;
  padding: 0 0;

  &:hover,:active {
    color: #000;
    background-color: #efb82a;
    border-color: #efb82a;
    cursor: pointer;
  }

  ${props => props.disabled && css`
    opacity: 0.5;
    &:hover {
      cursor: not-allowed;
    }
  `}

  :hover {
    background-color: #efb82a;
    border: solid 1px transparent;
  }
`;

export default function ButtonCustom({ children, loading, ...props }) {
  return (
    <Button
      {...props}
    >
      {loading && <LoaderCustom />} {children}
    </Button>
  );
}
