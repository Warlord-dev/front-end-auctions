import React, { useRef, useState } from 'react'
import Link from 'next/link'
import styles from './page17.module.scss'

const Page17 = () => {

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
      <div className={styles.topSideFrame}></div>
      <img src='/magazine/4/images/1920_image1_mobile.png' className={styles.image1}/>
      <img src='/magazine/4/images/1920_image2_mobile.png' className={styles.image2}/>
      <img className={styles.image5} src='/magazine/4/images/1920_image4_mobile.png' />
      <img src='/magazine/4/images/1920_image2_mobile.png' className={styles.image3}/>
      <img src='/magazine/4/images/1920_image3_mobile.png' className={styles.image4}/>
      

      <div className={[styles.animationFrame, styles.topSideImageWrapper].join(' ')}>
        <img src='./magazine/1/images/mobile/howtogetintext.png' />
        <img src='./magazine/1/images/mobile/howtogetintext.png' />
        <img src='./magazine/1/images/mobile/howtogetintext.png' />
        <img src='./magazine/1/images/mobile/howtogetintext.png' /> 
      </div>
      <div className={styles.bottomSideFrame}></div>
      <div className={[styles.animationFrame, styles.bottomSideImageWrapper].join(' ')}>
        <img src='./magazine/1/images/mobile/howtogetintext.png' />
        <img src='./magazine/1/images/mobile/howtogetintext.png' />
        <img src='./magazine/1/images/mobile/howtogetintext.png' />
        <img src='./magazine/1/images/mobile/howtogetintext.png' />
      </div>

      <Link href='https://pinata.cloud/'>
        <a target='_blank'>
          <div className={styles.text1}>
            Pinata Cloud        
          </div>
        </a>
      </Link>

      <img src='/magazine/4/images/1920_arrow.png' className={styles.image5} />

      <div className={styles.text2}>
        Kyle Tut, CEO & Co-Founder @ Pinata       
      </div>

      <button 
        className={[styles.playButton, isPlaying ? styles.isPlaying : ''].join(' ')}
        onClick={() => {
          isPlaying ? pauseAudio() : startAudio()
        }}
      >        
        {
          <img src={`./magazine/4/images/1920_${isPlaying ? 'pausebutton' : 'playbutton'}.png`} />
        } 
      </button>

      <audio ref={audioRef} loop>
        <source src='./magazine/4/sounds/1920_sound1.m4a' type='audio/mpeg' />
      </audio>
    </div>
  )
}

export default Page17