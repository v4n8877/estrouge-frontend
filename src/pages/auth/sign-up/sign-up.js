import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RouterPath from '../../../constants/route-path';
import { country } from '../../../constants/data';

//import element component
import InputCustom from '../../../components/input';
import LabelCustom from '../../../components/label';
import SelectCustom from '../../../components/select';

//import component
import AuthForm from '../components/auth';
import {
  ButtonLogin,
  TextRequired,
  Checked,
 } from '../components/style';


class SignUp extends Component {
  constructor (props) {
    super(props);
    this.state = {
      errors: {
        username: false,
        password: false,
      }
    }
  }



  render() {
    const { errors } =this.state;

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
               New here?
            </LabelCustom>
            <LabelCustom
              textAlign='center'
              text='capitalize'
            >
              Signing up is easy. It only takes a few steps
            </LabelCustom>
            
          </div>
          <div className="form-group">
            <div>
              <InputCustom
                type="text"
                placeholder='Username'
                name="username"
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
            <div>
              <InputCustom
                type="email"
                placeholder='email'
                name="email"
              />
            </div>
            <TextRequired
              required
              visibility={errors.email ? 'visible' : 'hidden'}
            >
              Please enter email
            </TextRequired>
          </div>

          <div className="form-group">
            <div>
              <SelectCustom name="country">
                <select>
                  <option value="">Country</option>
                  {country.map((item, index) =>{
                    return <option key={index} value={item.code}>{item.name}</option>
                  })}
                </select>
              </SelectCustom>
            </div>
            <TextRequired
              required
              visibility={errors.email ? 'visible' : 'hidden'}
            >
              Please enter email
            </TextRequired>
          </div>

          <div className="form-group">
            <InputCustom
              type="password"
              placeholder="Password"
              name="password"
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
            onClick={() =>{}}
          >
            sign up
          </ButtonLogin>
        </div>
        <div className="btn-link" >
          <Checked
            name="keepSignIn"
            label='I agree to all Terms & Conditions'
          />
        </div>
        <div className="btn-link-register" >
          Already have an account?
          <Link to={RouterPath.LOGIN.path}>
           Login
          </Link>
        </div>
      </AuthForm>
    )
  }
}

export default SignUp;
