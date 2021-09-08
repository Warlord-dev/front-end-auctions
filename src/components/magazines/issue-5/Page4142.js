import React from 'react'
import DesignerBubble from '@containers/designer-bubble'
import styles from './page4142.module.scss'

const Page4142 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.back1}></div>
      <img className={styles.image1} src='/magazine/4/images/4142_image1.png' />
      <img className={styles.image2} src='/magazine/4/images/4142_image2.png' />
      <img className={styles.image3} src='/magazine/4/images/4142_image2.png' />
      <img className={styles.image4} src='/magazine/4/images/4142_image3.png' />
      <img className={styles.image5} src='/magazine/4/images/4142_image3.png' />
      <img className={styles.image6} src='/magazine/4/images/4142_image3.png' />
      <img className={styles.image7} src='/magazine/4/images/4142_image3.png' />
      <img className={styles.image8} src='/magazine/4/images/4142_image3.png' />
      <img className={styles.image9} src='/magazine/4/images/4142_image3.png' />
      
      <video autoPlay muted loop className={styles.video1}>
        <source src='./magazine/4/videos/4142_video1.mp4' type='video/mp4' />
      </video>

      <div className={styles.text1}>
        How can a DAO generate real value not just at the individual or collective group level, but rather for an entire protocol, industry, ecosystem or market? Wealth catalysts are more than a rebalance, redistribution or reallocation of value across a supply chain. It’s more than moving capital and goods from Point A to Point B. Instead, in order to truly generate wealth, novelty must be included at the root so that transformative leaps become plentiful. 
        <br /><br />
        This is what the Global Designer Network DAO is all about. It’s not just a fancy new investment vehicle, a collective effort to raise the floor price of some product, or even a loose grouping of people passively bringing their names together but not connecting much beyond that. The GDN is a real community of anarchists revolutionising transforming fashion.
        <br /><br />
        We are planting the flag for Web3 Fashion and every single part of it. We are hungry for more.  Curious minds. Unsatisfied with how monotomous and predatory the legacy industry is today. Frankly. we are over it. And instead of just complaining about it, we are taking action to design the difference. To weave the threads between the new and the possible. Even what many think is impossible. 
        <br /><br />
        And at Web3 Fashion Week we are going on-chain officially. Proceeds from the Design DAO Auction go towards seeding the GDN Treasury and the launch of the $GDN governance token, so that we can further scale out our productive capacity across virtual worlds. new web3 native business models, educational content and resources for empowering more designers and creators to take the leap. The GDN is making the martket for web3 fashion. We are mixing style with action and it’s like nothing you have ever seen before. 
      </div>

      <DesignerBubble />
    </div>
  )
}

export default Page4142
