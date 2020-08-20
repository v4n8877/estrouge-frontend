import React from 'react';
import { 
  AuthWrapper,
  WrapperForm,
  WrapperContent,
  ShadowContent,
  BrandLogo
} from './style';
// import bg_login from 'assets/images/login_bg.svg';
import { withRouter } from "react-router-dom";

const AuthForm  = ({children, end, ...props}) => {
  return (
    <AuthWrapper
      {...props}
    >
      <WrapperContent>
        <ShadowContent>
            <BrandLogo>
              <img src='http://www.templatewatch.com/royalui/template/images/logo.svg' alt="logo"/>
            </BrandLogo>
          <WrapperForm autoComplete="off">
            {children}
          </WrapperForm>
        </ShadowContent>
      </WrapperContent>
    </AuthWrapper>
  )
};

export default withRouter(AuthForm);
