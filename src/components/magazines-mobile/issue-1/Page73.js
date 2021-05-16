import React from 'react'
import styles from './page73.module.scss'

const Page73 = () => {
  return (
    <div className={styles.wrapper}>
      <img src="./magazine/1/images/mobile/page73-bg.png" className={styles.backImage} />
      <div className={styles.innerWrapper}>
        <h1 className={styles.title}>WEB3 WIZARDS</h1>
        <div className={styles.section1}>
          <p>Developing in web3, Ethereum, crypto, NFTs and everything that it encompasses is no easy feat. It’s a constant engagement between building on the bleeding edge, writing code that has never been written before, and, at the same time, navigating to best defend, safeguard against and better embrace the constantly evolving hostilities that an open bazaar evironment naturally cultivates; whether that be security vulnerabilites, terrible UX or just the almost complete inflexibility for errors.</p>
          <p>To pay homeage to the often overlooked lionhearts within the web3 community— the devs— we are introducing Web3 White Hats; an ongoing series of on-chain NFT web3 dev characteristaions; spotlighting new devs every issue, all designed and minted in-house by DIGITALAX. </p>
        </div>
        <div className={styles.section2}>
          <h1>Layer 2 Trailblazers.</h1>
          <p>For the genesis of Web3 White Hats we are championing the DIGITALAX Engineering Team. A group of metaverse engineers. These devs have successfully deployed the first ever MultiToken Bridge between Layer 1 Ethereum Mainnet and Layer 2 Polygon (Previously Matic Network), supporting the ERC-998 standard and variants. It’s all open sourced. </p>
        </div>
        <div className={styles.card}>
          <h1>Victor.</h1>
          <h2>Project: DIGITALAX.</h2>
          <img src="./magazine/1/images/mobile/victor.png" />
        </div>
        <div className={styles.card}>
          <h1>Haruto.</h1>
          <h2>Project: DIGITALAX.</h2>
          <img src="./magazine/1/images/mobile/haruto.png" />
        </div>
        <div className={styles.card}>
          <h1>Cameron.</h1>
          <h2>Project: DIGITALAX.</h2>
          <img src="./magazine/1/images/mobile/cameron.png" />
        </div>
        <div className={styles.card}>
          <h1>James.</h1>
          <h2>Project: DIGITALAX.</h2>
          <img src="./magazine/1/images/mobile/james.png" />
        </div>
      </div>
    </div>
  )
}

export default Page73