import React, { useRef, useState }  from 'react'
import styles from './page4950.module.scss'

const Page4950 = () => {
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
      <div className={styles.back1}></div>
      <img className={styles.image1} src='/magazine/4/images/4950_image1.png' />
      <img className={styles.image2} src='/magazine/4/images/4950_image2.png' />
      <img className={styles.image3} src='/magazine/4/images/4950_image3.png' />
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
        Witek Radomski
      </div>
      <div className={styles.text5}>
        The ERC Protocol Standards underwrite  all value exchange for Ethereum and beyond. They are what allow us to transact, interact, exchange, buy, sell, arbitrage, program, create and compound value.
      </div>
      <div className={styles.text6}>
        Ethereum request for comment
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

      <div className={styles.text7}>
        The ERC Protocol Standards underwrite  all value exchange for Ethereum and beyond. They are what allow us to transact, interact, exchange, buy, sell, arbitrage, program, create and compound value.        
      </div>
      
      <div className={styles.text8}>
        The ERC Protocol Standards underwrite  all value exchange for Ethereum and beyond. They are what allow us to transact, interact, exchange, buy, sell, arbitrage, program, create and compound value.
      </div>
      
      <div className={styles.text9}>
        The ERC Protocol Standards underwrite  all value exchange for Ethereum and beyond. They are what allow us to transact, interact, exchange, buy, sell, arbitrage, program, create and compound value.
      </div>
      
      <div className={styles.text10}>
        The ERC Protocol Standards underwrite  all value exchange for Ethereum and beyond. They are what allow us to transact, interact, exchange, buy, sell, arbitrage, program, create and compound value.
      </div>
      
      <div className={styles.text11}>
        The ERC Protocol Standards underwrite  all value exchange for Ethereum and beyond. They are what allow us to transact, interact, exchange, buy, sell, arbitrage, program, create and compound value.
      </div>

    </div>
  )
}

export default Page4950
