import React, { useRef, useState } from 'react';
import styles from './page69.module.scss'
import Link from 'next/link';

const Page69 = () => {
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.image1}></div>
      <p className={styles.text1}>Enter decentralized finance.<br/>
The traditional finance (TradFi) sector is transforming from the morass of financial intermediation towards DeFi, or entirely decentralized financial activities that democratize finance, reduce inequality, and offer a way in which participants can take agency and gain greater freedom of action in determining their personal finance without central authorities and regulations breathing down their necks.
<br/><br/>
DeFi builds on the initial headwinds made by the launch of Bitcoin and Ethereum, decentralizing the computing load needed to run blockchains. DeFi offers the same state-of-the-art financial products once reserved only to those deemed worthy by the gatekeepers of finance, putting users in direct control of their finances, and reorganizing incentivization models to token holders, further rewarding them and building stronger communities and governance frameworks. DeFi is a complete about-face on the centralization of monetary and fiscal policy to create an entirely new, parallel financial ecosystem suitable for anyone and everyone to participate in—governed by the miracle of smart contracts.
<br/><br/>
These are all made possible through decentralized apps (dapps), which are built primarily on the Ethereum blockchain, and smart contracts that enable the programming of financial transactions between users. In doing so, DeFi seeks to disintermediate finance by replacing traditionally exclusive exchanges, asset managers, banks, VCs, and other actors with code.
<br/><br/>
DeFi offers credit products such as loans, and users can participate in borrowing and lending activities. Both borrowers and lenders stand to gain from obtaining and providing loans denominated in either crypto or fiat through collateral. For instance, DeFi protocols like bZx allow lending and borrowing activities related to margin trading. Another example of this is TrueFi, which is an uncollateralized lending protocol allowing lenders to gain long-term, competitive returns, while offering borrowers capital.</p>
    </div>
  )
}

export default Page69