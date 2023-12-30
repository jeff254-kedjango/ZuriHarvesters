'use client'
import React, { useState } from 'react'
import styles from './css/Icons.module.css'
import Image from 'next/image'
import icon1 from '../Images/icons/icon1.jpg'
import icon2 from '../Images/icons/icon2.jpg'
import icon3 from '../Images/icons/icon3.jpg'
import icon4 from '../Images/icons/icon4.png'
import { FaArrowRight } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa6";
import {merienda,bowlby} from '../../fonts';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import prd1 from '../Images/products/prd1.jpg'
import prd2 from '../Images/products/prd2.jpg'
import prd3 from '../Images/products/prd3.jpg'
import prd4 from '../Images/products/prd4.jpg'

export default function Icons() {
    const[ card, setCard ] = useState(1);
  return (
    <div className={styles.faqsect}>
        <div className={styles.faqcont}>
            <div className={styles.faqdtl}>
                <div className={styles.teamtitle}>
                    <h2 className={merienda.className}>Benefits of Organic Produce</h2>
                    <h1 className={bowlby.className}>ORGANIC FOOD FAQ</h1>
                </div>
                <div className={styles.details}>
                <div className={styles.faqcard}>
                        {card == 1 ? 
                            <div className={styles.faqtitle} onClick={() => setCard(0)}>
                                <div className={styles.close}>
                                    <FaArrowDown />
                                </div>
                                <div className={styles.qstn}>
                                    <h4>What does "organic" mean?</h4>
                                </div>
                            </div>
                            :
                            <div className={styles.faqtitle} onClick={() => setCard(1)}>
                                <div className={styles.open}>
                                    <FaArrowRight />
                                </div>
                                <div className={styles.qstn}>
                                    <h4>What does "organic" mean?</h4>
                                </div>
                            </div>
                        }
                        { card == 1 ?
                            <div className={styles.faqext}>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic porro accusantium, enim earum necessitatibus voluptate aliquam corporis, modi a deleniti eligendi magnam iusto dolor commodi ipsum ut, perferendis doloribus molestiae reiciendis dicta libero aut odio.</p>
                            </div>
                            :
                            <div></div>
                        }
                    </div>
                    <div className={styles.faqcard}>
                        {card == 2 ? 
                            <div className={styles.faqtitle} onClick={() => setCard(0)}>
                                <div className={styles.close}>
                                    <FaArrowDown />
                                </div>
                                <div className={styles.qstn}>
                                    <h4>Why eat organic?</h4>
                                </div>
                            </div>
                            :
                            <div className={styles.faqtitle} onClick={() => setCard(2)}>
                                <div className={styles.open}>
                                    <FaArrowRight />
                                </div>
                                <div className={styles.qstn}>
                                    <h4>Why eat organic?</h4>
                                </div>
                            </div>
                        }
                        { card == 2 ?
                            <div className={styles.faqext}>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic porro accusantium, enim earum necessitatibus voluptate aliquam corporis, modi a deleniti eligendi magnam iusto dolor commodi ipsum ut, perferendis doloribus molestiae reiciendis dicta libero aut odio.</p>
                            </div>
                            :
                            <div></div>
                        }
                    </div>
                    <div className={styles.faqcard}>
                        {card == 3 ? 
                            <div className={styles.faqtitle} onClick={() => setCard(0)}>
                                <div className={styles.close}>
                                    <FaArrowDown />
                                </div>
                                <div className={styles.qstn}>
                                    <h4>Is organic food healthier?</h4>
                                </div>
                            </div>
                            :
                            <div className={styles.faqtitle} onClick={() => setCard(3)}>
                                <div className={styles.open}>
                                    <FaArrowRight />
                                </div>
                                <div className={styles.qstn}>
                                    <h4>Is organic food healthier?</h4>
                                </div>
                            </div>
                        }
                        { card == 3 ?
                            <div className={styles.faqext}>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic porro accusantium, enim earum necessitatibus voluptate aliquam corporis, modi a deleniti eligendi magnam iusto dolor commodi ipsum ut, perferendis doloribus molestiae reiciendis dicta libero aut odio.</p>
                            </div>
                            :
                            <div></div>
                        }
                    </div>
                </div>
            </div>
            <div className={styles.imgfaq}>
                <Swiper
                    loop={true}
                    slidesPerView={1}
                    autoplay = {{
                        delay: 8000,
                        disableOnInteraction: true
                    }}
                    modules = {[Autoplay]}
                    className={styles.swipercont}
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
                    <SwiperSlide className={styles.faqswiper}>
                        <div className={styles.faqimg}>
                            <Image 
                                src={prd1}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 19.5vw"
                                style={{
                                  objectFit:'cover',
                                  borderRadius: '5px',
                                }}
                            />
                        </div>
                        <div className={styles.faqimgtitle}>
                            <div className={styles.faqname}>
                                <h3>Lorem ipsum dolor</h3>
                            </div>
                            <div className={styles.faqimgprice}>
                                <p>Ksh 3,000</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.faqswiper}>
                        <div className={styles.faqimg}>
                            <Image 
                                src={prd2}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 19.5vw"
                                style={{
                                  objectFit:'cover',
                                  borderRadius: '5px',
                                }}
                            />
                        </div>
                        <div className={styles.faqimgtitle}>
                            <div className={styles.faqname}>
                                <h3>Lorem ipsum dolor</h3>
                            </div>
                            <div className={styles.faqimgprice}>
                                <h4>Ksh 5,800</h4>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.faqswiper}>
                        <div className={styles.faqimg}>
                            <Image 
                                src={prd3}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 19.5vw"
                                style={{
                                  objectFit:'cover',
                                  borderRadius: '5px',
                                }}
                            />
                        </div>
                        <div className={styles.faqimgtitle}>
                            <div className={styles.faqname}>
                                <h3>Lorem ipsum dolor</h3>
                            </div>
                            <div className={styles.faqimgprice}>
                                <h4>Ksh 9,200</h4>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.faqswiper}>
                        <div className={styles.faqimg}>
                            <Image 
                                src={prd4}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 19.5vw"
                                style={{
                                  objectFit:'cover',
                                  borderRadius: '5px',
                                }}
                            />
                        </div>
                        <div className={styles.faqimgtitle}>
                            <div className={styles.faqname}>
                                <h3>Lorem ipsum dolor</h3>
                            </div>
                            <div className={styles.faqimgprice}>
                                <h4>Ksh 12,300</h4>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                
            </div>
        </div>
        <div className={styles.iconscont}>
            <div className={styles.icons}>
                <Image 
                    src={icon1}
                    width={300}
                    height={300}
                />
            </div>
            <div className={styles.icons}>
                <Image 
                    src={icon2}
                    width={180}
                    height={180}
                />
            </div>
            <div className={styles.icons}>
                <Image 
                    src={icon3}
                    width={130}
                    height={130}
                />
            </div>
            <div className={styles.icons}>
                <Image 
                    src={icon4}
                    width={180}
                    height={180}
                />
            </div>
        </div>
    </div>
  )
}



