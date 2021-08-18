import React from 'react'
import Link from 'next/link'
import styles  from './page45.module.scss'

const Page45 = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.image1} src='/magazine/4/images/5152_background1_mobile.png' />
      <img className={styles.image2} src='/magazine/4/images/5152_zero.png' />
      <img className={styles.image3} src='/magazine/4/images/5152_zero.png' />
      <img className={styles.image4} src='/magazine/4/images/5152_zero.png' />
      <img className={styles.image5} src='/magazine/4/images/5152_zero.png' />
      <img className={styles.image6} src='/magazine/4/images/5152_zero.png' />
      <img className={styles.image7} src='/magazine/4/images/5152_zero.png' />
      <Link href='https://www.originprotocol.com/en'>
        <a target='_blank'>
          <div className={styles.text1}>
            ORIGIN PROTOCOL        
          </div>
        </a>
      </Link>

      <h1>
        Speed Breakdown w/ <br />
        Coleman Maher          
      </h1>

      <img className={styles.image8} src='/magazine/4/images/5152_image1.png' />

      <div className={styles.text2}>
        <span>What's the most important thing for anyone to know about Origin?</span>
        <br /><br />
        Origin is the only crypto startup with a token that has heavyweight consumer tech founders, including a co-founder of PayPal and the 1st engineer at YouTube, that is working to bring crypto into the mainstream.
      </div>

      <div className={styles.text3}>
        <span>What is your take on decentralised commerce?</span>
        <br /><br />
        Decentralised commerce is a necessary development for free and open markets. It will allow buyers and sellers to resist censorship and being de-platformed. Simply put, it is the future of commerce.
      </div>

      <div className={styles.text4}>
        <span>When you talk about decentralised shops on AWS? What does this entail? What is the decentralisation component here?</span>
        <br /><br />
        Users can host Dshop on IPFS, a decentralised storage protocol, or use AWS or other centralised services to launch their Dshops if that is their preference. Dshops accept cryptocurrency by default over centralised payments.
      </div>

      <div className={styles.text5}>
        <span>How do you feel about Shopify announcing that they are integrating NFTs on Flow blockchain?</span>
        <br /><br />
        We think it is great that traditional centralised platforms and companies are exploring NFTs and crypto. It brings new people and new investors and eyeballs into crypto. However, we prefer completely decentralised solutions and standards and this is why we are building on Ethereum. Long term, we think this is the right decision.
      </div>

      <div className={styles.text6}>
        <span>What NFT use cases on Origin are bringing the most value to creators?</span>
        <br /><br />
        3LAU, an acclaimed DJ, music producer, and crypto influencer launched a tokenised music album on Origin NFT Launchpad. This brought in nearly $12 million and is still the record holder for a music NFT drop. The drop gave exclusive access to unreleased remixes and in-person experiences solely reserved for NFT holders. Utilising the scarcity of NFTs and combining this with real-world utility is one way we are pushing the industry forward.
      </div>

      <div className={styles.text7}>
        <span>What are the most interesting projects building on Origin? Why?</span>
        <br /><br />
        Origin Dollar, or OUSD, is the only stablecoin that earns a yield while in your wallet. It gives you totally passive and easy exposure to the best and safest yields DeFi yield farming has to offer. Also, Origin NFT Launchpad, which allows creators to create totally custom and direct-to-fan NFT launches and experiences. Origin NFT Launchpad has already broken records and made international headlines with its NFT drops.
      </div>
    </div>
  )
}

export default Page45