import React from 'react'
import styles  from './page50.module.scss'
import Link from 'next/link';

const Page50 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image1}></div>
      <Link href="https://www.instagram.com/abigneonglitter/">
        <a target="_blank">
          <p className={styles.text2}>ABigNeonGlitter</p>   
        </a>
      </Link>
      <p className={styles.text7}>“I always loved collecting; from holographic cards that came greasy in snack packages, to video-game tapes, toys, action figures, cups, magazines, phone cards… and I could name more. Oh the 90s!
      <br/><br/>
Today I am very excited about Non-Fungible Tokens that can be made by myself and literally carry my traits around as a kind of rich information like DNA and at any time I can organize a collection and make these gems available for other digital hunters. I'm feeling so ready for this"</p>   
      <img src="/magazine/3/images/55_56/image3.png" className={styles.image4}/> 
      <img src="/magazine/3/images/55_56/image4.png" className={styles.image5}/> 
      <p className={styles.text4}>Metallic Bubblegum<br/>
Captain America's pink shield is a really special item as it was the key for me to start making 3D. That was my first object made in blender. So many great memories!</p>
      <p className={styles.text5}>OMEGA<br/>
This texture, appearance and colors were accidentally replaced. Glad that the final render stayed and I am very happy to have him now as a non-fungible token, he deserves this place.</p>
      <div className={styles.image6}></div>
      <div className={styles.image7}>
        <video className={styles.image8} muted loop autoPlay>
          <source src="./magazine/3/images/55_56/video1.mp4" type="video/mp4" />
        </video>
      </div>
      <p className={styles.text6}>ALPHA<br/>
This token is a portal that is just waiting to turn into NFT. Now your powers have increased.<br/>
> this video has a track with a license that authorizes use and dissemination through the credits - song: 'Escapade' by @nctrnm from Free Music Archive (FMA) being licensed under CC BY 4.0 </p>
    </div>
  )
}

export default Page50