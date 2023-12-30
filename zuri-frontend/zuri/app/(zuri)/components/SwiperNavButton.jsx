import React from 'react';
import { useSwiper } from 'swiper/react';
import styles from './css/Teams.module.css'

export const SwiperNavButton = () => {
  const swiper = useSwiper();
  return (
    <div className={styles.swiperbtns}>
      <button onClick={() => swiper.slidePrev()}>Prev</button>
      <button onClick={() => swiper.slideNext()}>Next</button>
    </div>
  );
};