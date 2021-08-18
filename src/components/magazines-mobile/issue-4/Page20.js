import React from 'react'
import styles from './page20.module.scss'
import Link from 'next/link'

const Page20 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.rect1}></div>
      <div className={styles.text1}>
        The DAO RugPull        
      </div>
      <div className={styles.text2}>
        DAOs exist to better coordinate the intent, interests, and incentives of far flung groups of people, often with widely diverging positions both on a map and towards an issue. This is powerful. It’s easy to miss how much of our time, effort, and money are eaten by coordination problems and decision paralysis in our social groups. But just coming together is never enough. There’s got to be some forcing function that drives the group forward, keeps recalibrating alignment and draws participants into highly engaged activity on the regular. 
        <br /><br />
        Most of us have heard of the 1-9-90 phenomena in internet culture; but for a quick refresher, it says that within collaborative communities 90% of the participants of tend to be passive consumers, 9% of the participants are semi-active, coming and going without full commitment, and the remaining 1% of the participants are so engaged they become what drives the growth, vitality and majority of activity in the community. This might work out ok for web2 internet sites like Wikipedia which benefit from but do not actually require exponential network effects. When it comes to web3 protocols, however, the depth and breadth of connection density required from direct engagement is so much more critical. Financial value, creative power, social mobility and a sense of belonging are all on the line. And Sometimes we pull the rug out from under ourselves. We hinder the growth of our cooperative efforts, which creates our own low ceilings.
      </div>
      <div className={styles.text3}>
        Decentralised governance is not just a right, it’s also a self-responsibility to prevent impending loss. For this to work each member with governance rights must also have enough at stake to feel their loss from atrophy, entropy, or malicious activity. 
        <br /><br />
        All too often, particularly at this stage of web3, projects decentralise with community governance tokens representing the voting rights of a member, but there is no real incentive for someone to be active, and more importantly, for a large whale, bag holder, or just any member of the project to feel a urgent need that they will actively lose out on substantial financial gains, alpha leaks, new best friends, co-founders to be, the cultivation of revolutionary new art, a socio-political-regulatory environment conducive to continued innovation, or some other form of opportunity or potentiality catalyst. For all these reasons and more that people are drawn to join a DAO, there's rarely any pain to be felt, that is build in to the operating code, for what happens if the DAO flatlines. 
        <br /><br />
        This is a problem because it undermines the entire project’s growth potential. If, as is often true, governance voting is the core driver for a project to form and onboard new partnerships, increase liquidity, expand reach, prioritise the development and engineering roadmap and more, then it’s distinct vulnerability to essential operations if non-active members are needed for  all the above to occur. Ultimately, it can cause a project to stagnate, impinge on its sustainability, and even cause it to shut down as some major DAOs have already.
        <br /><br />
      </div>
      <div className={styles.text4}>
        You can't force voters to vote. The entire point of decentralized tech is greater agency and autonomy through radical reductions in barriers to personal decision making and social coordination. It does this through incentives towards voluntary action, not strenuous hand wringing and overburdensome rules.
        <br /><br />
        But it’s not all doom and gloom, there are much better ways available today. Mechanisms like delegated voting are active in a number of protocols, allowing users to transfer their governance power and responsibiltiy to a trusted individual/group, which then can maintain active participation on behalf of them. This is hugely beneficial when protocols enforce quorum as way to ensure a minimum standard for decentralisation and community representation. 
        <br /><br />
        Ultimately, in one of the same key ways Nakamoto Consensus provides a general solution to the Byzantine Generals Problem, avoidance of loss is a greater motivator than most other incentives. As DAOs inspire us to see much more of what is possible when we coordinate with friends in fully flat hierarchies, limiting who qualifies for a quorum call, DAO leadership tiers which balance stake with activity to determine vote weight, and rewards for greater participation levels can all help to better maintain alignment with a DAOs intended purpose, vitality, and growth.
      </div>
    </div>
  )
}

export default Page20