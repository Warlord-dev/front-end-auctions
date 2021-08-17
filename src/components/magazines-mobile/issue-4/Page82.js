import React from 'react'
import Link from 'next/link'
import styles from './page82.module.scss'

const Page82 = () => {
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
        What is the who, how and why behind Mirror?
        <br /><br />
        Mirror is a decentralized platform for creators who want to upgrade to using web3. All content on Mirror is stored on a decentralized content-storage system and can be accessed anywhere in the world via an independent API. We give creators powerful economic tools, such as crowdfunding and NFT auctions - three examples of which include PartyBid, Infinite Garden, and the EIP-1559 NFT Series.        
      </div>
      <div className={styles.text2}>
        There is currently a small development team building Mirror's tooling, but a larger community is co-creating everything you see, and these creators will eventually own the network and continue to expand it together. This is the promise of web3 and the ownership economy.        
      </div>
      <div className={styles.text3}>
        <br /><br />
        Users who want to join Mirror are required to participate in a $WRITE Race. Can you break down what this involves and why you chose to go that route?
        <br /><br />
        To join Mirror, you need to "burn" (receive and then destroy) a full $WRITE token, and choose a Mirror subdomain (e.g. dev.mirror.xyz). This subdomain can receive payments on the Ethereum network.
        <br /><br />
        This signup and ownership process makes it more difficult to join Mirror, which prevents a form of attack on the network called a sybil attack - where one person joins under many different counterfeit identities. By preventing sybil attacks, we facilitate community members knowing and trusting each other, and this allows us to build more ownership-related features. Trust and community are really important to the Mirror network.
        <br /><br />
        We didn't want Mirror's development team choosing who received $WRITE tokens, and so we created an open voting system to allow the community to form organically. Anyone can authenticate to the voting system via Twitter and vote on who should be included - with 10 new tokens being minted and sent to top candidates each week. With each new round, everyone's voting power increases by 10 votes if they voted in the previous round - which rewards consistent voting. Incentives like this are a salient feature of web3. Anyone who was voted into Mirror gets a boost of 1000 votes for future rounds.
        <br /><br />
        Note: DAOs (an on-chain organization) can also be voted in and then invite members of their own communities to create content with their own identities on Mirror. So it does not have to be 1 $WRITE token per person - just one token per subdomain.
        <br /><br />
        So far, this process has created a diverse and interesting community of members, and we're continuously learning and improving this process. Admittedly, though, the $WRITE Race creates a bit of a popularity contest and so we are working with a third-party data scientist to analyze the network and we will be airdropping $WRITE tokens to expand the community in a thoughtful and inclusive way - informed by data and proposed by someone outside of our development team.        
      </div>

      <div className={styles.writeText1}>
        $write
      </div>
      <div className={styles.writeText2}>
        write
      </div>
      <div className={styles.writeText3}>
        $write
      </div>
      <div className={styles.writeText4}>
        $write
      </div>
      <div className={styles.writeText5}>
        $write
      </div>
      <div className={styles.writeText6}>
        write
      </div>
      <div className={styles.writeText7}>
        $write
      </div>
      <div className={styles.writeText8}>
        $write
      </div>
      <div className={styles.writeText9}>
        $write
      </div>
      <div className={styles.writeText10}>
        write
      </div>
    </div>
  )
}

export default Page82