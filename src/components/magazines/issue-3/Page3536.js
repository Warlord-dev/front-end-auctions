import Link from 'next/link';
import React, { useRef, useState } from 'react';
import styles from './page3536.module.scss';

const Page3536 = () => {
  const ref1 = useRef();
  const [play, setPlay] = useState(false);
  return (
    <div className={styles.wrapper}>
      <img src="/magazine/3/images/35_36/image1.png" className={styles.image1}/>  
      <div className={styles.image2}>
        <img src="/magazine/3/images/35_36/image2.gif" className={styles.image3}/>   
      </div>
      <p className={styles.text1}>Upgrading Optionality. </p> 
      <Link href="https://www.opyn.co/">
        <a target="_blank">
        <p className={styles.text2}>opyn</p> 
        </a>
      </Link>
      <audio className={styles.audio} ref={ref1}>
        <source src="/magazine/3/images/35_36/audio1.mp3" type="audio/mp3" />
      </audio>
      <button className={styles.play} onClick={() => {
          setPlay(!play);
          if (!play) {
            ref1.current.play();
          } else {
            ref1.current.pause();
          }
        }}><img src={`./magazine/3/images/35_36/${play ? 'pause' : 'play'}.png`} className={styles}/></button>
      <img src="/magazine/3/images/35_36/arrow.png" className={styles.arrow}/>  
      <p className={styles.text23}>Alexis and Aparna!</p>  
      <div className={styles.image4}>
        <div className={[styles.animationFrame, styles.rightSideImageWrapper].join(' ')}>
          <img src="/magazine/3/images/35_36/image2.png" />
          <img src="/magazine/3/images/35_36/image2.png" />
          <img src="/magazine/3/images/35_36/image2.png" />
          <img src="/magazine/3/images/35_36/image2.png" />
        </div>
      </div>
      <p className={styles.text3}>Get With the Greeks</p> 
      <p className={styles.text4}>OPYN = DECENTRALISED OPTIONS</p> 
      <p className={styles.text5}>Opyn is a capital efficient DeFi options protocol that allows users to buy, sell, and create options on ERC20s. DeFi users and products rely on Opyn’s smart contracts and interface to hedge themselves against DeFi risks or take positions on different cryptocurrencies.
<br/><br/>
Opyn v2 is built using Gamma Protocol, a capital efficient options protocol that allows DeFi users to trade option spreads and combos, create flash mints, auto-exercise at expiry, create new options on any whitelisted product, and is the only DeFi options platform to enable partially collateralized options.
<br/><br/>
Developers can take advantage of Gamma protocol to build applications using options, including automated options strategies, vesting call options, and liquidation bots and savers. Recently a number of projects have been building on Opyn including ribbon.finance, opeth.finance, optional.finance, fontis.finance and more, enabling users to simply earn yield and hedge using options.</p> 
      <p className={styles.text6}>JAM WITH THEM ON IDEAS xD</p> 
      <Link href="https://opyn.gitbook.io/opyn/">
        <a target="_blank">
          <img src="/magazine/3/images/35_36/image3.png" className={styles.image5}/>
        </a>
      </Link>
      <Link href="https://twitter.com/opyn_">
        <a target="_blank">
          <img src="/magazine/3/images/35_36/image4.png" className={styles.image6}/>
        </a>
      </Link>
      <Link href="tiny.cc/opyndiscord">
        <a target="_blank">
          <img src="/magazine/3/images/35_36/image5.png" className={styles.image7}/>
        </a>
      </Link>
      <p className={styles.text7}>MASON NYSTROMri</p> 
      <p className={styles.text8}>MESSARI </p> 
      <img src="/magazine/3/images/35_36/image7.png" className={styles.image9}/>
      <img src="/magazine/3/images/35_36/image6.png" className={styles.image8}/>
      <p className={styles.text9}><span className={styles.text10}>Could you give a bit more background about your journey into web3?</span>
<br/><br/>
My foreway into crypto started in 2017 when I worked for a local cryptocurrency exchange in Hong Kong. Unlike many other early crypto enthusiasts, I don’t come from a finance background and was naturally more interested in cryptonetworks that aimed at solving problems outside of finance. As I continued my career at ConsenSys and then Messari, this interest naturally led me to dive deeper into companies building out the infrastructure for Web3, NFTs, DAOs, and other types of consumer applications.</p> 
      <p className={styles.text11}><span className={styles.text12}>A lot of this seems focused to individual/independent creators, is that the case? Does the ownership economy exclude larger brands? And in case of that, what’s your view about larger brands coming into the space? For example, protocols like Flow that are focused more on the web2  projects and web2 hybridisation of the space?</span>
<br/><br/>
In general, the power of building an individual brand continues to rise and is the premise behind the ownership economy. However, large brands can succeed by partnering with individuals. For example, Dwayne “The Rock” Johnson has arguably one of the strongest individual brands in the world. The Rock has parlayed his reputation into a clothing line via Under Armour, a Tequila company partnered with Mast-Jägermeister, and a tv show about his adolescent life with NBC. The point here is that larger brands need to leverage the power of individuals and pay them for the value they bring. In regards to crypto, Flow has done an incredible job bringing existing brands like the NBA to crypto. Larger brands will have immense opportunity to license their IP and brands in crypto applications, but should continue to examine how they can best partner with independent creators. </p> 
      <p className={styles.text13}><span className={styles.text14}>What does the future look like for content creators in web3? It’s often described as the ownership economy, but what is that actually?</span>
<br/><br/>
The existing Web is comprised of networks or companies that leverage creators for their products. Early on, these networks or companies like Medium acted as aggregators and provided creators distribution. But distribution is no longer enough of a value proposition for content creators. That’s why Substack has been so successful, because it enables writers to more effectively monetize their work. For example, the top writers on Medium might make $100,000 per year while the top writers on Substack make millions per year. But even Substack limits the upside of creators because it’s the creators that create the value. Web3 is the transition to giving content creators more equity or ownership in the networks they make valuable. To continue the analogy, a Web3 substack would be one in which writers earned equity for the value they provide to substack or artists earned equity/stock in Spotify based on the users they bring to the platform. Web3 removes some of the middlemen on existing content platforms and provides greater upside to the artists. Another key aspect of Web3 is that it enables royalties to more effectively pass through to creators which means creators benefit financially from the lifetime of their work, not just the initial sale. </p> 
      <p className={styles.text15}><span className={styles.text16}>How is content valued in the ownership economy, how do people actually evaluate natively digital assets ie. the metadata of an NFT? </span>
<br/><br/>
The continued growth of crypto is coinciding with a shift in how people perceive value. The best illustration of this shift in value comes from Gen Z and Fortnite. Gaming “skins” (digital clothes) and emotes (actions) are a multi-billion dollar industry for items inside games that provide zero utility value. Fortnite skins and emotes don’t make players jump higher, run faster, or improve the game experience in any way, yet users spend billions of dollars a year. Couple this shift with digitally native ways to transfer and create value (e.g. digital assets on blockchains) and it unlocks enormous potential. As far as how these natively digital assets are value, some are based on perception, others will be valuable because of the utility they provide. Metadata will be increasingly important. The U.S government kills people based on metadata. NFTs and other digital assets will create more metadata on-chain that can be used and parsed to derived social value (e.g. Jay Z once owned this album before). As metadata becomes more prevalent, it will be increasingly valuable both in terms of its predictive value and its social value.</p> 
      <p className={styles.text17}><span className={styles.text18}>What’s the role of a DAO in the ownership economy and how should creators be interacting with DAOs and be able to elevate themselves but also interactions within web3 through them?</span>
<br/><br/>
DAOs are simply a way that individuals can come together to organize, similar to how a group of individuals might create a company. While DAOs are quite rudimentary today, they will become more efficient than existing companies due to their digitally native structures, the open tooling, and ability to evolve at a faster pace. Creators can interact with DAOs as contractors or join DAOs where they feel an aligned mission. As Web3 continues to evolve, DAOs will become the standard organizational structure for group work and collective action.</p> 
      <p className={styles.text19}><span className={styles.text20}>What are your thoughts on people saying NFTs are dead?</span>
<br/><br/>
The notion that NFTs are dead is a misnomer. NFTs are an incredibly broad category and so while one niche like crypto-art has experienced a drawdown in sales, other NFTs within the gaming sector, fantasy sports, avatars, and elsewhere are continuing to grow. In fact, OpenSea, the largest NFT marketplace just facilitated a record $150 million in NFT sales in June.</p> 
      <p className={styles.text21}><span className={styles.text22}>How do we onboard the next billion people into Web3? Specifically creators; how do we give them a platform, resources, tools for achieving greater financial success? How do we serve their needs? And really do it, not just talk about the tech behind it?</span>
<br/><br/>
When people in crypto discuss the benefits of permissionless blockchains they always start by advocating the benefits of decentralization where instead they should focus on the financial benefits that are available. Today, Web3 is still building out key infrastructure, creator monetization is not standardized, and isn’t as easy to use as existing counterparts. However, as Web3 becomes more seamless, creators will naturally shift towards these platforms because they will have an enormous financial upside compared to the legacy platforms. Writers moved from Medium to Substack because they wanted more money. The first writers who moved faced the most significant risk, but also received the greatest upside. The same dynamic lies true for all of crypto and Web3, the first individuals that move will bear the largest burden, but if successful, will benefit disproportionately to those who lag behind. </p> 
    </div>
  );
};

export default Page3536;
