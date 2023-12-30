import React from 'react'
import styles from './css/Footer.module.css'
import {merienda,bowlby} from '../../fonts'
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoGoogleplus } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { BsSendFill } from "react-icons/bs";
import Image from 'next/image';
import logo from '../Images/logos/logotrans.png'

export default function Footer() {
  return (
    <div className={styles.ftcont}>
      <div className={styles.ftitem1}>
        <div className={styles.fttitle1}>
          <Image 
            src={logo}
            width={120}
            height={120}
            style={{
              objectFit:'contain'
            }}
          />
        </div>
        <div className={styles.ftdetails}> 
          <div className={styles.workinghrs}>
            <h4>Weekdays : <span>08:00am - 08:00pm</span></h4>
            <h4>Weekends : <span>10:00am - 06:00pm</span></h4>
          </div>
          <div className={styles.socials}>
            <div className={styles.socialp}>
              <p>Get Social</p>
            </div>
            <div className={styles.socialicons}>
              <div className={styles.icons}>
               <FaFacebookSquare />
              </div>
              <div className={styles.icons}>
                <FaSquareXTwitter />                
              </div>
              <div className={styles.icons}>
                <FaSquareInstagram />              
              </div>
              <div className={styles.icons}>
                <IoLogoGoogleplus />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.ftitem}>
        <div className={styles.fttitle}>
          <h1 className={bowlby.className}>CONTACTS</h1>
        </div>
        <div className={styles.ftdetails}> 
          <div className={styles.ftcontacts}>
            <div className={styles.contacticn}>
              <FaLocationDot />
            </div>
            <div className={styles.contactdts}>
              <p>2nd Floor, Tuffoam Mall.</p>
              <p>Kisumu, CBD.</p>
            </div>
          </div>
          <div className={styles.ftcontacts}>
            <div className={styles.contacticn}>
              <MdCall />
            </div>
            <div className={styles.contactdts}>
              <p>(+254) 713 08 33 78.</p>
            </div>            
          </div>
          <div className={styles.ftcontacts}>
            <div className={styles.contacticn}>
              <MdEmail />
            </div>
            <div className={styles.contactdts}>
              <p>kwemangenyagrowa@gmail.com</p>
            </div>          
          </div>
        </div>
      </div>
      <div className={styles.ftitem}>
        <div className={styles.fttitle}>
          <h1 className={bowlby.className}>NEWSLETTER</h1>
        </div>
        <div className={styles.ftdetailsnews}> 
          <div className={styles.newsintro}>
            <p>Subscribe to our newsletter to receive weekely news, updates, special offers and exclusive discounts.</p>
          </div>
          <div className={styles.search}>
            <form className={styles.form}> 
              <input 
                placeholder='Enter your e-mail'
              />
              <div className={styles.button}>
                <div className={styles.iconcont}>
                  <BsSendFill />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
