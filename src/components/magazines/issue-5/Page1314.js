import React, { useRef, useState }  from 'react'
import styles from './page1314.module.scss'

const Page1314 = () => {
  const audioRef = useRef()
  const [isPlaying, setIsPlaying] = useState(false)

  const startAudio = () => {
    audioRef.current.play()
    setIsPlaying(true)
  }

  const pauseAudio = () => {
    audioRef.current.pause()
    setIsPlaying(false)
  }

  return (
    <div className={styles.wrapper}>
      <img src='/magazine/5/images/1314_background1.jpg' className={styles.background1} />
      <img src='/magazine/5/images/1314_background2.png' className={styles.background2} />
      <div className={styles.text1}>
        Proof Of Humanity
      </div>
      <div className={styles.text2}>
        SANTIAGO SIRI
      </div>
      <div className={styles.text3}>
        SANTIAGO SIRI
      </div>
      <img src='/magazine/5/images/1314_image1.png' className={styles.image1} />

      <div
        className={styles.playButton}
        onClick={() => {
          isPlaying ? pauseAudio() : startAudio()
        }}
      >
        {
          !isPlaying
          ? <img className={styles.imagePlay} src='/magazine/5/images/1314_playbutton.png' />
          : <img className={styles.imagePause} src='/magazine/5/images/1314_pausebutton.png' />
        }
      </div>

      <audio ref={audioRef} loop>
        <source src='./magazine/4/sounds/4950_sound1.mp3' type='audio/mpeg' />
      </audio>
    </div>
  )
}

export default Page1314
