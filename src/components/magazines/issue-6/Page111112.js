import React from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import styles from './page111112.module.scss'
import UnlockPage from '../common/UnlockPage-Poap'

const Page111112 = () => {
  const router = useRouter()
  const { slug } = router.query
  const issueId = slug && slug.length > 0 ? slug[0] : magazineIssues[0].issueId
  const { contentUnlocked } = useSelector((state) => state.global.toJS())

  return (
    <div className={styles.wrapper}>
      <img src='/magazine/6/images/111112_image1.png' className={styles.image1} />
      <img src='/magazine/6/images/111112_image2.png' className={styles.image2} />

      <div className={styles.text1}>
        Native to the Medium.
      </div>
      <div className={styles.text2}>
        Currency is a time keeping device meant to help us find our way from wherever we may be to the places we desire to go. In many ways, it is what also allows us to cease being captive to the myth of normalcy and the centralised tyranny that tells us that there are only a handful of valid ways to be human, and, if for some reason we aren’t in fitting with this from the get go, then the demands for us to contort into these accepted forms of being continue to become more and more asphyxiating.        <br /><br />
        <br /><br />
        Keeping the courage of your convictions even in the most unstable and erratic environments requires continued practice for mastering of the fundamentals. We must dislodge from the toxic status quo and embrace the surroundings of this new world, rebuilding our lives on a more authentic and sincere basis and reconfiguring our internal clocks.         <br /><br />
        <br /><br />
        Because navigation is all about effective timekeeping and learning to record the movement of dynamic streams of relevant information as they disperse and cluster across topic spaces over time. One of the most astonishing internal clocks belongs to the bioluminescent Bermuda fireworm. A tiny marine organism with just a fraction of the cognitive capacity of us humans, and yet, internally equipped with three different timekeeping devices, each with extreme precision: regular twenty-four-hour diurnal clock, a lunar clock with a 27.3-day cycle, and an interval timer to tick out the exact minutes past sunset.        <br /><br />
        <br /><br />
        The exactitude is utterly remarkable and like with this case and others, we can take instruction from evolutionary systems, battle hardened by hundreds of millions of years of testing and optimisation, to learn how we can best configure consensus and coordination in decentralised networks.         Extending this further, we can then build higher fidelity representations of locations that are based on our point of view, experiences, memories, goals, and desires; manifesting the metaverse from the abstract to the tangible. It provides the infrastructure for our selfhood and levels up our mechanism design for better navigating the chaos of convex opportunities and events. 
      </div>
      <div className={styles.text3}>
        - Emma-Jane MacKinnon-Lee
      </div>
      {!contentUnlocked && <UnlockPage issueId={issueId} />}
    </div>
  )
}

export default Page111112
