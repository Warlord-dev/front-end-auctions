import React from 'react'
import styles from './page4344.module.scss'

const Page4344 = () => {
  
  return (
    <div className={styles.wrapper}>
      <img src='./magazine/5/images/4344_image2.png' className={styles.image2} />
      <img src='./magazine/5/images/4344_image1.png' className={styles.image1} />
      <img src='./magazine/5/images/4344_image1.png' className={styles.image3} />

      <a href='https://twitter.com/owocki' target='_blank'>
        <div className={styles.text1}>
          Owocki Presents 
        </div>
      </a>
      <div className={styles.text2}>
        Decentralised Reputation
      </div>
      <div className={styles.text3}>
        I believe an upcoming market cycle will involve decentralized reputation. Why? Because so much value transfer in the world depends on the reputation of the parties in the transaction!  
      </div>
      <div className={styles.text4}>
        1. When I get a job, I want to know who I am working with.
        2. When I loan someone money, I want to know their history of repayments.
        3. When I invest in a company, I want to know the founder’s reputation to understand their character.
        4. When I get into an uber, I want to know that my driver’s reputation is free of major incidents.
        5. When I log in to my social feed, I want to know the credibility of the content/authors I see.
      </div>
      <div className={styles.text5}>
        There are multiple amazing sybil resistance tools out there .  I particularly admire BrightID, Idena, Proof of Humanity, SpruceID, Ceramic/3box, and there are many others doing great work here.  We want to accelerate the momentum of these tools and I see a way to do that that leverages Gitcoin’s unique strengths.
        <br /><br />
        The last Gitcoin Grants round had 250k contributions from 50k users.  We have sybil resistance data on each of these transactions.  My hope is that Gitcoin can leverage its momentum, data, and other assets to jumpstart sybil resistance for the entire ecosystem.
        <br /><br />
        We are wrapping all of that momentum into something called https://proofofpersonhood.com/
        <br /><br />
        Proof of Personhood Passport (PoPP) is a transportable proof of personhood identity for the web3 space.  It leverages the same identity you already use on Gitcoin Grants, and the Gitcoin Grants social graph to produce a privacy-preserving sybil resistance identity that other dApps can use. 
        <br /><br />
        My holy grail is to do for sybil resistance what Web3Modal did for web3 wallets.  Web3Modal is one API I can integrate and dApp users get access to many wallets.   With PoPP, there is one API that dApp developers can integrate and the dApp leverages the sybil resistance of many different sybil reputation tools.  
      </div>
      <div className={styles.text6}>
        If you want to go down the rabbithole and go deep on DIDs, I think it’s worth your time to do so.  As I said at the top, I believe that we’re going to see a major market cycle driven by DID tech, and getting in well before that could be a career-defining opportunity. 
        <br /><br />
        If you’re busy, lazy, or just a “wait and see” kind of person, I’d just check out the Open Source APIs for PoPP, Proof of Humanity, or BrightID. 
        <br /><br />
        I believe we should not have one reputation score or avatar, and will present ourselves in many different ways in different contexts.  I think my reputation will be high on computer programming ability, high on educating/onboarding, high on problem solving, and probability low on tidiness, process-orientation, and time management.
      </div>
      <div className={styles.text7}>
        I envision a web where millions of citizens (not users) are quitting their traditional jobs and working for the open internet. I envision a web where citizens have full rights to their own data and are socially conditioned that THEY will make money off of their data, not some large tech company. I envision a web where citizens have rights to all of their assets, and cannot be deplatformed because their presence is politically inconvenient to the powers at be. I envision a world where the largest dApps compete for citizens attention, not trap them in walled gardens. I envision a web that serves the needs of the poor & the many, not the rich & the few, are served. Thomas Jefferson once said "When the government fears the people, there is liberty. When the people fear the government, there is tyranny."  I believe that we have fallen into the web where the people fear their digital governors (the tech companies).  By working together, we can create a web where people are economically supported, their rights are respected, and therefore liberty is supported. It will take years, not months to get there, but I think we’ll get there.
      </div>
      <div className={styles.text8}>
        Different human communities have different sets of values, and that is natural and beautiful.  We should embrace this concept, and avoid creating ONE scoring mechanism because there is no ONE human value.  Many people will build many different reputation scoring mechanisms.  I can speak only of how to create sybil resistance scores.  At Gitcoin, heres what it looks like: We will assign each identity a PersonhoodScore/Price of Forgery of $X – where up to $X in benefit you can assume the identity is valid, and after $X you cannot be sure. The basic idea here behind PersonhoodScore is that each identity verification mechanism adds $X to the price of forgery of an identity, and the PersonhoodScore can add/multiply as a user integrates with more identity mechanisms. EG if Rabbithole.gg were to integrate Gitcoin’s sybil resistence one day, and a user with a Personhood Score of 10 comes to them, they can assume that they can safely give a reward worth $10 or under to that user. In Gitcoin Grants this is what it would look like in a straw man Gitcoin Grants contribution dampening model 1 which maps a users match amount to their personhood score, ending in a percentage of matching amount that can be safely applied. 
      </div>
      <div className={styles.text9}>
        In this model,
        <ul>
          <li>
            a user with a 1000 personhood score who contributes contributions that would generate $100 in matching would get 100% of their contribution matched.
          </li>
          <li>
            a user with a 100 personhood score who contributes contributions that would generate $100 in matching would get 100% of their contribution matched.
          </li>
          <li>
            a user with a 10 personhood score who contributes contributions that would generate $100 in matching would get 13% of their contribution matched.
          </li>
          <li>
            and so on…
          </li>
        </ul>
      </div>

      <div className={styles.circle1}></div>
      <div className={styles.circleText1}>
        Collect POAP!        
      </div>
      <div className={styles.circleText2}>
        yay        
      </div>
      <a href='https://poap.website/identityacrossthemetaverse' target='_blank'>
        <img src='/images/poap-logo.png' className={styles.poapImage} />
      </a>

    </div>    
  )
}

export default Page4344
