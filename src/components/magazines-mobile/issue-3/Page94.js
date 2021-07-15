import React from 'react'
import styles from './page94.module.scss'
import Link from 'next/link';

const Page94 = () => {
  return (
    <div className={styles.wrapper}>
     <img src="/magazine/3/images/103_104/image2.png" className={styles.image1}/>
      <div className={styles.image2}></div>
      <p className={styles.text2}>It’s always been a tricky proposition for crypto projects to be distributing new tokens to the right individuals, and liquidity mining has since been one of the more sustainable approaches. In essence, liquidity mining works by distributing tokens to those who deposit their crypto assets into a liquidity pool. The new tokens are then distributed algorithmically to each individual’s corresponding stake in the pool algorithmically.
      <br/><br/>
These tokens can also be in the form of other tokens like Uniswap (if you are a liquidity provider). Consequently, you will be able to deposit such tokens into other pools to repeat the process and earn returns on your investment.
<br/><br/>
We could also think about governance as a use case. In some cases, there’s a very high threshold of token votes needed to be able to put forward a formal governance proposal. If the funds are pooled together instead, participants can rally behind a common cause they deem important for the protocol.
<br/><br/>
Governance<br/>
Governance is yet another use case for liquidity pools. Some protocols require a high threshold of token votes to formulate a proper governance proposal. When funds are pooled together, individuals can garner and unite over a particular cause that they may determine as critical for the protocol.
<br/><br/>
Tranching and synthetic assets<br/>
Yet another use for liquidity pools is tranching, or what involves separating and categorizing financial products depending on their risk and return profiles. Such products allow liquidity pools to choose one.
<br/><br/>
Synthetic assets such as those that are pegged to a particular asset are also dependent on liquidity pools in order for them to be minted on-chain. These are essentially akin to traditional financial derivatives that derive their value from other assets like stocks, bonds, commodities, precious metals, or currencies to trade them without necessarily holding the real asset.
<br/><br/>
DeFi-ning appeal<br/>
Since May 2020, the total value locked in DeFi protocols like Uniswap, Compound, Maker, and Aave ballooned from a shade under $1 billion to do an 88x—or $88 billion in total locked value in the entire space—at its very peak last May 2021. Annual percentage yields have skyrocketed through the roof as users began to engage in yield farming as fast as they can. That’s a far cry from the minuscule APYs on a basic savings account. </p> 
    </div>
  )
}

export default Page94