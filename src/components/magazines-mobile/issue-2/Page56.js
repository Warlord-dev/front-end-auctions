import React from 'react'
import styles from './page56.module.scss'
import Link from 'next/link';

const Page56 = () => {
  return (
    <div className={styles.wrapper}>
      <img src="./magazine/1/59_60/image21.png" className={styles.image21} />
       <Link href="https://daostack.io/"><a>
        <img src="./magazine/1/59_60/image16.png" className={styles.image22} />
        </a>
       </Link>
       <Link href="https://aragon.org/"><a>
        <img src="./magazine/1/59_60/image17.png" className={styles.image23} />
        </a>
       </Link>
       <Link href="https://snapshot.org/#/"><a>
       <img src="./magazine/1/59_60/image18.png" className={styles.image24} />
       </a>
       </Link>
       <p className={styles.text7}>Considering Launching A DAO?</p>
      <p className={styles.text8}>It’s not a trivial endeavor— especailly if you’re going to do it right; establish a real DAO. The whole process is quite encumbersome. But... it doesn’t have to be set up completely from scratch, there are some great ready to use interfaces, tools, gadgets out there that allow you to set up different parts of your DAO structure and evolve it overtime. </p>
      <p className={styles.text9}>An open source project that allows you to easily set up and interface with a DAO through their Alchemy platform. It’s unique for the fact that you don’t have to launch your own ERC-20, but rather can use DAOstack’s REP token and distribute this to members for on-chain voting. A user’s Reputation score represents their decision-making power. Each DAO has a separate ledger of Reputation scores, and so Reputation cannot be directly transferred from peer to peer, ensuring that members of the DAO earn their voting power rather than just accumulating it for the sake of it, where it is distributed through the passing of proposals inside the DAO and is non-transferrable. </p>
      <p className={styles.text10}>ARAGON</p>
      <p className={styles.text11}>Aragon too offers a variety of different governance solutions with on-chain voting, and it’s govern product will soon implement gasless voting, allowing more accessible proposal management. However, one potential caveat is that the governance tokens are liquid, meaning that they can be traded, openly, allowing anyone to accumulate power within the DAO through siimply buying the token, rather than potentially actually contributing to its broader mission. </p>
      <p className={styles.text12}>snapshot</p>
      <p className={styles.text13}>Snapshot is another DAO infrastructure, that allows anyone to launch what is called “spaces” with off-chain gasless governance. It allows members of a project or DAO i.e. holding the governance token, to sign messages with their wallet addresses when voting on put forth proposals. Proposals can be made with select start and stop times, as well as a block height which is used to gather on-chain data for the front end.    </p>
    </div>
  )
}

export default Page56