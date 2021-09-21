import React from 'react'
import styles from './page2122.module.scss'

const Page2122 = () => {
  return (
    <div className={styles.wrapper}>
      <video autoPlay muted loop className={styles.video1}>
        <source src='./magazine/5/videos/2122_video1.mp4' type='video/mp4' />
      </video>
      <video autoPlay muted loop className={styles.video2}>
        <source src='./magazine/5/videos/2122_video2.mp4' type='video/mp4' />
      </video>
      <img src='/magazine/5/images/2122_frame1.png' className={styles.image1} />
      <img src='/magazine/5/images/2122_frame1.png' className={styles.image2} />
      <div className={styles.rect1}></div>
      <div className={styles.rect2}></div>
      <div className={styles.text1}>
        Every individual’s basic rights are upheld by the Universal Declaration of Human Rights, and this has been the case since 1948. It postulates the fundamental freedoms of each human being and upholds their universal nature as innate, inalienable, and subject to every human being – bar none.
        <br /><br />
        But in spite of the diverse backgrounds of the powers-that-be responsible for its drafting, one egregious omission that they took for granted that billions of individuals all over the world to this very day lack is identity.
        <br /><br />
        And, while many rights are conferred to individuals at birth, many others are difficult to obtain without identification.
        <br /><br />
        Over 15% of the global population live without any form of identification. That’s over one billion people who cannot prove who they are. Nearly 50% of those individuals lacking identity make up a quarter of the planet’s most destitute – leaving them in a precarious, practically invisible state. 
        <br /><br />
        That’s one-seventh of the population who therefore lack the agency to exercise their right to suffrage, open a bank account, own a house, or find gainful employment, just because they lack a piece of paper showing their proof of personhood.
        <br /><br />
        That’s billions of individuals who are excluded from achieving their fullest potential.
        <br /><br />
        On the other hand, even individuals with recognized identification lack total ownership and control over their identities and how their information is used. Once your SSN is issued and lost, you’re fucked. Moreover, every data point is controlled by corporations and the government, and therefore subject to frequent hacks every single day.
      </div>
      <div className={styles.text2}>
        Meanwhile, while the internet has democratized the way we share information, as with any complex structure involving the marriage of society and technology, its tendency is to consolidate power that can pervert everything under its gravity.
        <br /><br />
        The very same technologies designed to democratize, liberate, and equalize have been subverted by the corporations and repressive governments that benefit from the Orwellian and totalitarian dystopia we find ourselves in – straight out of 1984. Our personal information is under the absolute control of other parties – it’s not ours. 
        <br /><br />
        This has led to a global shift in identity approaches and the value it adds to humanity and society – as the principles of decentralization start to revolutionize the way we manage our identities.
        <br /><br />
        But what would decentralized identity look like without passports? In decentralized identity, your passport IS the blockchain.
        <br /><br />
        Whereas the validity of your credit cards or government IDs are subject to the whims of their respective issuing authorities. They have all the right to determine their validity or obsolescence.
        <br /><br />
        However, since the data on those IDs refer to you, you are the person who owns (and therefore holds) that identity information. Decentralized identity seeks to achieve the same result for your digital identity.
        <br /><br />
        That’s all well and good. But how do we build trust in a network and reputation without legacy systems of verification?
        <br /><br />
        Decentralized identity solutions like BrightID might hold the key. BrightID is a social identity network that uses a social graph to prove that you are using only one account.
      </div>
    </div>
  )
}

export default Page2122
