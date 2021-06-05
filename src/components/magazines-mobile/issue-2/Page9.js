import React from 'react'
import styles from './page9.module.scss'

const Page9 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.pageBack1}></div>
      <img src='./magazine/1/images/Path 1.png' className={styles.pathImage} />
      <img src='./magazine/1/images/46564376b820b7bb93e4ee94f325dce7-removebg 1.png' className={styles.manImage} />
      <div className={styles.textDiv1}>
        Not your keys, Not your crypto. 
      </div>
      <h1>
        RUG
        <span className={styles.impact1}>PULLS </span>
        <br />
        <span className={styles.impact2}>&</span>
        <span className={styles.impact3}> SCAMS</span> 
      </h1>
      <h2>
        Who really owns you keys?
      </h2>
      <h3>
        Fully enjoying financial freedom means having full ownership of your funds. It isn’t about outsourcing your crypto’s security or having it at someone else’s mercy. 
      </h3>    
    </div>
  )
}

export default Page9