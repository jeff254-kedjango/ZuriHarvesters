import React from 'react'
import styles from './css/NewProducts.module.css'
import { GiFarmTractor } from "react-icons/gi";
import { GiPlantWatering } from "react-icons/gi";
import { FaPlateWheat } from "react-icons/fa6";
import { RiForbid2Line } from "react-icons/ri";

export default function NewProducts() {
  return (
    <div className={styles.prodcont}>
      <div className={styles.prod}>
        <div className={styles.details}>
          <div className={styles.prodhd}>
            <h1>1.</h1>
            <FaPlateWheat className={styles.icon}/>
          </div>
          <div className={styles.prodhd2}>
            <h2>Always Fresh</h2>
          </div>
          <div className={styles.proddata}>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus qui quibusdam magni consequuntur voluptatum quod, suscipit sit nostrum autem obcaecati.</p>
          </div>
        </div>
        <div className={styles.details}>
          <div className={styles.prodhd}>
            <h1>2.</h1>
            <GiPlantWatering className={styles.icon}/>
          </div>
          <div className={styles.prodhd2}>
            <h2>100% Organic</h2>
          </div>
          <div className={styles.proddata}>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga porro perspiciatis unde rem, suscipit ipsa debitis dolorum enim vel corrupti quibusdam. Quam sapiente et tempora molestias quasi ut iure nam!</p>
          </div>
        </div>
        <div className={styles.details}>
          <div className={styles.prodhd}>
            <h1>3.</h1>
            < RiForbid2Line className={styles.icon}/>
          </div>
          <div className={styles.prodhd2}>
            <h2>No Additives</h2>
          </div>
          <div className={styles.proddata}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda vel possimus similique labore magni hic.</p>
          </div>
        </div>
        <div className={styles.details}>
          <div className={styles.prodhd}>
            <h1>4.</h1>
            <GiFarmTractor className={styles.icon}/>
          </div>
          <div className={styles.prodhd2}>
            <h2>Modern Farm</h2>
          </div>
          <div className={styles.proddata}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime labore voluptatem laudantium, vitae ab reiciendis. Eligendi, aspernatur autem est quas consectetur recusandae nostrum, illum laboriosam veniam sint eum harum aperiam, molestiae ut et deserunt facere.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
