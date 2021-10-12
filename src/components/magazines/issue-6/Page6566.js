import React from 'react'
import Link from 'next/link'
import styles from './page6566.module.scss'

const Page6566 = () => {

  return (
    <div className={styles.wrapper}>
      <video autoPlay muted loop className={styles.video1}>
        <source src='./magazine/5/videos/6566_video1.mp4' type='video/mp4' />
      </video>
      <img src='/magazine/5/images/6566_image1.png' className={styles.image1}/>
      <div className={styles.rect1}></div>

      <Link href='https://www.instagram.com/meggievanzwieten/'>
        <a target='_blank'>
          <div className={styles.text1}>
            Meggie van Zwieten
          </div>
        </a>
      </Link>
      <div className={styles.text2}>
        Meggie van Zwieten is a digital artist, based in The Hague. She creates 3D artworks, digital fashion and often works with Augmented Reality and Mixed Reality. By working multidisciplinary she tries to build a welcoming digital environment, to bring individuals closer to this world in order to be able to experience it for all its positive possibilities and potential. And hereby also aiming to use digital means to create awareness around sustainability and equality. As an artist she wants to create an accessible environment in which one can find relief, beauty and escape. With her creations she strives to generate astonishment that cares for curiosity, leading to an urge to further explore the digital environment. And hereby also aiming to use digital means to create awareness around sustainability and equality.        
      </div>
      <Link href='https://www.instagram.com/devandvan/'>
        <a target='_blank'>
          <div className={styles.text3}>
            DEVAN
          </div>
        </a>
      </Link>
      <div className={styles.text4}>
        Digital artist working with lettering+calligraphy+CG+AR.
      </div>
    </div>
  )
}

export default Page6566
