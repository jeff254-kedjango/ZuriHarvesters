'use client'
import React, { useState } from 'react'
import styles from './css/Shop.module.css'
import Carousel from './Carousel'
import { bowlby } from '../../fonts'
import Image from 'next/image'
import { FaPlus } from "react-icons/fa6";
import { useShoppingContext } from './CartContext';

export default function Shop({ products }) {
    let page = Math.ceil( products.length / 8 )

    const [activate, setActivate] = useState(1)
    const [value, setValue] = useState(1)
    const [toggle, setToggle] = useState(0)
    const [firstIndex, setFirstIndex ] = useState(0)
    const [lastIndex, setLastIndex ] = useState(8)

    const handleChange = event => {
        const result = event.target.value
        setValue(result)
    }

    const newData = products.slice(firstIndex, lastIndex)

    const {checkOut, setCheckOut } = useShoppingContext()

    const handleData =(d)=>{

        let index = 0;
        const checkOutCopy = [...checkOut]

        let newArr = checkOut.filter(function(el){
            if(el.id == d.id){
                index = checkOut.findIndex((product)=> product.id == el.id)
            }
            return el.id == d.id
        })

        console.log(newArr[0])

        if(newArr.length == 0 ){

            d["purchase"] = 1
            setCheckOut(prev => [...prev, d])
        } else {
            newArr[0]["purchase"] = newArr[0]["purchase"] + 1
            checkOutCopy.splice(index,1,newArr[0])
            setCheckOut(checkOutCopy)
        }
    }


    function handlePosts(){
        if(value == 1){ 
            setFirstIndex(0)
            setLastIndex(8)
        }

        if(value > 1 && value <= page ){
            setFirstIndex((value - 1) * 8)
            setLastIndex(value * 8)
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
    <div className={styles.shop}>
        <Carousel />
        <div className={styles.shopcont}>
            <div className={styles.cat}>
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
            <div className={styles.items}>
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
            <div className={styles.ptn}>
                <div className={styles.ptnbutton} onClick={handlePosts}>
                    <h3 className={bowlby.className}>Page</h3>
                </div>
                <div className={styles.ptninput}>
                    <input 
                        type='number'
                        value={value}
                        onChange={handleChange}
                        min='1'
                    />

                    <p> of {page}</p>
                </div>
            </div>
        </div>
        <hr />
    </div>
  )
}
