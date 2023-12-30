'use server'
import React from 'react'
import Shop from '../components/Shop'


async function getProducts(){
  const res = await fetch('http://127.0.0.1:8000/products/products',{
    next: {
      revalidate:0
    }
  })
  
  if(!res.ok){
    throw new Error('Failed to fetch data')
  }
  return res.json()
}



export default async function page() {

  const products = await getProducts()

  return (
    <>
      < Shop products={products}/>
    </>
  )
}
