import React from 'react';
import styles from './page25.module.scss';
import Link from 'next/link';

const Page25 = () => {
  return (
    <div className={styles.wrapper}>
      <img src="/magazine/3/images/29_30/image8.png" className={styles.image1}/>
       <div className={styles.topSideFrame}></div>
        <div className={[styles.animationFrame, styles.topSideImageWrapper].join(' ')}>
          <img src="./magazine/1/images/mobile/howtogetintext.png" />
          <img src="./magazine/1/images/mobile/howtogetintext.png" />
          <img src="./magazine/1/images/mobile/howtogetintext.png" />
          <img src="./magazine/1/images/mobile/howtogetintext.png" /> 
        </div>
        <div className={styles.bottomSideFrame}></div>
        <div className={[styles.animationFrame, styles.bottomSideImageWrapper].join(' ')}>
          <img src="./magazine/1/images/mobile/howtogetintext.png" />
          <img src="./magazine/1/images/mobile/howtogetintext.png" />
          <img src="./magazine/1/images/mobile/howtogetintext.png" />
          <img src="./magazine/1/images/mobile/howtogetintext.png" />
        </div>
        <p className={styles.text10}>Can you tell us more about impermanent loss insurance with your V2.1 updates. </p> 
        <p className={styles.text11}>Sure, when most people stake in an AMM, there is a hidden risk called “Impermanent Loss”.  So if you stake on an AMM that doesn’t have a solution, even if you make 15% APYs, you might be losing more than that.  Bancor 2.1 solved this issue for liquidity providers, who receive full compensation for an impermanent loss so long as they stay in the pool for 100 days or more. It’s as simple as, "set it and forget it".</p> 
        <p className={styles.text3}>You started out in 2017, how has the entire crypto and DeFi space evolved since then? What are the strongest signals that you see for where we are all headed? What's your best estimate for the market within the next two years? 
<br/><br/>
Wow.  What a question!  It wasn’t long ago DeFi was first hitting 1 Billion USD in TVL.  Now, there are probably 15 DeFi protocols with over 1 billion locked.  When we created Bancor, DeFi wasn’t even a term yet.  As for the next two years, I imagine more and more people will find out </p> 
      <p className={styles.text12}>Bancor governance is run through a DAO. How do you use this to the community's advantage to stay steady and on course in uncertain times?</p> 
      <p className={styles.text13}>The DAO is amazing, and one of the most active in the industry.  It is living proof of the wisdom of the crowd and I am more impressed each day. Some of the best ideas for pushing the protocol forward are conceived of and implemented by the DAO.</p> 
      <img src="/magazine/3/images/29_30/image4.png" className={styles.image5}/>
      <Link href="https://twitter.com/Bancor">
        <a target="_blank">
          <img src="/magazine/3/images/29_30/image5.png" className={styles.image6}/>
        </a>
      </Link>
      <Link href="https://discord.com/invite/EHK8wHbgau">
        <a target="_blank">
          <img src="/magazine/3/images/29_30/image6.png" className={styles.image7}/>
        </a>
      </Link>
      <Link href="https://blog.bancor.network/">
        <a target="_blank">
          <img src="/magazine/3/images/29_30/image7.png" className={styles.image8}/>
        </a>
      </Link>
    </div>
  );
};

export default Page25;
