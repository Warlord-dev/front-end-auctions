import React from 'react'
import styles from './page17.module.scss'

const Page17 = () => {
  return (
    <div className={styles.wrapper}>
      <img src='./magazine/1/images/mobile/moshed-2.png' className={styles.backImage}/>
      <p className={styles.section1}>
        During its initial allocation last March 2021, Kleros minted 10 million UBI tokens, 
        with twenty percent of which going the early contributors who contributed to Democracy Earth’s HOUR token. 
        The other forty percent is for their Liquidity Mining program, while the remaining forty goes to the community treasury for future UBI DAO initiatives.
      </p>
      <p className={styles.section2}>
        Once the Proof of Humanity verifies a user, clicking on the “Start accruing UBI” will generate 1 UBI per hour or 720 UBI monthly. 
        Two factors determine the value of $UBI coin: time and population. As the population increases, its value goes up as well. 
        In effect, an investor is buying someone’s time with $UBI, and it’s the only cryptocurrency that puts an exact value on time.
        <br/><br/>
        Beyond blockchain, Proof of Humanity is an excellent way for institutions to keep their databases accurate in real-time because users vouch for each other’s authenticity. 
        Anyone can validate the people they know and challenge the identity of suspicious users. 
        Any submitted registration challenge will undergo Kleros’ ERC 792 compliant dispute resolution system.
        <br/><br/>
        Meanwhile, the UBI token’s initial liquidity mining went live on March 12, 2021, and will target the Uniswap V2 pools of UBI/ETH and UBI/BTC. 
        The mining will last for a year and will allocate 2,000,000 UBI per pool. That figure boils down to 5,481 daily UBI per pool. 
      </p>
      <img src='./magazine/1/images/Group 1146.png' className={styles.dollarSign1}/>
      <img src='./magazine/1/images/Group 1146.png' className={styles.dollarSign2}/>
      <img src='./magazine/1/images/Group 1146.png' className={styles.dollarSign3}/>
      <p className={styles.section3}>
        <span>Critiquing the Criticism Against Blockchain for UBI</span>
        <br/>
        Environmental concerns always come to the surface during discussions about blockchain, cryptocurrency, and non-fungible tokens. 
        Those in staunch opposition of Bitcoin, Ethereum, and other digital coins point out 
        that the energy used to mine virtual currency is equal or greater than the consumption of entire countries. 
        However, this is a flawed argument because of incorrect comparison.        
      </p>
    </div>
  )
}

export default Page17