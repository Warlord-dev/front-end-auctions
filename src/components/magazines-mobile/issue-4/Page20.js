import React from 'react'
import styles from './page20.module.scss'
import Link from 'next/link';

const Page20 = () => {
  return (
    <div className={styles.wrapper}>
       <img src="/magazine/3/images/21_22/image6.png" className={styles.image1}/>
       <Link href="https://idle.finance/#/">
        <a target="_blank">
          <img src="/magazine/3/images/21_22/image4.png" className={styles.image7}/>
        </a>
      </Link>
      <img src="/magazine/3/images/21_22/image4.png" className={styles.image8}/>
      <img src="/magazine/3/images/21_22/image5.png" className={styles.image9}/>
      <div className={styles.image4}></div>
      <div className={styles.image5}></div>
      <p className={styles.text1}>L2s and sidechains are a fairly new technology, with many improvements in the pipeline. With Idle and our community, we have explored many scalability solutions in our forum. Seems like there are some good synergies between our protocol and Polygon, as many DeFi primitives are moving there and we would be able to port our aggregation layer in Polygon as well. We are on the lookout for other scalable solutions, and we do appreciate solutions that have a native settlement layer with ETH like optimistic rollups or ZKS.</p>  
      <p className={styles.text2}>For me (Matteo Pandolfi, founder of Idle Protocol), the watershed moment when I realized that we needed to build Idle was during ETHBerlin 2019. I went there right after the Gitcoin hackathon we won in July 2019, to do user feedback sessions and get closer to the Ethereum community. 
<br/><br/>
When I put Idle in the hands of the users they were all enthusiastic about the rebalance concept and the automatic optimization of interest rate returns. 
<br/><br/>
Plenty of people told me that it was exactly what they were looking for, some others gave me really good insights on how to improve it, and generally everybody was immediately understanding of the benefit of using Idle to optimize returns. It was easy to grasp for anyone, but powerful for those who deeply understood it. 
<br/><br/>
The Ethereum community and ConsenSys Tachyon acceleration program gave me a boost  of motivation to keep working on Idle, and is what kept me building a protocol that is changing the way people and organizations think about wealth management.</p>  
      <div className={styles.image6}></div>
      <p className={styles.text3}>In November 2020 we launched the Idle DAO and the $IDLE governance token to effectively replace the administrator of the Idle protocol. From that point forward, all changes (from supported assets to system parameters) have been originated from IDLE token-holders – fulfilling our vision of an open protocol that can evolve in entirely new ways. 
      <br/><br/>
I would say we are a DAO-first community, and lately, we introduced the Leagues structure, a series of organizational units designed to take care of the daily maintenance and improvement of the protocol. IDLE token holders are able to vote on Leagues composition, mandate duration, and budgets assigned to each specific League.
<br/><br/>
This model comes from our thesis: given the amorphous nature of the organizational structure of a DAO, varied participation will occur and most members will tend towards relatively passive participation. DAOs tend to be driven by a handful of key members with the larger community providing relevant input. Ultimately, Leagues are composed of full-time remunerated participants in each organizational unit and ensure appropriately skilled teams are best positioned for success. 
<br/><br/>
The composition of Leagues is designed to evolve over time based on the needs and opportunities for Idle DAO. The proposed current composition of Leagues is based on a relatively common organizational structure of departments of any professional asset management firm, but one would expect that the DAO structure evolves considerably over time. We could see more specialized Leagues such as one specifically for tokenomics or yield strategies, for compliance, for bounties and outward-facing development work, or any other activity that will accrue value to Idle DAO.</p>  
      <p className={styles.text4}><span className={styles.title}>How do people new to DeFi and web3 learn how to make the best use of Idle?</span>
      <br/><br/>
Depends on what kind of persona you’re talking about for people new to DeFi and web3. New people could be retail, and for that we have an easy-to-use dashboard with many tools that can help through the onboarding process (fiat-on ramps, token swap, batched deposit). 
<br/><br/>
If you are talking about institutions or integrators of the Idle Protocol, they would need to deeply understand the numbers behind the protocol (via our stats page, or the community Dune dashboard) and check the documentation for a technical overview of our protocol. 
<br/><br/>
In general, if people want to stay up-to-date with protocol development, I’d suggest to follow our twitter account, or subscribe to either our Idle Beats weekly newsletter (for more savvy users) or to our monthly report newsletter. If users have any questions, they can hop on Discord or Telegram channels, where they will find both the Leagues team and our vibrant community ready to give them more information regarding the products and protocol.
</p>  
      <p className={styles.text5}><span className={styles.title}>Why Idle? Does it have something to do with passive income? What about your approach lets users becoming lazy in the right ways in their lives so that they can do more about what they care about in other areas?</span>

      <br/><br/><br/>
It can be interpreted in two different ways. The initial concept behind the name Idle Finance is because the protocol is specifically built for all the idle assets and capital – with the growth of the protocol, we saw that users really appreciate being idle while using the protocol to optimize their returns, and we pretty much loved this community-led definition. Our vision is that money should never sit still, and we’re working to change the way idle funds are managed – hence, everybody can be idle and just give their savings a better place to stay.</p>  
    </div>
  )
}

export default Page20