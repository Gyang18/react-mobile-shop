import styles from 'pages/Home/home.module.less';
import React, { useState, useEffect } from 'react';

const NavHeader = () => {
  const [top, setTop] = useState(0);
  const scrollHandler = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    setTop(scrollTop);
  };
  useEffect(() => {
    // start listen
    document.addEventListener('scroll', scrollHandler);
    return () => {
      // remove listen
      document.removeEventListener('scroll', scrollHandler);
    };
  }, []);
  const inputFoucus = () => {
    console.log('进入搜索页面');
  };
  return (
    <div className={`layout-navbar layout-fixed-top layout-fixed ${styles.homeHeader} ${top >= 50 ? 'layout-white' : ''}`}>
      <div className='flex align-center header-content'>
        <div className={styles.headerIcon} style={{ color: top > 50 ? '#666' : '#fff' }}>
          <span className={`iconfont yangTABbar1 ${styles.iconfont}`} />
        </div>
        <div className={`flex flex-sub justify-center align-center ${styles.headerSearch}`}>
          <span className={`iconfont yangsearch ${styles.searchIcon}`} />
          <input placeholder='搜索商品' className={styles.searchInput} onFocus={inputFoucus} />
        </div>
        <div className={styles.headerIcon} style={{ color: top > 50 ? '#666' : '#fff' }}>
          <span className={`iconfont yangxiaoxi ${styles.iconfont}`} />
        </div>
      </div>
    </div>
  );
};

export default NavHeader;
