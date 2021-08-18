import React from 'react'
import Link from 'next/link'
import styles from './page65.module.scss'

const Page65 = () => {
  return (
    <div className={styles.wrapper}>
      <video autoPlay muted loop className={styles.video1}>
        <source src='/magazine/4/videos/7172_video1.mp4' type='video/mp4' />
      </video>
      <h1>
        Eternal Connection
      </h1>
      <Link href='https://www.instagram.com/3dninjah/'>
        <a target='_blank'>
          <div className={styles.text1}>
            3DNINJAH    
          </div>
        </a>
      </Link>
      <div className={styles.text2}>
        I am an Egyptian 3D Artist with more than 6 years of experience. My style is often Dark, spiritual and glowy, where I focus on converting my emotions into my work. My main softwares are: Cinema 4d - Zbrush - After effects. I’ve always been passionate about art, and now I make my own.
      </div>
    </div>
  )
}

export default Page65