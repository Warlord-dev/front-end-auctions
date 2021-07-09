import Link from 'next/link';
import React, { useRef, useState } from 'react';
import styles from './page5758.module.scss';

const Page5758 = () => {
  const [play, setPlay] = useState(false);
  const ref1 = useRef();
  const refAudio = useRef();
  return (
    <div className={styles.wrapper}>
      <img src="/magazine/3/images/57_58/image1.png" className={styles.image1}/>
      <img src="/magazine/3/images/57_58/image2.png" className={styles.image2}/>
      <img src="/magazine/3/images/57_58/image3.png" className={styles.image3}/>
      <img src="/magazine/3/images/57_58/image4.png" className={styles.image4}/>
      <img src="/magazine/3/images/57_58/image5.png" className={styles.image5}/>
      <img src="/magazine/3/images/57_58/image6.png" className={styles.image6}/>
      <img src="/magazine/3/images/57_58/image7.png" className={styles.image8}/>
      <img src="/magazine/3/images/57_58/image2.png" className={styles.image11}/>
      <div className={styles.image7}>
        <video className={styles.image10} muted loop autoPlay>
          <source src="./magazine/3/images/57_58/video1.mp4" type="video/mp4" />
        </video>
      </div>
      <img src="/magazine/3/images/57_58/image8.gif" className={styles.image9}/>
      <button onClick={() => {
          if (!play) {
            refAudio.current.play();
          } else {
            refAudio.current.pause();
          }
          setPlay(!play);
        }}><img src={`./magazine/3/images/57_58/${play ? 'pause' : 'play'}.png`} className={styles.playbutton1}/></button>
      <p className={styles.text1}>DECO<br/>ONLY FANS</p>
      <p className={styles.text6}>Paranoid Park</p>  
      <p className={styles.text2}>We are continuing on with our DECO “Decentralised Commerce” Only Fans with the DIGITALAX Ambassadors; using native web3 distribution models and creator monetisation paths, all underwritten by NFTs.
      <br/><br/>
<span className={styles.text3}> In web2 it’s entirely altruistic, you are depending on a one way incentive where the giver feels good for an obscure reason enough so to give to you. It’s a shot in the dark, and there is no clear path from 0 to 1, no clear solution to the cold start problem. In the web3 model, mutual incentives are aligned, where the creator can actually implement sustainability without excessive and unnecessary blocking points like paywalls and ad based models. It allows them to spin up personalised decentralised channels and invite people behind the scenes for exclusive content, unlockable drops and experience based backstage passes.  </span></p>  
      <p className={styles.text4}> In the previous content I broke down how the XENOTECH virtual world would be structured. The primary NFTs that users would interact with are clothing stores, apartments, and clothing wearables. </p> 
      <p className={styles.text5}>Though I don't have a huge background in gaming, I am fascinated with the concept of the virtual world-- especially one that is more than just a game. Virtual worlds for commerce, art, and education are particularly interesting to me and areas that I will dedicate myself to building. I have spent a lot of time conceptualizing a Metaverse platform / ecosystem based around the 3D city prototype I had built out, one that is particularly focused on 3D fashion.</p>
      <audio
        ref={refAudio}
        controls
        className={styles.audio}
        src="./magazine/3/images/57_58/audio1.mp3"
      ></audio>
      <div className={styles.image12}></div>
      <p className={styles.text7}>Growing up as a world citizen has formed my way of thinking to be a connector. I was born in Lesotho, and grew up changing countries around the world every 3-4 years. One side of my family coming from Lesotho and the other side from UK/Spain meant that I would experience the contrast between rural African life and city life in Europe, where many things are taken for granted. </p>  
      <p className={styles.text8}>THAKANE</p>  
      <p className={styles.text9}>X</p>  
      <p className={styles.text10}>TAKAII</p>  
      <img src="/magazine/3/images/57_58/image9.png" className={styles.image13}/>
      <p className={styles.text11}>FOLLOW THAKANE TAKE TAKAII HYBRID DIGITAL-PHYSICAL</p>  
      <div className={styles.image14}>
        <video className={styles.image15} muted loop autoPlay>
          <source src="./magazine/3/images/57_58/video2.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={styles.image16}>
        <video className={styles.image17} muted loop autoPlay>
          <source src="./magazine/3/images/57_58/video3.mp4" type="video/mp4" />
        </video>
      </div>
      <p className={styles.text12}>DECO <br/>ONLY FANS</p> 
      <p className={styles.text13}>DECO <br/>ONLY FANS</p>  
      <div className={styles.image18}>
        <video className={styles.image19} muted loop autoPlay>
          <source src="./magazine/3/images/57_58/video4.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Page5758;
