import React from 'react';
import { 
  ErrorPage, 
  FormContent, 
  Text404, 
  TextNotFound, 
  BtnNotFound 
} from './style';
import Storage from '../../ultis/storage';
import { withRouter } from "react-router-dom";
import RouterPath from '../../constants/route-path';

const NotFound = (props) => {
  const Token = Storage.get("USER_ACCESS_TOKEN");
  const OnLink = () => {
    if(Token) {
      props.history.push(`${RouterPath.LISTUSER.path}`);
    } else {
      props.history.push(`${RouterPath.LOGIN.path}`);
    }

  };
  return (
    <ErrorPage>
      <FormContent>
        <Text404>404</Text404>
        <TextNotFound>Page Not Found</TextNotFound>
        {Token ?
        <BtnNotFound
          onClick = {() => OnLink()}
          >LIST USER
        </BtnNotFound>
        :
        <BtnNotFound
          onClick = {() => OnLink()}
          >LOGIN
        </BtnNotFound>
        }
      </FormContent>
    </ErrorPage>
  )
};

export default withRouter(NotFound);
