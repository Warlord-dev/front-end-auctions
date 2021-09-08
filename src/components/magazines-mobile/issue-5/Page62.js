import React from 'react'
import styles from './page62.module.scss'
import Link from 'next/link'

const Page62 = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.image1} src='./magazine/4/images/6970_background1_mobile.png'/>
      <img className={styles.image2} src='./magazine/4/images/6970_image1_mobile.png'/>

      <div className={styles.text1}>
        Throughout the Metaverse        
      </div>
      <Link href='https://www.instagram.com/lovetomorrow3d/'>
        <a target='_blank'>
          <div className={styles.text2}>
            Love,<br />Tomorrow
          </div>
        </a>
      </Link>
      <div className={styles.text3}>
        ABOVE THE CLOUDS. Inspired by the desire to travel and the feeling when you look out the window on a plane, a weightless chiffon dress with an angelic undertone.        
      </div>
    </div>
  )
}

export default Page62