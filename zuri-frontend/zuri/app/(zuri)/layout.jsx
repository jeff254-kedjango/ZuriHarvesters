'use client'
import React, {useState, createContext} from 'react'
import Navbar from './components/Navbar'
import Search from './components/search'
import Cart from './components/Cart'
import Menu from './components/Menu'
import styles from '../(zuri)/components/css/ZuriLayout.module.css'
import Footer from './components/Footer'
import CartContext from './components/CartContext'


export default function ZuriLayout(props){
    const [show, setShow] = useState(0)

    function See(e){
        setShow(e)
    }

    return (
        <div className={styles.layout}>
            <CartContext>
                <Navbar See={See}/>
                {show == 1 ? <Search See={See}/> : <div></div>}
                {show == 2 ? < Cart See={See}/> : <div></div>}
                {show == 3 ? <Menu See={See}/> : <div></div>}
                <div className={styles.layoutcont}>
                    {props.children}
                </div>
                <Footer />
            </CartContext>
        </div>
    )
}