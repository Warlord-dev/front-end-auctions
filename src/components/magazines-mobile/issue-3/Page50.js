import React, { useRef, useState } from 'react';
import styles from './page50.module.scss'

const Page50 = () => {
  const [play, setPlay] = useState(false);
  const ref1 = useRef();
  const refAudio = useRef();
  return (
    <div className={styles.wrapper}>
      <img src="/magazine/3/images/57_58/image10.png" className={styles.image1}/>
      <img src="/magazine/3/images/57_58/image2.png" className={styles.image2}/>
      <img src="/magazine/3/images/57_58/image11.png" className={styles.image13}/>
      <img src="/magazine/3/images/57_58/image3.png" className={styles.image3}/>
      <img src="/magazine/3/images/57_58/image4.png" className={styles.image4}/>
      <img src="/magazine/3/images/57_58/image5.png" className={styles.image5}/>
      <img src="/magazine/3/images/57_58/image8.gif" className={styles.image9}/>
      <img src="/magazine/3/images/57_58/image12.png" className={styles.image12}/>
      <img src="/magazine/3/images/57_58/image7.png" className={styles.image8}/>
      
      <button onClick={() => {
          if (!play) {
            refAudio.current.play();
          } else {
            refAudio.current.pause();
          }
          setPlay(!play);
        }}><img src={`./magazine/3/images/57_58/${play ? 'pause' : 'play'}.png`} className={styles.playbutton1}/></button>
      <audio
        ref={refAudio}
        className={styles.audio}
        src="./magazine/3/images/57_58/audio1.mp3"
      ></audio>
      <img src="/magazine/3/images/57_58/image6.png" className={styles.image6}/>
      <div className={styles.image7}>
        <video className={styles.image10} muted loop autoPlay>
          <source src="./magazine/3/images/57_58/video1.mp4" type="video/mp4" />
        </video>
      </div>
      <p className={styles.text1}>DECO<br/>ONLY<br/>FANS</p>
      <p className={styles.text2}>We are continuing on with our DECO “Decentralised Commerce” Only Fans with the DIGITALAX Ambassadors; using native web3 distribution models and creator monetisation paths, all underwritten by NFTs.
      <br/><br/>
<span className={styles.text3}> In web2 it’s entirely altruistic, you are depending on a one way incentive where the giver feels good for an obscure reason enough so to give to you. It’s a shot in the dark, and there is no clear path from 0 to 1, no clear solution to the cold start problem. In the web3 model, mutual incentives are aligned, where the creator can actually implement sustainability without excessive and unnecessary blocking points like paywalls and ad based models. It allows them to spin up personalised decentralised channels and invite people behind the scenes for exclusive content, unlockable drops and experience based backstage passes.  </span></p>  
      <p className={styles.text10}>XENOTECH</p>
      <p className={styles.text11}>XENOTECH</p>
      <p className={styles.text6}>Paranoid Park</p>  
      <p className={styles.text4}> In the previous content I broke down how the XENOTECH virtual world would be structured. The primary NFTs that users would interact with are clothing stores, apartments, and clothing wearables. </p> 
      <p className={styles.text5}>Though I don't have a huge background in gaming, I am fascinated with the concept of the virtual world-- especially one that is more than just a game. Virtual worlds for commerce, art, and education are particularly interesting to me and areas that I will dedicate myself to building. I have spent a lot of time conceptualizing a Metaverse platform / ecosystem based around the 3D city prototype I had built out, one that is particularly focused on 3D fashion.</p>
    </div>
  )
}

export default Page50