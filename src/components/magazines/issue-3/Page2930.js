import React from 'react';
import styles from './page2930.module.scss';
import Link from 'next/link';

const Page2930 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.leftSideFrame}></div>
      <div className={[styles.animationFrame, styles.leftSideImageWrapper].join(' ')}>
        <img src="./magazine/1/images/howtogetintext 2.png" />
        <img src="./magazine/1/images/howtogetintext 2.png" />
        <img src="./magazine/1/images/howtogetintext 2.png" />
        <img src="./magazine/1/images/howtogetintext 2.png" />
      </div>
      <div className={styles.rightSideFrame}></div>
      <div className={[styles.animationFrame, styles.rightSideImageWrapper].join(' ')}>
        <img src="./magazine/1/images/howtogetintext 1.png" />
        <img src="./magazine/1/images/howtogetintext 1.png" />
        <img src="./magazine/1/images/howtogetintext 1.png" />
        <img src="./magazine/1/images/howtogetintext 1.png" />
      </div>
      <img src="/magazine/3/images/29_30/image1.png" className={styles.image1}/>
      <Link href="https://bancor.network/">
        <a target="_blank">
        <img src="/magazine/3/images/29_30/image2.png" className={styles.image2}/>
        </a>
      </Link>
      
      <p className={styles.text1}>Automated Money Markets are BANCOR NETWORK</p>
      <p className={styles.text2}>The BANCOR Breakdown with Steven Fox.</p> 
      <img src="/magazine/3/images/29_30/image3.png" className={styles.image3}/>
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
      <div className={styles.image4}>Steven@bancor.network</div>
      <p className={styles.text3}>You started out in 2017, how has the entire crypto and DeFi space evolved since then? What are the strongest signals that you see for where we are all headed? What's your best estimate for the market within the next two years? 
<br/><br/>
Wow.  What a question!  It wasn’t long ago DeFi was first hitting 1 Billion USD in TVL.  Now, there are probably 15 DeFi protocols with over 1 billion locked.  When we created Bancor, DeFi wasn’t even a term yet.  As for the next two years, I imagine more and more people will find out </p> 
      <p className={styles.text4}>about DeFi and quickly realize that their traditional savings accounts are not even keeping up with inflation. </p>
      <p className={styles.text5}>Doing DeFi before it was DeFi</p> 
      <p className={styles.text6}>What is the closest parallel to what Bancor is replacing in traditional finance/CeFi? </p> 
      <p className={styles.text7}>Liquidity providers stake their tokens and earn fees paid by traders. This essentially takes the business model of banks and makes it available to everyone. For the liquidity providers, staking also starts to feel like depositing into a high-interest savings account at a bank, except the yields are way higher than you could ever get at a bank.</p> 
      <p className={styles.text8}>Is there anything unexpected/non obvious about DeFi that you can tell us which more people getting into DeFi really need to know?</p> 
      <p className={styles.text9}>Yes!  It actually relates to the answer above.  When you see a crazy APR, make sure you understand the risks that “Impermanent Loss” poses on your returns. Bancor is the only AMM where when you see an APR, there isn’t a hidden risk behind it. Try it out at bancor.network. If you have any questions the community is super responsive and support is always around to help: t.me/bancor</p> 
      <p className={styles.text10}>Can you tell us more about impermanent loss insurance with your V2.1 updates. </p> 
      <p className={styles.text11}>Sure, when most people stake in an AMM, there is a hidden risk called “Impermanent Loss”.  So if you stake on an AMM that doesn’t have a solution, even if you make 15% APYs, you might be losing more than that.  Bancor 2.1 solved this issue for liquidity providers, who receive full compensation for an impermanent loss so long as they stay in the pool for 100 days or more. It’s as simple as, "set it and forget it".</p> 
      <p className={styles.text12}>Bancor governance is run through a DAO. How do you use this to the community's advantage to stay steady and on course in uncertain times?</p> 
      <p className={styles.text13}>The DAO is amazing, and one of the most active in the industry.  It is living proof of the wisdom of the crowd and I am more impressed each day. Some of the best ideas for pushing the protocol forward are conceived of and implemented by the DAO.</p> 
      <p className={styles.text14}>A lot of people reading may not know what Bancor is. What's your favourite way of describing it?</p> 
      <p className={styles.text15}>There are two types of Bancor users.  
      <br/><br/>
Traders: Make trades with low slippage. They can also take advantage of our gas-free limit orders.<br/>
<br/><br/>
Liquidity Providers: Instead of just "HODLing" a token, they stake it in a Bancor pool to earn interest, paid in both the token they’ve staked and BNT. Bancor’s unique single-sided staking means that if a liquidity provider stays in a pool for 100 days or more, they are guaranteed their tokens back plus their share of fees paid by traders and liquidity mining rewards.</p> 
    </div>
  );
};

export default Page2930;
