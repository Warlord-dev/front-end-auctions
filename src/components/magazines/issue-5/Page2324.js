import React from 'react'
import styles from './page2324.module.scss'


const Page2324 = () => {
  return (
    <div className={styles.wrapper}>
      <video autoPlay muted loop className={styles.video1}>
        <source src='./magazine/5/videos/2122_video2.mp4' type='video/mp4' />
      </video>
      <video autoPlay muted loop className={styles.video2}>
        <source src='./magazine/5/videos/2324_video1.mp4' type='video/mp4' />
      </video>
      <img src='/magazine/5/images/2122_frame1.png' className={styles.image1} />
      <img src='/magazine/5/images/2122_frame1.png' className={styles.image2} />
      <div className={styles.rect1}></div>
      <div className={styles.rect2}></div>
      <div className={styles.text1}>
        It works by relying on a “trust score” upheld by personal connections between members of groups, and this trust credit increases the more connections and the more trustworthy groups of people are.
        <br /><br />
        But outside the confines of traditional verification, how do we define identity in the metaverse?
        <br /><br />
        NFTs will play an integral role in how identity is shaped in the metaverse.
        <br /><br />
        Case in point: profile pictures, or PFPs. Those jpegs you see selling for millions of dollars? They’re more than just that. PFPs demonstrate your identity, alignment, voice, status, and authority. And as NFT value rises, so does the clout and authority of its owner.
        <br /><br />
        You’re buying part of a scarce set of online identities that have begun to encroach in the “real” world, and spilling over to the social networks we live in. 
        <br /><br />
        It’s no different from the fashion we choose to wear. It’s just that NFTs have come to provide another unique layer of social behavior and identity traversing the physical to the digital. 
        <br /><br />
        The same can be said for Ethereum Name Service (ENS) addresses that have begun to add an identity layer beyond just a readable name tacked on to an Ethereum address.
        <br /><br />
        The key takeaway is that in the metaverse, YOU choose your identity. Whether it is in the form of a PFP, an ENS, or the digital fashion you wear, it enables you to possess more than just one identity across a myriad of virtual worlds and games. 
      </div>
      <div className={styles.text2}>
        You have the agency to choose from one of many identities depending on the context of the relationships you link with them. You might use an identity for your professional relationships and government transactions, while you might use another for the social clubs you belong to. Sky’s the limit as far as identity in the metaverse is concerned. Each identity can have its own wallet, fashion, NFTs, and histories. In real life, the limit’s the sky.
        <br /><br />
        Metaverse evangelists foresee that the digital identities we create will ultimately become just as important as our IRL selves, and if the money sloshing around in the NFT space is any indication, we will spend money accordingly for status and prestige. It’s just human nature. NFTs are popping up everywhere, from Zoom backgrounds, to LinkedIn profiles (gulp!), to avatars in virtual reality, Twitter profiles, and everywhere in between.
        <br /><br />
        Your metaversal identity is a glimpse of your true soul for all the world to see, and it will be the first thing people will associate you with. That’s why the NFT phenomenon won’t be going anywhere anytime soon: they fulfill an inherent need to express, identify, and belong – all of which represent the decentralization of our identity.
      </div>
      
      <div className={styles.circle1}></div>
      <div className={styles.circleText1}>
        Collect POAP!        
      </div>
      <div className={styles.circleText2}>
        yay        
      </div>
      <a href='https://poap.website/identityacrossthemetaverse' target='_blank'>
        <img src='/images/poap-logo.png' className={styles.poapImage} />
      </a>
    </div>
  )
}

export default Page2324
