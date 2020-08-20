import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF , } from '@fortawesome/free-brands-svg-icons';

import InputCustom from 'components/input';
import LabelCustom from 'components/label';

import { 
  trimValue
} from "../../../ultis/validations.js";
import RouterPath from '../../../constants/route-path';


//import component
import AuthForm from '../components/auth';
import {
  ButtonLogin,
  TextRequired,
  Checked,
  ButtonFB
 } from '../components/style';


class SignIn extends Component {
  constructor (props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      keepSignIn: false,
      errors: {
        username: false,
        password: false,
        keepSignIn: false,
      }
    }
  }

  componentDidUpdate(prevProps ) {
    
  }

  handleValue = (event) => {
    const { name, value } = event.target;
    const { errors } = this.state;

    //validation email
    if (name === "email") {
      if (value === '') {
        this.setState({
          [name]: value,
          errors : {...errors, [name]: true}
        });
      } else {
        this.setState({
          [name]: (trimValue(value)),
          errors : {...errors, [name]: false}
        });
      }
    }

    //validation password
    if (name === "password") {
      if (value === '') {
        this.setState({
          [name]: value,
          errors : {...errors, [name]: true}
        });
      } else {
        this.setState({
          [name]: value,
          errors : {...errors, [name]: false}
        });
      }
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } =this.state;
    this.props.loginSecurity({
      auth_key: email,
      password: password,
    });
  };

  handleRouter = (event) => {
    event.preventDefault();
    this.props.history.push(`${RouterPath.SIGN_UP.path}`);
  };

  handleLogin = () => {
    const { email, password } =this.state;
    this.props.login({
      email: email,
      password: password,
    });
  };


  render() {
    const { password, errors, username} =this.state;

    return (
      <AuthForm end='true'>
        <div className="form-container">
          <div className="form-title">
            <LabelCustom
                bold='true'
                textAlign='center'
                text='capitalize'
                size='true'
              >
               Hello! let's get started
            </LabelCustom>
            <LabelCustom
              textAlign='center'
              text='capitalize'
            >
              Sign in to continue.
            </LabelCustom>
            
          </div>
          <div className="form-group">
            <div>
              <InputCustom
                type="text"
                placeholder='Username'
                name="username"
                value={username}
                onChange={(e) => this.handleValue(e)}
              />
            </div>
            <TextRequired
              required
              visibility={errors.email ? 'visible' : 'hidden'}
            >
              Please enter User name
            </TextRequired>
          </div>

          <div className="form-group">
            <InputCustom
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => this.handleValue(e)}
            />
            <TextRequired
              required
              visibility={errors.password ? 'visible' : 'hidden'}
            >
              Please enter a correct password
            </TextRequired>
          </div>
        </div>

        <div className="btn-login">
          <ButtonLogin
            onClick={(e) =>this.handleSubmit(e)}
          >
            sign in
          </ButtonLogin>
        </div>
        <div className="btn-link" >
          <Checked
            name="keepSignIn"
            label='Keep me signed in'
            value={errors.keepSignIn}
            onChange={(e) => this._handleValue(e)}
          />
          <Link to={RouterPath.FORGOT_PASSWORD.path}>
            Forgot password
          </Link>
        </div>
        <div className="btn-login">
          <ButtonFB
            onClick={(e) =>this.handleSubmit(e)}
          >
            <FontAwesomeIcon icon={faFacebookF} />
            Connect using facebook
          </ButtonFB>
        </div>
        <div className="btn-link-register" >
          Don't have an account?
          <Link to={RouterPath.REGISTRATION.path}>
           Create
          </Link>
        </div>
      </AuthForm>
    )
  }
}

export default SignIn;
