import React from 'react'
import Link from 'next/link'
import styles from './page26.module.scss'

const Page26 = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.image1} src='/magazine/4/images/2728_background1_mobile.png' />
      <img className={styles.image2} src='/magazine/4/images/2728_diamond.png' />
      <div className={styles.text1}>
        Open Source Oasis        
      </div>
      <div className={styles.text2}>
        Open<br />
        Web        
      </div>
      <div className={styles.text3}>
        L i b r e S o f t w a r e
      </div>
      <div className={styles.text4}>
        L i b r e S o f t w a r e
      </div>

      <Link href='https://safient.io/'>
        <a target='_blank'>
          <img className={styles.image3} src='/magazine/4/images/2728_image3.png' />
        </a>
      </Link>

      <Link href='https://yin.finance/'>
        <a target='_blank'>
          <img className={styles.image4} src='/magazine/4/images/2728_image2.png' />
        </a>
      </Link>
      <Link href='https://www.voodfy.com/'>
        <a target='_blank'>
          <img className={styles.image5} src='/magazine/4/images/2728_image5.png' />
        </a>
      </Link>
      <Link href='https://treejer.com/'>
        <a target='_blank'>
          <img className={styles.image6} src='/magazine/4/images/2728_image4.png' />
        </a>
      </Link>
      <Link href='https://nifty.ink'>
        <a target='_blank'>
          <img className={styles.image7} src='/magazine/4/images/2728_image6.png' />
        </a>
      </Link>

      <div className={styles.text5}>
        <span>SAFIENT</span><br />
        Not your keys, not your coins. One of the most well popularised mantras throughout crypto. But what does that mean for                
      </div>
      <div className={styles.text6}>
        inheritance planning? It’s not a question that a lot of us think about, however, if web3 is to continue to scale and grow then we need to catalyse more engineering and product solutions outside of just larger infrastructure plays.  
        <br /><br />
        Addressing specialised use cases is important. Real people need to interact with the technology in order for it to increase in adoption. And inheritance planning is a very real undertaking. If we aren’t able to maintain security and ownership over our crypto, whilst at the same time taking into consideration what we would want to happen to it in case of an unfortunate event, then adoption gets  more difficult. 
        <br /><br />
        Safient is a crypto asset safe and inheritance protocol that helps users securely manage all the critical information that is needed to access and recover the assets so that your loved ones can inherit them with 100% surety incase of any tragic event. It works through the creation of safes on the protocol that ensure you maintain complete access and control over your assets i.e. there is no intermediate custody. Beneficiaries can then be delegated and added to the safe, where they can request access to the funds at any time. Upon request verification and a review is undergone by “trustless safe guardians” from the Kleros decentralised court, ensuring the validity of the claim and resolving transparently any arising disputes. 

      </div>
      <div className={styles.text7}>
        <span>Yin Finance</span><br />
        Yin is using NFTs to bring more liquidity to DeFi. They provide a suite of products for liquidity and 
      </div>
      <div className={styles.text8}>
        yield management, whereby NFTs are used within the smart contract architecture to effectively secure a user’s ownership of their unique and personalised treasury and smart vaults. 
        <br /><br />
        One of these products, CHI, allows users to subscribe to<br />
        programmable strategy NFTs,  whereby YIN designs the LP formula and liquidity strategies from which a user can build upon. This could be something as simple as automatic reinvestments on Uniswap V3 to something more encompassing, like that of combining strategies to short volatility. Either way, it’s another clear way that DeFi composability allows us to put our money to work and see direct rewards from it. 
      </div>
      <div className={styles.text9}>
        <span>VOODFY</span><br />
        There are about 122 million daily active users on Youtube and 15 million on Twitch— so it comes at no surprise that the web3 version of these platforms is being built. Voodfy is a decentralised video hosting platform. It’s completely free and supports both audio, video and live streaming. 
        <br /><br />
        Having more web3 enabled platforms available to creators, beyond the NFT marketplaces that we see in action today, is essential when we think about  properly underwriting the “creative” element of the new creator economy. It’s not enough to just launch social tokens or mint NFTs. Creators need a suite of comprehensive tools at the ready, giving them the productive freedom to form new ingenious combinations and methods for monetising on their content in a way that is personalised to their communities, fans and followers. 
      </div>
      <div className={styles.text10}>
        <span>treejer</span><br />
        Treejer is taking climate action and powering it with blockchain technology. The protocol establishes a secure link for wiring payments and crediting ownership between those that fund tree planting with those that plant them— even if that is in really remote geographic locations. 
        <br /><br />
        These traceable trees enable greater economic inclusion for rural communities, mainly located in underdeveloped and developing countries, where often a lot of the voluntary tree planting takes place. 
        <br /><br />
        Carbon footprints can now be reduced in a more transparent manner that extends throughout the entire life of the planted tree. The ERC-20 O2 proves the existence of a planted tree, whereby the token is minted at a rate based on allometric equations of each species and verified through oracle groups. It’s a completely new and innovative way of combining economic value with gamified environmental sustainability. 
      </div>
      <div className={styles.text11}>
        <span>NIFTY INK</span><br />
        The open bazaar of NFT art marketplaces— that’s Nifty Ink. It allows anyone to create cool 
      </div>
      <div className={styles.text12}>
        digital art NFTs in a  user friendly prioritised way.  Once created the artwork is minted on the xDAI chain and verified for selling on the Nifty Ink marketplace, with the ability to be bridged to the Ethereum mainnet. Beyond this though, the real innovation of the platform is it’s ease of use and implementation of web2 style trojan horse features. On page load an Ethereum keypair is automatically generated and used to sign transactions for minting any NFTs. Think of it like a quick web wallet so that the Creator can prioritise their art over the complexities of navigating distributed login applications.         
      </div>
    </div>
  )
}

export default Page26
