import React from 'react'
import DesignerBubble from '@containers/designer-bubble'
import styles from './page4142.module.scss'

const Page4142 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.back1}></div>
      <img className={styles.image1} src='/magazine/4/images/4142_image1.png' />
      <img className={styles.image2} src='/magazine/4/images/4142_image2.png' />
      <img className={styles.image3} src='/magazine/4/images/4142_image2.png' />
      <img className={styles.image4} src='/magazine/4/images/4142_image3.png' />
      <img className={styles.image5} src='/magazine/4/images/4142_image3.png' />
      <img className={styles.image6} src='/magazine/4/images/4142_image3.png' />
      <img className={styles.image7} src='/magazine/4/images/4142_image3.png' />
      <img className={styles.image8} src='/magazine/4/images/4142_image3.png' />
      <img className={styles.image9} src='/magazine/4/images/4142_image3.png' />
      
      <video autoPlay muted loop className={styles.video1}>
        <source src='./magazine/4/videos/4142_video1.mp4' type='video/mp4' />
      </video>

      <DesignerBubble />
    </div>
  )
}

export default Page4142
