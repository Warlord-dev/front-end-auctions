import React from 'react'
import styles from './page56.module.scss'
import Link from 'next/link';

const Page56 = () => {
  return (
    <div className={styles.wrapper}>      
      <img src="/magazine/3/images/61_62/image2.png" className={styles.image2}/>  
       <Link href="https://www.instagram.com/hubbabubbabee/?hl=en">
        <a target="_blank">
          <p className={styles.text5}>Katriane</p>   
        </a>
      </Link>
      <p className={styles.text6}>Katriane is a Womenswear Designer & 3D Concept Artist with an extensive history of working in the apparel industry  across Asia, Europe, and USA. This innovative young designer’s inspiration comes from a passion for the purity in  shape and integrity in texture, forming an aesthetic of feminine confidence that utilises clear-cut construction to uniquely  accentuate and flatter the female silhouette. Fashion is for Katriane,  "a means to generate a vocabulary where personality and identity can be freely outspoken”. </p>   
    </div>
  )
}

export default Page56