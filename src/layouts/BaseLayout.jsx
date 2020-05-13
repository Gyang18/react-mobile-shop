import React, { Component } from 'react';
import { matchRoutes } from 'react-router-config';
import baseMiddleware from '@/middleware/base';
import { Redirect, Switch } from 'react-router-dom';
import LayoutNavBar from './modules/NavBar';
import LayoutMainRoutes from './modules/MainRoutes';
import LayoutTabBar from './modules/TabBar';

class BaseLayout extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { route, location } = this.props;
    const currentRoute = matchRoutes(route.routes, location.pathname);
    const meta = currentRoute[0] ? currentRoute[0].route.meta : {};
    baseMiddleware(currentRoute[0], this.props);
    return (
      <div className='layout-page'>
        <Switch>
          <Redirect from='/' exact to='/base/home' />
          <Redirect from='/base' exact to='/base/home' />
        </Switch>
        <LayoutNavBar {...this.props} meta={meta} />
        <LayoutMainRoutes {...this.props} routes={route.routes} />
        <LayoutTabBar {...this.props} meta={meta} />
      </div>
    );
  }
}
export default BaseLayout;
