import React from 'react';
import { Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

const MainRoutes = ({ routes }) => (
  <div className='layout-main'>
    <Switch>
      {
            renderRoutes(routes)
          }
    </Switch>
  </div>
);

export default MainRoutes;
