import React from 'react'
import styles from './page18.module.scss'

const Page18 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.topSideFrame}></div>
      <img src='/magazine/4/images/1920_image1_mobile.png' className={styles.image1}/>
      <img src='/magazine/4/images/1920_image2_mobile.png' className={styles.image2}/>
      <img src='/magazine/4/images/1920_image2_mobile.png' className={styles.image3}/>

      <div className={[styles.animationFrame, styles.topSideImageWrapper].join(' ')}>
        <img src='./magazine/1/images/mobile/howtogetintext.png' />
        <img src='./magazine/1/images/mobile/howtogetintext.png' />
        <img src='./magazine/1/images/mobile/howtogetintext.png' />
        <img src='./magazine/1/images/mobile/howtogetintext.png' /> 
      </div>
      <div className={styles.bottomSideFrame}></div>
      <div className={[styles.animationFrame, styles.bottomSideImageWrapper].join(' ')}>
        <img src='./magazine/1/images/mobile/howtogetintext.png' />
        <img src='./magazine/1/images/mobile/howtogetintext.png' />
        <img src='./magazine/1/images/mobile/howtogetintext.png' />
        <img src='./magazine/1/images/mobile/howtogetintext.png' />
      </div>

      <div className={styles.circle1}></div>
      <div className={styles.text1}>
        At some point or another so many of us have probably confused ourselves with understanding not just what an NFT is but how it’s created and stored. If you are new to the space it’s easy to think that the NFT’s metadata (i.e. image, video or other file) is the same as it’s on-chain token ID. There is a difference and the degree of difference has actually been up for quite the debate. How on-chain should your NFT be? 
        <br /><br />
        If an NFT’s metadata is stored in a centralised server or cloud storage provider like AWS, Google Cloud, Microsoft Azure, Digital Ocean etc. then doesn’t this potentially go against the very purpose of the NFT in the first place? If that centralised provider shuts down the metadata disappears and not only that, but very easily anyone with authorisation can change up the file. Your cryptokitty could quickly become a rug made of cat fur. 
        <br /><br />
        This is where solutions like Pinata come into play. They leverage decentralised storage providers like IPFS (Interplanetary File System) to allow for hosting of your data on a distributed system that doesn’t have a singular point of failure. Some of the most popular NFT platforms were still hosting metadata in web2 non-immutable data bases until recently. You might have seen the literal image rug pulls on Opensea where entire collections were replaced by images of rugs.
        <br /><br />
        Web3 data storage is a huge step in the right direction in order to shepherd all aspects of decentralisation into common place everyday use. 
      </div>
    </div>
  )
}

export default Page18