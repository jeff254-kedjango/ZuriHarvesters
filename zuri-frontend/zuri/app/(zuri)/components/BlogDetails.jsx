'use client'
import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {bowlby} from '../../fonts'
import styles from './css/BlogDetails.module.css'


export default function BlogDetails({post, related}) {
    let page = Math.ceil( related.length / 3 )

    const [value, setValue] = useState(1)
    const [lastIndex, setLastIndex] = useState(3)
    const [firstIndex, setFirstIndex] = useState(0)

    const handleChange = event => {
        const result = event.target.value
        setValue(result)
    }

    let newPosts =  related.slice(firstIndex,lastIndex)

    function handlePosts(){
        if(value == 1){ 
            setFirstIndex(0)
            setLastIndex(3)
        }

        if(value > 1 && value <= page ){
            setFirstIndex((value - 1) * 3)
            setLastIndex(value * 3)
        }
    }

    return (
        <div className={styles.blogdetail} key={post.id}>
            <div className={styles.detailimg}> 
                <Image 
                    src={post.img1}
                    alt={post.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 19.5vw"
                    style={{
                    objectFit:'cover',
                    }}                
                />
            </div>
            <div className={styles.titlecont}>
                <div className={styles.title}>
                    <h1 className={bowlby.className}>{post.name}:</h1>
                </div>
                <div className={styles.subtitle}>
                    <h4>{post.paragraph1}</h4>
                </div>
            </div>
            <div className={styles.paragraph}>
                <div className={styles.paragraphitems}>
                    <div className={styles.items}>
                        <p>{post.paragraph2}</p>
                    </div>
                    <div className={styles.items}>
                        <p>{post.paragraph3}</p>
                    </div>
                    <div className={styles.items}>
                        <p>{post.paragraph4}</p>
                    </div>
                    <div className={styles.items}>
                        <p>{post.paragraph5}</p>
                    </div>
                </div>
                <div className={styles.related}>
                    <h3>Related Articles...</h3>
                    <div className={styles.relatedcont}>
                        {newPosts.map(e => (
                            <Link href={`/blog/${e.id}`}>
                                <div className={styles.relateditm}>
                                    <div className={styles.relatedimg}>
                                        <Image 
                                            src={e.img1}
                                            alt={e.name}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 19.5vw"
                                            style={{
                                            objectFit:'cover',
                                            borderTopLeftRadius:'5px',
                                            borderBottomLeftRadius:'5px',
                                            }}                                        
                                        />
                                    </div>
                                    <div className={styles.relateddt}>
                                        <h4 className={bowlby.className}>{e.name}</h4>
                                    </div>

                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className={styles.ptn}>
                        <div className={styles.ptnbutton} onClick={handlePosts}>
                            <h3 className={bowlby.className}>Page</h3>
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
                </div>
            </div>
            < hr />
        </div>
    )
}
