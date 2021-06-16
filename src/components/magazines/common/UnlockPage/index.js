import React from 'react'
import Router from 'next/router'
import styles from './styles.module.scss'

const UnlockPage = props => {
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
      <button className={styles.unlock} onClick={() => {
        if(issueId === 1) {
          Router.push('/unlockable')
        } else if(issueId == 2) {
          Router.push('/unlockable/2')
        }
      }}>
        Unlock
      </button>
    </>
  )
}

export default UnlockPage