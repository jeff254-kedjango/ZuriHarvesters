import React from 'react'
import styles from './css/Gallery.module.css'
import Image from 'next/image'
import {merienda,bowlby} from '../../fonts'

export default function GalleryPin({data}) {
  return (
    <div className={styles.datacont}>
        <Image 
            src={data.img1}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 19.5vw"
            style={{
                objectFit:'cover',
                borderRadius: '10px',
            }}
            alt={data.title}
        />
        <div className={styles.titlecont}>
          <h5 className={bowlby.className}>{data.title}</h5>
        </div>
    </div>
  )
}