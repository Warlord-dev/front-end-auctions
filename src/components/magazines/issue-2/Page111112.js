import React from 'react';
import styles from './page111112.module.scss';
import Link from 'next/link';

const Page111112 = () => {
  return (
    <div className={styles.wrapper}>
       <video className={styles.image7} muted loop autoPlay>
        <source src="./magazine/2/images/111_112/video1.mov" type="video/mp4" />
       </video>
      <div className={styles.image1}></div>
       <img src="./magazine/2/images/111_112/image1.gif" className={styles.image2} />
       <img src="./magazine/2/images/111_112/image2.png" className={styles.image3} />
       <img src="./magazine/2/images/111_112/image3.png" className={styles.image4} />
       <img src="./magazine/2/images/111_112/image4.png" className={styles.image5} />
       <img src="./magazine/2/images/111_112/image5.png" className={styles.image6} />
       {/* <img src="./magazine/1/105_106/image6.png" className={styles.image7} /> */}
       <video className={styles.image7} muted loop autoPlay>
        <source src="./magazine/2/images/111_112/video1.mov" type="video/mp4" />
       </video>
       <p className={styles.text1}>Nike Adapt BB</p>
       <Link href="https://marcellobaldari.artstation.com/"><a className={styles.text2}>
       Marcello Baldari
        </a>
       </Link>
       <p className={styles.text3}>EDGE</p>
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
  );
};

export default Page111112;
