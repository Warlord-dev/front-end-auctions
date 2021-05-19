import React from 'react'
import styles from './page27.module.scss'

const Page27 = () => {
  return (
    <div className={styles.wrapper}>
      <video autoPlay muted loop >
        <source src='./magazine/1/videos/moshed-05-01-15-49-19.mp4' type="video/mp4" />
      </video>
      <img src='./magazine/1/images/Ellipse 39.png' className={styles.ellipseImage} />
      <h1>
        SUSTAINABILITY <br />PIONEERS
      </h1>
      <img src='./magazine/1/images/ts 1.png' className={styles.timPhoto} />
      <h2>
        TIM SWEENEY DONATES TO Appalachian fund
      </h2>
      <p className={styles.text1}>
        Tim Sweeney, founder and CEO of Epic Games, donated over 7,500 acres of land on Thursday to Asheville-based nonprofit Southern Appalachian Highlands Conservancy. 
        <br /><br />
        The donation included dozens of land parcels rising to 5,300 feet, including rare plants and animals (Some of them on the endangered species list), waterfalls and the largest American Chestnut restoration project. 
      </p>

      <h4 className={styles.layer1}>
        LAYER TWO
      </h4>
      <h4 className={styles.layer2}>
        LAYER TWO
      </h4>
      <h4 className={styles.layer3}>
        LAYER TWO
      </h4>

      <p className={styles.text2}>
        Scaling for Ethereum has been a hot topic for 2021, providing much needed solutions for how we can continue to interact in a web3 environment without being absolutely obliterated by large gas fees from an increasingly congesteded network or know that sustainability wise we could be doing better.
        <br /><br />
        For a quick TLDR and break down on what scaling infrastructure actually means; there are two core scaling routes, Layer 2 scaling and Side Chains. 
        <br /><br />
        Layer 2 relies on the security of the main layer; the Ethereum blockchain. It leverages off of the main chain’s security, robustness and network effects. Some examples are plasma, optimistic roll ups and ZK roll ups. 
        <br /><br />
        Side chains rely on their own consensus and security models i.e both Matic PoS chain and xDAI, where Matic’s PoS chain not only introduces a 99% more energy efficient system, but, also still remains heavily interconnected with the Ethereum developer community. 
      </p>
      <p className={styles.text3}>
        But with all this said, the real reason why Layer 2s are so vital, so impactful, is because ultimately they serve to provide better onboarding ramps and a more all-embracing user experience. 
        <br /><br />
        They allow us to build better, wider and more interoperable roads between us, what we create and the other people that make up the fabric of web3 based networks. Mass global adoption won’t happen on its own or over night. But if we are to enable for it being possible and to be ready for when it does happen we must be able to meet the user’s expectation for what they will using scaling for.         
      </p>
      <img src="./magazine/1/images/mobile/27-01.png" className={styles.image1} />
    </div>
  )
}

export default Page27