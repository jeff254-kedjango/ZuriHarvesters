import React from 'react';
import styles from './css/Google.module.css';
import { FaLocationDot } from "react-icons/fa6";

export default function GoogleMap() {
  return (
    <div className={styles.mapcont}>
      <div className={styles.mapimg}>
      <div className={styles.mapoverlay}></div>
      <div className={styles.mapbtn}>
        <div className={styles.mapicon}>
          <FaLocationDot />
        </div>
        <div className={styles.maptitle}>
          <h4>Visit Our Shops</h4>
        </div>
      </div>
      </div>
    </div>
  )
}
