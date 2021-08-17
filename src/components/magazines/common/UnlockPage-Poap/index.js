import React from 'react'
import Router from 'next/router'
import styles from './styles.module.scss'

const UnlockPageThree = props => {
  const{issueId} = props
  console.log("issueId - " + issueId)
  return (
    <>
      <div className={styles.wrapper}>
      </div>
      <div className={styles.title}>
        Unlock More Hidden Content!
      </div>
      <div className={styles.description}>
        All holders of our unlockable NFT content will receive access to additional dynamic hidden content and NFT airdrops! This content changes and is added to overtime throughout the month; new updates, insights, creative works. 
      </div>
      <img src="/images/unlock-badge.png" className={styles.badge}/>
      <img src="/images/arrow.png" className={styles.arrow}/>
      <div className={styles.bottom}>
      </div>
      <img src="/images/bottom-text.png" className={styles.bottom_text}/>
      <button className={styles.unlock} onClick={() => {
          Router.push('https://digifizzy.xyz/unlockable/3')
      }}>
        Unlock
      </button>
    </>
  )
}

export default UnlockPageThree