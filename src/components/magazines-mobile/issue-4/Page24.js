import React from 'react';
import styles from './page24.module.scss';
import Link from 'next/link';

const Page24 = () => {
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
      <Link href="https://bancor.network/">
        <a target="_blank">
        <img src="/magazine/3/images/29_30/image2.png" className={styles.image2}/>
        </a>
      </Link>
      <p className={styles.text1}>Automated Money Markets are BANCOR NETWORK</p>
      <p className={styles.text2}>The BANCOR Breakdown with Steven Fox.</p> 
      <img src="/magazine/3/images/29_30/image3.png" className={styles.image3}/>
      <p className={styles.text5}>Doing DeFi before it was DeFi</p> 
      <p className={styles.text14}>A lot of people reading may not know what Bancor is. What's your favourite way of describing it?</p> 
      <p className={styles.text15}>There are two types of Bancor users.  
      <br/><br/>
Traders: Make trades with low slippage. They can <br/>
also take advantage of our gas-free limit orders.<br/>
<br/><br/>
Liquidity Providers: Instead of just "HODLing" a token, they stake it in a Bancor pool to earn interest, paid in both the token they’ve staked and BNT. Bancor’s unique single-sided staking means that if a liquidity provider stays in a pool for 100 days or more, they are guaranteed their tokens back plus their share of fees paid by traders and liquidity mining rewards.</p> 
      <p className={styles.text6}>What is the closest parallel to what Bancor is replacing in traditional finance/CeFi? </p> 
      <p className={styles.text7}>Liquidity providers stake their tokens and earn fees paid by traders. This essentially takes the business model of banks and makes it available to everyone. For the liquidity providers, staking also starts to feel like depositing into a high-interest savings account at a bank, except the yields are way higher than you could ever get at a bank.</p> 
      <p className={styles.text8}>s there anything unexpected/non obvious about DeFi that you can tell us which more people getting into DeFi really need to know?</p> 
      <p className={styles.text9}>Yes!  It actually relates to the answer above.  When you see a crazy APR, make sure you understand the risks that “Impermanent Loss” poses on your returns. Bancor is the only AMM where when you see an APR, there isn’t a hidden risk behind it. Try it out at bancor.network. If you have any questions the community is super responsive and support is always around to help: t.me/bancor</p> 
    </div>
  );
};

export default Page24;
