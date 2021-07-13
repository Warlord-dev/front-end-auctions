import React, { useState, useRef } from 'react';
import styles from './page1516.module.scss';
import Link from 'next/link';

const Page1516 = () => {
  return (
    <div className={styles.wrapper}>
      <img src="/magazine/3/images/15_16/image1.png" className={styles.image1}/>  
      <img src="/magazine/3/images/15_16/image2.png" className={styles.image2}/>  
      <p className={styles.text1}>Ana Rivera</p> 
      <p className={styles.text2}>The Glitched Face King. Pizza Draw.</p> 
      <p className={styles.text6}>diamond ha</p>
      <img src="/magazine/3/images/15_16/image3.png" className={styles.image3}/>
      <img src="/magazine/3/images/15_16/image3.png" className={styles.image4}/>
      <img src="/magazine/3/images/15_16/image3.png" className={styles.image5}/>
      <img src="/magazine/3/images/15_16/image3.png" className={styles.image6}/>
      <img src="/magazine/3/images/15_16/image4.png" className={styles.image7}/>
      <p className={styles.text3}>DEFI GEMS</p>
      <p className={styles.text4}><span className={styles.title}>Alchemix</span><br/>
      Alchemix is no exception amongst the mix of DeFi protocols pushing innovation to the bleeding edge. Their product, in short, can be described most simply as self-repaying loans. To put this more accurately, their token $ALCX gives an advance on future yields; whereby funds are deposited into Yearn vaults for generating yield and then a synthetic stable coin alUSD is minted against this and given to users in exchange for their deposits, representing the advance on the future yield. For example, a user could deposit 1000 $DAI as collateral into an Alchemix vault and receive 500 $alUSD in exchange, and as the 1000 deposited $DAI generates yield, this yield automatically repays the 500 $alUSD debt. Hence, the “debt that repays itself” part. As yield on the deposited funds progressively repays the $alUSD debt, the underlying $DAI gets progressively unlocked. Alternatively, at any time the user can repay the outstanding debt with either $alUSD or with $DAI and unlock all remaining collateral. Yet, the best part is that there is no risk of liquidation for the user throughout this process as they are depositing a stablecoin as their collateral and receiving a stablecoin back for their loan.
<br/><br/>
<span className={styles.title}>ABRACADABRA</span><br/>
Abracadabra allows its users to take loans using their existing interest bearing tokens (ibTKNs) as collateral, to either leverage up their yield, or invest in other assets while their collateral keeps growing. Ultimately, it unlocks an additional layer of utility and composability for tokens that would anyway just be sitting in a user’s wallet idle. For example: a user may have 10k USDT deposited in a yearn v2 vault earning 10% per year, represented by yvUSDT tokens. They can now deposit their yvUSDT on Abracadabra and take out a loan for up to 90% of that amount, or $9k, at an 0.8% interest rate. The loan is given out in Abracadabra’s collateralised USD pegged stable coin $MIM. The user can do as they please with their $MIM, including that of continuing to leverage up their position, and all without a significant liquidation threat, given that the collateral is a stable-coin based ibTKN.
<br/><br/>
<span className={styles.title}>antimatter</span><br/>
Antimatter is a DeFi options protocol using a polarised token approach where puts and calls are created through freely transferable and tradeable tokens i.e. tokenised options. It works whereby each option product always consists of a positive (long put/call option) and a negative (short put/call option) element, with the sum of the two always equal to a set value C. If the sum of both tokens is ever different to that of C, then an arbitrage opportunity is created and the market corrects itself. All this opens the doors to multiple hedging, arbitrage and leveraging strategies, and yet the best part is that all the complexity can be abstracted away, as the action is centred around only the buying and selling of the two simple positive and negative element tokens. Their token $MATTER is used for paying fees for the creation of new option markets, earning a share of the funding fees paid by token holders, platform Governance, and with additional utility to be added over time as the platform grows and scales. Token holders will be able to earn additional $MATTER, by staking their tokens, through liquidity mining LP tokens, and by earning rewards for governance participation, options trading, creation and redemption.</p>
      <p className={styles.text5}>- rafi_0X</p>
      <Link href="https://twitter.com/Rafi_0x/status/1376266462722203654">
        <a target="_blank">
        <img src="/magazine/3/images/15_16/image5.png" className={styles.image8}/>
        </a>
      </Link>
      <Link href="https://twitter.com/Rafi_0x/status/1402025915438317568">
        <a target="_blank">
        <img src="/magazine/3/images/15_16/image5.png" className={styles.image9}/>
        </a>
      </Link>
      <Link href="https://twitter.com/Rafi_0x/status/1364683174513631233">
        <a target="_blank">
        <img src="/magazine/3/images/15_16/image5.png" className={styles.image10}/>
        </a>
      </Link>
      <Link href="https://twitter.com/Rafi_0x">
        <a target="_blank">
        <img src="/magazine/3/images/15_16/image5.png" className={styles.image11}/>
        </a>
      </Link>
      
      
    </div>
  );
};

export default Page1516;
