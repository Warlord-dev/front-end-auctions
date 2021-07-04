import React from 'react';
import styles from './page1112.module.scss';
import Link from 'next/link';

const Page1112 = () => {
  return (
    <div className={styles.wrapper}>         
      <video  muted loop autoPlay className={styles.video1}>
        <source src="./magazine/3/images/11_12/video1.mp4" type="video/mp4" />
      </video>
      <div className={styles.image2}></div>
      <div className={styles.image3}></div>
      <div className={styles.image4}></div>
      <div className={styles.image5}></div>
      <div className={styles.image6}></div>
      <p className={styles.text5}>1. You’ve had a front row seat and back stage pass to the entire run up of visual NFTs. Why do you think now is the right time for audio NFTs?</p>
      <p className={styles.text6}>It's easier to land a placement for an audio file than a visual file. The first stage of NFT collecting was patronage - collectors supported artists to empower their craft. The next chapter is true ownership - and with that, there are more proven channels for audio to be monetized (think Spotify, Audius, podcasts, etc.). We're going to see a huge wave of artists looking to share master royalties with their fans and audio NFTs will be the main way in which this is done.</p>
      <p className={styles.text7}>2. Not everyone knows this but you actually studied the business of music in school, how has what you’ve experienced in web3 both in general and in music specifically either changed your perspective on what you were taught or contradicted what you were taught?</p>
      <p className={styles.text8}>Nice homework! Having started my career in music and then going full-time crypto, I was able to take a step back and look at the music industry with a new lens. The entertainment at large is structured very differently from the start-up world, and with it comes a new sets of opportunities and challenges. Working in web3 has shown me that giving true ownership to your community is the only path forward. A lot of artists in music preach a two-way relationship with their fans, but very very few are actually doing it well. I believe that crypto is the way for artists to be incentivized and empowered by engaging with their fans on a more meaningful level.</p>
      <img src="/magazine/3/images/11_12/image2.png" className={styles.image7}/>  
      <img src="/magazine/3/images/11_12/image3.png" className={styles.image8}/>  
      <img src="/magazine/3/images/11_12/image1.png" className={styles.image1}/>   
      <p className={styles.text9}>3. We’ve seen a variety of projects experimenting with social tokens. WTF are social tokens and what do you think is special about them? </p>
      <p className={styles.text10}>Social tokens are digital assets that represent a brand, individual or community. Social tokens give projects that historically not be well suited to raise outside capital an opportunity to source capital and deploy it as a community. It adds a dimension of shared ownership and upside that allows any contributor to earn financial and social capital from their work. Social tokens will power the Creator Economy and the rise of micro-economies.</p>
      <p className={styles.text11}>4. Have you seen any interesting projects combining audio NFTs and social tokens?</p>
      <p className={styles.text12}>The closest to it is Mirror. They offer tools for crowdfunding through both NFTs and social tokens. With Mirror, you can back a crowdfund and receive a social token in return. The act of backing the crowdfund could also come with an NFT attached to it. Right now, most creators are tying together 2-3 separate platforms (Catalog, Mirror, Foundation, NIFTEX) to experiment with fractionalization - the easiest way to add a social token component to any NFT. I'm most excited for a forthcoming platform called Fractional to be a leading player in fractionalization and I expect audio NFTs to be a big part of its ecosystem.</p>
      <p className={styles.text13}>Coopahtroopa</p>
      <p className={styles.text14}>5. So, where to next?</p>
      <p className={styles.text15}>The Creator Economy is here to stay. I'm spending most of my time these days on DAOs as a direct onramp to wider Creator Economy sustainability. By giving a digital community a foundation through a DAO, we can start to see really cool experiments like NFTs at concerts, governance over festival lineups and much much more. I couldn't be more excited to watch the Creator Economy take crypto mainstream in the next 3-5 years.</p>
      <img src="/magazine/3/images/11_12/image3.png" className={styles.image9}/>  
      <p className={styles.text16}>READ MORE FROM COOPAH... YES?!</p>
      <Link href="https://alias.co/coopahtroopa/essays">
        <a target="_blank">
          <p className={styles.text17}>DOWN THE RABBIT HOLE</p>
        </a>
      </Link>
      <Link href="https://twitter.com/Cooopahtroopa">
        <a target="_blank">
          <p className={styles.text18}>Coopahtroopa</p>
        </a>
      </Link>
      <p className={styles.text1}>Open Source Oasis</p>
      <p className={styles.text2}>L i b r e S o f t w a r e</p>
      <p className={styles.text3}>L i b r e S o f t w a r e</p>
      <p className={styles.text4}>OpenWeb</p>
    </div>
  );
};

export default Page1112;