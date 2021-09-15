import React from 'react'
import Link from 'next/link'
import styles from './page6364.module.scss'

const Page6364 = () => {
  return (
    <div className={styles.wrapper}>
      <img src='/magazine/5/images/6364_image1.jpg' className={styles.image1}/>
      <img src='/magazine/5/images/6364_image2.jpg' className={styles.image2}/> 
      <Link href='https://www.instagram.com/oxmoz.psd/'>
        <a target='_blank'>
          <div className={styles.text1}>
            Oxmoz
          </div>
        </a>
      </Link>
      <div className={styles.text2}>
        I am Oxmoz, a young 3D artist who lives in Paris, France. I am passionate about fashion and photorealism, and always try to push my 3D skills further to create renderings that are both faithful to reality whilst also creating a fantastic universe.
      </div>
      <Link href='https://www.instagram.com/3d_clo/?hl=en'>
        <a target='_blank'>
          <div className={styles.text3}>
            Maria Burlova
          </div>
        </a>
      </Link>
      <div className={styles.text4}>
        I`m beginner in 3D design, where digital clothing is both my hobby and passion. 3D Clothing is the future. Already now you can virtually try on this outfit or that one, create unreal garments, textures or products. I'm inspired by the fact that everything that we dream about now will be a reality in the near future. Digital clothing will allow us to take care of the environment in more sustainable ways and set us on an unexpected trajectory to form new relationships with the garments themselves. 
      </div>
    </div>
  )
}

export default Page6364
