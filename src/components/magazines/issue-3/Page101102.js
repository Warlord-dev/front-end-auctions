import React, { useState } from 'react';
import styles from './page101102.module.scss';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import UnlockPage from '../common/UnlockPage-Three';
import Router, { useRouter } from 'next/router'

const Page101102 = () => {
  
  return (
    <div className={styles.wrapper}>
      <img src="/magazine/3/images/101_102/image1.png" className={styles.image1}/>
       <div className={styles.image2}>
        <video className={styles.image3} muted loop autoPlay>
          <source src="./magazine/3/images/101_102/video1.mp4" type="video/mp4" />
        </video>
      </div>
      <img src="/magazine/3/images/101_102/image2.png" className={styles.image4}/>
      <img src="/magazine/3/images/101_102/image3.png" className={styles.image5}/>
      <Link href="https://www.instagram.com/hadee_art/">
        <a target="_blank">
        <img src="/magazine/3/images/101_102/image4.png" className={styles.image6}/>
        </a>
      </Link>
      
      <p className={styles.text1}>Hadeeart</p>  
      <div className={styles.image7}></div>
      <p className={styles.text2}>Personally I use CLO3D for the basis of my clothes. It offers a quick and effective way to create 3D garments by simulating the physical properties of two-dimensionally-drawn sewing patterns. I also model accessories in Blender and texture them in Substance painter. At times when I need to make my own textures, I use Substance Alchemist and Photoshop which allow direct usage in CLO3D. </p>  
      <img src="/magazine/3/images/101_102/image5.png" className={styles.image8}/>
      <div className={styles.image9}>
        <video className={styles.image10} muted loop autoPlay>
          <source src="./magazine/3/images/101_102/video2.mp4" type="video/mp4" />
        </video>
      </div>
      
      <Link href="https://www.instagram.com/a.ainsha/?r=nametag">
        <a target="_blank">
        <img src="/magazine/3/images/101_102/image6.png" className={styles.image11}/>
        </a>
      </Link>
      <img src="/magazine/3/images/101_102/image7.png" className={styles.image12}/>
      <div className={styles.image13}></div>
      <p className={styles.text3}>For garment simulation, I use CLO 3D. Animation and avatars from daz studio. Marvelous designer is another option for garment simulation. In daz studio, I morph the avatar into the desired looks I want before exporting as an obj file with the collected maps to use in CLO3D. The avatar should be in A pose for easy garment simulation. Then I pose the avatar from my collection of poses and also export as an OBJ. For my animation, I use animate 2. Tip: always add an empty block before adding your motions when exporting animations into CLO.</p>  
      <img src="/magazine/3/images/101_102/image8.png" className={styles.image14}/>
      
      <Link href="https://mysecunha.com/laessentia-colecao/">
        <a target="_blank">
        <img src="/magazine/3/images/101_102/image9.png" className={styles.image15}/>
        </a>
      </Link>
      <p className={styles.text4}>Myse Cunha</p>  
      <img src="/magazine/3/images/101_102/image10.png" className={styles.image16}/>
      <img src="/magazine/3/images/101_102/image11.png" className={styles.image17}/>
      <img src="/magazine/3/images/101_102/image12.png" className={styles.image18}/>
      <img src="/magazine/3/images/101_102/image13.png" className={styles.image19}/>
      <div className={styles.image20}></div>
      <p className={styles.text5}>For the initial concept of the garment I'll either create a hand sketch, illustrate it in Adobe Photoshop (using the Wacom Drawing Tablet) or create a technical drawing in Adobe Illustrator. My favourite one is Photoshop, which is the one I chose for this project. </p>  
      <div className={styles.image21}></div>
      <p className={styles.text6}>In this step I worked with Clo 3D, where I customized the Feifei Avatar into the body measurements I wanted, and from there I created the 3D garment. It was my first Digital Fashion Collection, so I wanted the viewers to truly see themselves in the garments, which is why I decided to customize digital models (body, skin, hair, face, and shoes) in Daz 3D and arrange them in various poses. I then went back to Clo 3D, imported the models in the A pose, in order to dress them in the garments.</p>  
      <img src="/magazine/3/images/101_102/image14.png" className={styles.image22}/>
      <div className={styles.image25}>
        <video className={styles.image26} muted loop autoPlay>
          <source src="./magazine/3/images/101_102/video4.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={styles.image23}>
        <video className={styles.image24} muted loop autoPlay>
          <source src="./magazine/3/images/101_102/video3.mp4" type="video/mp4" />
        </video>
      </div>
      <Link href="https://blog.digitalax.xyz/www.paolaguivel.com">
        <a target="_blank">
        <img src="/magazine/3/images/101_102/image15.png" className={styles.image27}/>
        </a>
      </Link>
      
      <img src="/magazine/3/images/101_102/image16.png" className={styles.image28}/>
      <p className={styles.text7}>Paola Olaguivel</p>  
      <Link href="https://www.instagram.com/abigneonglitter/">
        <a target="_blank">
        <img src="/magazine/3/images/101_102/image17.png" className={styles.image29}/>
        </a>
      </Link>
      
      <img src="/magazine/3/images/101_102/image19.png" className={styles.image31}/>
      <p className={styles.text8}>ABigNeonGlitter</p>  
      <img src="/magazine/3/images/101_102/image18.png" className={styles.image30}/>
      <img src="/magazine/3/images/101_102/image20.png" className={styles.image32}/>
      <img src="/magazine/3/images/101_102/image21.png" className={styles.image33}/>
      <div className={styles.image34}></div>
      <p className={styles.text9}>I think that fashion today is no longer something exclusively for people in the flesh who know how to draw very well and, still venture to say, sew. From now on we are in the middle of a new era of how to present products and creations while still being very interactive in everything.</p>  
      <p className={styles.text10}>Aisha</p>  
    </div>
  );
};

export default Page101102;
