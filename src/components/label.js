import React from 'react'
import styled from 'styled-components';

const Label = styled.label`
  font-size: ${props => props.size ? '1.125rem' : '.9375rem' };
  font-family: 'Rubik', Helvetica, Arial, sans-serif;
  font-weight: ${props => props.bold ? 500 : 300 };
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  text-align: ${props => props.textAlign}
  color: #000;
  margin-bottom: 0.5rem;
  text-transform: ${props => props.text}
  .required {
    color: #e73535;
  }
`;

export default function LabelCustom({ children, required, ...props }) {
  return (
    <Label
      {...props}
    >
     {required ? <span className="required">*</span> : null} {children}
    </Label>
  );
}
