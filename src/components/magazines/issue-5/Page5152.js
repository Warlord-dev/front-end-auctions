import React from 'react'
import Link from 'next/link'
import styles from './page5152.module.scss'

const Page5152 = () => {
  
  return (
    <div className={styles.wrapper}>
      <img src='/magazine/5/images/5152_image1.png' className={styles.image1}/>
      <Link href='https://www.idena.io/'>
        <a target='_blank'>
          <img src='/magazine/5/images/5152_image2.png' className={styles.image2}/>
        </a>
      </Link>
      <div className={styles.rect1}></div>
      <div className={styles.rect2}></div>
      <div className={styles.rect3}></div>
      <div className={styles.rect4}></div>
      <div className={styles.rect5}></div>
      <div className={styles.rect6}></div>

      <div className={styles.text1}>
        What's your opinion on people having multiple identities online and IRL / in the metaverse? How does the one person one vote method fit into this?
        <br /><br />
        It's hard to guarantee true uniqueness or one person - one vote system, especially when we offer online anonymity. In Idena the identities are semi-unique, which means that it's possible to have more than one identity, but to have many is really hard and not feasible because of the protocol mechanics and rewards system. In other words, it makes more sense to thoroughly support one main identity than make efforts to validate more than one.        
      </div>
      <div className={styles.text2}>
        What was the rational behind the validation score and process? Is it a process that you see needing to be changed overtime as the community interacting with Idena grows and changes? 
        <br /><br />
        The idea behind the validation score is the level of trust that the identity has: the higher the score, the more trustworthy the identity is. Identities with higher validation score have more invitations to expand the network by more trustworthy identities. Another system to manage the reputation of the identity is the stake: the higher the stake, the older and more reputable is the identity.
      </div>
      <div className={styles.text3}>
        What are some of the most exciting use cases for decentralised ID (3 examples would be great)?
        <br /><br />
        Using decentralized ID as a ticket for running a blockchain node is the most exciting use case for us. Anyone can run a validating node to secure the network. This brings the solution to the blockchain scalability trilemma. The more users are in the network the higher is the blockchain throughput!         
      </div>
      <div className={styles.text4}>
        Idena is incentivised through UBI. How do you think UBI will be earnt and distributed in a metaverse context where people might have multiple identities? Would it be the case that they can earn more than one allocation based on their contribution to a community/network? Or will there always be a way of validating that the network is filled with "unique" humans? 
        <br /><br />
        Earning UBI in a metaverse where identity system is supported by Idena makes a lot of sense. Inside the Idena network, UBI is paid for the contribution of supporting the network: validating blocks, making flips and taking part in oracle votings. Living in a metaverse can provide many other options of generating UBI: attention economy, DAO governance, investing in public good. All these mechanics can be natively supported by the Idena network and integrated in the iDNA distribution system.        
      </div>
      <div className={styles.text5}>
        Can you describe in more depth the utility of the Idena token? 
        <br /><br />
        iDNA is a native blockchain coin that can be used as gas for the blockchain transactions. However since transactions are secured by a network of people we consider the utility of the Idena coin to be much wider. iDNA is a key element of the network attention economy. One can burn iDNA coins to broadcast some messages to all the people running the network.        
      </div>
      <div className={styles.text6}>
        What are the most interesting or novel governance and privacy challenges you have experienced or think will be potential points of failure when it comes to decentralised identity being wide spread?
        <br /><br />
        When the network was just launched, we had a vulnerability that was exploited by hackers. As a result, some funds were stolen. We suggested a fork that would reverse the balance changes, but the network validators didn’t support us. We think that the main challenge in the blockchain governance is the legitimacy of changes. The core team shouldn’t dictate whether to make another fork or http://not.In the end, the change proposals of the core team should be accepted by the end users. And here we don’t mean any users, we mean the users that control the network. The users that run validating nodes are the missing link in the governance of any blockchain.
        <br /><br />
        Speaking about privacy, we think that the concept of ID is very dangerous in the blockchain context. We think that no way should the users personal data be linked to the blockchain. We stick to our idea of  semi-unique proof of personhood as an alternative to digital identity. Proof of Personhood should exclude the usage of personal data. PoP should only prove the users uniqueness and exclude exposing the user. It is the key principle of building decentralized identity that we have to follow if we want mass adoption.        
      </div>
    </div>
  )
}

export default Page5152
