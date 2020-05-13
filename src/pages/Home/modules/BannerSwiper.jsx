import { Carousel } from 'antd-mobile';
import styles from 'pages/Home/home.module.less';
import React, { useState, useEffect } from 'react';

const BannerSwiper = (props) => {
  const { banner = [] } = props;
  const [bgColor, setBgColor] = useState('#f5f5f5');
  useEffect(() => {
    setBgColor(banner[0] ? banner[0].background : '#f5f5f5');
  }, [banner]);
  const bannerChange = (index) => {
    setBgColor(banner[index].background);
  };
  return (
    <div className={styles.homeBanner}>
      <div className={styles.bannerBg} style={{ backgroundColor: bgColor }} />
      <div className={styles.bannerSwiper}>
        <Carousel
          autoplay
          infinite
          afterChange={(current) => bannerChange(current)}
          dotStyle={{ backgroundColor: '#f5f5f5' }}
          dotActiveStyle={{ backgroundColor: '#fa436a' }}
        >
          {
               banner.map((item) => (
                 <div className={styles.swiperItem} key={item.id}>
                   <img src={item.url} alt='' className={styles.swiperImg} />
                 </div>
               ))
             }
        </Carousel>
      </div>
    </div>
  );
};

export default BannerSwiper;
