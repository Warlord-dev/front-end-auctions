import React from 'react'
import styles from './page1718-part2.module.scss'

const Page1718Part2 = () => {
  return (
    <div className={styles.wrapper}>
      <img src='./magazine/1/images/mobile/moshed-2.png' className={styles.backImage}/>
      <div className={styles.innerWrapper}>
      <p className={styles.section3}>
        <span>UBI in Blockchain</span><br />
        The emergence of global blockchain networks bolstered UBI’s viability because of creating new and accessible financial applications that are available online. 
        Cryptocurrencies like Bitcoin and Ethereum can bypass the roadblocks that traditional banking systems establish to safeguard their policies. 
        Blockchain can compensate for what these institutions lack, and there are three NFT UBI’s worth mentioning.
        <br /><br />
        First is Circles which depends on individualized cryptocurrencies, which involves a social graph of trust. 
        Those cryptocurrencies get minted regularly to create a monetary fabric that will work as a Universal Basic Income. 
        A smart contract assigns a Personal Currency to every new blockchain account. 
        Likewise, they have an annual inflation schedule to foster spending and to prohibit hoarding.
      </p>
      <p className={styles.section4}>
        All currencies are under the governance of a unified set of rules, 
        and they continue to create new coins at the same rate to maintain equal distribution to all members. 
        But to produce money, Circles users must trust other currencies or validate the identity of other users. 
        This trust determines that the virtual coin is legitimate and that it is up for regular disbursement.
        <br /><br />
        Second, social trading platform eToro initiated the GoodDollar, which provides $G stablecoins daily to registered users. 
        Donations fund this non-profit project. Supporters deposit their assets before yielding farm on decentralized finance protocols like Aave or Compound. 
        Users receive some of the interest while another portion of it becomes collateral for new $G coins. Initially, DAI backed the $G stablecoins. Eventually, GoodDollar will diversify to other cryptocurrencies. As of December 2020, 40,000 users from 180 countries signed up for the project, most of which are from developing countries wherein income inequality and low wages are rampant.
        <br /><br />
        From all the donated DAI, its interest rate will correspond to a certain number of $G coins. 
        Divide that figure with the number of days in a year, and that’s the daily allowance each user will receive. 
        Out of the total users, close to half remain engaged with the platform. 
        An average of 13,000 users engages on the GoodDollar Marketplace on Facebook to signal a thriving economic alternative.
        <br /><br />
        Finally, the UBI token uses Kleros’ Proof of Humanity, which uses video submission to verify users. 
        The POH blocks Sybil attacks wherein a system becomes vulnerable through multiple identities. 
        Without stringent verification, attackers can create bogus accounts to disrupt the UBI coin. 
        The process uses reverse Turing tests to determine whether a registered user is real or dicey.
      </p>
      </div>
    </div>
  )
}

export default Page1718Part2