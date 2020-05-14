import styles from 'pages/Home/home.module.less';
import React from 'react';

const RecommendGoods = ({ goodsList = [] }) => (
  <div className={`flex justify-start flex-wrap align-center layout-white ${styles.goodsWrapper} ${styles.recommendGoods}`}>
    {
        goodsList.map((item) => (
          <div className={styles.goodsColumn} key={item.id}>
            <div className={styles.goodsColumnImgBox}>
              <img className={styles.goodsColumnImg} src={item.cover} alt='' />
            </div>
            <div className='flex justify-between align-center'>
              <div style={{ width: '100%' }}>
                <p className={`layout-text-1 ${styles.goodsTitle}`}>{ item.title }</p>
                <p className={styles.goodsPrice}>
                  ¥
                  { item.price }
                </p>
              </div>
            </div>
          </div>
        ))
      }
  </div>
);

export default RecommendGoods;
