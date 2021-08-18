import React from 'react'
import styles from './page64.module.scss'
import Link from 'next/link'

const Page64 = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.image1} src='/magazine/4/images/7172_background1.png' />
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
    </div>
  )
}

export default Page64