import React, { useRef, useState } from 'react';
import styles from './page82.module.scss'
import Link from 'next/link';

const Page82 = () => {
  return (
    <div className={styles.wrapper}>
      <img src="/magazine/3/images/93_94/image22.png" className={styles.image1}/>
      <img src="/magazine/3/images/93_94/image9.png" className={styles.image10}/>
      <img src="/magazine/3/images/93_94/image10.png" className={styles.image11}/>
      <img src="/magazine/3/images/93_94/image11.png" className={styles.image12}/>
      <img src="/magazine/3/images/93_94/image14.png" className={styles.image15}/>
      <img src="/magazine/3/images/93_94/image12.png" className={styles.image13}/>
      <img src="/magazine/3/images/93_94/image13.png" className={styles.image14}/>
      <p className={styles.text9}>I’m Davide Carbone aka LivingSparks, an electronic engineer specialized in research and technological innovation.
<br/><br/>
I’m specialized in generative materials, using mostly artificial intelligence networks. I’ve developed all the software I use to generate materials and textures. I start by writing a raw neural network, finding and tuning parameters in order to obtain pleasant patterns and texture. After I process the texture to add generative normals for the material and enrich them with details and roughness.</p>   
      <p className={styles.text10}>I’m Davide Carbone aka LivingSparks, an electronic engineer specialized in research and technological innovation.
      <br/><br/>
I’m specialized in generative materials, using mostly artificial intelligence networks. I’ve developed all the software I use to generate materials and textures. I start by writing a raw neural network, finding and tuning parameters in order to obtain pleasant patterns and texture. After I process the texture to add generative normals for the material and enrich them with details and roughness.</p>  
      <img src="/magazine/3/images/93_94/image15.png" className={styles.image16}/>
      <p className={styles.text11}>LivingSparks</p>   
      <div className={styles.image17}>
        <video className={styles.image18} muted loop autoPlay>
          <source src="./magazine/3/images/93_94/video1.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={styles.image19}>
        <video className={styles.image20} muted loop autoPlay>
          <source src="./magazine/3/images/93_94/video2.mp4" type="video/mp4" />
        </video>
      </div>
      <p className={styles.text14}>PYCHEUNG</p>   
      <p className={styles.text15}>for checking various sizes and repetition of my patterns</p>   
      <Link href="https://www.pycheung.com/checker/">
        <a target="_blank">
          <img src="/magazine/3/images/93_94/image17.png" className={styles.image22}/>
        </a>
      </Link>
      <img src="/magazine/3/images/93_94/image19.png" className={styles.image24}/>
      <Link href="https://derivative.ca/ ">
        <a target="_blank">
          <img src="/magazine/3/images/93_94/image16.png" className={styles.image21}/>
        </a>
      </Link>
      <Link href="https://colab.research.google.com/">
        <a target="_blank">
          <img src="/magazine/3/images/93_94/image18.png" className={styles.image23}/>
        </a>
      </Link>
      <img src="/magazine/3/images/93_94/image19.png" className={styles.image25}/>
      <img src="/magazine/3/images/93_94/image19.png" className={styles.image26}/>
      <p className={styles.text12}>DERIVATIVE</p>   
      <p className={styles.text13}>Powerful environment for artists and creative, no code needed. </p>   
      <p className={styles.text16}>COLAB</p>   
      <p className={styles.text17}>Google Platform to play with python on a web browser </p>   
    </div>
  )
}

export default Page82