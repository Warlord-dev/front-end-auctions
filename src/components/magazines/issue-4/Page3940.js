import React from 'react'
import styles from './page3940.module.scss'

const Page3940 = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.image1} src='./magazine/4/images/3940_image1.png' />
      <h1>
        FASHION FOR THE METAVERSE      
      </h1>
      <div className={styles.text1}>
        WHAT ARE YOU WEARING?        
      </div>
      <div className={styles.text2}>
        WHAT ARE YOU WEARING?        
      </div>
      <div className={styles.text3}>
        WHAT ARE YOU WEARING?        
      </div>
      <div className={styles.text4}>
        WHAT ARE YOU WEARING?        
      </div>
      <div className={styles.text5}>
        WHAT ARE YOU WEARING?        
      </div>
      <div className={styles.back1}></div>
      <video autoPlay muted loop className={styles.video1}>
        <source src='./magazine/4/videos/3940_video1.mp4' type='video/mp4' />
      </video>
      <img className={styles.image2} src='./magazine/4/images/3940_image2.png' />
      <img className={styles.image3} src='./magazine/4/images/3940_image3.png' />
      <img className={styles.image4} src='./magazine/4/images/3940_image4.png' />

      <div className={styles.text6}>
        This week isn’t about the fashion. It’s about the wearing of it and what that does for each of us. The designers, collectors, buyers and weavers of new mediums across the physical and digital realms.  Web3 Fashion Week is about decentralising the entire industry so that anyone can be empowered by what we wear and not just in a sentimental way. Fashion can literally be put to work for us. We can create far more value from it outside of black-box IP and how good we look and feel in it. DIGITALAX and the Global Designer Network are designing fashion that does this exactly.    
      </div>
    </div>
  )
}

export default Page3940
