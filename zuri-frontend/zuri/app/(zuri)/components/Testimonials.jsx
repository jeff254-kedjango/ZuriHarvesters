import React from 'react'
import styles from './css/Testimonials.module.css'
import {merienda,bowlby} from '../../fonts'
import { RiArrowGoForwardLine } from "react-icons/ri";
import { RiArrowGoBackLine } from "react-icons/ri";
import Image from 'next/image'
import face from '../Images/face.jpg'
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

export default function Testimonials() {
  return (
    <div className={styles.testimonialscont}>
      <div className={styles.innercont}>
          <div className={styles.hdr}>
            <h2 className={merienda.className}>Testimonials</h2>
            <h1 className={bowlby.className}>OUR CLIENTS</h1>
          </div>
          <div className={styles.swipercont}>
            <div className={styles.swipericons}>
              <RiArrowGoBackLine />
            </div>
            <div className={styles.slider}>
              <div className={styles.face}>
                <Image 
                  src={face}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 19.5vw"
                  style={{
                    objectFit:'cover',
                    objectPosition:'center',
                    borderRadius: "50%",
                  }}
                />
              </div>
              <div className={styles.details}>
                <div className={styles.uppericon}>
                 <FaQuoteLeft />
                </div>
                <div className={styles.statement}>
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus autem delectus assumenda eveniet blanditiis quidem?</h4>
                </div>
                <div className={styles.uppericon}>
                  <FaQuoteRight />
                </div>
              </div>
            </div>
            <div className={styles.swipericons}>
              <RiArrowGoForwardLine />
            </div>
          </div>
      </div>
    </div>
  )
}

