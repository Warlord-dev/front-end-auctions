import React from 'react'
import styles from './page7172.module.scss'
import Link from 'next/link'

const Page7172 = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.image1} src='/magazine/4/images/7172_background1.png' />
      <video autoPlay muted loop className={styles.video1}>
        <source src='./magazine/4/videos/7172_video1.mp4' />
      </video>

      <Link href='https://www.instagram.com/3d_maslennikov/'>
        <a target='_blank'>
          <div className={styles.text1}>
            Maslennikov        
          </div>
        </a>
      </Link>

      <div className={styles.text2}>
        My name is Yaroslav Maslennikov. I was born in Ukraine from Donetsk. Now I live in Russia in the city of Kursk. I have a Bachelor of Apparel Design Engineering. In my free time I do various designs. In the future I am looking to design game models. I’m always ready to collaborate with other designers!
      </div>

      <div className={styles.text3}>
        Eternal Connection
      </div>

      <Link href='https://www.instagram.com/3dninjah/'>
        <a target='_blank'>
          <div className={styles.text4}>
            3DNINJAH
          </div>
        </a>
      </Link>

      <div className={styles.text5}>
        I am an Egyptian 3D Artist with more than 6 years of experience. My style is often Dark, spiritual and glowy, where I focus on converting my emotions into my work. My main softwares are: Cinema 4d - Zbrush - After effects. I’ve always been passionate about art, and now I make my own.
      </div>
    </div>
  )
}

export default Page7172
