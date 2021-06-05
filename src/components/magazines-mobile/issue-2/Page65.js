import React from 'react'
import styles from './page65.module.scss'

const Page65 = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.talent1}>New Talent. </h1>
      <h1 className={styles.talent2}>New Talent. </h1>
      <h1 className={styles.talent3}>New Talent. </h1>
      <h2>AREZ</h2>
      <div className={styles.section1}>
        Hi! I am Arez, I am 22 year old artist and designer from Russia.
        <br /><br />
        I started making my first art in high school when I was drawing skins and weapon finishes for a CS:GO workshop. 
        <br /><br />
        Over time as my interests expanded I started learning CS:GO modding, and eventually went into a design school, where I acquired most of my skills in graphic design, sketching, 3d modeling, animation and rendering. 
        <br /><br />
        I now use this skillset to work on Parabellum, a project of my own, a game based on CS:GO. A Few years ago I became interested in abstract fine arts and paintings. This year I finished Union of Russian Abstractionists school and received a Kandinsky Medal.
        <br /><br />
        I like combining different skills in one artwork, rather than sticking to just one medium. I am currently working on my "X T R O P Y" art project, which is focused on the power of red light and color. My rule is that if it exists, you can make art with it."
      </div>
      <img src="./magazine/1/images/mobile/image 417.png" className={styles.fullImage} />
      <div className={styles.section2}>
        AREZ minted his first work on OpenSea about 2 months ago, and since then has started building out a collection of creations.        
      </div>
      <div className={styles.section3}>
        He just released his latest collection, XTROPY. Check it out here!         
      </div>
      <a
        href="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/23506943164233084642049435454199598140929559050782904913842283785706704732161"
        target="_blank"
      >
        <video autoPlay muted loop className={styles.video1}>
          <source src="./magazine/1/71_72/Bloodmoon.mp4" type="video/mp4" />
        </video>
      </a>
      <a
        href="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/23506943164233084642049435454199598140929559050782904913842283786806216359937"
        target="_blank"
      >
        <img src="./magazine/1/images/mobile/image 418.png" className={styles.image1} />
      </a>
      <a
        href="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/23506943164233084642049435454199598140929559050782904913842283787905727987713"
        target="_blank"
      >
        <img src="./magazine/1/images/mobile/image 419.png" className={styles.image2} />
      </a>
    </div>
  )
}

export default Page65