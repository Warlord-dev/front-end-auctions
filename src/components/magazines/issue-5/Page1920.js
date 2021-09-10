import React from 'react'
import styles from './page1920.module.scss'

const Page1920 = () => {
  return (
    <div className={styles.wrapper}>
      <img src='/magazine/5/images/1920_background1.jpg' className={styles.background1} />
      <video autoPlay muted loop className={styles.video1}>
        <source src='./magazine/5/videos/1920_video1.mp4' type='video/mp4' />
      </video>
      <img src='/magazine/5/images/1920_image1.jpg' className={styles.image1} />
      <img src='/magazine/5/images/1920_image1.jpg' className={styles.image2} />
      <img src='/magazine/5/images/1920_image1.jpg' className={styles.image3} />
      <img src='/magazine/5/images/1920_image1.jpg' className={styles.image4} />
      <img src='/magazine/5/images/1920_image1.jpg' className={styles.image5} />
      <img src='/magazine/5/images/1920_image1.jpg' className={styles.image6} />
      <img src='/magazine/5/images/1920_image1.jpg' className={styles.image7} />
      <img src='/magazine/5/images/1920_image1.jpg' className={styles.image8} />
      <img src='/magazine/5/images/1920_image1.jpg' className={styles.image9} />

      <div className={styles.text1}>
        Identity Across <br/>
        t<br/>
        h<br/>
        e<br/>    
      </div>
      <div className={styles.text2}>
        Metaverse
      </div>
      <div className={styles.text3}>
        DID W.E.
      </div>
    </div>
  )
}

export default Page1920
