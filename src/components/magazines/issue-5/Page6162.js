import React from 'react'
import Link from 'next/link'
import styles from './page6162.module.scss'

const Page6162 = () => {  
  return (
    <div className={styles.wrapper}>
      <img src='/magazine/5/images/6162_image1.jpg' className={styles.image1} /> 
      <img src='/magazine/5/images/6162_image2.png' className={styles.image2} /> 
      <div className={styles.text1}>
        Throughout the Metaverse        
      </div>
      <div className={styles.text2}>
        Anna Morskaya was born in Samara, Russia, now living in Saint-Petersburg. She has almost no art education (only six months of art school), and is a completely self-taught as an artist. Anna started doing 3D graphics about 3 years ago, and digital clothes a few months ago. However, before that, she had some experience in creating real clothes for clips and photo shoots. Anna loves the futuristic style, as well as mixing different eras in unexpected combinations. Another interest is playing with shapes, creating atypical silhouettes. Her interest also lies in atypical avatars (for example, avatars with two heads) where the creative design takes the visual as far away from reality.
      </div>
      <Link href='https://www.instagram.com/digitonica/'>
        <a target='_blank'>
          <div className={styles.text3}>
            DIGITONICA
          </div>
        </a>
      </Link>
    </div>
  )
}

export default Page6162
