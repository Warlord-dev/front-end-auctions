import React from 'react'
import styles from './page102.module.scss'
import Link from 'next/link';

const Page102 = () => {
  return (
    <div className={styles.wrapper}>
      <img src="/magazine/3/images/113_114/image9.png" className={styles.image1}/>
     <p className={styles.text1}>THAKANE</p>  
     <p className={styles.text3}>TAKAII</p>
     <div className={styles.image2}>
        <video className={styles.image3} muted loop autoPlay>
          <source src="./magazine/3/images/113_114/video1.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={styles.image4}></div>
      <p className={styles.text7}>Growing up as a world citizen has formed my way of thinking to be a connector. I was born in Lesotho, and grew up changing countries around the world every 3-4 years. One side of my family coming from Lesotho and the other side from UK/Spain meant that I would experience the contrast between rural African life and city life in Europe, where many things are taken for granted. <br/>
I was always sketching and drawing designs since I was a child, however my learn frugality meant that I would remix old clothes before trying to impress in mass trends. I apply that way of thinking very much in my activewear business, TAKAII. </p>  
      <img src="/magazine/3/images/113_114/image10.png" className={styles.image5}/>
      <div className={styles.image8}></div>
      <p className={styles.text8}>During my art studies I enjoyed taking the stage at raves and creating music with my friends, the intersection of different art forms is where I feel most comfortable. 
<br/><br/>
Beautiful things happen when people mix their ideas and a completely new energy is created. I took the stage at underground events in Barcelona as an MC mostly during the big Dubstep trend 7-8 years ago. This was not my true calling but we had a lot of fun! 
<br/><br/>
In terms of design I worked together with Telekom Germany on the revamp of their Love Magenta collection in 2019 as well as starting my very first business, TAKAII. 
<br/><br/>
The collaboration with a corporate giant brought me even more insight into how merchandising for the sake of merchandising was contrary to my ethos, and I was happy to help them steer into  more sustainable production method, working together with a London based company, TwoLives who create clothing from surplus factory fabrics. 
<br/><br/>
This was really rewarding as again I used my connecting skills to bring more value and integrity to an otherwise pretty wasteful corporate culture.
</p>  
      <img src="/magazine/3/images/113_114/image5.png" className={styles.image9}/>
      <img src="/magazine/3/images/113_114/image3.png" className={styles.image6}/>
      <img src="/magazine/3/images/113_114/image4.png" className={styles.image7}/>
    </div>
  )
}

export default Page102