import React from 'react'
import Link from 'next/link'
import styles from './page83.module.scss'

const Page83 = () => {
  return (
    <div className={styles.wrapper}>
      <img src='/magazine/4/images/8990_background1_mobile.png' className={styles.image1} />
      <img src='/magazine/4/images/8990_image3_mobile.png' className={styles.image2} />
      <img src='/magazine/4/images/8990_image1.png' className={styles.image3} />
      <img src='/magazine/4/images/8990_image2.png' className={styles.image4} />
      <Link href='https://mirror.xyz/'>
        <a target='_blank'>
          <h1>
            MIRROR.XYZ
          </h1>
        </a>
      </Link>
      <h2>
        Decentralising publishing
      </h2>
      <div className={styles.text1}>
        <br /><br />
        What is the most interesting use of Mirror you've seen so far by existing users and what use cases do you see emerging from community activity?
        <br /><br />
        For me, the crowdfund of PartyBid was fascinating because it created a DAO around a token, and this DAO then produced a product that might become extremely successful.         
      </div>
      <div className={styles.text2}>
        PartyBid has already done over 1,861 ETH in volume at the time of writing. Songcamp is a DAO that is raising funds and selling NFTs of their music on Mirror. There are also a few writers, like Emily Segal, who have raised funds for published works - see how Emily crowdfunded her next novel using $NOVEL token. So there is a diversity of creators and DAOs that are using these tools for various projects. I'm excited to see what else they create, and who else they invite to Mirror.
      </div>
      <div className={styles.text3}>
        Mirror is more than a decentralised publishing platform. You also have a strong emphasis on a crowdfunding component. What made you decided to prioritise that as you build out web3 tools for writers? 
        <br /><br />
        We always thought of Mirror as more than a writing platform. I think that the web is fundamentally a story-telling technology and web3 is an economic platform. For a web3 crowdfund to be successful, a convincing story must be told, and so we joined the fundamentals of web and crypto and made a community-based creator economy platform with narrative as a core component.
      </div>
      <div className={styles.text4}>
        Broad user education and onboarding remain among the hardest challenges for scaling web3 and crypto adoption. What role can Mirror play in facilitating this process? 
        <br /><br />
        Although there is some difficulty understanding a few fundamental concepts - like wallets and tokens and transactions - web3 enables very exciting new possibilities, and it's actually very easy to use these new features once the fundamentals are learned. For example, it's actually much easier to run a crowdfund on Mirror than on Kickstarter, once you know how to execute an Ethereum transaction. People just need to be sufficiently motivated to learn web3, which requires more interesting products than DeFi. NFTs really broaden crypto's capability to interest people enough to onboard, and crowdfunds are just another useful tool for communities that web3 enables!
      </div>
    </div>
  )
}

export default Page83