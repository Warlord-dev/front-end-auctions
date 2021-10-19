import React from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import styles from './page109110.module.scss'
import UnlockPage from '../common/UnlockPage-Poap'

const Page109110 = () => {
  const router = useRouter()
  const { slug } = router.query
  const issueId = slug && slug.length > 0 ? slug[0] : magazineIssues[0].issueId
  const { contentUnlocked } = useSelector((state) => state.global.toJS())

  return (
    <div className={styles.wrapper}>
      <img src='/magazine/6/images/109110_image1.png' className={styles.image1} />
      <img src='/magazine/6/images/109110_image2.png' className={styles.image2} />

      <div className={styles.text1}>
        Global Individualism. 
      </div>
      <div className={styles.text2}>
        Although obvious to so many today, going back in time, it’s sometimes hard to fathom that innovations as industrial as the printing press or as boring as a novel approach to keeping records of mundane information, like who owns what and how much, has paved the way for things so globally transformative and impactful to not just how we exist now but how we comprehend the full shapes, scope and vitality of every part of our experiences. 
        <br /><br />
        It’s these increasingly efficienct approaches to creating and transferring information and content that continue to drive forth opportunities for better societal conditions and economic activity. The blockchain, as the first real world proof of triple entry bookkeeping, allows us to gain additional dimensions of context and expand the range of space we can create wealth within; both financially and culturally.  
        <br /><br />
        We are still not yet even close to realising the magnitude of just what is in store for our society, and everyday that decentralised tech becomes increasingly adopted, utilised and valued, this becomes just that much more saliently evident. With incentives aligned and everyone sharing in the value generated across all aspects of the system, our individual agency and ownership is directly baked into everything that we do, further empowering our recognised worth on the global stage. 
        <br /><br />
        Yet, it’s not just how we are seen in the eyes of others, but true self ownership, empowered by decentralised tech and its principles, enables us to form our digital identities and have them exist well past the platforms that they were built on. We no longer have to conform to the norm, industry standards, bigger players or contort ourselves to fit into ever smaller boxes. Decentralised identity maximises our potential for growth, prosperity, creativity and wealth. 
        <br /><br />
        And it’s this autonomy that leads us to greater mastery over our primary skills and drives so that we can effectively self weaponise all of our attributes and find new means of collaboration in ever present competition. 
      </div>
      <div className={styles.text3}>
        - Emma-Jane MacKinnon-Lee
      </div>
      {!contentUnlocked && <UnlockPage issueId={issueId} />}
    </div>
  )
}

export default Page109110
