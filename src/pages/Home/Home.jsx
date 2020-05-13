import { Button } from 'antd-mobile';
import React, { Component } from 'react';
import { homeData } from 'api/home';
import styles from './home.module.less';
import BannerSwiper from './modules/BannerSwiper';
import NavHeader from './modules/NavHeader';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      banner: [],
      categoryNav: [],
      activity: {},
      hotGoods: [],
      // categoryGoods: [],

    };
  }

  componentDidMount() {
    this.getHomeData();
  }

  getHomeData() {
    homeData().then((res) => {
      if (res.success) {
        this.setState({
          banner: res.data.banner,
          categoryNav: res.data.categoryNav,
          activity: res.data.activity,
          // categoryGoods: res.data.categoryGoods,
          hotGoods: res.data.hotGoods,
        });
      }
    });
  }

  render() {
    const {
      banner, categoryNav, activity, hotGoods,
    } = this.state;
    return (
      <div className='home-page'>
        {/* 自定义导航栏区域 */}
        <NavHeader />
        {/*  banner区域 */}
        <BannerSwiper banner={banner} {...this.props} />
        {/*  分类导航区域 */}
        <div className={styles.categoryNav}>
          <ul className='flex flex-wrap justify-around'>
            {
              categoryNav.map((item) => (
                <li className='flex flex-direction align-center' key={item.id}>
                  <img className={styles.categoryCover} src={item.cover} alt='' />
                  <p className={styles.categoryTitle}>{ item.title }</p>
                </li>
              ))
            }
          </ul>
        </div>
        {/*  广告、活动区域 */}
        <div className={styles.activityContent}>
          <img className={styles.activityImg} src={activity.activityImg} alt='' />
        </div>
        {/*  热销商品 */}
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
        {/*  分类精选 */}
        {/*  推荐商品 */}
        <div className={styles.goodsWrapper} />
      </div>
    );
  }
}

export default Home;
