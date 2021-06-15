import React from 'react'
import styles from './page21.module.scss'

const Page21 = () => {
  return (
    <div className={styles.wrapper}>
      <img src="./magazine/2/images/21_22/mobile/image1.png" className={styles.image1} />
      <div className={styles.image2}></div>
      <p className={styles.text1 }>Complexity is the antithesis of security, and it is a constant uphill battle. Devs, programmers, and testers can expunge every last bit of vulnerability from code, but operational risks will always remain. Because blockchains "live" on the internet, they are exposed to the same inherent security vulnerabilities that the internet possesses: phishing attacks, cross-site scripting, and injection attacks included. 
<br/><br/>
There's always going to be tradeoffs for every technological advantage, but the benefits are undoubtedly tantalizing. The future probably lies somewhere in eventually using a balance of both centralized and distributed systems, which allow for exciting implementations based on a particular need. 
<br/><br/>
In the end, the capability to work in different sectors lies in which consensus mechanisms end up surviving. 
</p>
    </div>
  )
}

export default Page21