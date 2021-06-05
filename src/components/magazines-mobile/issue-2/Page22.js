import React, { useRef, useState } from 'react'
import styles from './page22.module.scss'

const Page22 = () => {
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
      <img src='./magazine/1/images/mobile/22-01.png' className={styles.backImage} />
      <h1>
        open talks with owocki         
      </h1>
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

export default Page22