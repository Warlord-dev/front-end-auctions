import React from 'react'
import styles from './page33.module.scss'

const Page33 = () => {
  return (
    <div className={styles.wrapper}>
      <img src='./magazine/1/images/mobile/moshed-05-01-15-49-15 1.png' className={styles.backImage} />
      <div className={styles.innerWrapper}>
      <h1>
        SUSTAINABILITY <br />PIONEERS
      </h1>
      <img src='./magazine/1/images/ts 1.png' className={styles.timPhoto} />
      <h2>
        TIM SWEENEY DONATES TO Appalachian fund
      </h2>
      <p>Tim Sweeney, founder and CEO of Epic Games, donated over 7,500 acres of land on Thursday to Asheville-based nonprofit Southern Appalachian Highlands Conservancy. </p>
      <p>The donation included dozens of land parcels rising to 5,300 feet, including rare plants and animals (Some of them on the endangered species list), waterfalls and the largest American Chestnut restoration project. </p>

      <h4 className={styles.layer1}>
        LAYER TWO
      </h4>
      <h4 className={styles.layer2}>
        LAYER TWO
      </h4>
      <h4 className={styles.layer3}>
        LAYER TWO
      </h4>
      <p>Scaling for Ethereum has been a hot topic for 2021, providing much needed solutions for how we can continue to interact in a web3 environment without being absolutely obliterated by large gas fees from an increasingly congesteded network or know that sustainability wise we could be doing better.</p>
      <p>For a quick TLDR and break down on what scaling infrastructure actually means; there are two core scaling routes, Layer 2 scaling and Side Chains. </p>
      <p>Layer 2 relies on the security of the main layer; the Ethereum blockchain. It leverages off of the main chain’s security, robustness and network effects. Some examples are plasma, optimistic roll ups and ZK roll ups. </p>
      <p>Side chains rely on their own consensus and security models i.e both Matic PoS chain and xDAI, where Matic’s PoS chain not only introduces a 99% more energy efficient system, but, also still remains heavily interconnected with the Ethereum developer community. </p>
      <p>But with all this said, the real reason why Layer 2s are so vital, so impactful, is because ultimately they serve to provide better onboarding ramps and a more all-embracing user experience. </p>
      <p>They allow us to build better, wider and more interoperable roads between us, what we create and the other people that make up the fabric of web3 based networks. Mass global adoption won’t happen on its own or over night. But if we are to enable for it being possible and to be ready for when it does happen we must be able to meet the user’s expectation for what they will using scaling for. </p>
      </div>
    </div>
  )
}

export default Page33