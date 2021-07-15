import React from 'react'
import styles from './page65.module.scss'

const Page65 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image1}></div>
      <div className={styles.image2}></div>
      <div className={styles.image3}></div>
      <div className={styles.image4}>
        <video className={styles.image5} muted loop autoPlay>
          <source src="./magazine/3/images/73_74/video1.mp4" type="video/mp4" />
        </video>
      </div>
      <p className={styles.text4}>A flawed, asymmetrical world<br/>
Think of how many services we use that require so many complex ways of gatekeeping and rent-seeking behavior. Think of how many services we use that leave a person’s fate to some recalcitrant bureaucrat or pencil-pushing twerp in a suit behind a counter, anxiously awaiting their almighty pen stroke to determine whether you can get an educational or housing loan. That’s not even mentioning how restrictive the world of traditional finance is—if you don’t have the money, you get jack squat. It’s all constant intermediation, all the time. 
<br/><br/>
We live in a bizarro world where middleman upon middleman upon middleman worsen the state of things across society, culture, technology, government, economics, and finance—in a world where the shadowy cabal of bankers, financiers, wheeler-dealers, academics, and their enablers that feel they have the carte blanche to determine whether an individual is worthy to serve, apart from shaking them down for their privilege of dealing with this insidious crew. 
<br/><br/>
Technology is a concrete example of an antifragile sector: progress is dependent on constant tinkering and taking on asymmetrical risk—and blockchain technologies, as well as the builders, creators, and developers in the space, are exemplars of forward-thinking progress that thrives and evolves in the face of uncertainty.
<br/><br/>
Nowhere is this fragility more evident than the traditional sectors of banking and finance, which have been immensely affected by the ongoing paradigm shift towards digitalization. Bank branches across the United States, Europe, and the rest of the world are closing down. And one can’t help but feel the sun starting to set ever so slightly on a monolithic industry that’s systematically exclusive, with costs so high, and gains so low.
<br/><br/>
It’s a system whose restrictive KYC and AML regulations, particularly in developing economies deny services to those who can’t provide documents—and there are $380 billion reasons why this unbanked sector might look elsewhere for a better alternative.
<br/><br/>
The advent of decentralized finance (DeFi) is changing that.</p>
    </div>
  )
}

export default Page65