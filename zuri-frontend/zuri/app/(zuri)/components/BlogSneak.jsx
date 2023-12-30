import React, {useRef, useState } from 'react'
import styles from './css/BlogSneak.module.css'
import {merienda,bowlby} from '../../fonts'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Image from 'next/image'
import cover from '../Images/newbg.jpg'
import Link from 'next/link'


export default function BlogSneak({posts}) {

  function capitalizeFirstLetter(string) {
    if(string.length < 8 ){
      return string.charAt(0).toUpperCase() + string.slice(1,8) + '...';
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  console.log(posts)

  return (
    <div className={styles.blogsneak}>
      <div className={styles.bloghd}>
        <h2 className={merienda.className}>Latest News</h2>
        <h1 className={bowlby.className}>OUR BLOG</h1>
      </div>
      <div className={styles.blogitems}>
        <div className={styles.blogposts}>
          <Swiper
            slidesPerView={3}
            spaceBetween={10}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className={styles.swiper}
            style = {{
              "--swiper-pagination-color": "#a3b18a",
              "--swiper-pagination-bullet-inactive-color": "#588157",
              "--swiper-pagination-bullet-inactive-opacity": "1",
              "--swiper-pagination-bullet-active-opacity": "0.7",
              "--swiper-pagination-bullet-size": "10px",
              "--swiper-pagination-bullet-horizontal-gap": "6px",
              "swiper-pagination-bullet-padding-top":"100px",
            }}
          >
            {posts.map(e => (
              <SwiperSlide className={styles.swiperslide} key={e.id}>
                <Link href={`/blog/${e.id}`}>
                  <div className={styles.swiperimage}>
                    <div className={styles.imagecont}>
                      <Image 
                        src={e.img1}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 19.5vw"
                        style={{
                          objectFit:'cover',
                        }}
                        alt={e.name}
                      />
                    </div>
                  </div>
                  <div className={styles.swipericons}>
                    <div className={styles.datecont}>
                      <p>{e.published}</p>
                    </div>
                    <div className={styles.swiperdtl}>
                      <h3 className={bowlby.className}>{capitalizeFirstLetter(e.name)}</h3>
                    </div>
                    <div className={styles.details}>
                      <p>{e.paragraph1.substring(0,90)}...</p>
                    </div>
                  </div>                
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}