'use server'
import React from 'react'
import Gallery from '../components/Gallery'


async function getPhotos(){

  const res = await fetch('http://127.0.0.1:8000/gallery/gallery/',{
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

  const photos = await getPhotos()

  return (
    <div>
      <Gallery photos={photos} />
    </div>
  )
}
