import React from 'react'
import styles from './page56.module.scss'
import Link from 'next/link';

const Page56 = () => {
  return (
    <div className={styles.wrapper}>
      <img src="/magazine/3/images/63_64/image1.png" className={styles.image1}/> 
      <p className={styles.text1}>I'm a fashion and costume designer with a Master's from IED Milano. Since childhood, I have loved to sew and come up with different models.When home supplies ran out, I decided it was time to make it a profession of it. I have a clothing brand for which I make mini collections of unique things, dance clothes and I also design costumes for theaters. Recently I fell in love with virtual fashion and now I am developing in this direction.</p>   
      <Link href="https://www.instagram.com/bugazdesign/">
        <a target="_blank">
          <p className={styles.text2}>BUGAS</p>   
        </a>
      </Link> 
    </div>
  )
}

export default Page56