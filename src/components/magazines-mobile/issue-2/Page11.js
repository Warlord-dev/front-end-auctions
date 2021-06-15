import React from 'react'
import styles from './page11.module.scss'
import Link from 'next/link';

const Page11 = () => {
  return (
    <div className={styles.wrapper}>
      <img src="./magazine/2/images/11_12/mobile/image15.png" className={styles.image2} />
      <img src="./magazine/2/images/11_12/mobile/image14.png" className={styles.image1} />
      <Link href="https://github.com/zeropoolnetwork"><a target="_blank">
      <img src="./magazine/2/images/11_12/mobile/image16.png" className={styles.image3} />
      </a>
      </Link>
      <Link href="https://www.poap.xyz/"><a target="_blank">
      <img src="./magazine/2/images/11_12/mobile/image17.png" className={styles.image4} />
      </a>
      </Link>
      <Link href="https://fusion.li/"><a target="_blank">
      <img src="./magazine/2/images/11_12/mobile/image19.png" className={styles.image6} />
      </a>
      </Link>
      <Link href="https://furucombo.app/"><a target="_blank">
      <img src="./magazine/2/images/11_12/mobile/image20.png" className={styles.image7} />
      </a>
      </Link>
      <Link href="https://commonsstack.org/"><a target="_blank">
      <img src="./magazine/2/images/11_12/mobile/image21.png" className={styles.image8} />
      </a>
      </Link>
      <Link href="https://forum.tecommons.org/"><a target="_blank">
      <img src="./magazine/2/images/11_12/mobile/image22.png" className={styles.image9} />
      </a>
      </Link>
      <img src="./magazine/2/images/11_12/mobile/image18.png" className={styles.image5} />      

      <p className={styles.text1 }>Open Source Oasis</p>
      <p className={styles.text2 }>ZEROPOOL</p>
      <p className={styles.text3 }>Anonymity and privacy, or moreso, dependability of  privacy, are some of the most important </p>
      <p className={styles.text4 }>topics for each and every one of us. Our privacy is what guarantees our control and freedom over our lives, actions, interactions. In many ways, it’s our most intrinsic collateral. It is this awareness that allured so many people into crypto in the first place, with the blockchain assuring some kind of open anonymity. 
<br/><br/>
However, as the ecosystem has entered stages of web2 hybridisation and targeted identity revealing tools and DAPPs have become more advanced, the privacy affordance of crypto has deteriorated. 
<br/><br/>
ZeroPool is one of a number of projects that has set out to reinstate crypto’s primary principles. It’s a multi-blockchain compatible DAPP that encrypts transactions in a way so that an external observer gets zero information out of it, and so allowing anyone to send fully anonymous, cheap, non-custodial transactions. Assets deposited into ZeroPool becomes genuinely private.</p>
      <p className={styles.text5 }>POAP</p>
      <p className={styles.text6 }>POAP, or more like the Proof of Attendance Protocol, allows individuals to collect  ERC-721 NFT badges each time they participate in a certain activity, event or happening, where each NFT acts as a unique and verifiable “you turned up” validation. It might sound simple, but this concept is actually quite revolutionary; it sets forth the beginnings of a completely new way for cultivating and forming communities and ecosystems, and then  further incentivising them through unique and more personalised social experiences that are formed out of the ledger of attedance that can be provably associated with each person. </p>
      <p className={styles.text7 }>L i b r e S o f t w a r e</p>
      <p className={styles.text8 }>L i b r e S o f t w a r e</p>
      <p className={styles.text9 }>fusion</p>
      <p className={styles.text10 }>Web3 is confusing enough as it is on paper, and the naming conventions don’t </p>
      <p className={styles.text11 }>make it any easier... I mean ... NFT not only doesn’t sound very interesting or cool, but it also significantly undercuts the true proficiency of the tech. 
<br/><br/>
Fusion is on a mission to change all of this by bringing better, more beautiful and more accessible iconography to web3— offering a robust collection of open source icons. 
<br/><br/>
It might sound trivial, even unneccassary, but these are the small details that provide that fasten the buckle for streamlining user onboarding and driving global mass adoption for usage ubiquity. The project is still in its early stages but the icons look mighty fine! </p>
      <p className={styles.text12 }>Furucombo</p>
      <p className={styles.text13 }>DeFi is often described as lego blocks, where its composable nature is what makes it so</p>
      <p className={styles.text14 }>innovative and revolutionary. Furucombo took this to the next level by building a  drag and drop tool for users to be able to mix and match a variety of different DeFi protocols, transactions and strategies all in one. 
      <br/><br/>
It works by setting up the desired inputs and outputs across different cubes. For example, someone could choose to swap DAI to USDC using Uniswap V2 in the first cube and then take that USDC into a Maker vault to collateralise and borrow DAI for the second cube, and then take that DAI into AAVE in the third cube for a flash loan set up. 
<br/><br/>
All cubes are draggable allowing for easy swapping in and out of different ideas and strategies. </p>
      <p className={styles.text15 }>The Commons stack</p>
      <p className={styles.text16 }>The Commons Stack has built out an entire library of open-source, interoperable web3 components for building common-based microeconomies for support public goods. Their stack puts new tools in the hands of communities, enabling them 
to build out DAO structures for raising and allocating shared funds,  carrying out transparent decision making, and monitoring progress in supporting the commons. 

Through this, they are radicallising our current economic system for the better; ensuring altruistic efforts addressing the collective needs of society are no longer so easily exploited and undervalued.  </p>
      <p className={styles.text17 }>Open Web</p>
      <p className={styles.text18 }>TOKEN ENGINEERING COMMONS</p>
      <p className={styles.text19 }>TEC is an open source and collectively governed project that aims to create a token economy for accelerating the responsible & ethical creation of public goods within the token engineering community.</p>
      <p className={styles.text20 }>This DAO is aligned for dvancing the token engineering discipline— An emerging engineering discipline focused on holistic systems design and the theory, practice and tools used to design and verify tokenized ecosystems. TEC aims to support the efficient distribution of fund to projects across the emerging field of token engineering, encouraging the robust and ethical design of tokenized infrastructures. 
<br/><br/>
The DAO is still in its early stages, with automation through smart contracts and on-chain governance still in progress, however, the common goal that they are charting forth is something that extends far beyond just the members of the DAO itself. Tokenised communities, broadly falling under DAO frameworks, are probably the most overlooked project categories currently in web3, where most of the hype is still centred around DeFi. Being able to align, automate and enhance community incentives for a common shared mission creates an unstoppable strength for enhancing literally every aspect of our lives as we know it.  </p>
    </div>
  )
}

export default Page11