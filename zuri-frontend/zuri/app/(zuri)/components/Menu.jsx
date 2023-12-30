import React from 'react'
import { IoMdClose } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import styles from './css/Navbar.module.css'

export default function Menu({See}) {
  return (
    <div className={styles.menucont}>
      <div className={styles.menuclose} onClick={()=>See(0)}>
        <IoMdClose size={30} />
      </div>
      <div className={styles.menudetails}>
        <div className={styles.menutitle}>
          <h4>Our Contacts.</h4>
        </div>
        <div className={styles.carmenu}></div>
        <div className={styles.address}>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, quibusdam magnam nam aliquid reprehenderit dicta.</p>
        </div>
        <div className={styles.socials}>
          <FaFacebookSquare size={24}/>
          <FaSquareXTwitter size={24}/>
          <FaInstagramSquare size={24}/>
        </div>
      </div>
    </div>
  )
}
