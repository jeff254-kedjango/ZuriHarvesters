import React from 'react'
import styles from './css/Teams.module.css'
import {merienda,bowlby} from '../../fonts'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation,Autoplay, EffectFade } from 'swiper/modules';
import { CiFacebook } from "react-icons/ci";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import Image from 'next/image';
import staff2 from '../Images/staff/staff2.jpg';
import staff3 from '../Images/staff/staff3.jpg';
import staff4 from '../Images/staff/staff4.jpg';
import staff5 from '../Images/staff/staff5.jpg';
import staff6 from '../Images/staff/staff6.jpg';
import staff7 from '../Images/staff/staff7.jpg';
import staff8 from '../Images/staff/staff8.jpg';
import staff9 from '../Images/staff/staff9.jpg';
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoGoogleplus } from "react-icons/io";

export default function Teams() {
  return (
    <div className={styles.teamcont}>
      <div className={styles.teamtitle}>
        <h2 className={merienda.className}>We are an Experienced Team</h2>
        <h1 className={bowlby.className}>OUR STAFF</h1>
      </div>
      <div className={styles.swipercont}>
        <Swiper 
          className={styles.teamswiper}
          modules ={[Autoplay]}
          slidesPerView={3}
          spaceBetween={5}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
          }}
        >
          <SwiperSlide className={styles.teamsslide}>
            <div className={styles.teamimgcont}>
              <div className={styles.teamimg}>
                <Image 
                  src={staff7}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 19.5vw"
                  style={{
                    objectFit:'contain',
                  }}
                />
                <div className={styles.introcont}>
                  <div className={styles.introtitle}>
                    <h4>Hey! I'm Ian</h4>
                    <p>Accountant</p>
                  </div>
                  <div className={styles.introicons}>
                    <div className={styles.icons}>
                      <FaFacebookSquare />
                    </div>
                    <div className={styles.icons}>
                      <FaSquareXTwitter />
                    </div>
                    <div className={styles.icons}>
                      <FaSquareInstagram />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.teamsslide}>
            <div className={styles.teamimgcont}>
              <div className={styles.teamimg}>
                <Image 
                  src={staff3}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 19.5vw"
                  style={{
                    objectFit:'contain',
                  }}
                />
                <div className={styles.introcont}>
                  <div className={styles.introtitle}>
                    <h4>Hey! I'm Nicky</h4>
                    <p>Brand Marketer</p>
                  </div>
                  <div className={styles.introicons}>
                    <div className={styles.icons}>
                      <FaFacebookSquare />
                    </div>
                    <div className={styles.icons}>
                      <FaSquareInstagram />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.teamsslide}>
            <div className={styles.teamimgcont}>
              <div className={styles.teamimg}>
                <Image 
                  src={staff4}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 19.5vw"
                  style={{
                    objectFit:'contain',
                  }}
                />
                <div className={styles.introcont}>
                  <div className={styles.introtitle}>
                    <h4>Hey! I'm Becky</h4>
                    <p>H.R</p>
                  </div>
                  <div className={styles.introicons}>
                    <div className={styles.icons}>
                      <FaFacebookSquare />
                    </div>
                    <div className={styles.icons}>
                      <FaSquareXTwitter />
                    </div>
                    <div className={styles.icons}>
                      <FaSquareInstagram />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.teamsslide}>
            <div className={styles.teamimgcont}>
              <div className={styles.teamimg}>
                <Image 
                  src={staff5}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 19.5vw"
                  style={{
                    objectFit:'contain',
                  }}
                />
                <div className={styles.introcont}>
                  <div className={styles.introtitle}>
                    <h4>Hey! I'm Josiah</h4>
                    <p>C.E.O</p>
                  </div>
                  <div className={styles.introicons}>
                    <div className={styles.icons}>
                      <FaFacebookSquare />
                    </div>
                    <div className={styles.icons}>
                      <FaSquareXTwitter />
                    </div>
                    <div className={styles.icons}>
                      <FaSquareInstagram />
                    </div>
                  </div>
                </div>                
              </div>
  
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.teamsslide}>
            <div className={styles.teamimgcont}>
              <div className={styles.teamimg}>
                <Image 
                  src={staff6}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 19.5vw"
                  style={{
                    objectFit:'contain',
                  }}
                />
                <div className={styles.introcont}>
                  <div className={styles.introtitle}>
                    <h4>Hey! I'm Carol</h4>
                    <p>Receptionist</p>
                  </div>
                  <div className={styles.introicons}>
                    <div className={styles.icons}>
                      <FaSquareXTwitter />
                    </div>
                    <div className={styles.icons}>
                      <FaSquareInstagram />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.teamsslide}>
            <div className={styles.teamimgcont}>
              <div className={styles.teamimg}>
                <Image 
                  src={staff2}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 19.5vw"
                  style={{
                    objectFit:'contain',
                  }}
                />
                <div className={styles.introcont}>
                  <div className={styles.introtitle}>
                    <h4>Hey! I'm Hannah</h4>
                    <p>Staff</p>
                  </div>
                  <div className={styles.introicons}>
                    <div className={styles.icons}>
                      <FaSquareInstagram />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.teamsslide}>
            <div className={styles.teamimgcont}>
              <div className={styles.teamimg}>
                <Image 
                  src={staff8}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 19.5vw"
                  style={{
                    objectFit:'contain',
                  }}
                />
                <div className={styles.introcont}>
                  <div className={styles.introtitle}>
                    <h4>Hey! I'm Alison</h4>
                    <p>Digital Marketer</p>
                  </div>
                  <div className={styles.introicons}>
                    <div className={styles.icons}>
                      <FaFacebookSquare />
                    </div>
                    <div className={styles.icons}>
                      <FaSquareInstagram />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.teamsslide}>
            <div className={styles.teamimgcont}>
              <div className={styles.teamimg}>
                <Image 
                  src={staff9}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 19.5vw"
                  style={{
                    objectFit:'contain',
                  }}
                />
                <div className={styles.introcont}>
                  <div className={styles.introtitle}>
                    <h4>Hey! I'm Petra</h4>
                    <p>Intern</p>
                  </div>
                  <div className={styles.introicons}>
                    <div className={styles.icons}>
                      <FaFacebookSquare />
                    </div>
                    <div className={styles.icons}>
                      <FaSquareXTwitter />
                    </div>
                    <div className={styles.icons}>
                      <FaSquareInstagram />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}


// pagination={{
//   clickable: true,
//   dynamicBullets: true,
// }}
// style = {{
//   "--swiper-pagination-color": "#a3b18a",
//   "--swiper-pagination-bullet-inactive-color": "#588157",
//   "--swiper-pagination-bullet-inactive-opacity": "1",
//   "--swiper-pagination-bullet-active-opacity": "0.7",
//   "--swiper-pagination-bullet-size": "10px",
//   "--swiper-pagination-bullet-horizontal-gap": "6px",
//   "swiper-pagination-bullet-padding-top":"20px",
// }}
// modules={[Pagination]}