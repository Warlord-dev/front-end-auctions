import React from 'react';
import styles from './page10.module.scss';
import Link from 'next/link';

const Page10 = () => {
  return (
    <div className={styles.wrapper}>
       <img src="/magazine/3/images/11_12/image11.png" className={styles.image1}/>   
       <p className={styles.text1}>Open Source Oasis</p>
      <p className={styles.text2}>L i b r e S o f t w a r e</p>
      <p className={styles.text3}>L i b r e S o f t w a r e</p>
      <p className={styles.text36}>L i b r e S o f t w a r e</p>
      <p className={styles.text37}>L i b r e S o f t w a r e</p>
      <p className={styles.text4}>OpenWeb</p>
      <img src="/magazine/3/images/11_12/image10.png" className={styles.image16}/>  
      <Link href="https://ethhole.link/">
        <a target="_blank">
        <img src="/magazine/3/images/11_12/image4.png" className={styles.image10}/>
        </a>
      </Link>
      <Link href="https://llama.community/#/">
        <a target="_blank">
        <img src="/magazine/3/images/11_12/image5.png" className={styles.image11}/>
        </a>
      </Link>
      <Link href="https://llama.community/#/">
        <a target="_blank">
        <img src="/magazine/3/images/11_12/image6.png" className={styles.image12}/>
        </a>
      </Link>
      <Link href="https://illuminate.finance/">
        <a target="_blank">
        <img src="/magazine/3/images/11_12/image7.png" className={styles.image13}/>
        </a>
      </Link>
      <Link href="https://github.com/NFTags">
        <a target="_blank">
        <img src="/magazine/3/images/11_12/image8.png" className={styles.image14}/>
        </a>
      </Link>
      <Link href="https://www.kotal.co/">
        <a target="_blank">
        <img src="/magazine/3/images/11_12/image9.png" className={styles.image15}/>
        </a>
      </Link>
      <p className={styles.text19}>stakerwatch<br/>
<span className={styles.text20}>With Layer 2s and side chains being all the rave, have you ever wondered what the flow of activity and token transfers really is between Ethereum</span></p>
      <p className={styles.text21}>mainnet and these other protocols? Stakewatch has deployed an interactive web interface for tracking exactly this, but, in a human friendly way with Ethhole.link. The total value tracked is calculated by tokens deposit to bridge contracts and the staked tokens on Ethereum.</p>
      <p className={styles.text22}>Llama<br/>
<span className={styles.text23}>With DAOs becoming more and more popular, so are the services being created and developed out around them. Llama is one of those, </span></p>
<br/><br/>
<p className={styles.text33}>providing treasury management for DAOs and DeFi protocols. As we are all aware, crypto is a highly dynamic and active ecosystem where it’s never enough to just rely on the expected routine— whether that be in the form of token price action, developer operations, managing deployments of high stakes smart contracts and/or community coordination and vitality. Thus, not only is efficient treasury management vital for being able to effectively respond to this dynamic environment, but also, it is necessary for guaranteeing a project’s ability to move in inertia with the constantly evolving currents, rather than being stuck in a position for having to battle against them.<br/><br/> Llama’s services include everything from asset allocation to financial planning and reporting, where DAOs are able to categorize transactions and access real-time financial statements. The relevance of this becomes even more clear when considering what is required to operate a real DAO and uphold community transparency as a core pillar to this. </p>
      <p className={styles.text24}>Illuminate finance<br/>
<span className={styles.text25}>For the majority of people, understanding complex algorithmic DeFi protocols isn’t something that can just be contemplated over in simple time. Yield farming, staking, yield aggregators, swaps, flash loans etc. come as a completely new language, heuristic and behavior. And, especially as DeFi grows and scales in terms of the number of projects and protocols building and releasing products in the space; it becomes even more difficult to separate the signal from the noise and know exactly where one should go to find reasonably protected exposure to gainz. 
<br/><br/>
Aggregators are a fundamental building block for scaling DeFi and crypto to a wider audience, and Illuminate is supporting this cause by offering Fixed Yield Aggregator that finds the best current fixed rate yield across a number of different protocols, simplifying the experience for users as they start exploring this new field. </span></p>
      <p className={styles.text26}>Thx<br/><span className={styles.text34}>We’ve all heard the gamification buzzword a bunch of times. But what does it mean and why do we need it? Well, ultimately, it’s all</span></p>
<p className={styles.text27}>about guiding the user’s experience in a way that is more engaging and appealing for them, so that they can achieve the outcome, goal or skill better, faster and with a much higher guarantee of root rentention. 
<br/><br/>
THX is bringing gamification to the blockchain, running on Polygon, where their API allows for easily embedded blockchain powered gamification in any application. Their focus is particularly centred around strengthening DAO communities through gamification, specifically when it comes to voting, money management and use cases around loyalty programs. 
<br/><br/>
They also currently have discord integration compatibility— highly relevant for a lot of DAOs building their communities today. </p>
      <p className={styles.text28}>NFTags<br/><span className={styles.text29}>After the NFT rush earlier this year many of us became acquainted with NFTs as natively digital assets that only exist online. However,</span></p>
<p className={styles.text35}>their application potential expands far wider, and in fact has some of the most promise when it comes to the intersection between the digital and physical— where NFTs are able to streamline and transparently reconcile the ledger of goods between these two realms. This afterall is a large component of materialising the metaverse.
<br/><br/>
NFTags is building at this very intersection through the creation of secured NFC tags that can be scanned to then display information about the connection of that physical item & NFC to the minted NFT on the blockchain. The project is still in its early days and there have been a number of similar protocols developed around this area in the past 3-4 years. It will be interesting to see how they bring new innovation to this space through experimenting with the interchange of the digi-physical and what this could mean for users being able to interface with DAOs, social tokens, DeFi DAPPs and also blockchain gaming infrastructure. </p>
      <p className={styles.text31}>KOTAL<br/>
<span className={styles.text32}>The open source alternative to Infura— Kotal is an API gateway for deploying self managing blockchain infrastructure. Anything from Ethereum 2 beacon and validation nodes to Filecoin nodes and private Ethereum networks. It’s cloud agnostic, running on any public or private cloud that supports Kubernetes and it allows for key reuseability across multiple blockchain nodes and networks.</span></p>
    </div>
  );
};

export default Page10;
