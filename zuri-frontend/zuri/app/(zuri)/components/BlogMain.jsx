'use client'
import React, { useState } from 'react';
import styles from './css/BlogMain.module.css';
import {bowlby} from '../../fonts';
import Image from 'next/image';
import cover from '../Images/newbg.jpg';
import Link from 'next/link';

export default function BlogMain({posts}) {

    let page = Math.ceil( posts.length / 6 )

    const [value, setValue] = useState(1)
    const [lastIndex, setLastIndex] = useState(6)
    const [firstIndex, setFirstIndex] = useState(0)

    const handleChange = event => {
        const result = event.target.value
        setValue(result)
    }
    
    let newPosts =  posts.slice(firstIndex,lastIndex)

    function handlePosts(){
        if(value == 1){ 
            setFirstIndex(0)
            setLastIndex(6)
        }

        if(value > 1 && value <= page ){
            setFirstIndex((value - 1) * 6)
            setLastIndex(value * 6)
        }
    }

    function capitalizeFirstLetter(string) {
        if(string.length < 8 ){
          return string.charAt(0).toUpperCase() + string.slice(1,8) + '...';
        }
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

  return (
    <div className={styles.blogmain}>
        <div className={styles.blogcont}>
            <div className={styles.backdrop}>
                <div className={styles.backdropcont}>
                    <h1 className={bowlby.className}>BLOG..</h1>
                </div>
            </div>
            <div className={styles.blogitems}> 
                {newPosts.map(e => (
                    <Link href={`/blog/${e.id}`}>
                        <div className={styles.blog} key={e.id}>
                            <div className={styles.blogimage}>
                                <div className={styles.imagecont}>
                                    <Image 
                                        src={e.img1}
                                        alt={e.name}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 19.5vw"
                                        style={{
                                        objectFit:'cover',
                                        }}
                                    />
                                </div>
                            </div>
                            <div className={styles.blogdetails}>
                                <div className={styles.datecont}>
                                    <p>{e.published}</p>
                                </div>
                                <div className={styles.blogtitle}>
                                    <h3 className={bowlby.className}>{capitalizeFirstLetter(e.name)}</h3>
                                </div>
                                <div className={styles.details}>
                                    <p>{e.paragraph1.substring(0,100)}</p>
                                </div>
                            </div>                        
                        </div>
                    </Link>
                ))}
            </div>
            <div className={styles.ptn}>
                <div className={styles.ptnbutton} onClick={handlePosts}>
                    <h3>Page</h3>
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
            < hr />
        </div>
    </div>
  )
}




