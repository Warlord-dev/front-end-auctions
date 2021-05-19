import React from 'react'
import styles from './page42.module.scss'

const Page42 = () => {
  return (
    <div className={styles.wrapper}>
    
    <img src='./magazine/1/images/mobile/page42/art2.png' className={styles.artImg}/>
    <img src='./magazine/1/images/mobile/page42/Rectangle.png' className={styles.rectImg}/>
    <img src='./magazine/1/images/mobile/page42/diamond 1.png' className={styles.diamond1Img}/>
    <img src='./magazine/1/images/mobile/page42/diamond 2.png' className={styles.diamond2Img}/>
    <img src='./magazine/1/images/mobile/page42/diamond 3.png' className={styles.diamond3Img}/>
    <img src='./magazine/1/images/mobile/page42/man.png' className={styles.manImg}/>
    <img src='./magazine/1/images/mobile/page42/diamond 3.png' className={styles.diamond4Img}/>
    <img src="./magazine/1/images/mobile/twitter 3.png"  className={styles.twitter_1}/>
    <img src="./magazine/1/images/mobile/twitter 3.png"  className={styles.twitter_2}/>
    <img src="./magazine/1/images/mobile/twitter 3.png"  className={styles.twitter_3}/>
    <img src="./magazine/1/images/mobile/twitter 3.png"  className={styles.twitter_4}/>
    <p className={styles.header1}>DEFI GEMS</p>        
    <h1 className={styles.header2}>diamond ha</h1>
     
    <p className={styles.text}>
      <span>ELASTICDAO</span><br/>
      A platform to manage decentralised organisations and make governance fairer. Projects will be able to launch their DAOs and governance tokens through the platform where ElasticDAO’s solution to governance achieves three main goals; whale proof, free-rider proof, and it is very much a “skin in the game” approach where token holders are directly incentivised to participate and contribute to the project’s success. It’s a super innovative approach that manages to solve some of the biggest issues in project governance, while still being a great profitable investment for active governance participants. $EGT tokens are directly backed by the projects ETH treasury, allowing anyone to exit by redeeming and burning their $EGT in exchange for their share in the $ETH treasury. This not only incentivises voters to only vote for expenses that will be beneficial and bring value to the project over the long term, since these expenses will be taking $ETH out of the treasury and decreasing the amounts backing each $EGT. But, also, in the case of an attempted hostile take-over by whales buying a large part of the supply to take control of governance, token holders will always be able to redeem/burn their tokens and exit with their share of the treasury as a last line of defense.
      <br/><br/><br/>
      <span>PUSH PROTOCOL</span><br/>
      The first ‘Ethereum Push Notification Service’ (EPNS)— a decentralised notification protocol that enables users (wallet addresses) to receive notifications directly from decentralised or centralised services in a privacy preserving manner. Today, communication between web3 providers and consumers often occurs through email, social media, Telegram, etc. This defeats the purpose of web3, as it depends on centralised providers and sacrifices user privacy, especially for communications specific to the users’ wallets. And to preserve decentralisation and privacy, major DeFi platforms don’t even have user logins or notifications. So today if a loan is liquidated on Aave or Compound, there is no way to notify the wallet owner. Users need to actively monitor their wallets for such events. EPNS solves all of this. And, their integration of IPFS means notifications can include not only text, but also images, audio and video. Some possible notification types; wallet crypto movement tracker, ENS domain expiry, loan liquidation alert, limit order triggered on DEX, communication of urgent information to token holders (protocol exploit, token swap deadlines, etc). 
      <br/><br/><br/>
      <span>M!XSOM3</span><br/>
      A DeFi strategy aggregator that allows the execution of a collection of DeFi strategies (“flows”) by wrapping up multiple transactions into a joint transaction that is then executed by a single smart contract. And, it’s built on xDAI for greater sustainability in transaction costs and speed— a strategy that would usually involve 3 or 4 gas hungry txs on ETH L1, will now involve two simpler bridging txs (to get in and out of the xDAI sidechain) and all the remaining complex txs will happen on xDAI. An example of DeFi Flow would be: swap ETH for DAI -> deposit DAI into Curve to get yCRV -> deposit yCRV into yearn to get yUSD. Doing all this in a single, low-fee wrapped tx will not only save a lot of gas fees, but will also make the whole process a lot more user friendly. Imagine showing a no-coiner friend that they can go from fiat to USD stablecoins on curve/yearn earning 15%-20% APYs with a few clicks, and without ever needing to get exposure to more volatile crypto assets!? This is how we get the next wave of #DeFi adoption.
    </p>
    <br/>
    <p className={styles.header3}>
    - rafi_0X
    </p>
    </div>
    
  )
}

export default Page42