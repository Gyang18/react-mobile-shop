import React, { Component } from 'react';
import { homeData } from 'api/home';
import styles from './home.module.less';
import BannerSwiper from './modules/BannerSwiper';
import NavHeader from './modules/NavHeader';
import HotGoodsList from './modules/HotGoodsList';
import RecommendGoods from './modules/RecommendGoods';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      banner: [],
      categoryNav: [],
      activity: {},
      hotGoods: [],
      categoryGoods: [],

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
          categoryGoods: res.data.categoryGoods,
          hotGoods: res.data.hotGoods,
        });
      }
    });
  }

  render() {
    const {
      banner, categoryNav, activity, hotGoods,
      categoryGoods,
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
        <HotGoodsList hotGoods={hotGoods} {...this.props} />
        {/*  分类精选 */}
        {/*  推荐商品 */}
        <RecommendGoods goodsList={categoryGoods} {...this.props} />
      </div>
    );
  }
}

export default Home;
