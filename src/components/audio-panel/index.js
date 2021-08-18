import React, { useRef, useState } from 'react'
import styles from './styles.module.scss'

const AudioPanel = props => {
  const { wrapperClass, audioSrc } = props
  const refAudio = useRef()
  const [isPlaying, setIsPlaying] = useState(false)
  const [sliderValue, setSliderValue] = useState(0)

  const handleProgress = () => {
    refAudio.current.onplay = () => {
      refAudio.current.addEventListener('timeupdate', () => {
        setSliderValue(Math.floor(refAudio.current.currentTime / refAudio.current.duration * 100))
      }, true)
    }
  }


  return (
    <div className={[styles.wrapper, wrapperClass].join(' ')}>
       <audio className={styles.audio} ref={refAudio} onLoadedData={() => handleProgress()}>
        <source src={audioSrc} type='audio/mp3' />
      </audio>
      <input
        type='range'
        min='1'
        max='100'
        className={styles.slider}
        id='myRange'
        value={sliderValue}
        onChange={
          e => {
            refAudio.current.pause()
            refAudio.current.currentTime = e.currentTarget.value * (refAudio.current.duration / 100)
            setSliderValue(e.currentTarget.value)
            isPlaying && refAudio.current.play()
          }
        }
      />
      <div className={styles.buttons}>
        <button
          className={styles.button}
          disabled={isPlaying}
          onClick={() => {
            refAudio.current.play()
            setIsPlaying(true)
          }}
        >
          Play
        </button>
        <button
          className={styles.button}
          disabled={!isPlaying}
          onClick={() => {
            refAudio.current.pause()
            setIsPlaying(false)
          }}
        >
          Pause
        </button>
        <button
          className={styles.button}
          onClick={() => {
            refAudio.current.pause()
            refAudio.current.currentTime = 0;
            refAudio.current.play()
            setIsPlaying(true)
          }}
        >
          Restart
        </button>
      </div>
    </div>
  )
}

export default AudioPanel