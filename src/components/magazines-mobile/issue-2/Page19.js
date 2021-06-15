import React from 'react'
import styles from './page19.module.scss'

const Page19 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image1}></div>
      <div className={styles.image2}></div>
      <p className={styles.text1 }><span className={styles.title}>• Ambush Attacks.</span>  Ambush attacks refer to a scenario where a "whale" might be able to influence outcomes of proposal votes by sending in a massive number of "yes" votes at the latest possible moment, leaving no time for other token holders to organize and inhibit themselves from participating.
      <br/><br/><span className={styles.title}>• Token Raids.</span> Token raids involve large investors manipulating token prices by fudding among investors or adding selling pressure on the tokens, which would lower costs of tokens so that they can buy a more significant piece of the organization.
      <br/><br/><span className={styles.title}>• extraBalance Attacks.</span> This is the opposite of the latter, where a whale could fud existing token holders into leaving The DAO, therefore driving up token value and increasing extraBalance. 
      <br/><br/><span className={styles.title}>• Split Majority Attacks.</span> Split majority attacks raise doubt on the ability of curators to determine whether a voting block sized 53% and above proposes to award 100% to its benefit. Curators are expected to do the task of tracking beneficiary identities, which may be a fool's task when the proposal in question is broken up into multiple sub-proposals.
      <br/><br/><span className={styles.title}>• Concurrent Tie-down Attacks.</span> Concurrent tie-down attacks are a scenario where a voter's shares can be stuck in a proposal whose voting period lasts longer, followed by a proposal with a much shorter period. Such cases prevent voters voting on a proposal from splitting until the end of its voting period, tying their vote up while others pull a fast one. 
<br/><br/>
Ultimately, however, the fallout from The DAO will likely bring in a new era of nuanced industry development focused on sustainability and stable growth. Eventually, Sirer predicts that crypto will move towards competency and innovative technologies that can do what has never been done before and less on parading poorly disguised financial instruments.
<br/><br/>
<span className={styles.title}>• Of Sybil and Consensus Mechanisms</span><br/>
DAOs are susceptible to Sybil attacks. Sybil attacks are a kind of security threat on an online system where individual attempts to take over a network by creating multiple accounts, nodes, or computers. They can be as simple as one person creating multiple accounts on social media. In the crypto sphere, this can mean someone running various nodes on a blockchain network.
<br/><br/>
Sybil attacks pose the risk that attackers could vote to expel the honest nodes on a network by creating enough fake identities. They can then refuse to receive or transmit blocks, effectively blocking users from using a network. In larger-scale Sybil attacks, where attackers manage to control the majority of the network computing power (or hash rate), they can execute a 51% attack. This means they can change the ordering of transactions and prevent transactions from being confirmed. They may even reverse transactions they made while they are in control, which may lead to double-spending.
<br/><br/>
Blockchains mitigate the risk of Sybil attacks and other blockchain security vulnerabilities using consensus mechanisms. These fault-tolerant mechanisms are used to achieve agreements on data value or single states of the network among distributed processes or systems with multiple agents.</p>
    </div>
  )
}

export default Page19