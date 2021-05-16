import React from 'react'
import styles from './page74.module.scss'

const Page74 = () => {
  return (
    <div className={styles.wrapper}>
      <img src="./magazine/1/images/mobile/page74-bg.png" className={styles.backImage} />
      <div className={styles.innerWrapper}>
        <h1 className={styles.title}>Villa Karolina</h1>
        <img src="./magazine/1/images/mobile/must trys of the metaverse.png" className={styles.titleImage} />
        <h2 className={styles.subtitle}>#DivingIntoCryptovoxels</h2>
        <div className={styles.section1}>
          <img src="./magazine/1/images/mobile/Screen Shot 2021-05-07 at 7.50 1.png" />
          <h1>The Scarlet Factory</h1>
        </div>
        <div className={styles.section2}>
          <img src="./magazine/1/images/mobile/Screen Shot 2021-05-07 at 7.47 1.png" />
          <h1>SUGAR CLUB</h1>
        </div>
        <div className={styles.section3}>
          <h1>BRONX ZOO</h1>
          <img src="./magazine/1/images/mobile/Screen Shot 2021-05-07 at 7.43 1.png" />
        </div>
        <div className={styles.section4}>
          <img src="./magazine/1/images/mobile/Screen Shot 2021-05-07 at 7.41 1.png" />
          <h1>MetaOlympics</h1>
        </div>
        <div className={styles.section5}>
          <h1>$WHALE Pagoda</h1>
          <img src="./magazine/1/images/mobile/image 407.png" />
        </div>
      </div>
    </div>
  )
}

export default Page74