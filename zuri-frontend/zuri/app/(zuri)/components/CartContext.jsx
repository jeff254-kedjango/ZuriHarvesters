'use client'
import React, {createContext, useContext, useState } from 'react'
import { create } from 'zustand'

export const ShoppingContext = createContext(null)

export default function CartContext({ children }) {
    const [checkOut, setCheckOut ] = useState([])


    return (
        <ShoppingContext.Provider
            value={{
                checkOut,
                setCheckOut,
            }}
        >
            {children}
        </ShoppingContext.Provider>
    )
}


export function useShoppingContext(){
    const context = useContext(ShoppingContext)
    if(!context){
        throw new Error (
            "useThemeContext must be used within a Cart Context"
        )
    }

    return context
}