import React from 'react'
import styles from './page21.module.scss'

const Page21 = () => {
  return (
    <div className={styles.wrapper}>
      <video autoPlay muted loop className={styles.video1}>
        <source src={`./magazine/4/videos/2324_background.mp4`} type='video/mp4' />
      </video>
      <h1>
        SUSTAINABILITY PIONEERS        
      </h1>
      <img src='./magazine/2/images/31_32_image.png' className={styles.image1} />
      <div className={styles.line1}></div>
      <div className={styles.rect1}></div>
      <div className={styles.text1}>
        Clean Energy Crypto Mining Clean Energy
      </div>
      <div className={styles.text2}>
        Clean Energy Crypto Mining Clean
      </div>
      <div className={styles.text3}>
        Clean Energy Crypto Mining Clean
      </div>
      <div className={styles.text4}>
        Clean Energy Crypto Mining Clean
      </div>
      <div className={styles.text5}>
        Clean Energy Crypto Mining Clean
      </div>
      <div className={styles.text6}>
        Clean Energy Crypto Mining Clean
      </div>
      <div className={styles.text7}>
        Aligning profit with purpose is such an obvious good that we wonder why it is so rare. But the reality is, it’s rarely been possible before. As the breadth of startups, tech projects, builders, creators and engineers moving into the web3 space grows, so does the interest from hedge funds and other captial providers, as they desire to increase their positive exposure. 
        <br /><br />
        Viridi Funds is one of those, and is taking advantage of this active interest by orienting capital so that it also mutually benefits and reinforces greater commitment to environmental sustainability.They recently launched the Viridi Cleaner Energy Crypto-Mining & Semiconductor ETF. An ETF focused on investments within the cryptocurrency mining and mining infrastructure industries, and moreso, greatly promoting the transition of Bitcoin mining to clean and otherwise-unused energy for radically reducing its current carbon emissions. PoW has always been quite the controversy, both within and outside of the crypto community, and for many, patience for greater innovation around securing long term sustainability of this energy intensive activity has been pushed to all time lows as volume and transactional activity increases. It’s important to not mix up media hype with actual facts— the evidence shows us that blockchain usage/mining is significantly less environmentally harmful than other large industries that have been around for years— yet, any step towards improving adoption of crypto and at the same time aligning greater environmental consciousness creates positive sentiment that should be echoed. 
        <br /><br />
        And Oklo and Compass with their recent partnership are doing exactly that; amplifying this echo. Oklo is a clean energy plant developer out of California that is using its engineering and scientific strides in the advanced fission space to contribute and respond to the commercial demands of crypto mining. They recently aligned with Compass for a 20 year commercial partnership that has placed commitment towards powering Bitcoin mining with advanced fission, whereby Oklo is beginning to supply Compass Mining with clean, reliable, and cost-effective baseload power from their advanced fission powerhouses. 
        <br /><br />
        As we continue to expand as a population, increase our infrastructure and domestic consumption, especially alongside the rapid rise and maturation of economies out of Asia and Africa, energy demands too increase and grow. And, extracting more energy is not an easy task. There is a balance between quickly moving away from fossil fuels whilst at the same time navigating the hope that renewable energy sources can provide enough power to fill this energetic gap. Advanced fission is one way to do this, and the use case of crypto mining          
      </div>
    </div>
  )
}

export default Page21