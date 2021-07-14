import React from 'react'
import styles from './page36.module.scss'
import Link from 'next/link';

const Page36 = () => {
  return (
    <div className={styles.wrapper}>
      <Link href="https://www.impssbl.com/">
        <a target="_blank">
          <p className={styles.text1}>IMPSSBL</p>   
        </a>
      </Link>
      <p className={styles.text2}>IMPSSBL</p>  
      <p className={styles.text3}>How do you build the next <span className={styles.yellow}>iron man</span>? the next <span className={styles.red}>mickey mouse</span>? next <span className={styles.blue}>spiderman</span>?</p>  
      <img src="/magazine/3/images/43_44/image1.png" className={styles.image1}/>   
      <img src="/magazine/3/images/43_44/image2.png" className={styles.image2}/> 
      <img src="/magazine/3/images/43_44/image3.png" className={styles.image3}/>  
      <img src="/magazine/3/images/43_44/image4.png" className={styles.image4}/>  
      <img src="/magazine/3/images/43_44/image5.png" className={styles.image5}/>  
      <p className={styles.text4}>The First Project</p>  
      <p className={styles.text5}>The First Project</p>  
      <p className={styles.text6}>The First Project</p>  
      <p className={styles.text7}>The First</p>   
      <p className={styles.text8}>Proof Of Story</p>   
      <p className={styles.text9}>Proof Of Story</p> 
      <p className={styles.text11}>Building 10,001 impossible characters drawn by international artists with AI-generated stories unique to every specific character. When people collect these characters, they accrue a token that unblocks part of their backstory over time. Not just that, but people could create bigger plots by intersecting the unique stories of each character. This is uniting the serialization effect of Cryptopunks with the artistic DAO of Hashmasks with the logic of stories that are at the core of our project.</p>     
      <img src="/magazine/3/images/43_44/image7.png" className={styles.image7}/>  
      <img src="/magazine/3/images/43_44/image11.png" className={styles.image6}/>
      <p className={styles.text12}>Impssbl is a decentralized Disney acting as a virtual super artist made by hundreds of artists around the world that collaborate on creative endeavors, spacing from digital art to virtual fashion.</p>   
    </div>
  )
}

export default Page36