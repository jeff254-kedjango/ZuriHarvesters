'use server'
import React from 'react'
import BlogDetails from '../../components/BlogDetails'

async function getPost(id){
  const res = await fetch('http://127.0.0.1:8000/blog/blog/' + id,{
    next: {
      revalidate:60
    }
  })
  if(!res.ok){
    throw new Error('failed to fetch data')
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

export default async function Details({params}) {
    
    const post = await getPost(params.id)
    const related = await getPosts()

    return (
        <>
          < BlogDetails post={post} related={related} />
        </>
    )
}
