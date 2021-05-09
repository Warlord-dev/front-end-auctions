import React from 'react'
import styles from './page3334.module.scss'

const Page3334 = () => {
  return (
    <div className={styles.wrapper}>
      <video autoPlay muted loop >
        <source src='./magazine/1/videos/moshed-05-01-15-49-19.mp4' type="video/mp4" />
      </video>
      <img src='./magazine/1/images/Group 1137.png' className={styles.backImage} />
      <h1>
        SUSTAINABILITY <br />PIONEERS
      </h1>
      <h2>
        TIM SWEENEY DONATES TO Appalachian fund
      </h2>
      <h3>
        ROADMAP TO POS - ETHEREUM AND THE ENVIRONMENT
      </h3>
      <p className={styles.introText}>
        Tim Sweeney, founder and CEO of Epic Games, donated over 7,500 acres of land on Thursday to Asheville-based nonprofit Southern Appalachian Highlands Conservancy. 
        <br /><br />
        The donation included dozens of land parcels rising to 5,300 feet, including rare plants and animals (Some of them on the endangered species list), waterfalls and the largest American Chestnut restoration project. 
      </p>
    </div>
  )
}

export default Page3334