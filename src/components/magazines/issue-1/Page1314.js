import React from 'react'
import styles from './page1314.module.scss'

const Page1314 = () => {
  return (
    <div className={styles.wrapper}>
      <img src='./magazine/1/images/Rectangle 786.jpg' className={styles.backImage1}/>
      <img src='./magazine/1/images/Collage 1.jpg' className={styles.backImage2}/>
      <div className={styles.leftSideFrame}></div>
      <img src='./magazine/1/images/howtogetintext 2.png' className={styles.leftTextImage}/>
      <div className={styles.rightSideFrame}></div>
      <img src='./magazine/1/images/howtogetintext 1.png' className={styles.rightTextImage}/>
      <h1>
        Starting with 3D// Interview with Stan McGylin, Pipeline Manager and Creative Director at DIGITALAX, on the 3D Content Creation process.
      </h1>
      <h2 className={styles.section1}>
        How did you begin working with DIGITALAX?
      </h2>
      <p className={styles.section1}>
        I started as a freelancer, brought in to assist with a small task: a simple turntable render with a pretty complex garment in a very very short deadline. 
        After that, I met with all the designers that were already working on some awesome garments, 
        and we started to prepare our very first auction. From then on, I was an official team member! 
      </p>
      <h2 className={styles.section2}>
        Can you walk us through the pipeline process for how you get all those designs together and ready for auction! 
      </h2>
      <p className={styles.section2}>
        We have a very flexible pipeline with a fast render engine. We work with the designers in CLO3D/Marvelous Designer to create the awesome garments. 
        Then all the data (geometry, textures, caches, etc.) flows into Houdini for look development, lighting and rendering. 
        We use Redshift for the render engine. After all of this, the render passes go to Fusion for compositing, and then into After Effects for motion graphics and titles.
      </p>
      <h2 className={styles.section3}>
        What was your process for deciding what modeling tools to use?
      </h2>
      <p className={styles.section3}>
        I’m a software agnostic, so I’m usually using any software that can get the job done. 
        For any clothing creation/garment simulation our choice is CLO3D. For modeling, our team uses a huge variety of different tools, 
        in the end it's just a bunch of polygons, so any tool can work - Blender, Maya, Softimage, Modo, etc.
      </p>
      <h2 className={styles.section4}>
        You were instrumental to pulling off DIGITALAX’s first auction. What were the biggest challenges encoutered! 
      </h2>
      <p className={styles.section4}>
        The theme of the first auction was Crypto memes, it was a lot of fun to turn that into garments! 
        I remember one annoying moment when we were transferring fur from one software to another, 
        the fastest way to solve it was to rebuild the garment from scratch at the final stage in the look development software. 
        We had a very tough deadline so we worked for 18-20 hours a day then slept 2-3 hours to get back to work!
      </p>
      <h2 className={styles.section5}>
        DIGITALAX is the first virtual fashion platform to employ Fraction Garment Ownership (FGO). How did you and Emma collaborate on making this happen? 
      </h2>
      <p className={styles.section5}>
        DIGITALAX has created a fashion revolution, pure fashion without any borders. 
        I very often see amazing works by different designers all over the world and they deserve to be known. 
        With our open source library, we have engineered such an opportunity, and I think this is the future. 
        You already can see the NFT madness on the market, and many talented artists are getting in on this opportunity. 
        2020 was a really amazing year for digital art and I think fashion is next. 
        NFTs bring freedom to the designers and transparency to the buyer, a whole supply chain can be tracked sustainably. 
        No web2 solutions can even begin to achieve this. 
      </p>
      <h2 className={styles.section6}>
        You were instrumental to pulling off DIGITALAX’s first auction. 
        What were the biggest challenges encoutered! 
      </h2>
      <p className={styles.section6}>
        The theme of the first auction was Crypto memes, it was a lot of fun to turn that into garments! 
        I remember one annoying moment when we were transferring fur from one software to another, 
        the fastest way to solve it was to rebuild the garment from scratch at the final stage in the look development software. 
        We had a very tough deadline so we worked for 18-20 hours a day then slept 2-3 hours to get back to work!
      </p>
      <h2 className={styles.section7}>
        You’ve been doing this work for a while now, correct? How would you recommend getting to where you are now?
      </h2>
      <p className={styles.section7}>
        Correct, I've been doing this for a while and there is no universal recipe to get here. 
        But what I would say, is that if you are on a team in this space don't work as an individual: 
        make teamwork your priority and make decisions together. It’s important to set defined roles and responsibilities for each contribution to the project, 
        and streamline the entire pipeline. Also, just start giving the software a go! Try and learn as much as you can, stay agnostic! 
      </p>
      <div className={styles.artby}>
        Art by Charbakd
      </div>
    </div>
  )
}

export default Page1314