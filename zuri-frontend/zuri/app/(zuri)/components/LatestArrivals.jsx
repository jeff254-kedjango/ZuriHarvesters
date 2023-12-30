import React, { useState } from 'react'
import styles from './css/LatestArrivals.module.css'
import {merienda,bowlby} from '../../fonts'
import Image from 'next/image'
import { FaPlus } from "react-icons/fa6";
import { useShoppingContext } from './CartContext';

export default function LatestArrivals({data}) {

    const [activate, setActivate] = useState(1)
    const [toggle, setToggle] = useState(0)

    const newData = data.slice(0,8)

    const {checkOut, setCheckOut } = useShoppingContext()

    const handleData =(d)=> {
        let index = 0;
        const checkOutCopy = [...checkOut]

        let newArr = checkOut.filter(function(el){
            if(el.id == d.id){
                index = checkOut.findIndex((product)=> product.id == el.id)
            }
            return el.id == d.id
        })


        if(newArr.length == 0 ){
            d["purchase"] = 1
            setCheckOut(prev => [...prev, d])
        } else {
            newArr[0]["purchase"] = newArr[0]["purchase"] + 1
            checkOutCopy.splice(index,1,newArr[0])
            setCheckOut(checkOutCopy)
        }
    }

    const allActive = () => {
        if(activate == 1) return styles.active
        return styles.menubtns
    }

    const snackActive = () => {
        if(activate == 2) return styles.active
        return styles.menubtns
    }

    const wholeActive = () => {
        if(activate == 3) return styles.active
        return styles.menubtns
    }
  return (
    <div className={styles.latestcont} >
        <div className={styles.latesthd}>
            <h2 className={merienda.className}>Latest Arrivals</h2>
            <h1 className={bowlby.className}>NEW PRODUCTS</h1>
        </div>
        <div className={styles.latestmenu}>
            <div className={allActive()} onClick={()=>setActivate(1)}>
                <h3>All</h3>
            </div>
            <div className={snackActive()} onClick={()=>setActivate(2)}>
                <h3>Snacks</h3>
            </div>
            <div className={wholeActive()} onClick={()=>setActivate(3)}>
                <h3>Whole-sale</h3>
            </div>
        </div>
        <div className={styles.displaycont}>
            {newData.map(e => (
                <div className={styles.displaycard} key={e.id} onMouseOver={()=> setToggle(e.id)} onMouseLeave={()=>setToggle(0)}>
                    <div className={styles.img}>
                        <Image 
                            src={e.img1}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 19.5vw"
                            style={{
                                objectFit:'contain',
                                padding: '20px',
                                borderRadius: '14px',
                            }}
                            alt={e.title}
                        />                        
                    </div>
                    <div className={styles.price}>
                        <h4>Ksh {e.price.toFixed(2)}</h4>
                    </div>
                    <div className={styles.carddetails}>
                        <h4>{e.title }</h4>
                    </div>
                    <div className={styles.cartcont} >
                        {toggle == e.id ?
                        <div className={styles.cart} onClick={()=>handleData(e)}>
                            <h4>Order.</h4>
                        </div> : 
                        <div className={styles.cart1}>
                            <FaPlus />
                        </div>
                        }
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}


