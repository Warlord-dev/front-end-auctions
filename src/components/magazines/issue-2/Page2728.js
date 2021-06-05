import React, { useRef, useState } from 'react'
import styles from './page2728.module.scss'

const Page2728 = () => {
  const audioRef = useRef()
  const [isPlaying, setIsPlaying] = useState(false)

  const startAudio = () => {
    audioRef.current.play()
    setIsPlaying(true)
  };

  const pauseAudio = () => {
    audioRef.current.pause()
    setIsPlaying(false)
  };

  return (
    <div className={styles.wrapper}>
      <img src='./magazine/1/images/Group 1192.jpg' className={styles.backImage1}/>
      <img src='./magazine/1/images/Group 1191.jpg' className={styles.backImage2}/>
      <h1>
        open talks with owocki 
      </h1>
      <h2>
        ID & ego
      </h2>
      <div className={styles.text1} >
        WEB OF TRUST
      </div>

      <div className={styles.text2} >
        SYBIL RESISTANCE       
      </div>

      <div className={styles.text3} >
      SELF SOVEREIGN IDENTITY        
      </div>

      <button 
        className={[styles.playButton, isPlaying ? styles.isPlaying : ''].join(' ')}
        onClick={() => {
          isPlaying ? pauseAudio() : startAudio()
        }}
      >
        {
          <img src={`./magazine/1/images/${isPlaying ? 'PauseButton' : 'PlayButton'}.png`} />
        }
        
      </button>

      <audio ref={audioRef} loop>
        <source src="./magazine/1/sound/audiomass-output.mp3" type="audio/mpeg" />
      </audio>
    </div>
  )
}

export default Page2728