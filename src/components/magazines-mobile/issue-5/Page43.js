import React, { useRef, useState } from 'react'
import styles from './page43.module.scss'

const Page43 = () => {
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
      <div className={styles.back}>
      </div>
      <div className={styles.rect1}>
      </div>
      <img className={styles.image1} src='/magazine/4/images/4950_image1_1.png' />
      <div className={styles.rect2}>
      </div>
      <img className={styles.image2} src='/magazine/4/images/4950_image1_2.png' />
      <div className={styles.rect3}>
      </div>
      <img className={styles.image3} src='/magazine/4/images/4950_image1_3.png' />
      <div className={styles.rect4}>
      </div>
      
      <div className={styles.rect5}>
      </div>
      
      
      <div className={styles.rect6}>
      </div>
      <div className={styles.rect7}>
      </div>
      <div className={styles.rect8}>
      </div>
      <div className={styles.rect9}>
      </div>
      <div className={styles.rect10}>
      </div>
      <div className={styles.rect11}>
      </div>
      <div className={styles.rect12}>
      </div>

      <img className={styles.image4} src='/magazine/4/images/4950_image1_4.png' />
      <img className={styles.image5} src='/magazine/4/images/4950_image1_5.png' />
      <img className={styles.image6} src='/magazine/4/images/4950_image1_6.png' />
      <img className={styles.image7} src='/magazine/4/images/4950_image1_7.png' />
      <img className={styles.image8} src='/magazine/4/images/4950_image1_8.png' />
      <img className={styles.image9} src='/magazine/4/images/4950_image2.png' />

      <div className={styles.text1}>
        Author of ERC-20 & ERC-725 Standard        
      </div>
      <div className={styles.text2}>
        Fabian Vogelsteller
      </div>
      <div className={styles.text3}>
        Fabian Vogelsteller
      </div>
      <div className={styles.text4}>
        The ERC Protocol Standards underwrite  all value exchange for Ethereum and beyond. They are what allow us to transact, interact, exchange, buy, sell, arbitrage, program, create and compound value.   
      </div>
      <div className={styles.text5}>
        Ethereum request for comment
      </div>

      <div className={styles.playButton}>
        <img className={styles.imagePlay} src='/magazine/4/images/4950_playbutton.png' />
      </div>

      <div
        className={styles.playButton}
        onClick={() => {
          isPlaying ? pauseAudio() : startAudio()
        }}
      >
        {
          !isPlaying
          ? <img className={styles.imagePlay} src='/magazine/4/images/4950_playbutton.png' />
          : <img className={styles.imagePause} src='/magazine/4/images/4950_pausebutton.png' />
        }
      </div>

      <audio ref={audioRef} loop>
        <source src='./magazine/4/sounds/4950_sound1.mp3' type='audio/mpeg' />
      </audio>
    </div>
  )
}

export default Page43