import { BaseLayout } from '@/layouts';
import Home from 'pages/Home';
import Category from 'pages/Category';
import User from 'pages/User';
import Cart from 'pages/Cart';

const baseRoutes = [
  {
    path: '/',
    component: BaseLayout,
    exact: true,
    routes: [],
  },
  {
    path: '/base',
    component: BaseLayout,
    routes: [
      {
        path: '/base/home',
        component: Home,
        meta: {
          title: '商城首页', isShowNavbar: false, isBack: false, isShowTabbar: true,
        },
        routes: [],
      },
      {
        path: '/base/category',
        component: Category,
        meta: { title: '商品分类', isBack: false, isShowTabbar: true },
        routes: [],
      },
      {
        path: '/base/cart',
        component: Cart,
        meta: { title: '购物车', isBack: false, isShowTabbar: true },
        routes: [],
      },
      {
        path: '/base/user',
        component: User,
        meta: { title: '我的', isBack: false, isShowTabbar: true },
        routes: [],
      },
    ],
  },
];

export default baseRoutes;
