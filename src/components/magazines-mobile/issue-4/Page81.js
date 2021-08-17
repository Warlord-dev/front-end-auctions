import React from 'react'
import styles from './page81.module.scss'
import Link from 'next/link'

const Page81 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.rect1}></div>
      <div className={styles.rect2}></div>

      <video autoPlay muted loop className={styles.video1}>
        <source src='/magazine/4/videos/8788_video1.mp4' type='video/mp4' />
      </video>

      <video autoPlay muted loop className={styles.video2}>
        <source src='/magazine/4/videos/8788_video2.mp4' type='video/mp4' />
      </video>

      <div className={styles.text1}>
        The First Dungeon        
      </div>
      <div className={styles.text2}>
        Open Source 2D Battle Royale
      </div>
      <div className={styles.text3}>
        Ideated & Engineered by&nbsp;
        <Link href='https://github.com/ThijmenHappy'>
          <a target='_blank'>
            Thijmen Happy 
          </a>
        </Link>
      </div>
      <div className={styles.text4}>
        Survive as the last man standing. The timer is on; every 1 minute a part of the dungeon will close & become dangerous to be in, dealing you damage. You can pickup weapons and ammo all over the dungeon and you will get the loot that other players drop if you eliminate them.
      </div>
      <div className={styles.text5}>
        Hello I am Thijmen Happy. I am a indie game developer who is currently working on a battle royale game named The First Dungeon. I use the Unity Game Engine and have been for the last couple of years.
      </div>
      <div className={styles.text6}>
        Thijmen Happy 
      </div>
      <div className={styles.text7}>
        Unique Collectible PFP Avatars (Also Featured During W3FW...get a unique avatar with every Fashion Week NFT Purchase!)
      </div>
      <div className={styles.text8}>
        LAUNCHING WITH ESPA. COMING SOON!
      </div>

      <div className={styles.circle1}></div>
      <div className={styles.circle2}></div>
      <div className={styles.circle3}></div>

      <img className={styles.image1} src='/magazine/4/images/8788_image6.png' />
      <img className={styles.image2} src='/magazine/4/images/8788_image6.png' />

      <img className={styles.image3} src='/magazine/4/images/8788_image5.png' />
      <img className={styles.image4} src='/magazine/4/images/8788_image4.png' />
    </div>
  )
}

export default Page81