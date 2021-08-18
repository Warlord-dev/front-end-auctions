import React from 'react'
import Link from 'next/link'
import styles from './page74.module.scss'

const Page74 = () => {

  return (
    <div className={styles.wrapper}>
      <div className={styles.rect1}></div>
      <img className={styles.image1} src='/magazine/4/images/8182_image21_mobile.png' />
      <img className={styles.image2} src='/magazine/4/images/8182_image1_mobile.png' />
      <img className={styles.image3} src='/magazine/4/images/8182_image2_mobile.png' />
      <img className={styles.image4} src='/magazine/4/images/8182_image21_mobile.png' />

      <video autoPlay muted loop className={styles.video1}>
        <source src='./magazine/4/videos/8182_video1.mp4' />
      </video>

      <img className={styles.image5} src='/magazine/4/images/8182_image3.png' />
      <img className={styles.image6} src='/magazine/4/images/8182_image5.png' />
      <img className={styles.image7} src='/magazine/4/images/8182_image4.png' />
      <img className={styles.image8} src='/magazine/4/images/8182_image6.png' />

      <Link href='https://digifizzy.xyz/unlockable/1/'>
        <a target='_blank'>
          <div>
            <div className={styles.text2}>
              Go Behind the Scenes with Exclusive NFT Content and Experiences
            </div>
            <div className={styles.text1}>
              Go Behind the Scenes with Exclusive NFT Content and Experiences        
            </div>
          </div>
        </a>
      </Link>
      <Link href='https://digifizzy.xyz/unlockable/1/'>
        <a target='_blank'>
          <div>
            <div className={styles.text3}>
              SEE MORE
            </div>
            <div className={styles.text4}>
              SEE MORE
            </div>
          </div>
        </a>
      </Link>
      
      <div className={styles.text5}>
        XENOTECH
      </div>
      <div className={styles.text6}>
        XENOTECH
      </div>
      <div className={styles.text7}>
        DECO<br />
        ONLY<br />
        FANS
      </div>
      <div className={styles.text8}>
        <span>
          We are continuing on with our DECO “Decentralised Commerce” Only Fans with the DIGITALAX Ambassadors; using native web3 distribution models and creator monetisation paths, all underwritten by NFTs.
        </span>
        <br /><br />
        In web2 it’s entirely altruistic, you are depending on a one way incentive where the giver feels good for an obscure reason enough so to give to you. It’s a shot in the dark, and there is no clear path from 0 to 1, no clear solution to the cold start problem. In the web3 model, mutual incentives are aligned, where the creator can actually implement sustainability without excessive and unnecessary blocking points like paywalls and ad based models. It allows them to spin up personalised decentralised channels and invite people behind the scenes for exclusive content, unlockable drops and experience based backstage passes.  
      </div>
      <div className={styles.text9}>
        The 3D Bookshelf
      </div>
      <div className={styles.text10}>
        This content is not directly related to Digital Fashion, but since I've been traveling I haven't had access to my computer to 3D model. Instead, with my laptop, I started working on a side project based around what I think the Metaverse version of GoodReads would look like. This project was inspired by how limited and outdated the UI of GoodReads is and how I desperately I want a book management / tracking tool that exist spatially—one that is accessible through web browsers, VR, and AR. 
      </div>
      <div className={styles.text11}>
        The 3D Bookshelf
      </div>
      <div className={styles.text12}>
        The 3D Bookshelf
      </div>
      <div className={styles.text13}>
        The 3D Bookshelf
      </div>
      <div className={styles.text14}>
        The 3D Bookshelf
      </div>
      <div className={styles.text15}>
        The 3D Bookshelf
      </div>
      <div className={styles.text16}>
        Another thing I have been practicing is modeling ancient Roman/Greek and Renaissance inspired architecture.
      </div>
    </div>
  )
}

export default Page74