import React from 'react';
import styles from './page26.module.scss';

const Page26 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image2}></div>
      <div className={styles.image11}></div>
      <div className={styles.image12}></div>
      <div className={styles.image13}></div>
      <div className={styles.image27}></div>
      <div className={styles.image5}></div>
      <div className={styles.image6}></div>
      <div className={styles.image7}></div>
      <div className={styles.image8}></div>
      <p className={styles.text1}>Poly-Yield</p>
      <p className={styles.text3}>Gainz on the Layer 2</p>
      <p className={styles.text10}>Can you introduce yourself. How did you get involved with Polygon and the crypto/DeFi space in general?</p>
      <p className={styles.text11}>Hey everyone, I am Hamzah. I come from an engineering background, started my career writing code for Citibank R&D but soon started looking into startups. Worked in Dubai for a year in startups, running some software consultancy gigs myself until Fall ‘21. Although I had gotten into crypto during college in 2017, but it was only in ‘21 when I genuinely got into the space buying some crypto like everyone else. But I quickly moved on-chain after reading about DeFi and all the legos it had like Uniswap, Compound etc. Soon I realised that to better understand the space I needed some experience and Polygon at the time was a perfect opportunity to kickstart things.</p>
      <img src="/magazine/3/images/31_32/image2.png" className={styles.image19}/>
      <p className={styles.text12}>Hamzah Khan Head of DeFi Polygon </p>
      <img src="/magazine/3/images/31_32/image7.png" className={styles.image26}/>
      <img src="/magazine/3/images/31_32/image3.png" className={styles.image23}/> 
      <img src="/magazine/3/images/31_32/image1.png" className={styles.image21}/> 
      <img src="/magazine/3/images/31_32/image4.png" className={styles.image25}/>
      <img src="/magazine/3/images/31_32/image6.png" className={styles.image32}/>
      <img src="/magazine/3/images/31_32/image6.png" className={styles.image31}/>
      <p className={styles.text13}>Can you tell us a bit more about Polygon and what this new Layer 2 infrastructure means for DeFi?</p>
      <p className={styles.text14}>Sure. Polygon is an Ethereum scaling solution with 2 solutions already in production - Plasma chain and PoS commit chain. Our founders were core contributors to the Plasma research group back in 2018 when the first Ethereum congestion occurred. It was the dawn of Cryptokitties. Since then PoS chain launched, which today holds over 6B in TVL and over 500 dapps across DeFi, NFTs and Gaming.
<br/><br/>
A Layer 2 space is extremely important if DeFi has to hit mainstream. We currently have over 2.5M wallets which roughly means less than 1M actual users. Thats 0.1% of a billion smart phones out there which DeFi can disrupt. Polygon’s mission with scaling solutions is to bring #DeFiForAll. To facilitate this, you can see most of the Ethereum blue-chips have moved to Polygon to reach retail users and their DAOs are earning more revenue than the L1 market. Its a clear product market fit. </p>
      <p className={styles.text16}>A large caveat still with DeFi and also Layer 2’s in general is the lack of simplicity in the user onboarding. Yield farming, changing RPC’s etc. are still very new terms and actions for a lot of newcomers wanting to get into web3 and start taking the reins for gaining the full potential in their own lives, not reliant on or stopped by a middleman. How do you see Polygon supporting more adoption and onboarding of DeFi so that it can truly reach the billions of people that it should? </p>
      <p className={styles.text17}>This is definitely a difficult problem to solve. Its a gradual process which will take years and many communities to work together and evangelise on this front. <br/>
Polygon is working actively to increase mobile wallet support - a major UX improvement to onboard next million users. We have jointly put up a DAO with 0x Project of $10M which can be utilized by developers to build DeFi tooling, products and infra on Polygon to ease usage. RPCs certainly was an issue earlier but with Infura and Chainstack support, things are more reliable. I would suggest to signup with any of the above providers to use a dedicated plan. Its free of charge, much better than public RPCs. Also we are working with Alchemy to have a dedicated load balancing RPC that can help in times of resource crunch. <br/>
There’s also void in DeFi education space - if anyone’s building content around that. We are happy to help. 
</p>
    </div>
  );
};

export default Page26;
