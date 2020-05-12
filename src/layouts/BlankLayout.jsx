import React from 'react';
import { renderRoutes } from 'react-router-config';
import { Redirect, Switch } from 'react-router-dom';

function BlankLayout(props) {
  return (
    <div className='layout-page'>
      <Switch>
        {
          renderRoutes(props.route.routes)
        }
        <Redirect from='/blank' to='/blank/login' />
      </Switch>
    </div>
  );
}

export default BlankLayout;
