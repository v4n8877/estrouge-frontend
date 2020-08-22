import React,{ useState } from 'react';
import { Link, withRouter } from "react-router-dom";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//Import style
import {
  HomeHeader,
  HeaderLeft,
  HeaderRight,
  SearchGroup,
  SearchInput,
  Avatar,
  AvatarMenu,
  AvatarItems,
} from './style.js';
//Import actions
import { logout } from '../../store/actions/auth';
import RouterPath from '../../constants/route-path';

const Header = (props) => {
  const [openSub, setOpenSub] = useState(false);

  const handleLogOut = (e) => {
    e.preventDefault();
    props.history.push(`${RouterPath.LOGIN.path}`);
    props.logout();
  };

  return(
    <HomeHeader>
      <HeaderLeft>
        <Link to="/">
          <img src='http://www.templatewatch.com/royalui/template/images/logo.svg' alt="logo"/> 
        </Link>
        
      </HeaderLeft>
      <HeaderRight>
        <SearchGroup>
          <FontAwesomeIcon 
            className="search__icon" 
            icon={['fas', 'search']} 
          />
          <SearchInput 
            type="text"
            placeholder="Search now"
          />
        </SearchGroup>
        <Avatar>
          <img 
            src="http://www.templatewatch.com/royalui/template/images/faces/face28.jpg" 
            alt="avatar"
            onClick={()=>setOpenSub(!openSub)}
          />
          <AvatarMenu show={openSub}>
            <AvatarItems>
              <FontAwesomeIcon 
                className="ava__icon" 
                icon={['fas', 'sliders-h']}
              />
              <span>Setting</span>
            </AvatarItems>
            <AvatarItems>
              <FontAwesomeIcon 
                className="ava__icon" 
                icon={['fas', 'sign-out-alt']}
              />
              <span onClick={(e) =>handleLogOut(e)}>Logout</span>
            </AvatarItems>
          </AvatarMenu>
        </Avatar>
      </HeaderRight>
    </HomeHeader>
  );
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    logout,
  }, dispatch)
};
export default withRouter(connect(null, mapDispatchToProps)(Header));