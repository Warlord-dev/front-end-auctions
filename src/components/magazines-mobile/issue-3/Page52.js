import React from 'react'
import styles from './page52.module.scss'
import Link from 'next/link';

const Page52 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image9}></div>
      <div className={styles.image8}></div>
      <img src="/magazine/3/images/57_58/image7.png" className={styles.image10}/>  
      <img src="/magazine/3/images/57_58/image8.png" className={styles.image11}/> 
      <img src="/magazine/3/images/57_58/image9.png" className={styles.image12}/>  
      <Link href="https://rarible.com/">
        <a target="_blank">
          <p className={styles.text12}>Rarible.</p>   
        </a>
      </Link>
      <p className={styles.text31}>Jai Bhavnani</p>
      <p className={styles.text13}>You launched Rari about 1 year ago. Looking back, did you anticipate that it'd be such a wild ride? Up and then down and then back again. </p>    
      <p className={styles.text14}>Definitely not! In the back of my head, I had always known it was a possibility as I had seen the rise and fall of many projects before mine but it is a totally different feeling when you’re in the steering wheel. However, it is the ups and downs that make all of this as exciting as it is. </p> 
      <p className={styles.text15}>Let's play a quick game. Flex how RARI your knowledge of NFTs, DeFi and crypto really is. FILL in the blank. Wrong answers only.</p>
      <p className={styles.text16}>NFTs are <span className={styles.text17}>bad for the environment (lol)</span></p>
      <p className={styles.text18}>DAOs are bad for <span className={styles.text19}>IRS</span></p>
      <p className={styles.text20}><span className={styles.text21}>Doge</span> will replace Ethereum as <span className={styles.text21}>the money of the future</span></p>
      <p className={styles.text22}>Better known as <span className={styles.text23}>John Mccaffee</span>, this <span className={styles.text23}>crypto-influencer</span> will bring the bull market back</p>
      <p className={styles.text24}>Now let's get a bit more serious. Building in web3 is hella fun and I am sure that we can all agree that none of us would ever sell out to go back to the legacy system that we came from. But, what actually keeps you up at night and what makes all of this so important? </p>
      <p className={styles.text25}>Recently at Rari Capital, we’ve been ideating around this campaign called, “Break Free.” It is centered on enabling every individual in our community to truly break free. Our products are just one of the many paths to doing so. If we don’t do this, as an industry, people are stuck. Stuck in their debt, or just being crapped on by the banks and centralized institutions. DeFi should be the beacon to save all. I worry that we aren’t doing enough, I worry that we’re so stuck on farming incentives and yield farms that we’ll lose sight of this.</p>
      <p className={styles.text26}>And finally, if we were to instigate an NFT focused variation on the anime Food Wars, with really off the creators instead of chefs, would you be in?</p>
      <p className={styles.text27}>Hell yeah.</p>
      <p className={styles.text28}>DEFI</p>
      <p className={styles.text29}>DAO</p>
      <p className={styles.text30}>NFT</p>
    </div>
  )
}

export default Page52