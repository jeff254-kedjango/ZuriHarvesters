import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {bowlby} from '../../fonts'
import styles from './css/Cart.module.css'
import { IoCloseSharp } from "react-icons/io5";
import { useShoppingContext } from './CartContext';
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

export default function Cart({See}) {

  const [value, setValue] = useState(1)
  const [lastIndex, setLastIndex] = useState(3)
  const [firstIndex, setFirstIndex] = useState(0)
  const [quantity, setQuantity ] = useState(1)
  const [total, setTotal ] = useState(0)
  const [prev, setPrev] = useState(0)

  const {checkOut, setCheckOut } = useShoppingContext()


  let newPosts =  checkOut.reverse().slice(firstIndex,lastIndex)

  let page = Math.ceil( checkOut.length / 3 )

  const handleChange = event => {
    const result = event.target.value
    setValue(result)
  }

  const handleQuantityPlus =(data)=> {
    let index = 0;
    const checkOutCopy = [...checkOut]
    setQuantity(quantity + 1)
    let newArr = checkOutCopy.filter(function(el){
      if(el.id == data.id ){
        index = checkOut.findIndex((product)=> product.id == el.id)
      }
      return el.id == data.id
    })

    newArr[0]['purchase'] = newArr[0]['purchase'] + 1

    checkOutCopy.splice(index, 1 , newArr[0])

    setCheckOut(checkOutCopy)
    handleTotal()
  }


  const handleQuantityMinus =(data) => {
    if(data.purchase > 1 ){
      let index = 0;
      const checkOutCopy = [...checkOut]
      setQuantity(quantity - 1)
      let newArr = checkOutCopy.filter(function(el){
        if(el.id == data.id ){
          index = checkOut.findIndex((product)=> product.id == el.id)
        }
        return el.id == data.id
      })
  
      newArr[0]['purchase'] = newArr[0]['purchase'] - 1
  
      checkOutCopy.splice(index, 1 , newArr[0])
  
      setCheckOut(checkOutCopy)
      handleTotal()
    }
  }

  const handleTotal = () => {
    setPrev(checkOut.length)
    let prod = 0;
    checkOut.forEach(element => {
      prod = prod + (element.purchase*element.price)
    });
    setTotal(prod.toFixed(2))
  }

  if(checkOut.length != prev){
    handleTotal()
  }


  function handlePosts(){
    if(value == 1){ 
        setFirstIndex(0)
        setLastIndex(3)
    }

    if(value > 1 && value <= page ){
        setFirstIndex((value - 1) * 3)
        setLastIndex(value * 3)
    }
}

  return (
    <div className={styles.cart}>
      <div className={styles.total}>
        <div className={styles.seettl}>
          <div className={styles.seetlbtn}>
            <h4>total:</h4>
          </div>
          {total > 0 && <p><span>Ksh{total}</span></p>}
        </div>
        <div className={styles.close} onClick={()=>See(0)}>
          <IoCloseSharp />
        </div>
        <hr />
      </div>
      <div className={styles.itemscont}>
        {newPosts.map(e => (
          <div className={styles.items}>
            <div className={styles.itemsimg}>
              <Image 
                  src={e.img1}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 19.5vw"
                  style={{
                      objectFit:'contain',
                      padding: '20px',
                  }}
                  alt={e.title}
              />   
            </div>
            <div className={styles.itemsname}>
              <p>{e.title}</p>
            </div>
            <div className={styles.itemsqty}>
              <div className={styles.quantitybtns} onClick={()=> handleQuantityPlus(e)}>
                <FaPlus />
              </div>
              <div className={styles.qty}>
                <p>{e.purchase }</p>
              </div>
              <div className={styles.quantitybtns} onClick={()=> handleQuantityMinus(e)}>
                <FaMinus />
              </div>
            </div>
            <div className={styles.itemstotal}>
              <p>{(e.price*e.purchase).toFixed(2)}</p>
            </div>
            <div className={styles.itemsdelete}>
              <div className={styles.itemsicon}> 
                <RiDeleteBin6Line />
              </div>
            </div>
          </div>
        ))}
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
      <div className={styles.buttons}>
        <Link href={'/cart'}>
          <div className={styles.btn1} onClick={()=>See(0)}>
            <h4>GO TO CART</h4>
          </div>
        </Link>
        <Link href={'/checkout'} >
          <div className={styles.btn2} onClick={()=>See(0)}>
            <h4>CHECKOUT</h4>
          </div>
        </Link>
      </div>
    </div>
  )
}
