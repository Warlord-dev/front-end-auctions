import React from 'react'
import styles from './page109110.module.scss'
import UnlockPage from '../common/UnlockPage-Three'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'

const Page109110 = () => {
  const router = useRouter()
  const { slug } = router.query
  const issueId = slug && slug.length > 0 ? slug[0] : magazineIssues[0].issueId
  const { contentUnlocked } = useSelector((state) => state.global.toJS())

  return (
    <div className={styles.wrapper}>
      <img src='/magazine/4/images/109110_image1.png' className={styles.image1}/>
      <h1>
        Remove the Ceiling by removing the Floor.         
      </h1>
      <div className={styles.text1}>
        The house always wins. 
        <br /><br />
        Designing a system that guarantees net profit regardless of external conditions or outcomes is not something that only the gambling houses can pull off. Sure, Sheldon Adelson might have gone into the game from a predatory casino perspective, leveraging human desire for generating countless derechos of devastation. But, we too can become the house— the house of our own lives— and, instead of wreaking destruction, we can rather inflate positive delta that is instrumentally valuable and tremendously gainful.
        <br /><br />
        Having a mastery over the meta-game means that we don’t need to know or get caught up in the volatility of the slot machines, the stack height of our chips, or the slight hand of the dealers. We can feel our own reality to play our own game. If we know our meta-how and have enough fluidity to dance with dynanism then we can map the catalysts and deltas to themselves. We can create a Y Combinator of positive cascades in each of our own lives for ensuring a net profit, no matter the situation or context. 
        <br /><br />
        And, in order to make this a truth, in order to win, we must maintain ownership of ourselves. Only when we play our own game are we positioning ourselves for guaranteed yield. We can turn the gears that propel stimulating change. Knowing our meta so well that we don’t need to get locked into one idea or scramble for frame control. 
        <br /><br />
        In fact, it’s not about control, it’s about ownership– very different. We must embrace giving away control of everything else around us. Because, ultimately, we don’t have control of anything, only ourselves. And if we establish the soundness and antifragility of our own model then we can start earlier, start well ahead. We can continue to play our own game and become damn good at it.
        <br /><br />
        We all have what it takes to win, but so many of us fall into the myth of pioneering. Anyone can do what it takes, but only very few decide to actually do it. My desire is to actually do it. To make sure I have ownership of myself above all else, to play my own game. Because only then can I commit to warranting impactful yield for all those that too desire to be their own house. 
      </div>
      <div className={styles.text2}>
        - Emma-Jane MacKinnon-Lee
      </div>
      <img src='/magazine/4/images/109110_background.png' className={styles.backgroundImage}/>
      {!contentUnlocked && <UnlockPage issueId={issueId} />}
    </div>
    
  )
}

export default Page109110
