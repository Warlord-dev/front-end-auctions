import React from 'react'
import Link from 'next/link'
import styles from './page33.module.scss'

const Page33 = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.background} src='./magazine/4/images/3738_background2_mobile.png' />
      {/* <img className={styles.image1} src='./magazine/4/images/3738_image2_mobile.png' /> */}

      <Link href='https://bosonprotocol.io/'>
        <a target='_blank'>
          <div className={styles.protocolText1}>
            Boson Protocol
          </div>
        </a>
      </Link>

      <Link href='https://bosonprotocol.io/'>
        <a target='_blank'>
          <div className={styles.protocolText2}>
            Boson Protocol
          </div>
        </a>
      </Link>

      <Link href='https://bosonprotocol.io/'>
        <a target='_blank'>
          <div className={styles.protocolText3}>
            Boson Protocol
          </div>
        </a>
      </Link>

      <Link href='https://bosonprotocol.io/'>
        <a target='_blank'>
          <div className={styles.protocolText4}>
            Boson Protocol
          </div>
        </a>
      </Link>

      <div className={styles.text1}>
        1. What can you tell us about the power of bridging the metaverse and the universe as you put it? 
        <br /><br />
        As metaverses continue to grow in usage, environments and ultimately in potential, the gap between these virtual realms and the universe inversely shrinks. People’s digital and real-life experiences will grow ever closer. 
        <br /><br />
        The power of bridging the metaverse and universe lies in contributing to the removal of boundaries between the two and Boson Protocol is delighted to be playing a role in that. 
        <br /><br />
        With people's innate desire for reward and recognition across both planes of existence, it’s only right that they should be able to earn and redeem their digital experiences in the physical world. Doing so affirms a real-life physical experience with digital worlds. 
        <br /><br />
        By helping the two interact and by reducing cross-verse barriers between people and products, brands and businesses, or even events and engagements, mankind will have unique commerce experiences come together in a way that has never before been seen in our history.
      </div>
      <div className={styles.text2}>
        2. What are the foundational pillars that are necessary in the technology stack for truly decentralised commerce to take route and flourish? 
        <br /><br /><br />
        At Boson we’re building what we consider a core primitive of dCommerce. Boson Protocol is essentially an escrow and payment system. Our Protocol will enable basic functionality of buyers and sellers transacting in a trust minimized way. 
        <br /><br />
        Beyond that, the decentralized commerce stack is made up of a range of components. Most notably among them are notions of identity and financial application. Adding these components over time will allow the ecosystem to flourish and enable new and exciting use-cases. 
        <br /><br />
        We’re standing on the shoulders of giants, as decentralized commerce will be able to leverage existing web3 primitives from the DeFi and the NFT world. As such, we’re closely following major developments such as rollups and other scalability solutions.
      </div>
      <div className={styles.text3}>
        3. Could you tell us more about the relationship between Commitment NFTs and Thing tokens? We find it particularly interesting when you talk about buying and selling being tokenised as a futures contract. What more can you say about this? 
        <br /><br />
        Each type of Boson Commitment NFT can be purchased with a specific Thing Token.
        <br /><br />
        Boson Protocol establishes an initial commitment from both parties, in the form of a deposit, to sell/purchase an item. This incentivizes participants on both sides to act in a fair manner. We tokenize this commitment to exchange as a Commitment NFT. 
        <br /><br />
        Commitment NFTs represent a tokenized agreement between buyer and seller that they will transact fairly. Having custody of a Commitment NFT grants the holder the right to redeem the token for a particular product. Or, it can then be exchanged and traded like a futures contract.
        <br /><br />
        Thing Tokens are ERC20s that can represent ‘anything’ including future products to be exchanged between two or more parties. They allow buyers and sellers to participate in liquid digital markets for standardized physical goods. Thing Tokens can flow all across DeFi and leverage innovative financial applications.
        <br /><br />
        Both of these concepts combined will allow merchants and consumers to take part in highly efficient financial markets for physical things, giving superpowers to Web3 commerce.
      </div>
      <div className={styles.text4}>
        4. What is the most interesting use case you have found so far of traditional commerce getting into decentralised commerce? 
        <br /><br />
        We have a range of partners and initiatives lined up that will demonstrate the expansive use cases for traditional commerce to get into decentralized commerce.  
        <br /><br />
        The most basic principle of decentralized commerce is to allow for small businesses to no longer depend on a monopolistic, and oftentimes extractionary, distribution platforms to ensure trust between buyer and seller as is the current case in Web2.
        <br /><br />
        Beyond this, decentralized commerce enables unique applications that are not imaginable in Web2. These can include metaverse commerce, liquid digital markets for anything and even include digital identities for physical products.
      </div>
      <div className={styles.text5}>
        5. Could you tell us more about the recent launch of your virtual lifestyle portal?
        <br /><br /><br />
        We are pioneering the world’s first virtual lifestyle and commerce playground connecting the metaverse with the universe. This initial space, which we are calling Portal, exists in Decentraland, a decentralized 3D virtual reality platform where we made a record-breaking virtual real estate purchase. Portal, connected by Boson Protocol, will enable brands, artists and creators to sell to individuals through in-game purchases of NFTs that are then redeemable for real-world products, services and experiences.
        <br /><br />
        Portal will be a creative and social space that will bring together forward-thinking designers and creators with innovative brands to create never-before-seen experiences. It will be a virtual wonderland full of brand experiences and rewards that will unlock the purchase of unique physical items. We are inviting brands and creators to express their interest in our Portal retail and event spaces, boutiques, arena and branded marketplace.
      </div>
    </div>
  )
}

export default Page33