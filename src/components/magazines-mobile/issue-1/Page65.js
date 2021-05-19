import React from 'react'
import styles from './page65.module.scss'

const Page65 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.innerWrapper}>
        <h1 className={styles.talent1}>New Talent. </h1>
        <h1 className={styles.talent2}>New Talent. </h1>
        <h1 className={styles.talent3}>New Talent. </h1>
        <h2>AREZ</h2>
        <div className={styles.section1}>
          <p>Hi! I am Arez, I am 22 year old artist and designer from Russia.</p>
          <p>I started making my first art in high school when I was drawing skins and weapon finishes for a CS:GO workshop. </p>
          <p>Over time as my interests expanded I started learning CS:GO modding, and eventually went into a design school, where I acquired most of my skills in graphic design, sketching, 3d modeling, animation and rendering. </p>
          <p>I now use this skillset to work on Parabellum, a project of my own, a game based on CS:GO. A Few years ago I became interested in abstract fine arts and paintings. This year I finished Union of Russian Abstractionists school and received a Kandinsky Medal.</p>
          <p>I like combining different skills in one artwork, rather than sticking to just one medium. I am currently working on my "X T R O P Y" art project, which is focused on the power of red light and color. My rule is that if it exists, you can make art with it."</p>
        </div>
        <img src="./magazine/1/images/mobile/image 417.png" className={styles.fullImage} />
        <div className={styles.section2}>
          <p>AREZ minted his first work on OpenSea about 2 months ago, and since then has started building out a collection of creations.</p>
          <h1>He just released his latest collection, XTROPY. Check it out here! </h1>
        </div>
        <img src="./magazine/1/images/mobile/Screen Shot 2021-05-09 at 4.46 1.png" className={styles.image1} />
        <img src="./magazine/1/images/mobile/image 418.png" className={styles.image2} />
        <img src="./magazine/1/images/mobile/image 419.png" className={styles.image3} />
      </div>
    </div>
  )
}

export default Page65