'use server'
import React from 'react'
import BlogMain from '../components/BlogMain'

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

export default async function Blog() {

  const posts = await getPosts()

  return (
    <>
      <BlogMain posts={posts} />
    </>
  )
}
