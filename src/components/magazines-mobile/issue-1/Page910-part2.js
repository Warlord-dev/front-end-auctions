import React from 'react'
import styles from './page910-part2.module.scss'

const Page910Part2 = () => {
  return (
    <div className={styles.wrapper}>
      {/* <img src='./magazine/1/images/mobile/oasis-bg.png' className={styles.backImage2} /> */}
      <h1>
        Open Source <br /> Oasis
      </h1>
      <div className={styles.innerWrapper}>
      <div className={styles.flex}>
        <img src="./magazine/1/images/mobile/image 372.png" className={styles.imageLeft} />
        <p className={styles.section}>
          <span>NIMBUS</span><br/>
          Pioneering lightweight client implementation for ETH1.0 and ETH2.0. 
          Nimbus allows you to run an Ethereum validator node on esource-restricted hardware (Mobile and Raspberry Pi!!).
        </p>
      </div>
      <div>
      <p className={styles.section}>
        The team is bridging the support for greater onboarding and scalability of ETH2.0, 
        with focus on deployment on embedded systems for meeting all goals of ETH2.0 and web3 for the masses. 
      </p>
      </div>
      <div>
      <p className={styles.section}>
        <span>MOONI</span><br />
        Crypto off-ramps are still far too inadequate for usage by the broader crypto community. 
        We all know the pain of trying to cash out to pay for IRL expenses with fiat.  
        AND, the ones that do exist are centralized exchanges that take control of your crypto assets and enforce strict KYC / AML processes. 
        It’s not a good experience for any web3 native user. 
      </p>
      </div>
      <div>
      <p className={styles.section}>
        MOONI is changing all of that. It’s a web app that connects to your blockchain wallet and then converts cryptocurrencies to fiat, 
        sending them directly into your existing bank account via wire transfer. There is absolutely no KYC required. 
        It’s a single operation, taking less than a minute. And, it’s still FCA compliant. 
      </p>
      </div>
      <div className={styles.flex}>
        <p className={styles.section}>
          They are also integrated with Layer 2 solutions like Polygon (Previously Matic) and  xDAI! MOONI currently supports CHF and EUR, 
          with GBP and USD support coming this year! Exciting stuff! 
        </p>
        <img src="./magazine/1/images/Frame 2.png" className={styles.imageRight} />
      </div>
      <div className={styles.flex}>
        <img src="./magazine/1/images/mobile/image 404.png" className={styles.imageLeft} />
      <p className={styles.section}>
        <span>BEYOND NFT</span><br />
        An interactive NFT format for dynamic NFTs; iNFT. These NFTs can be utilised directly by users on any website with a simple embed. 
        The Beyond NFT platform is driving forward adoption of the new standard. 
      </p>
      </div>
      <div>
        <p className={styles.section}>
        <br /><br />
        iNFTs are ERC721 and ERC1155 standard compliant. They contain a specific unique property, defining their interactivity. 
        The property describes how the NFT works; where to find its code, its configuration and its dependencies. 
        <br /><br />
        Beyond NFT is redefining new use cases for NFTs, where they no longer need to be bound by static metadata. 
        Plus, it’s also available on Polyon and xDAI for Layer 2 compatibility! 
        </p>
      </div>
      <h2 className={styles.first}>L i b r e <br/> S o f t w a r e</h2>
      <h2 className={styles.second}>L i b r e <br/> S o f t w a r e</h2>
      <div>
      <p className={styles.section}>
        <span>IDENA</span><br />
        The very first Proof of Person (PoP) blockchain. Every single node in the network belongs to an individual that has equal voting power. 
        It is one of the most decentralized blockchains with over 6,000 mining nodes. 
        <br /><br />
        IDENA doesn’t require any traditional KYC processes or disclosure of sensitive personal data. Instead, 
        it proves humanness and uniqueness by running an AI-hard Turing test, 
        where all participants from around the globe appear online at the same time in order to solve the test.
      </p>
      </div>
      <div className={styles.flex}>
      <p className={styles.section}>
        As we move into making the metaverse a reality, validating social 
      </p>
      <img src="./magazine/1/images/mobile/image 403.png" className={`${styles.imageRight} ${styles.imageLarge}`} />
      </div>
      <div>
      <p className={styles.section}>
        trustworthiness and digital identity the right way is absolutely essential. 
        Not just for securing against Sybil attacks, but also for ensuring a more transparent and reliable environment 
        that we can safely interact with— our digital identities are the core currency of the metaverse and 
        we don’t want to reinstall the same web2 legacy systems that have already failed all of us. 
      </p>
      </div>
      <div className={styles.flex}>
      <p className={styles.section}>
        <span>FUNGYPROOF</span><br />
        Where do you go to verify the quality of your NFTs? In today’s crazy market, 
        it’s incredibly difficult— especially if you are new to the space, 
        there are all sorts of caveats from asset storage visibility to groups painting the tape to set higher floor prices. 
        <br /><br />
        FungyProof has created the first NFT grader, scoring an NFT based on factors across asset immutability, metadata, environmental impact and marketability. 
        <br /><br />
        As they put it, “Not every NFT lives up to the hype”, and their aim is to bring more transparency and verified ownership to the space, 
        ranking NFTs based on objective technical factors for future proofed quality assurance. 
      </p>
      <img src="./magazine/1/images/mobile/Open Web.png" className={`${styles.imageRight} ${styles.fullImage}`} />
      </div>
      <div className={styles.footerImage}>
        <img src="./magazine/1/images/mobile/image 375.png" className={styles.fullImage} />
      </div>
      </div>
    </div>
  )
}

export default Page910Part2