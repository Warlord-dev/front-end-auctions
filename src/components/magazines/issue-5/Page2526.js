import React, { useState } from 'react'
// import MetamaskLogo from '@components/metamask-logo'
import styles from './page2526.module.scss'

const Page2526 = () => {
  const [refreshNum, setRefreshNum] = useState(0)

  return (
    <div className={styles.wrapper} onMouseMove={() => {
      if (refreshNum === 0) {
        setRefreshNum(1)
      }
    }}>
      <img src='./magazine/5/images/2526_image2.png' className={styles.fox1} />
      <img src='./magazine/5/images/2526_image2.png' className={styles.fox2} />
      <img src='./magazine/5/images/2526_image2.png' className={styles.fox3} />
      <img src='./magazine/5/images/2526_image2.png' className={styles.fox4} />
      <img src='./magazine/5/images/2526_image2.png' className={styles.fox5} />
      <img src='./magazine/5/images/2526_image2.png' className={styles.fox6} />
      <div className={styles.rect1}></div>
      <div className={styles.rect2}></div>
      <img src='./magazine/5/images/2526_image1.png' className={styles.image1} />
      <div className={styles.leftSideFrame}></div>
      <div className={[styles.animationFrame, styles.leftSideImageWrapper].join(' ')}>
        <img src='./magazine/1/images/howtogetintext 2.png' />
        <img src='./magazine/1/images/howtogetintext 2.png' />
        <img src='./magazine/1/images/howtogetintext 2.png' />
        <img src='./magazine/1/images/howtogetintext 2.png' />
      </div>
      <div className={styles.rightSideFrame}></div>
      <div className={[styles.animationFrame, styles.rightSideImageWrapper].join(' ')}>
        <img src='./magazine/1/images/howtogetintext 1.png' />
        <img src='./magazine/1/images/howtogetintext 1.png' />
        <img src='./magazine/1/images/howtogetintext 1.png' />
        <img src='./magazine/1/images/howtogetintext 1.png' />
      </div>
      <img src='./magazine/5/images/2526_image4.png' className={styles.metamask1} />
      <img src='./magazine/5/images/2526_image4.png' className={styles.metamask2} />
      {/* <MetamaskLogo className={styles.metaMask} refreshNum={refreshNum}/> */}
      <a href='https://metamask.io/' target='_blank'>
        <div className={styles.text1}>
          METAMASK
        </div>
      </a>
      <a href='https://metamask.io/' target='_blank'>
        <div className={styles.text2}>
          METAMASK
        </div>
      </a>
      <div className={styles.text3}>
        <span>
          UX in crypto has always been a big talking point. How important do you think useability for a mainstream user is for interacting with tokenised identity online? 
        </span>
        <br /><br />
        If we want crypto to have global adoption, then usability is extremely important. Currently, there’s a lot of technical understanding that is required for users to navigate the space (seed phrase, private keys, L2s, networks, accounts, etc).  As time goes on, there’ll be more ways to abstract away some of the technical complexities so user’s aren’t required to understand or think about the underlying architecture. We’re not there yet, but the MetaMask product and design team have been doing futuristic explorations to help guide what that better-usability, future state could look like.  
        <br /><br />
        <span>
          Signing in with an ethereum address is becoming more common place, how actively is metamask designed to facilitate that user flow? Do you see the future of web3 auth continuing as browser plugins or taking a completely different and even more directly embedded form?
        </span>
        <br /><br />
        Today, MetaMask provides a few key values for users 1) managing keys 2) connecting to web3 sites and signing transactions and 2)  viewing and managing networks and assets. The design team is currently working on an initiative to improve the dapp connection/signing experience and make it easier to view and managing permissions and allowances that have been granted to sites.         
      </div>
      <div className={styles.text4}>
        <span>
          Wallet solutions are a lot more common place these days, yet, metamask is still ultimately the most common used hot wallet. Why do you think that is?
        </span>
        <br /><br />
        MetaMask is the OG of Ethereum wallets and the security and reliability have stood the tests of time. We’re also increasingly becoming a multi-chain wallet, have stellar adoption and retention globally, and have built a trusted and credible brand and a beloved fox :)         
      </div>
      <div className={styles.text5}>
        <span>
          To what extent is metamask working to enhance support for display of NFTs, integrating ENS and even allowing for PFP NFT linkage to a specific account?
        </span>
        <br /><br />
        We are currently working on adding NFT support on the browser extension and enhancing the mobile NFT experience. There’s been a lot of product discussion around PFP NFTs but no definitive plans.
        <br /><br />
        <span>
          What is your thoughts on the whole seed phrase friction. Is there a way to maintain decentralised security and ownership of an account and also reduce the likelihood of a user forgetting their web3 login credentials? 
        </span>
        <br /><br />
        Seed phrase friction is definitely one of the most challenging experiences for users new to MetaMask. Phishers are always looking for ways to convince users to reveal their seed phrase resulting in loss of funds. Or users fail to properly backup their seed phrase and cannot recover their accounts.
        <br /><br />
        Over the last few quarters, we have incorporated more seed phrase education within the onboarding flow and in-app. But ultimately, we are looking at other key management and social recovery strategies  to help reduce the friction of the seed phrase and make it easier for users to recover their wallet, while keeping it decentralized.
        <br /><br />
        While the seed phrase is definitely a friction point, we recently talked to a number of users in emerging markets and many of those users have a deeper understanding of the value of key ownership and keeping their seed phrase safe. A user in Nigeria said he keeps it in a notebook that he carries all the time and even sleeps with.          
      </div>
      <div className={styles.text6}>
        <span>
          Anything that new users coming into the space should definitely know about metamask and why it trumps other wallets?
        </span>
        <br /><br />
        MetaMask’s security and reliability have stood the tests of time and now we are the largest decentralized wallet with over 10 million monthly active users. We listen to the community and our users needs and are iterating quickly. We also have some exciting designs around the corner that improve the information architecture and navigation of MetaMask and lay the foundation for a better multi-network and multi-chain experience, improved asset management, and new features.        
      </div>
      <div className={styles.text7}>
        The Face of Web3        
      </div>
      <a href='https://twitter.com/rachelcope' target='_blank'>
        <img src='./magazine/5/images/2526_image3.png' className={styles.image3} />
      </a>
    </div>
  )
}

export default Page2526
