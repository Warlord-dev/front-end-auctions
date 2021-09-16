import React from 'react'
import styles from './page7172.module.scss'
import Link from 'next/link'

const Page7172 = () => {
  return (
    <div className={styles.wrapper}>
      <video autoPlay muted loop className={styles.video1}>
        <source src='./magazine/1/videos/moshed-05-02-1-15-28.mp4' type='video/mp4' />
      </video>

      <img src='/magazine/5/images/7172_image1.jpg' className={styles.image1} />
      <img src='/magazine/5/images/7172_image2.png' className={styles.image2} />
      <img src='/magazine/5/images/7172_image3.png' className={styles.image3} />

      <div className={styles.rect1}></div>

      <div className={styles.text1}>
        INTERNATIONAL PLAYERS
      </div>
      <div className={styles.text2}>
        UNITED 
      </div>
      <div className={styles.text3}>
        STATES
      </div>
      <div className={styles.text4}>
        OF
        <br /><br />
        AMERICA
      </div>
      <div className={styles.text5}>
        AHEAD OF THE METAVERSE: DIGITAL IDENTITY FIRST
      </div>
      <div className={styles.text6}>
        I had a World of Warcraft Character named “Cix”, it was also my alias across all my online identities. At the time I was depressed in my life, and the persona of “Cix”, this powerful online character helped me find meaning. The character was strong, confident, a great leader, and could lead a 25 person team to take down a Dragon. He represented personality traits I wanted myself to have. I then had identity theft, including the theft of my social security number. The only way I could fix this was to forever freeze my credit, or to legally change my name. By then, my virtual identity had more importance to me than my birth name. So, I went through the arduous process of legally changing it. This decision catapulted me into becoming this metaphysical character of myself, to challenge myself, and to take risks like moving out to California. I likely never would have gone on these adventures otherwise.
        <br /><br />
        A lot of what is being explored on the block chain in terms of virtual apparel, virtual land, and the idea of value of virtual achievements is similar to how gamers in MMO denote value. How we as a species and a generation assume value is becoming less of physical tangible things, and more of how we are seen in the “metaverse”. The value of physical location is disappearing, and the value of your online persona is only increasing every day.
        <br /><br />
        Interestingly identity is becoming both more concrete in some ways, but more malleable in others. For example; in Web2 social media, we have this belief that we should be held accountable for things we say, no matter how long ago we said them. This puts a concrete nature to prior messages and posts that are potentially unfair to people who grew up in the digital age. On the flip side, being fully anonymous like on 4chan allows us no accountability with our actions, and without accountability we can become the worst versions of ourselves. I like to believe the answer to Web3 is somewhere in the middle, where you can choose to evolve an online identity, but it is tied to some level of accountability or credibility built over time.
      </div>
    </div>
  )
}

export default Page7172
