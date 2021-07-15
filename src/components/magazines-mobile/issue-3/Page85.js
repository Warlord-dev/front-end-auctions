import React from 'react'
import styles from './page85.module.scss'
import Link from 'next/link';

const Page85 = () => {
  return (
    <div className={styles.wrapper}>
      <img src="/magazine/3/images/97_98/image21.png" className={styles.image1}/>
      <img src="/magazine/3/images/97_98/image2.png" className={styles.image2}/>
      <img src="/magazine/3/images/97_98/image5.png" className={styles.image5}/>
      <img src="/magazine/3/images/97_98/image4.png" className={styles.image4}/>
      <img src="/magazine/3/images/97_98/image3.png" className={styles.image3}/>
      <img src="/magazine/3/images/97_98/image6.png" className={styles.image6}/>
      <img src="/magazine/3/images/97_98/image7.png" className={styles.image7}/>
      <div className={styles.image9}></div>
      <div className={styles.image10}></div>
      <p className={styles.text2}>Blender is my favorite 3D software for creation. I’m constantly creating assets to use in my future artworks, so when I sketch or plan my next pieces, I know what type of things I could use to improve creative time.</p> 
      <p className={styles.text3}>For material creation, I use the Blender powerful procedural system, I’m a die hard fan of complex nodetrees and abstract materials. Always looking to optimize times and tools that help me go further, I use an addon called MBS of Syncretic 3D— it’s a material building suite that lets you create incredible materials with just a couple of node groups. Here’s an example of one of the materials used in the composition.</p> 
      <img src="/magazine/3/images/97_98/image9.png" className={styles.image11}/>
      <p className={styles.text5}>TIME LAPSE</p> 
      <div className={styles.image16}></div>
      <img src="/magazine/3/images/97_98/image10.png" className={styles.image12}/>
      <div className={styles.image14}>
        <video className={styles.image15} muted loop autoPlay>
          <source src="./magazine/3/images/97_98/video1.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={styles.image34}></div>
      <img src="/magazine/3/images/97_98/image11.png" className={styles.image17}/>
      <Link href="https://rarible.com/token/0x60f80121c31a0d46b5279700f9df786054aa5ee5:1097760?tab=details">
        <a target="_blank">
        <img src="/magazine/3/images/97_98/image12.png" className={styles.image18}/>
        </a>
      </Link>
      <p className={styles.text6}>Di.universe</p> 
      <p className={styles.text7}>Minted on Rarible</p> 
      <p className={styles.text8}>To create digital clothes, we used exclusively the Clo3d software, in which patterns were made, the background, light and render were adjusted.  The modeling process was lengthened solely because we were trying to achieve the desired effect by tweaking the fur so that it looks like thin feathers.  In general, it took 3-5 hours to create and approve each model + render.</p> 
      <div className={styles.image24}></div>
      <p className={styles.text9}>Fur fox - custom fur preset. <br/>
Parameters: <br/>
Fur parameters: <br/>
Melanin - 0,20<br/>
Pheomelanin - 0,50<br/>
Glossines - 0,90<br/>
Glossines boost - 1,00<br/>
<br/><br/>
Base:<br/>
Length - 12,00<br/>
Thickness - 3,000<br/>
Bend - 0,70<br/>
Taper - 0,80<br/>
Density - 30<br/>
Segments - 5</p> 
      <p className={styles.text10}>Gravity:<br/>
Force - 10,00<br/>
Vector x - 0,00<br/>
Vector y - (-1,00)<br/>
Vector z - 0,00<br/>
<br/>
Curl:<br/>
Radius - 0,100<br/>
Number - 5,00<br/>
Variance:<br/>
Length - 1,00<br/>
Thickness - 1,00<br/>
Direction - 1,00<br/>
Gravity - 0,80<br/>
Curl radius - 1,00<br/>
Physical property: </p> 
    </div>
  )
}

export default Page85