'use server'
import React from 'react'
import Home from '../components/Home'

async function getProducts(){
  const res = await fetch('http://127.0.0.1:8000/products/products/',{
    next: {
      revalidate:3600
    }
  })
  if(!res.ok){
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

async function getPosts(){
  const res = await fetch('http://127.0.0.1:8000/blog/blog/',{
    next: {
      revalidate:3600
    }
  })
  if(!res.ok){
    throw new Error('failed to fetch data')
  }
  return res.json()
}

export default async function page() {

  const data = await getProducts()
  const posts = await getPosts()
  return (
    <div><Home data={data} posts={posts} /></div>
  )
}

