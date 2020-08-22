import React from 'react'
import styled from 'styled-components';

const CustomSelect = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 3.5rem;
  transition: background-color 0.3s;
  background-color: transparent;
  font-size: 14px;
  border-radius: 0;
  border: solid 1px #dddddd;
  
  :after {
    content: " ";
    display: block;
    right: 10px;
    top: 50%;
    height: 0;
    width: 0;
    position: absolute;
    border-top: 8px solid #dddddd;
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
    pointer-events: none;
    transform: translateY(-50%);
  }

  select {
    padding: 0 0 0 9px;
    width: 100%;
    height: 100%;
    font-size: 14px;
    font-family: 'Rubik', Helvetica, Arial, sans-serif;
    color: #dddddd;
    text-indent: 1.94rem;
    border: none;
    border-radius: 0;
    box-shadow: none;
    background-color: transparent;
    background-image: none;
    outline: none;
    font-size: 14px;
    font-family: 'Rubik',Helvetica,Arial,sans-serif;
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
  }
`

export default function SelectCustom({ chidren, ...props }) {
  return(
    <CustomSelect 
      {...props}
    />
  );
}