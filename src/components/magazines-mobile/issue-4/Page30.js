import React from 'react'
import Link from 'next/link'
import styles from './page30.module.scss'

const Page30 = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.image1} src='/magazine/4/images/3536_background2_mobile.png' />
      <img className={styles.image2} src='/magazine/4/images/3536_image2.png' />
      <img className={styles.image3} src='/magazine/4/images/3536_image2.png' />
      <img className={styles.image4} src='/magazine/4/images/3536_image2.png' />
      <img className={styles.image5} src='/magazine/4/images/3536_image2.png' />
      <img className={styles.image6} src='/magazine/4/images/3536_image2.png' />
      <img className={styles.image7} src='/magazine/4/images/3536_image2.png' />
      <Link href='https://zora.co/'>
        <a target='_blank'>
          <h1>OURZORA</h1>
        </a>
      </Link>
      
      <div className={styles.text1}>
        There are so many NFT marketplaces out there these days, and with the current rate that NFTs move at, this isn’t going to slow down anytime soon. The deployment and implementation of new, unique and user centric platforms is all the craze. The big question on everyones mind is how you use NFTs to unlock the next crypto trillion. So what are some important features that an artist, musician, designer         
      </div>
      
      <div className={styles.text2}>
        OurZora is a decentralised auction protocol and open bazaar for art, fashion and musical artists. It establishes universally perpetual markets for Creators and is really attractive to the indie design scene, where unlike a lot of marketplaces in the space, decentralisation and open source are core pillars of the mission and also the engineering implementation.
      </div>
      
      <div className={styles.text3}>
        Where is OurZora going to be in a year from now? It’s hard to tell. But the ethos and roadmap so far point to it being one of the largest players in supporting Artists globally in being able to fork the protocol and continue to build out their own personalised NFT distribution interfaces. 
      </div>

    </div>
  )
}

export default Page30
