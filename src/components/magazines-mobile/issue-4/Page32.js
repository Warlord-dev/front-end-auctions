import React from 'react'
import Link from 'next/link'
import styles from './page32.module.scss'

const Page32 = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.background} src='./magazine/4/images/3738_background_mobile.png' />
      <img className={styles.image1} src='./magazine/4/images/3738_image1_mobile.png' />

      <div className={styles.text1}>
        If you are building web3 today it is almost inevitable that you have heard of and are likely deeply reliant on the subgraphs to query your data, provided by the graph. Speaking personally, even with DIGIFIZZY, and everything that DIGITALAX does, our subgraphs are so critical to getting everything to work.         
      </div>
      <div className={styles.text2}>
        For anyone familiar with the storage of data in traditional or modern systems alike, the important question is not just how you put data away in its right place, but more importantly how you access and retrieve it. This just becomes so much more critical in web3, where often queried data is used to feed functions and inputs that result in automated executions 
        <span className={styles.pink}>
          throughout a network of interconnected smart contracts. 
          <br /><br />
          In off chain systems GraphQL presented a significant improvement in developer experience and system performance because it allows for instance level data queries and retrieval, compared to what it was like before in more Restful approaches where you put or get much larger chunks of unsorted data to sift through locally. In the past teams would build their own custom solution to querying blockchain data. Often, a new solution for each smart contract or project. 
          <br /><br />
          Now, everyone has flocked to the graph because of just how much more sanity comes from having a one stop solution.
        </span>
        <br /><br />

        <span className={styles.lightPink}>
          In true web3 style, the graph is more than just a querying system. They have recently decentralised further to include on-chain governance through their $GRT tokens and also created an open competitive market for data curation that actually allows curators adding value to the database to earn from the fees. 
          <br /><br />
          Curate to earn, an entirely new DeCo model. And that’s the most awesome thing about the combination of commerce, finance, economics, code and programming— is that it allows for democraticising every aspect of how we evolve capitalism to be more creative, cooperative, profitable for all, and ultimately truly capitalist. 
        </span>
      </div>

      <Link href='https://thegraph.com/'>
        <a target='_blank'>
          <div className={styles.rect1}></div>
        </a>
      </Link>
    </div>
  )
}

export default Page32