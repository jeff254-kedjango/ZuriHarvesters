import React from 'react'
import styles from './css/Loading.module.css'
import Image from 'next/image'
import logo from '../Images/logos/logowhite.png'

export default function Loading() {
  return (
    <div className={styles.cont}>
      <Image 
        src={logo}
        width={100}
        height={100}
        style = {{
          objectFit: 'contain',
        }}
      />
    </div>
  )
}
