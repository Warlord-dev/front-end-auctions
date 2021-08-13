import React from 'react'
import AudioPanel from '@components/audio-panel'
import styles from './page56.module.scss'

const Page56 = () => {
  return (
    <div className={styles.wrapper}>
      <img src='/magazine/4/images/6364_image1_mobile.png' className={styles.image1}/>  
      <img src='/magazine/4/images/6364_image2_mobile.png' className={styles.image2}/>
      <div className={styles.text1}>
        The BAYC Pirates. 
      </div>
      <div className={styles.text2}>
        Pirate Ape Yacht Club
      </div>
      <div className={styles.text3}>
        jaymes.eth
      </div>

      <AudioPanel
        audioSrc='./magazine/4/sounds/8788_sound1.mp3'
        wrapperClass={styles.audioPanel}
      />
    </div>
  )
}

export default Page56