import React  from 'react'
import styles from './page99100.module.scss'

const Page99100 = () => {
  
  return (
    <div className={styles.wrapper}>
      <img src='/magazine/5/images/99100_image1.png' className={styles.image1} />
      <img src='/magazine/5/images/99100_image2.png' className={styles.image2} />
      <video autoPlay muted loop className={styles.video1}>
        <source src='./magazine/5/videos/99100_video1.mp4' type='video/mp4' />
      </video>

      <div className={styles.rect1}></div>
      <div className={styles.rect2}></div>
      <div className={styles.rect3}></div>
      <div className={styles.rect4}></div>
      <div className={styles.rect5}></div>
      <div className={styles.rect6}></div>

      <div className={styles.text1}>
        DIGITALAX Marketplace Ascending.        
      </div>
      <div className={styles.text2}>
        This month the DIGITALAX Marketplace opened up for continuous collections, providing the GDN with another tool that they can weaponise for unleashing more novel fashion content into the market. It’s a pretty special moment because the DIGITALAX marketplace isn’t built for exclusive drops for the fragile legacy elite. It’s for the anarchist designer that is within us all. 
        <br /><br />
        And, it’s not just a wealth catalyst for the GDN, but also, the way that the entire DIGITALAX ecosystem is architected means that as we scale, grow and continue to make the market, the token holders and disturbed supporters too are able to harvest the upside. 
        <br /><br />
        The $MONA token is the value exchange mechanism within the ecosystem and with the soon to be deployed upgraded NFT staking and rewards distribution contracts, token holders will be able to receive profit distribution from the marketplace sales just because they hold $MONA. 
        <br /><br />
        This type of community inclusive model hasn’t actually been done before and aligning incentives of consumers and designers alike is something completely new for the fashion industry. Usually it’s mere posturing at decentralization, where in reality, profits accrue always in one direction towards the top. If we recognize that we are all actually on the same side of the table; creators, collectors, platforms alike the radical expansion of wealth will be greater than what we could have ever hoped to experience by going at it alone, creating a greater raw share for each participant. 
      </div>
      <div className={styles.text3}>
        New Podcast Series. Tales of Web3 Tailors. Conversations with the GDN. 
      </div>
      <div className={styles.text4}>
        To continue to introduce the GDN to the world, we have started a new podcast series so that everyone can learn more about why our designers are so special. Get intimate with web3 fashion. And, you can start listening to some of the first of these episodes here! 
      </div>
      <a href='https://soundcloud.com/talesofweb3tailors' target='_blank'>
        <div className={styles.text5}>
          Listen In Here to TOW3T.
        </div>
      </a>
    </div>
  )
}

export default Page99100
