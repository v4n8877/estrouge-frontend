import React from 'react';
import { NavLink, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RouterPath from '../../constants/route-path';

//Import elements style
import {
  StyleSideBar,
  SideBarUl,
  SideBarLi,
} from './style.js';

const SideBar = (props) => {
  const { location } = props;
  
  return(
    <StyleSideBar>
      <SideBarUl>
        <SideBarLi>
          <NavLink to={RouterPath.LOGIN.path} activeClassName="active" exact>
            <FontAwesomeIcon 
              className="menu__icon" 
              icon={['fas', 'tachometer-alt']} 
            />
            <span>Dashboard</span>
          </NavLink>
        </SideBarLi>
        <SideBarLi>
          <NavLink to={RouterPath.LOGIN.path} exact>
            <FontAwesomeIcon 
              className="menu__icon" 
              icon={['fab', 'elementor']} 
            />
            <span>UI Elements</span>
          </NavLink>
        </SideBarLi>
        <SideBarLi>
          <NavLink to={RouterPath.LOGIN.path} exact>
            <FontAwesomeIcon 
              className="menu__icon" 
              icon={['fab', 'wpforms']} 
            />
            <span>Form elements</span>
          </NavLink>
        </SideBarLi>
        <SideBarLi>
          <NavLink to={RouterPath.LOGIN.path} exact>
            <FontAwesomeIcon 
              className="menu__icon" 
              icon={['fas', 'chart-area']} 
            />
            <span>Charts</span>
          </NavLink>
        </SideBarLi>
        <SideBarLi className={location.pathname === RouterPath.LIST_USER.path ? 'active' : 'none'}>
          <NavLink to={RouterPath.LIST_USER.path} exact>
            <FontAwesomeIcon 
              className="menu__icon" 
              icon={['fas', 'table']} 
            />
            <span>Tables</span>
          </NavLink>
        </SideBarLi>
        <SideBarLi>
          <NavLink to={RouterPath.LOGIN.path} exact>
            <FontAwesomeIcon 
              className="menu__icon" 
              icon={['fas', 'icons']} 
            />
            <span>Icons</span>
          </NavLink>
        </SideBarLi>
        <SideBarLi>
          <NavLink to={RouterPath.LOGIN.path} exact>
            <FontAwesomeIcon 
              className="menu__icon" 
              icon={['fas', 'users']} 
            />
            <span>User Pages</span>
            </NavLink>
          </SideBarLi>
        <SideBarLi>
          <NavLink to={RouterPath.LOGIN.path} exact>
            <FontAwesomeIcon 
              className="menu__icon" 
              icon={['fas', 'file-pdf']} 
            />
            <span>Documentation</span>
            </NavLink>
          </SideBarLi>  
      </SideBarUl> 
    </StyleSideBar>
  )
}

export default withRouter(SideBar)