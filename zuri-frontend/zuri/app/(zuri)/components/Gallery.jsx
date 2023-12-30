'use client'
import React, { useState } from 'react'
import styles from './css/Gallery.module.css'
import { bowlby } from '../../fonts'
import GalleryPin from './GalleryPin'
import Image from 'next/image'
import { SlLike } from "react-icons/sl";
import { IoCloseSharp } from "react-icons/io5";



export default function Gallery({ photos }) {

    let page = Math.ceil( photos.length / 10 )
    
    const [show, setShow ] = useState(1)
    const [value, setValue] = useState(1)
    const [lastIndex, setLastIndex] = useState(10)
    const [firstIndex, setFirstIndex] = useState(0)
    const [expose, setExpose] = useState(false)
    const [modal, setModal ] = useState(null)

    const newPics = photos.slice(firstIndex,lastIndex)

    const handleChange = event => {
        const result = event.target.value
        setValue(result)
    }

    function handlePosts(){
        if(value == 1){ 
            setFirstIndex(0)
            setLastIndex(10)
        }

        if(value > 1 && value <= page ){
            setFirstIndex((value - 1) * 10)
            setLastIndex(value * 10)
        }
    }


    const handleClassName = (e) => {
        if(e.id % 3 == 0) {
            return <div onClick={() => {setExpose(true);setModal(e)}} className={styles.pinlarge} key={e.id}><GalleryPin data={e} /></div>
        }
        if(e.id % 2 == 0) {
            return <div onClick={() => {setExpose(true);setModal(e)}} className={styles.pinmedium} key={e.id}><GalleryPin data={e} /></div>
        }
        if(e.id % 1 == 0) {
            return <div onClick={() => {setExpose(true);setModal(e)}} className={styles.pinsmall} key={e.id}><GalleryPin data={e} /></div>
        }
    }



    return (
        <div className={styles.gallery}>
            <div className={styles.gallerycont}>
                <div className={styles.backdrop}>
                    <div className={styles.backdropcont}>
                        <h1 className={bowlby.className}>GALLERY</h1>
                    </div>
                </div>
                <div className={styles.gallerymain}>
                    <div className={styles.galleryhd}>
                        {show == 1 ? 
                        <div className={styles.filters1}>
                            <h4>All</h4>
                        </div> :                   
                        <div className={styles.filters} onClick={()=>setShow(1)}>
                            <h4>All</h4>
                        </div>
                        }
                        {show == 2 ? 
                        <div className={styles.filters1}>
                            <h4>Events</h4>
                        </div> :                   
                        <div className={styles.filters} onClick={()=>setShow(2)}>
                            <h4>Events</h4>
                        </div>
                        }
                        {show == 3 ? 
                        <div className={styles.filters1}>
                            <h4>Farm</h4>
                        </div> :                   
                        <div className={styles.filters} onClick={()=>setShow(3)}>
                            <h4>Farm</h4>
                        </div>
                        }
                    </div>
                    <div className={styles.piccont}>
                        <div className={styles.pics}>
                            {newPics.map(e => (
                                handleClassName(e) 
                            ))}
                            {expose && 
                                <div className={styles.modal} >
                                    <div className={styles.modalcont} >
                                        <div className={styles.modalimg}>
                                            <Image 
                                                src={modal.img1}
                                                fill
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 19.5vw"
                                                style={{
                                                    objectFit:'contain',
                                            
                                                }}
                                                alt={module.title}
                                            />
                                        </div>
                                        <div className={styles.details}>
                                            <div className={styles.modaltitle}>
                                                <h2 className={bowlby.className}>{modal.title}</h2>
                                            </div>
                                            <div className={styles.modaldetails}>
                                                <div className={styles.subtitle}>
                                                    <h4 className={bowlby.className}>About..</h4>
                                                </div>
                                                <div className={styles.modaldesc}>
                                                    <p>{modal.description}</p>
                                                </div>
                                            </div>
                                            <div className={styles.modalicons}>
                                                <div className={styles.icons}>
                                                    <SlLike />
                                                </div>
                                            </div>

                                        </div>
                                        <div className={styles.closecont} onClick={()=>setExpose(false)}>
                                            <IoCloseSharp />
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
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
                </div>
                <hr />
            </div>
        </div>
    )
}
