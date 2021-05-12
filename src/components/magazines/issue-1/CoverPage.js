import React from 'react'
import styles from './coverpage.module.scss'

const CoverPage = () => {
  return (
    <div className={styles.wrapper}>
      <img src='/magazine/1/images/cover.jpg' width='960'/>
      <h1>
        I D & E G 0
      </h1>
      <h2 className={styles.india}>
        I N D I A
      </h2>
      <h2 className={styles.forweb3}>
        FOR WEB3
      </h2>
      <h3>
        The Next<br/>
        Real Estate Rush
      </h3>
      <h4>
        Onboarding the 99%        
      </h4>
      <h5>
        METAHUMANISM
      </h5>
      <h6>
        XR Couture
      </h6>
      <div className={styles.digifizzy1}>
        D I G I F I Z Z Y
      </div>
      <div className={styles.digifizzy2}>
        D I G I F I Z Z Y
      </div>
      <div className={styles.digifizzy3}>
        D I G I F I Z Z Y
      </div>
      <div className={styles.issue1}>
        Issue one
      </div>
      <div className={styles.issue2}>
        Issue one
      </div>
    </div>
  )
}

export default CoverPage