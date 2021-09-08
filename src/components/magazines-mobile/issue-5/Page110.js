import React from 'react'
import styles from './page110.module.scss'

const Page110 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.textPatternWrapper}>
        <div className={styles.textPattern}>
          3D Bookshelf Project
        </div>
        <div className={styles.textPattern}>
          3D Bookshelf Project
        </div>
        <div className={styles.textPattern}>
          3D Bookshelf Project
        </div>
        <div className={styles.textPattern}>
          3D Bookshelf Project
        </div>
        <div className={styles.textPattern}>
          3D Bookshelf Project
        </div>
        <div className={styles.textPattern}>
          3D Bookshelf Project
        </div>
        <div className={styles.textPattern}>
          3D Bookshelf Project
        </div>
        <div className={styles.textPattern}>
          3D Bookshelf Project
        </div>
      </div>

      <div className={styles.circle1}></div>
      <div className={styles.circle2}></div>
      <div className={styles.circle3}></div>

      <img src='/magazine/4/images/117118_image3.png' className={styles.image1} />
      <img src='/magazine/4/images/117118_image4.png' className={styles.image2} />

      <iframe
        className={styles.video1}
        src='https://www.youtube.com/embed/OxpjvxpWZfM?autoplay=1&mute=1&controls=0&playlist=DrXMso6lctE&loop=1'
      ></iframe>

      <div className={styles.text1}>
        Renaissance Architecture         
      </div>
      <div className={styles.text2}>
        Renaissance Architecture 
      </div>
      <div className={styles.text3}>
        Another thing I have been practicing is modeling ancient Roman/Greek and Renaissance inspired architecture. Here is a time-lapse of me modelling a renaissance inspired scene—still work in progress. 
      </div>
    </div>
  )
}

export default Page110