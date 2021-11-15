import React, { useRef, useState } from 'react'
import Image from 'next/image'
import styles from './page1516.module.scss'

const Page1516 = () => {
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
      <div className={styles.image1}>
        <Image
          src='/magazine/7/images/1516_image1.jpg'
          width={960}
          height={1497}
        />
      </div>
      <a href='https://twitter.com/swombat' target='_blank'>
        <div className={styles.text1}>
          SWOMBAT
        </div>
      </a>
      <a href='https://twitter.com/swombat' target='_blank'>
        <div className={styles.text2}>
          SWOMBAT
        </div>
      </a>
      <a href='https://twitter.com/swombat' target='_blank'>
        <div className={styles.text3}>
          SWOMBAT
        </div>
      </a>
      <div className={styles.greenyLion1}>
        <Image
          src='/magazine/7/images/1516_greenylion.jpg'
          width={184}
          height={188}
        />
      </div>

      <div className={styles.greenyLion2}>
        <Image
          src='/magazine/7/images/1516_greenylion.jpg'
          width={184}
          height={188}
        />
      </div>

      <div className={styles.greenyLion3}>
        <Image
          src='/magazine/7/images/1516_greenylion.jpg'
          width={184}
          height={188}
        />
      </div>

      <div className={styles.greenyLion4}>
        <Image
          src='/magazine/7/images/1516_greenylion.jpg'
          width={184}
          height={188}
        />
      </div>

      <div className={styles.greenyLion5}>
        <Image
          src='/magazine/7/images/1516_greenylion.jpg'
          width={184}
          height={188}
        />
      </div>

      <div className={styles.greenyLion6}>
        <Image
          src='/magazine/7/images/1516_greenylion.jpg'
          width={184}
          height={188}
        />
      </div>

      <div className={styles.greenyLion7}>
        <Image
          src='/magazine/7/images/1516_greenylion.jpg'
          width={184}
          height={188}
        />
      </div>

      <div className={styles.greenyLion8}>
        <Image
          src='/magazine/7/images/1516_greenylion.jpg'
          width={184}
          height={188}
        />
      </div>

      <div className={styles.greenyLion9}>
        <Image
          src='/magazine/7/images/1516_greenylion.jpg'
          width={184}
          height={188}
          layout="responsive"
        />
      </div>
      <div className={styles.image2}>
        <Image
          src='/magazine/7/images/1516_image2.jpg'
          width={960}
          height={1497}
        />
      </div>

      <audio ref={refAudio} loop>
        <source src='/magazine/6/sounds/1516_sound1.mp3' type='audio/mpeg' />
      </audio>
      <div
        className={styles.playButton1}
        onClick={() => {
          isPlaying1 ? pauseAudio1() : startAudio1()
        }}
      >
        <img className={styles.imageBack} src='/magazine/7/images/1516_button_back.png' />
        {
          !isPlaying1
          ? <img className={styles.imagePlay} src='/magazine/7/images/1516_playbutton.png' />
          : <img className={styles.imagePause} src='/magazine/7/images/1516_pausebutton.png' />
        }
      </div>

      <div className={styles.text4}>
        P2E Gaming. <br />
        More Work to be Done. 
      </div>

      <a href='https://blockade.games/' target='_blank'>
        <h1>
          Blockade Games
        </h1>
      </a>
      <a className={[styles.image3, styles.gradient].join(' ')} href='https://twitter.com/coin_artist' target='_blank'>
        <Image
          src='/magazine/7/images/1516_image3.png'
          width={399}
          height={399}
        />
      </a>
    </div>
  )
}

export default Page1516
