import React from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import styles from './page101102.module.scss'
import UnlockPage from '../common/UnlockPage-Poap'

const Page101102 = () => {
  const router = useRouter()
  const { slug } = router.query
  const issueId = slug && slug.length > 0 ? slug[0] : magazineIssues[0].issueId
  const { contentUnlocked } = useSelector((state) => state.global.toJS())

  return (
    <div className={styles.wrapper}>
      <img src='/magazine/5/images/101102_image1.png' className={styles.image1} />
      <img src='/magazine/5/images/101102_image2.png' className={styles.image2} />

      <div className={styles.text1}>
        Our End game. 
      </div>
      <div className={styles.text2}>
        What are the most important three turns of a ski run?
        <br /><br />
        It’s an interesting question to sit with and was posed by  ’60s Olympic skiing legend Billy Kidd. 
        <br /><br />
        The answer; the last three before you get back on the lift for another run.
        <br /><br />
        Why? Because finishing strong equips us with our own on-demand high quality iterative function. A function that we can condense overtime, making it more and more potent— weaponising it so that we can deliberately harness unconscious learning. Mastering our own feedback and measurement. And it’s not just relevant to skiing. You can give examples from any field. In a world where we are constantly pulled into the external and experience persistent low grade inputs every second, we must train to know where to look. Identifying what actually matters the most. Where to keep the focus. And if we can close full loops at strength then we can aclimatise to more intense conditions, align peak energy periods with peak creative work, identify more deeply our own peak states and leverage the entanglement between the brilliance and the madness. 
        <br /><br />
        It is something that I have come to focus on more deeply in building DIGITALAX. Deliberate practice on how to switch into peak performance state on-demand without slippage in my quality of presence. Because you can’t predict when that is needed. And a lot of the time you are either ready or you are not.
        <br /><br />
        And it helps in giving a broader perspective. How do you choose the best of many competing truths? First, recognize you have a choice. Then that there many. Run this as an iterative function on repeat through round after round of indefinite games. The output is more flexibility with time. My gains are the option to play with perspective, and through that time. Looking back now, we can take our time to see more of the information the earlier present didn't allow for. And from that larger perspective, choose, choose, choose, and do it some more. This is how reframing the past allows us to change it –– because it was already a selection game all along. Here's where I can fall in love with the end game.
      </div>
      <div className={styles.text3}>
        - Emma-Jane MacKinnon-Lee
      </div>
      {!contentUnlocked && <UnlockPage issueId={issueId} />}
    </div>
  )
}

export default Page101102
