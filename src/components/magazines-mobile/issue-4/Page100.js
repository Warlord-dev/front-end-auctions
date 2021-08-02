import React from 'react'
import styles from './page100.module.scss'
import Link from 'next/link';

const Page100 = () => {
  return (
    <div className={styles.wrapper}>
     <img src="/magazine/3/images/111_112/image7.png" className={styles.image1}/>
      <p className={styles.text1}>XENOTECH</p> 
      <p className={styles.text2}>XENOTECH</p> 
      <p className={styles.text3}>XENOTECH</p> 
      <p className={styles.text4}>XENOTECH</p> 
      <div className={styles.image2}></div>
      <p className={styles.text5}> In the previous content I broke down how the XENOTECH virtual world would be structured. The primary NFTs that users would interact with are clothing stores, apartments, and clothing wearables.</p> 
      <p className={styles.text6}>Clothing Stores</p> 
      <p className={styles.text7}>Clothing Stores</p>
      <div className={styles.image3}></div> 
      <p className={styles.text8}>Across the city there would be 3D retail spaces that designers and brands could rent or purchase (as NFTs) and subsequently customize and launch clothing stores for both their digital and physical products. Depending on the scenario, these stores would either be persistently open to the public, or they could be scheduled NFT ticketed pop-up store events. Scarcity is a crucial characteristic of streetwear and fashion and the reason that people will line up and even camp on the street overnight for a Supreme drop.</p> 
      <div className={styles.image4}></div>
      <p className={styles.text9}>In a virtual world, a brand could replicate this sort of scarcity thrill for clothing drops by pre-selling a limited number of tickets (NFTs or social tokens) that would grant their holders private access to the 3D clothing store upon the drop. Upon purchasing an NFT clothing garment from a brand, a customer could then view the garment in their inventory and equip it on their avatar. Users could also purchase their own NFT apartment within the virtual world where they could display their clothing garments and other 3D NFT objects.</p> 
      <div className={styles.image5}>
        <video className={styles.image6} muted loop autoPlay>
            <source src="./magazine/3/images/111_112/video1.mp4" type="video/mp4" />
          </video>
      </div>
      <img src="/magazine/3/images/111_112/image3.png" className={styles.image8}/>
      <div className={styles.image10}>
        <video className={styles.image11} muted loop autoPlay>
            <source src="./magazine/3/images/111_112/video2.mp4" type="video/mp4" />
          </video>
      </div>
    </div>
  )
}

export default Page100