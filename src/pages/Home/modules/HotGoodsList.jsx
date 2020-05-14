import { Button } from 'antd-mobile';
import styles from 'pages/Home/home.module.less';
import React from 'react';

const HotGoodsList = ({ hotGoods = [] }) => (
  <div className={`layout-white ${styles.goodsWrapper} ${styles.hotGoodsWrapper}`}>
    <div className={styles.hotGoodsHead}>
      <h6>热卖商品</h6>
    </div>
    <ul>
      {
            hotGoods.map((item) => (
              <li className={styles.hotGoodsItem} key={item.id}>
                <div className={styles.hotGoodsCoverBox}>
                  <img className={styles.hotGoodsCover} src={item.cover} alt='' />
                </div>
                <div className={`flex justify-between align-center ${styles.hotGoodsItemBottom}`}>
                  <div className=''>
                    <p className={styles.goodsTitle}>{ item.title }</p>
                    <p className={styles.goodsPrice}>
                      { `¥  ${item.price}` }
                      {' '}
                    </p>
                  </div>
                  <div className=''>
                    <Button
                      className={styles.hotGoodsBuyBtn}
                      type='primary'
                      size='small'
                      inline
                      style={{
                        backgroundColor: '#fa436a',
                        border: 0,
                      }}
                    >
                      立即抢购
                    </Button>
                  </div>
                </div>
              </li>
            ))
          }
    </ul>
  </div>
);

export default HotGoodsList;
