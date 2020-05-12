import React, { Component } from 'react';
import { matchRoutes } from 'react-router-config';
import baseMiddleware from '@/middleware/base';
import LayoutNavBar from './modules/NavBar';
import LayoutMainRoutes from './modules/MainRoutes';
import LayoutTabBar from './modules/TabBar';
import './modules/style.less';

class BaseLayout extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { route, location } = this.props;
    const currentRoute = matchRoutes(route.routes, location.pathname);
    const { meta } = currentRoute[0].route;
    baseMiddleware(currentRoute[0], this.props);
    return (
      <div className='layout-page'>
        <LayoutNavBar {...this.props} meta={meta} />
        <LayoutMainRoutes {...this.props} routes={route.routes} />
        <LayoutTabBar {...this.props} meta={meta} />
      </div>
    );
  }
}
export default BaseLayout;
