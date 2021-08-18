import React from 'react'
import styles from './page41.module.scss'

const Page41 = () => {
  
  return (
    <div className={styles.wrapper}>
      <img className={styles.image1} src='/magazine/4/images/4546_image2.png' />
      <img className={styles.image2} src='/magazine/4/images/4546_image3.png' />
      <div className={styles.rect1} />
      <img className={styles.image3} src='/magazine/4/images/4546_image4.png' />
      <img className={styles.image4} src='/magazine/4/images/4546_image4.png' />
      <img className={styles.image5} src='/magazine/4/images/4546_image4.png' />
      <img className={styles.image6} src='/magazine/4/images/4546_image4.png' />

      <video autoPlay muted loop className={styles.video1}>
        <source src='./magazine/4/videos/4546_video1.mp4' type='video/mp4' />
      </video>

      <div className={styles.text1}>
        AUGUST 23RD - 27TH        
      </div>
      <div className={styles.text2}>
        this week starts with fashion but it doesn’t end there. because to come into this industry one dimension of design is not enough. 
        listen in on voices across defi, nfts, deco, ar, vr, avatars, gaming, and esports as w3fw shows you what is the new meta. 
      </div>
    </div>
  )
}

export default Page41