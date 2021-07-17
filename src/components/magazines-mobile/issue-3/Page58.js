import React, { useRef, useState } from 'react'
import styles from './page58.module.scss'
import Link from 'next/link';

const Page58 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image2}>
        <video className={styles.image3} muted loop autoPlay>
          <source src="./magazine/3/images/63_64/video1.mp4" type="video/mp4" />
        </video>
      </div>
      <p className={styles.text2}>I have been a fashion designer since 2015 and decided to learn 3D design in 2018. As an artist, I am passionate about all the little things in life. My inspiration mainly comes from different shapes; architecture, food, music and people. I want to bring all the perspective of life to my work to create unique pieces. 
<br/><br/>
Art is so much fun in the digital world, no boundaries, no pressure and a free mind. A place for me to express myself. 
<br/><br/>
I have a love for imperfection and perfection. I bring both aspects into my art to create something completely new. This balance is the ying and yang of the perfect world. To be continued […]</p>     
      
      <Link href="https://www.instagram.com/an.nyen/?hl=en">
        <a target="_blank">
          <p className={styles.text3}>An Nguyen.</p>  
        </a>
      </Link>
    </div>
  )
}

export default Page58