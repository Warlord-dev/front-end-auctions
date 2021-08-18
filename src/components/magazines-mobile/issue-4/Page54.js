import React, { useRef, useState } from 'react'
import styles from './page54.module.scss'

const Page54 = () => {
  const videoRef = useRef()

  const [isPlaying, setIsPlaying] = useState(false)

  const startAudio = () => {
    videoRef.current.muted = false
    setIsPlaying(true)
  }

  const pauseAudio = () => {
    videoRef.current.muted = true
    setIsPlaying(false)
  }

  return (
    <div className={styles.wrapper}>
      <img src='/magazine/4/images/5960_image1_mobile.png' className={styles.image1} />
      <div className={styles.rect1}></div>
      <div className={styles.rect2}></div>
      <div className={styles.rect3}></div>

      <img src='/magazine/4/images/5960_image3.png' className={styles.image2} />
      <img src='/magazine/4/images/5960_image5.png' className={styles.image3} />
      <img src='/magazine/4/images/5960_image4.png' className={styles.image4} />

      <video autoPlay muted loop className={styles.video1} ref={videoRef}>
        <source src='./magazine/4/videos/5960_video1.mp4' type='video/mp4' />
      </video>

      <div className={styles.text1}>
        The Sower
      </div>
      <div className={styles.text2}>
        Exhibited at Art Dubai by Tropical Futures Institute. It is mainly about my commitment to a parcel of land that my family owns, where I have started to grow a cacao farm. It is a way to communicate to my ancestors to thank them for this opportunity.
      </div>
      <div className={styles.text3}>
        Interact wit
        <span className={styles.green}>h the</span><br />
        <span className={styles.blue}>community.</span><br />
        Study the u<span className={styles.yellow}>nderlying tech.</span><br />
        Experiment.
      </div>

      <div
        className={styles.playButton}
        onClick={() => {
          isPlaying ? pauseAudio() : startAudio()
        }}
      >
        <img className={styles.imageBack} src='/magazine/4/images/5960_button_back.png' />
        {
          !isPlaying
          ? <img className={styles.imagePlay} src='/magazine/4/images/5960_playbutton.png' />
          : <img className={styles.imagePause} src='/magazine/4/images/5960_pausebutton.png' />
        }
      </div>
    </div>
  )
}

export default Page54