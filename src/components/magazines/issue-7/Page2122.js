import React from 'react'
import Image from 'next/image'
import styles from './page2122.module.scss'

const Page2122 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.rect1}></div>
      <div className={styles.image1}>
        <Image
          src='/magazine/7/images/2122_image1.png'
          width={1166}
          height={1541}
        />
      </div>
      <div className={styles.image2}>
        <Image
          src='/magazine/7/images/2122_image2.png'
          width={442}
          height={515}
        />
      </div>
      <a href='https://chameleoncollective.io/' target='_blank'>
        <h1>
          The Chameleon Collective            
        </h1>
      </a>
    </div>
  )
}

export default Page2122
