import React, { useRef, useState }  from 'react'
import Link from 'next/link'
import styles from './page85.module.scss'


const Page85 = () => {
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
      <video autoPlay muted loop className={styles.video1}>
        <source src='/magazine/4/videos/9394_video1.mp4' type='video/mp4' />
      </video>
      <img className={styles.image1} src='/magazine/4/images/9394_image4.gif' />
      <img className={styles.image2} src='./magazine/4/images/9394_image1.png' />

      <div className={styles.text1}>
        STRAWBERRY SITH
      </div>
      <div className={styles.text2}>
        Virtual commerce
      </div>
      <Link href='https://twitter.com/StrawberrySith'>
        <a target='_blank'>
          <img src='/magazine/4/images/9394_image5.png' className={styles.image3} />
        </a>
      </Link>

      <div
        className={styles.playButton}
        onClick={() => {
          isPlaying ? pauseAudio() : startAudio()
        }}
      >
        <div className={styles.circle1}></div>
        <div className={styles.text3}>
          { !isPlaying ? ' Listen in' : 'PAUSE' }
        </div>
      </div>

      <audio ref={audioRef} loop>
        <source src='/magazine/4/sounds/9394_sound1.mp3' type='audio/mpeg' />
      </audio>
    </div>
  )
}

export default Page85