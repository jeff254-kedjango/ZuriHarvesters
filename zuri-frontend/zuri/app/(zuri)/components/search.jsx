import React from 'react'
import { CiSearch } from "react-icons/ci";
import styles from './css/Navbar.module.css'
import { IoMdClose } from "react-icons/io";

export default function Search({See}) {
  return (
    <div className={styles.searchcont}>
        <div className={styles.search}>
          <div className={styles.closebtn} onClick={()=>See(0)}>
            <IoMdClose size={30} />
          </div>
          <form className={styles.form}>
            <input 
              placeholder='Search products...'
              // value={userInput}
              // onchange={handleChange}
            />
            <div className={styles.button}>
                <div className={styles.iconcont}>
                    <CiSearch size={36}/>
                </div>
            </div>
          </form>
        </div>
    </div>
  )
}
