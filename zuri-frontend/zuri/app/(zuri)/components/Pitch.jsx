import React from 'react'
import styles from './css/Pitch.module.css'
import Image from 'next/image'
import img from '../Images/dsp1.jpg'
import {merienda,bowlby} from '../../fonts'
import { IoArrowForward } from "react-icons/io5";

export default function Pitch() {
  return (
    <div className={styles.pitchcont}>
      <div className={styles.img}>
        <Image 
          src={img}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 19.5vw"
          style={{
            objectFit:'contain',
          }}
        />
      </div>
      <div className={styles.pitch}>
        <h2 className={merienda.className}>A few words about our farm..</h2>
        <h1 className={bowlby.className}>ABOUT US</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus provident autem sit non, perferendis dolor sequi reiciendis. Quisquam ad animi, fugiat dolor eos sapiente iusto vel deserunt. Accusamus, ratione!</p>
        <div className={styles.icons}>
          <div className={styles.arrow}>
            <IoArrowForward />
          </div>
          <div className={styles.director}>
            <h3>Josiah Otupa</h3>
            <p>Director</p>
          </div>
          <p>(+254) 713 08 33 78</p>
        </div>
      </div>
    </div>
  )
}
