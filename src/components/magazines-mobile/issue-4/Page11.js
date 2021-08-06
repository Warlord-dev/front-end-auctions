import React from 'react'
import styles from './page11.module.scss'
import Link from 'next/link';

const Page11 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image1}></div>
      <img src="/magazine/3/images/13_14/image1.png" className={styles.image3}/>   
      <img src="/magazine/3/images/13_14/image2.png" className={styles.image4}/>  
      <h1>
        RUG
        <span className={styles.impact1}>PULLS </span>
        <span className={styles.impact2}>&</span>
        <span className={styles.impact3}> SCAMS</span> 
      </h1>
      <p className={styles.text2}>Is there only room for one?</p>
      <p className={styles.text3}>A strong divide between the broader ‘crypto’ community continues to ensue as Bitcoin maximalists ramp up their declaration, vocalisation and ascertion that Bitcoin will be the only surviving future digital asset. Period. </p> 
    </div>
  )
}

export default Page11