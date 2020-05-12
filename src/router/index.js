import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import baseRoutes from './modules/base';
import blankRoutes from './modules/blank';

export default function AppRoutes() {
  return (
    <Router>
      { renderRoutes(blankRoutes)}
      { renderRoutes(baseRoutes) }
    </Router>
  );
}
