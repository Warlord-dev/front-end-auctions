import React from 'react'
import styles from './page98.module.scss'

const Page98 = () => {
  return (
    <div className={styles.wrapper}>
     <img src="/magazine/3/images/109_110/image7.png" className={styles.image1}/>
     <div className={styles.image5}>
        <video className={styles.image6} muted loop autoPlay>
            <source src="./magazine/3/images/109_110/video1.mp4" type="video/mp4" />
          </video>
      </div>
      <img src="/magazine/3/images/109_110/image4.png" className={styles.image9}/>
      <p className={styles.text10}>NFT CLOTHING</p> 
      <p className={styles.text11}>NFT CLOTHING</p> 
      <div className={styles.image12}></div>
      <p className={styles.text12}>Clothing, especially interoperable digital clothing, is a key aspect of the Open-Metaverse. Currently there are so many barriers faced by people who wish to create digital clothing. It requires an investment in a decent computer, as well as dedicated time to learning 3D modeling programs like CLO3D and Blender. There should be a dedicated simple 3D modeling interface that would allow users (without 3D experience) to easily create custom digital clothing garments based on open-sourced templates and patterns that could then be minted as NFTs and accessible within the virtual world in a few clicks. By making the experience simple and intuitive it would introduce a whole new class of digital fashion designers / brands who previously lacked access or skills regarding 3D programs.</p> 
      <div className={styles.image13}></div>
      <p className={styles.text13}>For a designer or brand, ideally the journey could be as simple as: 
<br/><br/>
1. selecting a open-sourced pre-designed garment template (blank shirt, hoodie, pants, shoes, etc...) <br/>
2. customizing the garment with their own graphics, materials, textures. <br/>
3. minting the garment as an NFT directly in the interface.<br/>
4. displaying the garment for sale inside of the digital clothing retail space (NFT land)</p> 
      <img src="/magazine/3/images/109_110/image5.png" className={styles.image14}/>
      <img src="/magazine/3/images/109_110/image6.png" className={styles.image15}/>
      <div className={styles.image16}>
        <video className={styles.image17} muted loop autoPlay>
            <source src="./magazine/3/images/109_110/video3.mp4" type="video/mp4" />
          </video>
      </div>
    </div>
  )
}

export default Page98