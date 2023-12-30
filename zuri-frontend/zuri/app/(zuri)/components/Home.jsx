'use client'
import { useState } from 'react'
import styles from './css/Home.module.css'
import Carousel from './Carousel'
import Pitch from './Pitch'
import NewProducts from './NewProducts'
import LatestArrivals from './LatestArrivals'
import Testimonials from './Testimonials'
import Icons from './Icons'
import BlogSneak from './BlogSneak'
import Teams from './Teams'
import GoogleMap from './GoogleMap'

export default function Home({data,posts}) {

    return (
        <div className={styles.cont}>
            <Carousel />
            <Pitch />
            <NewProducts />
            <LatestArrivals data={data}/>
            <Testimonials />
            <Teams />
            <Icons />
            <BlogSneak posts={posts}/>
            <GoogleMap />
        </div>
    )
}
