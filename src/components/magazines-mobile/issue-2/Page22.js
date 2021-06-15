import React, { useRef, useState } from 'react'
import styles from './page22.module.scss'
import Link from 'next/link';

const Page22 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image1}></div>

      <p className={styles.text1 }>Crypto Art</p>
      <p className={styles.text2 }>Hall of </p>
      <p className={styles.text3 }>Fame</p>

      <Link href="https://makersplace.com/annahoy/disclosure-1-of-5-65146/"><a target="_blank">
      <img src="./magazine/2/images/23_24/mobile/image1.png" className={styles.image2} />
      </a>
      </Link>
      <img src="./magazine/2/images/23_24/mobile/image2.png" className={styles.image3} />
      <img src="./magazine/2/images/23_24/mobile/image2.png" className={styles.image4} />

      <p className={styles.text4 }>Ann Ahoy</p>
      <p className={styles.text5 }>Disclosure</p>
      <p className={styles.text6 }>April 27th 2021</p>

      

      <div className={styles.image6}></div>
      <div className={styles.image10}></div>
      <div className={styles.image11}></div>
      <div className={styles.image13}></div>
      <div className={styles.image14}></div>
      <div className={styles.image15}></div>

      <p className={styles.text7 }>minted on hicetnunc.xyz</p>
      <Link href="https://makersplace.com/annahoy/disclosure-1-of-5-65146/"><a target="_blank">
      <img src="./magazine/2/images/23_24/mobile/image5.gif" className={styles.image8} />
      </a>
      </Link>
      <p className={styles.text8 }>Terra Lens</p>
      <img src="./magazine/2/images/23_24/mobile/image3.png" className={styles.image5} />
      <img src="./magazine/2/images/23_24/mobile/image4.png" className={styles.image7} />
      <Link href="https://foundation.app/kate-the-cursed/what-have-u-seen-24844"><a target="_blank">
      <img src="./magazine/2/images/23_24/mobile/image6.png" className={styles.image9} />
      </a>
      </Link>
      <p className={styles.text9 }>What have u seen?</p>
      <p className={styles.text10 }>Kate The Cursed</p>
      <p className={styles.text11 }>April 15th 2021</p>

      <Link href="https://foundation.app/maxcapacity/godhead-17407"><a target="_blank">
      <img src="./magazine/2/images/23_24/mobile/image7.png" className={styles.image12} />
      </a>
      </Link>
      <p className={styles.text12 }>Max Capacity</p>
      <p className={styles.text13 }>GODHEAD</p>
      <p className={styles.text14 }>April 1st 2021</p>
      <Link href="https://www.hicetnunc.xyz/objkt/41534"><a target="_blank">
      <video autoPlay muted loop className={styles.video1}>
        <source src="./magazine/2/images/23_24/mobile/video1.mp4" type="video/mp4" />
      </video>
      </a>
      </Link>
      
      <p className={styles.text15 }>Pillars of Dawn (III)</p>
      <p className={styles.text16 }>Kelly Richardson</p>
      <p className={styles.text17 }>minted on hicetnunc.xyz</p>

      <Link href="https://www.hicetnunc.xyz/objkt/41534"><a target="_blank">
      <video autoPlay muted loop className={styles.video2}>
        <source src="./magazine/2/images/23_24/mobile/video2.mp4" type="video/mp4" />
      </video>
      </a>
      </Link>
      <p className={styles.text18 }>trippyogi</p>
      <p className={styles.text19 }>RAINBOW SUNSET</p>
      <p className={styles.text20 }>NOV 27TH 2020</p>

      <p className={styles.text21 }>MAKERS</p>
      <p className={styles.text22 }>MAKERS</p>
    </div>
  )
}

export default Page22