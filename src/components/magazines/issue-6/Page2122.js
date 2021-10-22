import React, { useRef, useState } from 'react'
import styles from './page2122.module.scss'

const Page2122 = () => {
  const [isPlaying1, setIsPlaying1] = useState(false)
  const refAudio = useRef()

    const startAudio1 = () => {
    refAudio.current.play()
    setIsPlaying1(true)
  }

  const pauseAudio1 = () => {
    refAudio.current.pause()
    setIsPlaying1(false)
  }

  return (
    <div className={styles.wrapper}>
      <img src='./magazine/6/images/2122_image2.png' className={styles.image2} />
      <div className={styles.ellipse1}></div>
      <img src='./magazine/6/images/2122_image1.jpg' className={styles.image1} />
      

      <div className={styles.ellipse2}></div>
      <div className={styles.ellipse3}></div>
      <div className={styles.ellipse4}></div>
      <div className={styles.ellipse5}></div>

      <div className={styles.ellipse6}></div>
      <div className={styles.ellipse7}></div>
      <div className={styles.ellipse8}></div>

      <div className={styles.text1}>
        DAVID PHELPS        
      </div>
      <div
        className={styles.text2}
        onClick={() => {
          !isPlaying1 && startAudio1()
        }}
      >
        PLAY
      </div>
      <div className={styles.text3}>
        Authentically contributing to, growing, and maintaining momentum in decentralised communities. 
      </div>
      <div
        className={styles.text4}
        onClick={() => {
          isPlaying1 && pauseAudio1()
        }}
      >
        PAUSE
      </div>
      <a href='https://twitter.com/divine_economy' target='_blank'>
        <img src='./magazine/6/images/2122_image3.png' className={styles.image3} />
      </a>

      <audio ref={refAudio} loop>
        <source src='/magazine/6/sounds/david2.mp3' type='audio/mpeg' />
      </audio>
      <div className={styles.text5}>
        Ana Rivera
      </div>
      <div className={styles.text6}>
        The Glitched Face King. Pizza Draw.
      </div>
    </div>
  )
}

export default Page2122
