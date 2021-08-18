import React from 'react'
import Link from 'next/link'
import styles from './page101102.module.scss'


const Page101102 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.back1}></div>
      <img className={styles.background1} src='./magazine/4/images/101102_background1.png' />
      <img className={styles.background2} src='./magazine/4/images/101102_background2.png' />
      <div className={styles.text1}>
        Decentr<span>alised</span> Comm<span>erce And Its</span> Impac<span>t On Global</span> Comm<span>erce</span>
      </div>
      <div className={styles.text2}>
        D.E. Ordin
      </div>
      <div className={styles.text3}>
        MUST TRYS OF THE METAVERSE        
      </div>
      <div className={styles.text4}>
        #DECOEDITION
      </div>
      
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

export default Page101102
