import React from 'react'
import styles from './page77.module.scss'

const Page77 = () => {
  return (
    <div className={styles.wrapper}>
      <img src="./magazine/1/images/mobile/page77/moshed-05-08-14-57-15 1.png" className={styles.img1} />
      <img src="./magazine/1/images/mobile/page77/08_furcoat_alyonabriukhanova_S 1.png" className={styles.img2} />
      <img src="./magazine/1/images/mobile/page77/neofuturo_sweatshirt_01_Custom_View_2 1.png" className={styles.img3} />
      <img src="./magazine/1/images/mobile/page77/OceanSky_render 1.png" className={styles.img4} />
      <img src="./magazine/1/images/mobile/page77/Magentic_coat 1.png" className={styles.img5} />
      <video autoPlay muted loop className={styles.video}>
        <source src="./magazine/1/85_86/hat_360.mp4" type="video/mp4" />
      </video>
      <a href="https://www.instagram.com/dgtl_stylist/" target='_blank'>
        <h1 className={styles.title1}>Alyona Briukhanova</h1>
        <h1 className={styles.title2}>Alyona Briukhanova</h1>
        <h1 className={styles.title3}>Alyona Briukhanova</h1>
      </a>
      <h2 className={styles.title4}>PIXLS</h2>
    </div>
  )
}

export default Page77