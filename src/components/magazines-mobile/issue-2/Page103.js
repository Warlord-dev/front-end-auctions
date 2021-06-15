import React from 'react'
import styles from './page103.module.scss'
import Link from 'next/link';

const Page103 = () => {
  return (
    <div className={styles.wrapper}>
      <video className={styles.image7} loop muted autoPlay>
        <source src="./magazine/2/images/111_112/video1.mov" type="video/mp4" />
       </video>
       <Link href="https://www.instagram.com/dgtl_stylist/"><a className={styles.text4}>
       Alyona Briukhanova
        </a>
       </Link>
       <p className={styles.text5}>Air Bubble Dress</p>
       <p className={styles.text6}>Born as a part of “The Verge of Extinction” collection, the Air Bubble Dress was created to draw attention to one of the most important natural resources - air ... and its wastage… Pollution… Shortage.  
<br/><br/>
The purity and tenderness of the predominant entity is being wrapped into a mixture of solid particles, metals and gases. Car emissions, chemicals from factories, dust, pollen and mold spores spread across the air we breathe. As a result 4.2 million people die every year from health issues connected to air pollution. 
<br/><br/>
Year on year it is harder to find clean and fresh air. Soon, we will literally have to search for it. Alike, through the metal texture of the bubbles of a dress it is hard to distinguish the air, sky, clouds… She is so delicate, but covered in stiff gown. So beautiful, but deadly sad. The embodiment of the planet on the verge of extinction. 
</p>
    </div>
  )
}

export default Page103