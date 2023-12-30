import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styles from './css/Carousel.module.css'
import items from '../../../public/Items.json'
import Image from 'next/image'
import {Autoplay, Pagination} from 'swiper/modules'
// Import Swiper styles
import "swiper/css";

// import "./styles.css";




export default function Carousel() {

   const images = items.items.bootstrap
    
  return (
    <>
      <Swiper 
        className={styles.carcont}
        loop = {true}
        slidesPerView={1}
        autoplay = {{
          delay: 5000,
          disableOnInteraction: true,
        }}
        pagination = {{
          dynamicBullets: true,
        }}
        modules ={[Autoplay, Pagination]}
        style = {{
          "--swiper-pagination-color": "#a3b18a",
          "--swiper-pagination-bullet-inactive-color": "#588157",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-active-opacity": "0.7",
          "--swiper-pagination-bullet-size": "10px",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
          "swiper-pagination-bullet-padding-top":"50px",
        }}
      >
        {images.map(e => (
          <SwiperSlide className={styles.swiper}>
            <div className={styles.detailscont}>
              <div className={styles.details}>
                <h1>{e.title}</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa hic ex minima exercitationem vel at optio eius ad earum eligendi!</p>
                <div className={styles.button}>
                  <h3>View</h3>
                </div>
              </div>
            </div>
            <Image 
              src={e.imageUrl}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 19.5vw"
              style={{
                objectFit:'cover',
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

