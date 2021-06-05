import React from 'react'
import styles from './page28.module.scss'

const Page28 = () => {
  return (
    <div className={styles.wrapper}>
      <video autoPlay muted loop >
        <source src='./magazine/1/videos/moshed-05-01-15-49-19.mp4' type="video/mp4" />
      </video>
      <img src="./magazine/1/images/Group 1188.png" className={styles.image2} />
      <h1>
        ROADMAP TO POS - ETHEREUM AND THE ENVIRONMENT
      </h1>
      <p className={styles.text1}>
        At this point many of us have heard of Proof Of Stake— although some may not understand yet how it works or why it matters so much. The importance isn’t so much that economic resources and game theory are used to secure the system, but more the fact that it requires skin in the game. Because if nothing is at risk then nothing has value.  
        <br /><br />
        As we continue to increase our digital points of interaction, the tools that we use must ensure that we do not also increase the points of potential failure. Validation for each exchange of content, human connection, and transactable value can only be backed by a tangible and distributed fear of loss. It is a basic princple in everything, from human psychology to physics, if there is no mass then how do you measure it and why does it matter?        
      </p>
      <p className={styles.text2}>
        Well, PoS gives us a sustainable way to run infinite games to test and keep a proveable record about which interactions have merit in an environmented governed by decentralisation. At the very least we are able to spot which interactors are engaging in malicious practice at a much higher rate than traditional systems. If you have ever been the victim of anything from white lies to outright fraud then you know how vital this is.
        <br /><br />
        Sustainability isn’t simply a global ambition or far off hope for environmental wellbeing, but rather it’s how we personally sustain ourselves against catastrophic loss and yet another legacy system lock in.         
      </p>
      <h2>Helsinki Biennial</h2>
      <p className={styles.text3}>
        With the effects from the pandemic still dictating so much of our lives— it’s easy to forget that other people and the real world actually exist, that we are not just blips on a screen. In fact, it’s these in-person interactions that shape the constraints and possibilities of every facet of our lives through industry, economics, communities, and how we have so often approached solutions to bettering sustainable working processes. 
        <br /><br />
        With the high speed boost that the NFT and crypto art scene has experienced over the past few months, it seems timely that the Helsinki Art Museum and the inaugural Helsinki Biennial in Finland is taking steps to transform the culture around in-person art exhibitions. As we continue to move further back to the new normal and increase our social interactions, given the current global focus on digital art, it is essential to bridge old industries and mediums into new sustainable worlds through NFTs. The Helsinki Art Museum a lead on one half of this by designing their entire Biennial event as Carbon neutral. This is a big step and the first of its kind.          
      </p>
      <img src="./magazine/1/images/mobile/27-01.png" className={styles.image1} />
    </div>
  )
}

export default Page28