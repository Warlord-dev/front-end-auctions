import React from 'react'
import Link from 'next/link'
import styles from './page93.module.scss'

const Page93 = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.background} src='./magazine/4/images/101102_background1_mobile.png' />
      <h1>
        MUST TRYS OF THE METAVERSE
      </h1>
      <h2>
        #DECOEDITION
      </h2>

      <Link href='https://niftyx.org/'>
        <a target='_blank'>
          <img className={styles.image1} src='./magazine/4/images/101102_image1.png' />
        </a>
      </Link>
      <Link href='https://nftfi.com/'>
        <a target='_blank'>
          <img className={styles.image2} src='./magazine/4/images/101102_image2.png' />
        </a>
      </Link>
      <Link href='https://www.cryptovoxels.com/play?coords=N@315E,336S'>
        <a target='_blank'>
          <img className={styles.image3} src='./magazine/4/images/101102_image3.png' />
        </a>
      </Link>
      <Link href='https://fractional.art/'>
        <a target='_blank'>
          <img className={styles.image4} src='./magazine/4/images/101102_image4.png' />
        </a>
      </Link>
      <Link href='https://async.art/'>
        <a target='_blank'>
          <img className={styles.image5} src='./magazine/4/images/101102_image5.png' />
        </a>
      </Link>

      <div className={styles.label1}>NiftyX</div>
      <div className={styles.label2}>NFTfi</div>
      <div className={styles.label3}>Dark Junction</div>
      <div className={styles.label4}>Fractional.Art</div>
      <div className={styles.label5}>Async Art</div>
    </div>
  )
}

export default Page93