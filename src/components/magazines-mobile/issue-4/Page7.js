import React from 'react'
import styles from './page7.module.scss'

const Page7 = () => {
  return (
    <div className={styles.wrapper}>
      <img src='/magazine/4/images/0910_background-mobile.png' className={styles.image1}/>
      <img src='/magazine/4/images/0910_background-mobile.png' className={styles.image2}/>

      <div className={styles.text1}>
        The explosive growth of decentralised finance, or DeFi, is proof positive of this. DeFi opens the door to anyone with an internet connection and a mobile device to participate in wealth-generating activities, no matter how big or small, through smart contracts on the Ethereum blockchain. Smart contracts essentially take over the functions that financial intermediaries like your brokers and bankers would have, allowing you to make potentially eye-watering returns on your investment—without anyone’s permission.
        <br /><br />
        Well, the same thing is happening with commerce.        
      </div>

      <div className={styles.text2}>
        Decentralised commerce, or DeCo, is emerging from the cracks inherent in the centralised structures of Commerce 2.0—the prevailing model of e-commerce as Amazon, Alibaba, and eBay exemplify—and Commerce 1.0, or the physical stores, the Borders, Barnes and Nobles, Best Buys, and all the ruins of the gargantuan malls we used to frequent.
        <br /><br />
        DeCo differentiates itself from DeFi as the former deals with the aspects of commerce such as shopping, invoicing, subscriptions, and payments, while the latter deals with credit, trading, derivatives, and its related subfields.
      </div>
    </div>
  )
}

export default Page7
