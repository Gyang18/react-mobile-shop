import styles from 'pages/Home/home.module.less';
import React from 'react';

const NavHeader = () => {
  const inputFoucus = () => {
    console.log('进入搜索页面');
  };
  return (
    <div className={`layout-navbar layout-fixed-top layout-fixed ${styles.homeHeader}`}>
      <div className='flex align-center header-content'>
        <div className={styles.headerIcon}>
          <span className={`iconfont yangTABbar1 ${styles.iconfont}`} />
        </div>
        <div className={`flex flex-sub justify-center align-center ${styles.headerSearch}`}>
          <span className={`iconfont yangsearch ${styles.searchIcon}`} />
          <input placeholder='搜索商品' className={styles.searchInput} onFocus={inputFoucus} />
        </div>
        <div className={styles.headerIcon}>
          <span className={`iconfont yangxiaoxi ${styles.iconfont}`} />
        </div>
      </div>
    </div>
  );
};

export default NavHeader;
