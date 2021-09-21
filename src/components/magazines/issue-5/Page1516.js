import React from 'react'
import Link from 'next/link'
import styles from './page1516.module.scss'

const Page1516 = () => {
  return (
    <div className={styles.wrapper}>

      <img src='/magazine/5/images/1516_background1.jpg' className={styles.background1} />
      <video autoPlay muted loop className={styles.video1}>
        <source src='./magazine/5/videos/1516_video1.mp4' type='video/mp4' />
      </video>
      <div className={styles.rect1}></div>
      <div className={styles.text1}>
        <span>You talk about how the best talent will have DAOs competing for their time. How will a DAO know who the best talent is? Will it be on-chain data? How does someone new break in?
        </span>
        <br /><br />
        I think for DAOs to scale, we need on-chain reputation and credentialing systems to source and vet talent. Right now, onboarding talent is challenging because we’re relying on web2 reputation and credentialing systems. In web3, your contributions are your resume -- rather than relying on where you went to school or your title at your last job, these systems leverage your on-chain activity.
        <br /><br />
        Projects like RabbitHole and Station are based on this premise and what’s amazing about this is that it opens up opportunities for work to people who traditionally wouldn’t have access. Geography, education, web2 work experience -- none of those things matter in web3; it’s all about your contributions and that breaks down traditional barriers to entry significantly. I’m incredibly excited for DAOs to create this open, global labor market that makes opportunities for work accessible to everyone.        
      </div>
      <div className={styles.text2}>
        <span>
        How transient can identity be with immutable chains?
        </span>
        <br /><br />
        I think there are two approaches to this question. The first is to say that you can just spin up a new identity and begin contributing, so immutability doesn’t really matter because it doesn’t impact your ability to create new identities and begin building those identities on-chain.
        <br /><br />
        The second way to approach this is to see identity as something that compounds -- that who you are in a given moment is shaped by all of your past experiences. In that world, identity is still transient but it’s a snapshot of a moment in a broader evolution of who you are.
        <br /><br />
        I think the important aspect here is optionality -- the ability to choose between these two different approaches is more important than the approach itself. In web3, you are not constrained to a single identity, nor are you forced to constantly spin up new identities.        
      </div>
      <div className={styles.text3}>
        <span>
        You talk about the power and significance of community ownership. Will collective ownership be more important than individual? Which one will shape our identity more? 
        </span>
        <br /><br />
        I always like to break things down into lived experiences. When I think about how ownership feels as a lived experience, it’s very intimate. That feeling of ownership emerges from investing resources (energy, money, time) into something, having the ability to control how that thing acts, and feeling like you have intimate knowledge of the thing. At an individual level, these things can create a sense of pride and connectedness to something -- you might even feel that you identify as an owner of that thing. But ownership alone is lonely. Feeling connected to an asset or a thing can leave this sense of emptiness -- it doesn’t fulfill our very human desire to be connected and loved by other humans.
        <br /><br />
        Collective ownership fulfills that innate desire. By owning something with other people, we feel all the benefits of ownership, but we get to share that experience with other people. Out of that shared experience, identity emerges. These collectives often have a purpose, some goal that people are coordinating to achieve that is greater than what an individual alone could accomplish. This is where things get really interesting because it gives members of the collective a sense of purpose, that they are working toward something greater than themselves. The power of collective ownership is this intersection of identity and purpose and often these things actually reinforce one another -- a sense of purpose drives identification with the collective and identification with the collective tends to create a deeper sense of purpose.
        <br /><br />
        This is why I think collective ownership is going to be one of the most powerful mechanisms to emerge from web3.
      </div>
      <div className={styles.text4}>
        <span>
        Do you think that this shift will not only affect corporate culture but most importantly actually empower a lot more people to truly take ownership and agency of our own lives?
        </span>
        <br /><br />
        I hope so! I think as we become more crypto native, we’ll feel less satisfied with consumption that doesn’t result in ownership. A simple example of this is something like a Substack subscription. In web3, rather than having readers pay a monthly subscription to access content, you have models where readers need to own tokens. Once your mental model changes to ownership, something like a subscription seems like a ripoff. But that’s such a simple example -- this same logic applies to the organizations we work at and the groups we belong to.
      </div>
      <Link href='https://twitter.com/chaserchapman'>
        <a target='_blank'>
          <div className={styles.text5}>
            Chapman Hot Tweets            
          </div>
        </a>
      </Link>
      <Link href='https://twitter.com/chaserchapman'>
        <a target='_blank'>
          <div className={styles.text6}>
            Chapman Hot Tweets    
          </div>
        </a>
      </Link>
      <Link href='https://twitter.com/chaserchapman'>
        <a target='_blank'>
          <div className={styles.text7}>
            Chapman Hot Tweets
          </div>
        </a>
      </Link>
      <img src='/magazine/5/images/1516_image1.png' className={styles.image1} />
    </div>
  )
}

export default Page1516
