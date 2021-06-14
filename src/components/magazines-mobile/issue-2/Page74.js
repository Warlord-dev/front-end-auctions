import React from 'react'
import styles from './page74.module.scss'

const Page74 = () => {
  return (
    <div className={styles.wrapper}>     
      <video className={styles.image2} loop autoPlay>
        <source src="./magazine/1/103_104/espa_skin.mp4" type="video/mp4" />
       </video>
       <img src="./magazine/1/103_104/image4.png" className={styles.image4} />
       <img src="./magazine/1/103_104/image4.png" className={styles.image5} />
       <img src="./magazine/1/103_104/image3.png" className={styles.image3} />
       <img src="./magazine/1/103_104/image5.png" className={styles.image6} />
       <p className={styles.text2}>BBLUNDERR</p>
       <p className={styles.text3}>minecraft</p>
    </div>
  )
}

export default Page74