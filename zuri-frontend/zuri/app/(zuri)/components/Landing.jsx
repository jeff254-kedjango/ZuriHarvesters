'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import Home from './Home'
import Loading from './Loading'

export default function Landing() {
  const router = useRouter()

  function changeDisplay(){
    router.push('/home')
  }

  setTimeout(changeDisplay,2000)

  return (
    <div>
      <Loading />
    </div>
  )
}
