import React from 'react'
import Link from 'next/link'
import styles from './page7576.module.scss'


const Page7576 = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.image1} src='/magazine/4/images/7576_background1.png' />
      <img className={styles.image2} src='/magazine/4/images/7576_background2.png' />

      <Link href='https://superrare.com/artwork-v2/resiliunt-in-codex-24615/'>
        <a target='_blank'>
          <div className={styles.text1}>The Black Lab Studio</div>
        </a>
      </Link>
      <div className={styles.text2}>
        Amin FarahFounder of @Theblacklabstudio, 3D artist and Art-director suspended in the constant research of a unique expressive figure/signature. Human body, esoteric symbolizations, material experiments bounce between his works in an apparently random way.
        <br/><br/>
        The creative process - of which he feels like a participant, not an author, close to the 3D medium - takes the shape of a digital reaction, during which the anthropological element and technological one react like chemicals.
        <br/><br/>
        The final products, the works shown here, are one by one necessary outcomes of the experimentation undertaken.
        <br/><br/>
        Each of them just represents the last step of the experimentation that the artist entirely leads, thanks to the technical knowledge and the deep confidence with the 3d tool.
        <br/><br/>
        In this journey, the fashion element is the favorite place where the dialogue between nature and technology is explored: there, where the texture of the skin flakes off like threads of a fabric, there, where the compactness / consistency of the body opens to the void of the algorithm, here is the manifesto of his artistic research.
      </div>
      <Link href='https://www.instagram.com/unhueman_/'>
        <a target='_blank'>
          <div className={styles.text3}>
            unhueman
          </div>
        </a>
      </Link>  
      <div className={styles.text4}>
        Christian Guernelli (unhueman) is an artist, creative director, and dreamer that was born and educated in Italy before moving to the United States. He is passionate about blending fashion, distinct color palettes, and technology to produce 3D sculptures that are often hyper-surrealistic. In addition to being a contributor to Zoom on Fashion Trends, LA Times, Newsweek, Forbes, and Harper's Bazaar featured Guerni and his work digital design and artwork. Guerni has designed for world renowned brands such as Iceberg, Zara, Zegna, C.P. Company, Stone Island, Woolrich, and John Varvatos. Sotheby’s exhibited a Guerni art piece at six of its international locations before selling it as part of a charity.
      </div>
    </div>
  )
}

export default Page7576
