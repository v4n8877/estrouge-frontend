import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Loading  from '../components/loading';
import Page from '../components/page';
import Storage from '../ultis/storage';
import RouterPath from '../constants/route-path';
//Import components
const NotFound = lazy(() => import('../pages/not-found'));
const SignIn = lazy(() => import('../pages/auth/sign-in'));

const PrivateRoute = ({ condition, redirect, ...props }) => {
  condition = condition()

  if (condition) return <Route {...props} />
  return <Redirect to={redirect} />
}

class Routes extends Component {

  _authCondition = () => Storage.has('ACCESS_TOKEN')

  _notAuthCondition = () => !Storage.has('ACCESS_TOKEN')

  _renderLazyComponent = (LazyComponent, params) => props => <LazyComponent {...props} {...params} />

  _renderAuthRoutes = () => (
    <Suspense fallback={<Page><Loading /></Page>}>
      <Switch>
        <Route exact path={RouterPath.LIST_USER.path} component={this._renderLazyComponent(SignIn)} />
        <Redirect to={RouterPath.NOT_FOUND.path} />
      </Switch>
    </Suspense>
  )

  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={<Page><Loading /></Page>}>
          <Switch>
            <PrivateRoute
              exact
              path={RouterPath.LOGIN.path}
              component={this._renderLazyComponent(SignIn)}
              condition={this._notAuthCondition}
              redirect={RouterPath.LIST_USER.path}
            />
            
            <Route path={RouterPath.NOT_FOUND.path} component={this._renderLazyComponent(NotFound)} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    )
  }
}

export default Routes
