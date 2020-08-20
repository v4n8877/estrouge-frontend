import styled from 'styled-components';
import Button from 'components/button';

export const ErrorPage = styled.div`
  font-family: 'Rubik', Helvetica, Arial, sans-serif;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: #f6f9fc;
`;

export const FormContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Text404 = styled.label`
  font-size: 200px;
  text-shadow: 2px 2px 4px #000;
  color: #2d5f96;
`;

export const TextNotFound = styled.label`
  font-size: 30px;
  color: #2d5f96;
`;

export const BtnNotFound = styled(Button)`
  width: 200px;
  height: 50px;
  margin-top: 20px;
  font-size: 15px;
`;
