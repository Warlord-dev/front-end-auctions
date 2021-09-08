import React from 'react'
import Link from 'next/link'
import styles from './page16.module.scss'

const Page16 = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.image1} src='/magazine/4/images/1718_image2_mobile.png' />

      <Link href='https://ipfs.io/'>
        <a target='_blank'>
          <img className={styles.image2} src='/magazine/4/images/1718_image3.png' />
        </a>
      </Link>
      <h1>
        Distributed Hashing        
      </h1>
      <h2>
        Coordinated Retrieval
      </h2>
      <h3>
        Have you ever wondered how you are actually able to see this starry-planet-luminescent page? Of course we could attribute some of our best biological traits; from the lens receiving light through the pupil and lens, which then lands on our retina, where the brain adds depth perception and correct visual orientation to the light transmitted to it through our optic nerves. Beyond all of that what about where the data that arrives on your screens is stored, found, and retrieved? 
        <br /><br />
        Traditional storage providers rely on a mix of onsite and cloud storage that fundamentally deliver a constant stream of headaches for users. Whether that be cyber attacks, insider threats, lack of support and ultimately single points of failure. As we become more web3 fluent the more we realise just how much there is to translate from the legacy world. And one of those is data storage. IPFS (Interplanetary File Storage) is doing just that. They power a critical layer of web3 by breaking content into component parts, each addressed with a unique cryptographic hash, and distributed throughout the world to many nodes for persistent availability with assurance that you are getting the intended file and it won’t be arbitrarly altered without your transparent knowledge.
        <br /><br />
        IPFS splits your content into small modules and then cryptographically hashes it with a unique fingerprint known as a CID or content identifier. This CID acts as a permanent record of your file as it exists at that point in time. If the content is ever altered, changed, upgraded, then so is the CID.
      </h3>
      <h4>
        While the experience is by no means perfect yet –– frustrations about CID clashes high on the list for near future improvement –– it certainly is far better than what has come before it. And that’s really the point of these new wealth catalysts, they expand the range of possibilities for achieving better future outcomes by radically broadening the base of activity. As decentralised file storage tools and platforms continue to mature we will soon find ourselves in the long awaited promise land; able to break free from the chains of big tech centralisation that underwrites so much of our online activity. 
        <br /><br />
        As the real decentralised metaverse becomes more essential to every part of our lives, and virtual personas and avatars aren’t just simple to overlook gaming characters or Twitter PFPs, transparently owning, storing and collateralising our data becomes one of the most engaging, interest driving facets of our always connected experience.  
      </h4>
    </div>
  )
}

export default Page16