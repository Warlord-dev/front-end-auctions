import React from 'react'
import styles from './page73.module.scss'
import Link from 'next/link';

const Page73 = () => {
  return (
    <div className={styles.wrapper}>
      <img src="/magazine/3/images/81_82/image11.png" className={styles.image30}/>  
       <img src="/magazine/3/images/81_82/image5.png" className={styles.image31}/>
       <p className={styles.text15}>#DEFIEDITION</p> 
       <Link href="https://badger.finance/">
        <a target="_blank">
          <img src="/magazine/3/images/81_82/image6.png" className={styles.image32}/>
        </a>
      </Link>
      <p className={styles.text16}>Badger DAO</p> 
      <Link href="https://balancer.fi/">
        <a target="_blank">
          <img src="/magazine/3/images/81_82/image7.png" className={styles.image33}/>
        </a>
      </Link>
      <p className={styles.text17}>Balancer</p> 
      <Link href="https://nexusmutual.io/">
        <a target="_blank">
          <img src="/magazine/3/images/81_82/image8.png" className={styles.image34}/>
        </a>
      </Link>
      <p className={styles.text19}>Nexus Mutual</p> 
      <Link href="https://sushi.com/">
        <a target="_blank">
          <img src="/magazine/3/images/81_82/image9.png" className={styles.image35}/>
        </a>
      </Link>
      <p className={styles.text20}>Sushi Swap</p> 
      <Link href="https://homora.alphafinance.io/">
        <a target="_blank">
          <img src="/magazine/3/images/81_82/image10.png" className={styles.image36}/>
        </a>
      </Link>
      <p className={styles.text21}>Alpha Homora</p> 
    </div>
  )
}

export default Page73