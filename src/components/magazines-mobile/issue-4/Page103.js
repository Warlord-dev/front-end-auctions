import React from 'react'
import styles from './page103.module.scss'
import Link from 'next/link';

const Page103 = () => {
  return (
    <div className={styles.wrapper}>
      <img src="/magazine/3/images/113_114/image11.png" className={styles.image1}/>
      <img src="/magazine/3/images/113_114/image6.png" className={styles.image10}/>
      <div className={styles.image12}></div>
      <p className={styles.text9}>People ask me why I started and activewear brand, and the answer is simple; because I want to create garments that people invest in for the betterment of their lives and not just for trends. My garments are created in a small, family run business in Bulgaria, using Italian sports fabrics which I chose for their durability and function. I create jumpsuits because I believe they are the most efficient type of garment for sports, and also they make you feel bad-ass and ready to go. My first collection was quite minimalistic and very limited in stock. I was inspired by the colour cobalt blue, by superhero’s and rave culture. You could wear them for sports, or clubbing!</p>  
      <img src="/magazine/3/images/113_114/image7.png" className={styles.image11}/>
      <div className={styles.image2}>
        <video className={styles.image3} muted loop autoPlay>
          <source src="./magazine/3/images/113_114/video1.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={styles.image16}>
        <video className={styles.image17} muted loop autoPlay>
          <source src="./magazine/3/images/113_114/video2.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={styles.image18}>
        <video className={styles.image19} muted loop autoPlay>
          <source src="./magazine/3/images/113_114/video3.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={styles.image13}></div>
      <p className={styles.text10}>In some ways as a designer/artist/music lover I feel limited creatively in my business, but now I see avenues to showcase creative concepts without being wasteful to the environment 
About 3-4 years ago I became fascinated with wearable technology, I contacted Kinetic Analysis, a Dutch wearables company, where we discussed our collaboration for a future TAKAII jumpsuit including sensors for measuring your bodily movements via an app, anywhere you train. I would love to make this dream come true and add even more functionality to my garments to serve more people in their pursuit of health. 
<br/><br/>
For the time-being my goal is to participate in the dismantlement of wasteful, polluting and inefficient manufacturing and allow my creativity to be fully expressed in my brand by integrating digital practices not just in the manufacturing process, but in the brand experience itself. </p>  
      <div className={styles.image14}></div>
      <p className={styles.text11}>The virtual world we are building is inspired by the four continents of Europe, Africa, South America and Asia. I believe we have so much wealth in heritage and this has been so essential to my identity. At the same time I love to rework and reimagine, you will see nods to Brutalist architecture, Indigenous artefacts and futurist city scapes.
      <br/><br/>
TAKAII’s breakthrough project will include a digital world to be experienced in Oculus Quest 2 VR glasses, showcasing my own conceptual designs.
<br/><br/>
A Ready-to-wear activewear collection will be inspired by this conceptual collection, and available for purchase as real life garments and/or digital twin, made-to-measure through a network of seamstresses on the TAKAII.com website. We will be using image scanning software from PS.Collective on our online shop, meaning you can preview a 3D activewear render, upload pictures of yourself, then we can derive your measurements and create our activewear made to measure just for you!
</p>
      <div className={styles.image20}>
        <video className={styles.image21} muted loop autoPlay>
          <source src="./magazine/3/images/113_114/video4.mp4" type="video/mp4" />
        </video>
      </div>
      <img src="/magazine/3/images/113_114/image5.png" className={styles.image22}/>
      <div className={styles.image23}>
        <video className={styles.image24} muted loop autoPlay>
          <source src="./magazine/3/images/113_114/video5.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  )
}

export default Page103