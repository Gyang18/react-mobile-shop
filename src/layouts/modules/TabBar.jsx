import { TabBar } from 'antd-mobile';
import React from 'react';

const PageTabBar = ({ history, location, meta }) => {
  const tabbarItemClick = (path) => {
    history.push(`/base/${path}`);
  };
  if (meta.isShowTabbar) {
    return (
      <div className='layout-tabbar'>
        <div className='layout-fixed layout-fixed-bottom tabbar-content'>
          <TabBar
            unselectedTintColor='#949494'
            tintColor='#fa436a'
            barTintColor='white'
          >
            <TabBar.Item
              icon={<span className='iconfont yangtabbarhome' />}
              selectedIcon={<span className='iconfont yangtabbarhomeselect' />}
              selected={location.pathname === '/base/home'}
              onPress={() => tabbarItemClick('home')}
              title='首页'
            />
            <TabBar.Item
              icon={<span className='iconfont yangTABbar1' />}
              selectedIcon={<span className='iconfont yangTABbar-fill2' />}
              selected={location.pathname === '/base/category'}
              onPress={() => tabbarItemClick('category')}
              title='分类'
            />
            <TabBar.Item
              icon={<span className='iconfont yangTABbar' />}
              selectedIcon={<span className='iconfont yangTABbar-fill1' />}
              selected={location.pathname === '/base/cart'}
              onPress={() => tabbarItemClick('cart')}
              title='购物车'
            />
            <TabBar.Item
              icon={<span className='iconfont yangicontabbarmyup' />}
              selectedIcon={<span className='iconfont yangTABbar-fill' />}
              selected={location.pathname === '/base/user'}
              onPress={() => tabbarItemClick('user')}
              title='我的'
            />
          </TabBar>
        </div>
      </div>
    );
  }
  return (<></>);
};

export default PageTabBar;
