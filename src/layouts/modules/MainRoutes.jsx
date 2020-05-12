import React from 'react';
import { Redirect, Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

const MainRoutes = ({ routes }) => (
  <div className='layout-main'>
    <Switch>
      {
            renderRoutes(routes)
          }
      <Redirect from='/' exact to='/base/home' />
      <Redirect from='/base' exact to='/base/home' />
    </Switch>
  </div>
);

export default MainRoutes;
