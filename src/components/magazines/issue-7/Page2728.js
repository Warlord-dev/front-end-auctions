import React  from 'react'
import Image from 'next/image'
import styles from './page2728.module.scss'

const Page2728 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image1}>
        <Image
          src='/magazine/7/images/2324_image1.jpg'
          width={1047}
          height={1497}
        />
      </div>
      <div className={styles.image2}>
        <Image
          src='/magazine/7/images/2526_image1.png'
          width={599}
          height={342}
        />
      </div>
      <div className={styles.image3}>
        <Image
          src='/magazine/7/images/2526_image1.png'
          width={315}
          height={180}
        />
      </div>
      <div className={styles.image4}>
        <Image
          src='/magazine/7/images/2526_image1.png'
          width={315}
          height={180}
        />
      </div>
      <div className={styles.text1}>
        We can have an infinity of metaverse spaces we ALL can live in–not just anyone who can fork over the most.
        <br /><br />
        We’re building in web3 so we can replace all those flawed systems. Why should virtual land be limited to being a base layer for private land ownership when it can be so much more than just another boring real estate play that’s strictly worse than the existing paradigm anyway?
        <br /><br />
        Approaching virtual land based on an IRL property regime is probably looking at virtual land the wrong way. Besides, with the multitude of virtual worlds out there, how can we attach our identities to the parcels of digital land we own?
        <br /><br />
        Well, the Ethereum Name Service (ENS) just might have the answer. ENS, which basically serves as an entity’s digital identity in the metaverse, has come across as potentially a solution to coordinating ownership of virtual land across the realms they might exist in and mapping them in an organized, easily iterable fashion.
        <br /><br />
        And just as domain names became the undisputed virtual land of the web1 era, the same future just might play out in web3.
        <br /><br />
        ENS has supported custom text fields since last October, which are basically arbitrary records that can store any data without adding new types for new use cases–virtual land included.
        <br /><br />
        Besides, addresses are much simpler to organize, significantly more composable, and data–including virtual spaces–can be layered on top of it in various ways. Therefore, everything you wish to register–land included–can be done using ENS.
        <br /><br />
        And just as web1 domains were, ENS can very well be on the cusp of becoming a fundamental element of the open and decentralized metaverse.
        <br /><br />
        We’ve already lost the shackles that restrain us from enjoying the privilege of true, unbridled ownership of whatever it is we wish to own in the metaverse. Why put them back on for the lack of imagination?
      </div>
    </div>
  )
}

export default Page2728
