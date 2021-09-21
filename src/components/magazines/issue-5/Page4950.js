import React, { useRef, useState } from 'react'
import Link from 'next/link'
import styles from './page4950.module.scss'

const Page4950 = () => {
  const [isPlaying1, setIsPlaying1] = useState(false)
  const refAudio = useRef()

    const startAudio1 = () => {
    refAudio.current.play()
    setIsPlaying1(true)
  }

  const pauseAudio1 = () => {
    refAudio.current.pause()
    setIsPlaying1(false)
  }

  return (
    <div className={styles.wrapper}>
      <img src='/magazine/5/images/4950_image1.jpg' className={styles.image1} />
      <audio ref={refAudio} loop>
        <source src='/magazine/5/sounds/4950_sound1.mp3' type='audio/mpeg' />
      </audio>
      <div
        className={styles.playButton1}
        onClick={() => {
          isPlaying1 ? pauseAudio1() : startAudio1()
        }}
      >
        <img className={styles.imageBack} src='/magazine/5/images/4950_button_back.png' />
        {
          !isPlaying1
          ? <img className={styles.imagePlay} src='/magazine/5/images/4950_playbutton.png' />
          : <img className={styles.imagePause} src='/magazine/5/images/4950_pausebutton.png' />
        }
      </div>

      <Link href='https://idx.xyz/'>
        <a target='_blank'>
          <div className={styles.text1}>
            CERAMIC
          </div>
        </a>
      </Link>
      <div className={styles.text2}>
        A protocol for enabling your owned and open identity
      </div>
      <div className={styles.text3}>
        <span>Why is web3 identity so important and how are you going about it differently than other protocols and <br />projects?</span><br />
        Web3 is a collective movement being built globally, across many different blockchains and ecosystems. Identity is the most essential piece for interoperability across these various technologies and communities. Identity touches everything that has to do with how you manage, secure and interact with your user base. In a more open and undefined environment, like Web3, a good identity infrastructure needs to work in a permissionless context and be flexible enough to work well with other existing networks, accounts/keys and use cases, allowing each solution to build upon the others to create compounding value. While smart contract and asset interoperability is convenient on-chain today, user adoption of Web3 tech depends on a persistent, rich and manageable user experience across applications. A world in which end-users need to juggle many keys and wallets (and keep track of which to use in every scenario) is a world in which users simply do not adopt Web3, which is why the identity nut is so important to crack. Most of the identity-related solutions that exist today focus on verifiable credentials, a tamper-evident credential with authorship that can be cryptographically verified. In this case, issuers create credentials, holders store them and verifiers ask for proof based upon them - think of a state-issued identification 
      </div>
      <div className={styles.text4}>
        such as a passport or social security number. These credentials are issued on-chain and thus are network specific identifiers. While an improvement over using keys, identity standards built for a single network — and reliant on a single blockchain — lock us into new silos and a worse-than-web2 user experience, which is why Ceramic is based on decentralized identifiers (DIDs). 
      </div>
      <div className={styles.text5}>
        The DID spec from the W3C is the widely-accepted standard for decentralized identifiers, providing a common format for a globally-unique identifier that is an abstraction from any single key pair. In addition to DIDs, we also have created an identity protocol that gives DIDs the power to manage, route to, and control a flexible and powerful graph of information and services about the user — regardless of where the information was initially generated and where it’s currently stored or hosted. This decentralized user table allows app developers to easily map user data to a unique, decentralized identifier and therefore makes this data searchable and reusable by other apps as well, which is the truly novel aspect of Ceramic.
      </div>
      <div className={styles.text6}>
        <span>What are the ELI5 key differences between centralised and decentralised identity?</span><br />
        Centralized identity frameworks aim to provide a single system of record for users and accounts, usually in a defined, limited enterprise environment. Whether you think of a state-issued ID or a user account within an application, centralized identity usually boils down to a single user table stored on a server, where you have rows of users and the associated data. Typically, an organization is issuing a credential on behalf of the end user that only the organization can issue, verify or revoke. In the decentralized world, identity systems put users in control instead of enterprises. Rather than a centrally managed system, users can store identity related data across various platforms and applications and use unifying identifiers, such as DIDs, to link it all together. In this way, we move away from the "honeypots" created by large companies who hold and attempt to secure lots of valuable, sensitive user information that are often targeted by data hacks.
      </div>
      <div className={styles.text7}>
        <span>How does Ceramic define an identity? One person, one wallet? How do you think that this will change overtime?</span><br />
        Identity is a vague term, and there is no universally accepted definition. To our team, identity is not static, singular, or individual, but rather dynamic, flexible and interoperable. We broadly define identity as the infrastructure that lets you effectively tie together any capabilities that relate to your users. Your digital identity is built through all of your online interactions - from your social profiles, to your comments, wallet addresses and every other impression you make online.

        In web3, the default user “identity” tends to be a public blockchain account key. Rather than an username, you can have a string of numbers and letters which make up your account address. This is understandable, as blockchain keys are already needed to manage assets so they’re widely possessed by users. Keys and the wallets are a fantastic way to authenticate into an application and execute on-chain transactions, however single key pairs cannot be the user identity infrastructure for any product that wishes to scale to meaningful and persistent usage. This is why we believe decentralized identifiers will become the standard for digital identity over time.
      </div>
      <div className={styles.text8}>
        <span>What are some of the most interesting use cases/<br />implementations of IDX live today? </span><br />
        IDX is the identity protocol built on Ceramic that maps user data to decentralized identifiers (DIDs). In this way, we can start to aggregate user data across different blockchains and applications into a single unified profile. DNS.XYZ is doing just that - creating decentralized profiles on Ethereum for creators to aggregate all of their content from various platforms/chains into one place. Similarly, Boardroom, the governance and proposal platform for DAOs, is using IDX to store user comments and make the data easily discoverable by other governance applications that may want to leverage the same forum data. One of the other use cases our team is really excited about is dynamic and mutable NFTs. Through NFT:DID, NFT owners can easily update content on Ceramic, using IDX to make changes to any metadata or associated content related to the NFT, such as the description of a piece of art, land parcels in a VR game, or actually evolving the art itself by letting either the original or new NFT owner make updates to the content.
      </div>
      <div className={styles.text9}>
        <span>What are the biggest problems with centralised custodian and auth solutions?</span><br />
        In centralized solutions, companies are responsible for storing and securing your data which introduces significant counterparty risk. As with web2 solutions, companies that hold highly sensitive or proprietary data are often targeted by hackers who are looking to exploit this private information (think Equifax, Cambridge Analytica, the list goes on). We've already seen a fair share of this happening in the web3 world - private keys stolen from hot wallets or by nefarious employees even at the most well-known institutions. As users, we're forced to trust that these providers are putting best efforts into safeguarding our information with little proof or reassurance. Additionally, centralized solutions are ultimately censorable, meaning you could easily be denied access to your own funds or data, which can happen in even seemingly benign settings (think Robinhood with Gamestop).
      </div>
      <div className={styles.text10}>
        Decentralized custody and authentication solutions are censor-resistant and provide greater security by eliminating single points of failure. In order to falsify a transaction in a decentralized solution, a hacker would need to breach a majority of the network as opposed to a single server. In non-custodial exchanges, users control their own funds as opposed to depositing funds into a centrally controlled wallet accessible by third parties, which would likely be targeted by attackers.
      </div>
      <div className={styles.text11}>
        <span>How do you feel about users being able to eventually monetise off of the ownership of their identity and data?</span><br />
        Excited! Today, companies exploit data for their own benefit, creating silos to make information more valuable even if that comes at the expense of the user experience and users themselves. Some of the largest companies in the world, such as Facebook and Google, hinge their entire business models on the very control and ownership they have over this information. The rising tide of Web3 is all about restoring power to the individual - allowing people to own, control and monetize their own information. This could potentially disrupt some of the most well-known and entrenched companies that exist today and finally enable application builders to truly compete with these monoliths, which will likely change the world as know it. Interoperable identity will let users move seamlessly across networks with all of their information, reputation, claims, data, and identity. This will lead to richer and dramatically improved user experiences and will allow developers to focus on UI/UX, which is where they'll compete.
      </div>
    </div>
  )
}

export default Page4950
