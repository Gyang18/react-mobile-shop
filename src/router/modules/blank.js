import { BlankLayout } from '@/layouts';
import Login from 'pages/Login';

const blankRoutes = [
  {
    path: '/blank',
    component: BlankLayout,
    routes: [
      {
        path: '/blank/login',
        meta: { title: 'login', icon: 'login', auth: false },
        component: Login,
        routes: [],
      },
    ],
  },
];

export default blankRoutes;
