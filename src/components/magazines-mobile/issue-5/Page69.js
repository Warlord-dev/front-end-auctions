import React from 'react'
import Link from 'next/link'
import styles from './page69.module.scss'

const Page69 = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.image1} src='/magazine/4/images/7576_background2.png' />
      <Link href='https://www.instagram.com/unhueman_/'>
        <a target='_blank'>
          <div className={styles.text1}>
            unhueman
          </div>
        </a>
      </Link>
      <div className={styles.text2}>
        Christian Guernelli (unhueman) is an artist, creative director, and dreamer that was born and educated in Italy before moving to the United States. He is passionate about blending fashion, distinct color palettes, and technology to produce 3D sculptures that are often hyper-surrealistic. In addition to being a contributor to Zoom on Fashion Trends, LA Times, Newsweek, Forbes, and Harper's Bazaar featured Guerni and his work digital design and artwork. Guerni has designed for world renowned brands such as Iceberg, Zara, Zegna, C.P. Company, Stone Island, Woolrich, and John Varvatos. Sotheby’s exhibited a Guerni art piece at six of its international locations before selling it as part of a charity.
      </div>
    </div>
  )
}

export default Page69