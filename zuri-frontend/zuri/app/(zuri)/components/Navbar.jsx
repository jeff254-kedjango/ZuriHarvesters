import Link from 'next/link'
import React from 'react'
import styles from './css/Navbar.module.css'
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiMenuFries } from "react-icons/ci";
import Image from 'next/image';
import logo from '../Images/logos/logotrans.png'
import { useShoppingContext } from './CartContext'

export default function Navbar({See}) {

  const {checkOut, setCheckOut } = useShoppingContext()
  
  return (
    <div className={styles.maincont}>
      <div className={styles.logo}>
        <Link href="/">
          <Image 
            src={logo}
            width={80}
            height={80}
            style = {{
              objectFit:'contain'
            }}
          />
        </Link>
      </div>
      <div className={styles.navcont}>
        <div className={styles.navbtns}>
          <Link href='/home'>
            <h3>Home</h3>
          </Link>
        </div>
        <div className={styles.navbtns}>
          <Link href='/blog'>
            <h3>Blog</h3>
          </Link>
        </div>
        <div className={styles.navbtns}>
          <Link href='/gallery'>
            <h3>Gallery</h3>
          </Link>
        </div>
        <div className={styles.navbtns}>
          <Link href='/shop'>
            <h3>Shop</h3>
          </Link>
        </div>
      </div>
      <div className={styles.navicons}>
        <div className={styles.icons} onClick={()=>See(1)}>
          <CiSearch size={26}/>
        </div>
        <div className={styles.icons} onClick={()=>See(2)}>
          <CiShoppingCart size={26} />
          {checkOut.length > 0 && 
            <div className={styles.quantity}>
              <h5>{checkOut.length}</h5>
            </div>
          }
        </div>
        <div className={styles.icons} onClick={()=>See(3)}>
          <CiMenuFries size={26}/>
        </div>
      </div>
    </div>
  )
}
