import React  from 'react'
import styles from './page99100.module.scss'

const Page99100 = () => {
  
  return (
    <div className={styles.wrapper}>
      <img src='/magazine/6/images/9798_image1.gif' className={styles.image1} />

      <video autoPlay muted loop className={styles.video1}>
        <source src='./magazine/6/videos/99100_video1.mp4' type='video/mp4' />
      </video>

      <img src='/magazine/6/images/99100_image1.png' className={styles.image2} />

      <div className={styles.rect1}></div>

      <div className={styles.text1}>
        GDN PURVEYORS
      </div>
      <div className={styles.text2}>
        GDN PURVEYORS
      </div>
      <div className={styles.text3}>
        GDN PURVEYORS
      </div>
      <div className={styles.text4}>
        GDN PURVEYORS
      </div>

      <div className={styles.circle1}></div>
      <div className={styles.circleText1}>
        Collect POAP!        
      </div>
      <div className={styles.circleText2}>
        yay        
      </div>
      <a href='https://poap.website/identityacrossthemetaverse' target='_blank'>
        <img src='/images/poap-logo.png' className={styles.poapImage} />
      </a>

      <a href='https://twitter.com/JordanLzG' target='_blank'>
        <img src='/magazine/6/images/99100_image2.png' className={styles.image3} />
      </a>
      <a href='https://twitter.com/evabeylin' target='_blank'>
        <img src='/magazine/6/images/99100_image3.png' className={styles.image4} />
      </a>
      <a href='https://twitter.com/robnessofficial' target='_blank'>
        <img src='/magazine/6/images/99100_image4.png' className={styles.image5} />
      </a>
      <a href='https://twitter.com/coin_artist' target='_blank'>
        <img src='/magazine/6/images/99100_image5.png' className={styles.image6} />
      </a>
    </div>
  )
}

export default Page99100
