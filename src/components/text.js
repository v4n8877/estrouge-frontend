import React from 'react'
import styled from 'styled-components';

const Text = styled.p`
  visibility: ${props => props.visibility};
  font-family: 'Rubik', Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight:${props => props.FontWeight || 'normal'};;
  font-stretch: normal;
  font-style: normal;
  line-height: ${props => props.lineHeight || 'normal'};
  letter-spacing: normal;
  color: ${props => props.required ? '#e73535' : '#686868'};
  text-align: ${props => props.textAlign};
  margin: 0 0;
`;

export default function TextCustom({ children, ...props }) {
  return (
    <Text
      {...props}
    >
      {children}
    </Text>
  );
}
