import React from 'react'
import AudioPanel from '@components/audio-panel'
import styles from './page6364.module.scss'

const Page6364 = () => {
  return (
    <div className={styles.wrapper}>
      <img src='/magazine/4/images/6364_image1.png' className={styles.image1}/>
      <video autoPlay muted loop className={styles.video1}>
        <source src='./magazine/4/videos/6364_video1.mp4' type='video/mp4' />
      </video>
      <img src='/magazine/4/images/6364_image2.png' className={styles.image2}/>
      <img src='/magazine/4/images/6364_image3.png' className={styles.image3}/>
      <img src='/magazine/4/images/6364_image4.png' className={styles.image4}/>
      <div className={styles.text1}>
        The BAYC Pirates.
      </div>
      <div className={styles.text2}>
        Pirate Ape Yacht Club
      </div>
      <div className={styles.text3}>
        jaymes.eth
      </div>

      <div className={styles.text4}>
        Payment Friction in Commerce
      </div>
      <div className={styles.text5}>
        Payment Friction in Commerce
      </div>
      <div className={styles.text6}>
        Payment Friction in Commerce
      </div>
      <div className={styles.text7}>
        Payment Friction in Commerce
      </div>

      <div className={styles.text8}>
        Payment Friction in Commerce
      </div>
      <div className={styles.text9}>
        Payment Friction in Commerce
      </div>
      <div className={styles.text10}>
        Payment Friction in Commerce
      </div>
      <div className={styles.text11}>
        Payment Friction in Commerce
      </div>

      <div className={styles.rect1}></div>
      <AudioPanel
        audioSrc='./magazine/4/sounds/8788_sound1.mp3'
        wrapperClass={styles.audioPanel}
      />
    </div>
  )
}

export default Page6364
