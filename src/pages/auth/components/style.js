import styled from 'styled-components';
import ButtonCustom from 'components/button';
import TextCustom from "components/text";
import CheckboxCustom from 'components/checkBox';

export const AuthWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #dedbe1;
  font-family: 'Rubik', Helvetica, Arial, sans-serif;
  width: 100%;
  height: 100vh;
`;

export const WrapperForm =styled.form`
  max-width: 400px;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background-color: transparent;
  padding: 0 0;
  margin: 0 0;

  .form-title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin-bottom: 30px;
  }

  .form-group div {
    position: relative;
    margin-top: 5px;
    width: 100%;
    max-width: 100%;
  }


  .btn-link {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0;
    margin-bottom: 1rem;
    flex-direction: row;
    width: 100%
  }


  .btn-link-start {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 0;
    flex-direction: row;
    width: 100%;
    margin-bottom: 20px;
  }

  .btn-link a {
    text-decoration: underline;
    font-size: 13px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #336292;
  }

  .btn-link-start a {
    text-decoration: underline;
    font-size: 13px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #336292;
  }
  .btn-link-register {
    text-align: center;
  }
  .btn-link-register a {
    text-decoration: none;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #248afd;
    margin-left: 1rem;
  }
  .btn-link-register a:hover {
    text-decoration: underline;
  }

  .btn-login {
    width: 100%;
    margin-bottom: 1rem;
  }

  .btn-register {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    align-items: center;

  }

  .text-group {
    text-align: center;
  }

  .form-span {
    font-weight: 600;
    color: 'black';
  }
`;

export const ButtonLogin = styled(ButtonCustom)`
  width: 100%;
  color: #fff;
  font-size: 14px;
  background-color: #248afd;
  border-color: #248afd;
  &:hover,:active {
    color: #fff;
    background-color: #0276f8;
    border-color: #0270ec;
  }
`;

export const ButtonFB = styled(ButtonCustom)`
  width: 100%;
  color: #fff;
  font-size: 14px;
  background-color: #3b579d;
  border-color: #3b579d;
  text-transform: none;
  margin-bottom: 2rem;
  svg {
    margin-right: .5rem;
  }
  
  &:hover,:active {
    color: #fff;
    background-color: #2d4278;
    border-color: #2d4278;
  }
`;

export const ModalForm = styled.form`
  padding: 25px;
  min-width: 555px;

  .form-control {
    display: flex;
    margin: 10px 0;
  }

  input {
    height: 40px;
  }
  .form-title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin-bottom: 30px;
  }
`;

export const TextRequired = styled(TextCustom)`
  margin: 5px 0;
  font-size: 12px;
`;

export const WrapperContent = styled.div`
  width: 32%;
  height: auto;
  box-sizing: border-box;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  border: solid 0.7px #eeeeee;
  background-color: #ffffff;
`;

export const ShadowContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 3rem 3rem;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`;

export const BrandLogo = styled.div`
  margin-bottom: 2rem;

  img {
    width: 150px;
  }
`;

export const LabelURL = styled.label`
  font-size: 13px;
  color: #1f1f1f;
  text-align: center;
  margin-top: 30px;
`;

export const FormLink = styled.div`
  border-radius: 1px;
  border: solid 1px #dddddd;
  background-color: #fafafa;
  height: 32px;
  width: 80%;
  margin: 10px auto 20px auto;
  display: flex;
  align-items: center;
  img {
    width: 19px;
    height: 19px;
    margin-left: 10px;
  }

  a {
    font-size: 13px;
    color: #1f1f1f;
    text-decoration: none;
    margin-left: 15px;
  }
`;

export const Checked = styled(CheckboxCustom)`
  height: 15px;
  font-size: 13px;
  .checkmark {
    border-radius: 3px;
    box-shadow: 0 5px 10px -10px rgba(0, 0, 0, 0.2);  
    background-color: #ffffff;
  }
  .checkmark::after {
    top: 5%;
    left: 4px;
    width: 3px;
    height: 6px;
  }
`;

export  const TextAuth = styled(TextCustom)`
  font-size: 13px;
  color: #4d4d5e;
  margin-right: ${props => props.Right ? '10px' : ''};
`;

export const LinkMail = styled.label`
  font-size: 14px;
  color: #336292;
  text-align: center;
  margin-top: 10px;
`;
