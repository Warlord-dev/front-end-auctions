import React, { useRef, useState } from 'react';
import styles from './page4950.module.scss';
import Link from 'next/link';

const Page4950 = () => {
  const ref1 = useRef()
  const ref2 = useRef()
  const ref3 = useRef()
  const [isPlaying1, setIsPlaying1] = useState(false)
  const [isPlaying2, setIsPlaying2] = useState(false)
  const [isPlaying3, setIsPlaying3] = useState(false)
  const playVideo1 = () => {
    if(isPlaying1) {
      ref1.current.muted = true;
      setIsPlaying1(false)
    } else {
      ref1.current.muted = false;
      setIsPlaying1(true)
    }
  }
  const playVideo2 = () => {
    if(isPlaying2) {
      ref2.current.muted = true;
      setIsPlaying2(false)
    } else {
      ref2.current.muted = false;
      setIsPlaying2(true)
    }
  }
  const playVideo3 = () => {
    if(isPlaying3) {
      ref3.current.muted = true;
      setIsPlaying3(false)
    } else {
      ref3.current.muted = false;
      setIsPlaying3(true)
    }
  }
  return (
    <div className={styles.wrapper}>
      <img src="/magazine/3/images/49_50/image1.png" className={styles.image1}/>
      <div className={styles.image2}></div>
      <p className={styles.text1}>Anna was born in the Soviet Union a year after the collapse and grew up in a middle-class family in Odessa, Ukraine.  Her mother, who was from Siberia, met her father in Ukraine, where they fell in love and decided to live on the Black Sea. Odessa is a wonderful place to grow up. The kind of place where you can experience all 4 seasons, eat organic fruits and vegetables, breathe healing air and enjoy the Black Sea vibes.  Anna’s childhood was filled with creation and activities, and almost every summer she visited her grandparents in a Siberian village, where she learned some of the world’s wonders and the alchemy of connection with her Soul. 
<br/><br/>
At four years of age Anna created her first conscious self portrait.<br/>  “I will always remember how I painted my first portrait sitting in front of the mirror for several hours without stopping. I remember I was wearing pink earrings with a ruby and green flannel shirt.  Sleepy eyes with disheveled hair.  I was serious and a focused child who accepted herself with full embrace, true to herself in the moment.”   
When she turned six she went to after school art classes “ART studios” and met her teacher Maya Arsentievna. Here she studied all different art styles and techniques, and was encouraged to participate across a multitude of drawing competitions. This love for her craft inspired Anna to later go on to complete a bachelor and master degree from Odessa State Academy of Civil Engineering and Architecture. This educational experience opened up her potential in structuring and programming that she still to this day directly integrates into her art creation process. Her favorite disciplines are across academic art,  building design, and ecology. 
<br/><br/>
After her graduate studies, Anna worked three years in an architectural firm before setting off on a global nomadic pursuit from India to Thailand, Bali, Spain, Italy, and Bulgaria. Travelling the world by herself she finally settled in San Francisco, California. She is currently designing immersive Art life experiences and hosting open studio events across different venues throughout the Bay Area. </p> 
      <img src="/magazine/3/images/49_50/image2.png" className={styles.image3}/>
      <Link href="https://www.hapi.one/">
        <a target="_blank">
        <img src="/magazine/3/images/49_50/image5.png" className={styles.image4}/>
        </a>
      </Link> 
      <img src="/magazine/3/images/49_50/image2.png" className={styles.image5}/>
      <div className={styles.image18}></div>
      <div className={styles.image19}></div>
      <img src="/magazine/3/images/49_50/image7.png" className={styles.image17}/>
      <p className={styles.text8}>To describe HAPI it will be better to lean back on the importance of cyber security in general. The current scourge that is plaguing the digital currency market is an insecure and unsafe environment embroiled in nefarious projects trying to fraud their investors. The same can be also accentuated in regards to vulnerabilities of CEXes to hacking attacks and intrusions. Irrespective of whether you follow the crypto market religiously or not, you probably have heard about the abundance of hacks that have taken place in the last year.  At HAPI, we see it as the most egregious omission that has been rampant for some time now. In order to rectify it, we decided to converge some of the leading cyber sec experts together and create a project that TRULY serves the purpose. This is what HAPI stands for - cyber security; thereby we call ourselves a cyber security protocol. </p> 
      <p className={styles.text9}>HAPI was formed as a reaction to the rampancy of fraudulent and unsafe endeavors surroudning crypto in general. HAPI was created and engendered by the White Hat hacker who did win the Hacken-held Hackathon by hacking into the Hackathon's website and proclaiming himself a victor. Then the team was formed and the details about including the unexpectedly emergent project on the Hacken launchpad were settled. This is the short story of how the HAPI project has appeared.
<br/><br/>
<span className={styles.text12}>Set in the Ukraine.</span></p> 
      <p className={styles.text10}>The mission of HAPI is to rectify a cornucopia of issues that are entrenched in the current DeFi space. The approach HAPI takes does differ from the current solutions on the market. The differentiating points are both visible from the technical standpoint and community side of things. From the technical standpoint, HAPI incorporates a slew of preventative solutions that will inhibit exploits from transpiring beforehand. That also involves the utilization of the cybersecurity audit database by virtue of which malfeasance and maliciousness can be impeded in a timely manner. It is better illustrated in the following example: A particular DeFi is about to be a subject of a malicious exploitative attack. To aid in preventing the above-mentioned invasion, HAPI utilizes the combination of smart contract integration (SC) and Oraclization (oracles that are used on-chain). Before the attack has even been engineered, HAPI, with the help of off-chain dataproviders, can detect, mark, and delineate the potential threat of a particular address, by incorporating oracles specifically engineered, or programmed if you will, to preemptively act on the danger that a particular address poses. In this vein, a nascent calamity can be eluded against the clock. The DAO will allow anyone to submit a maliciously active wallet address into the protocol wherein making the self-sustaining database that also rewards people for submitting these.</p> 
      <p className={styles.text11}>In short, web3 can also be called decentralization since the core idea of web3 is ushering in the peer-to-peer ungoverned ecosystem that is fully censor-resistant. Unlike web2 though that is centralized, regulated, and unbound in decreeing any restrictions, web3 enables the integrity of privacy to remain intact. The immediate problem that emerges from that however is that web3 is much more vulnerable to cyber security focused attacks, exploitations, and social engineering. This coupled with the unrestrained and unpunishable nature of web3 gives rise to unbridled activity of villainous actors. Therefore, in order to propel web3 to become viable, there is a need for a similar layer of security on web3 that operates within and by the conditions of decentralization. HAPI doesn't impinge on the grounds of decentralization by implementing centralized structures. Instead, HAPI leverages the openness of the Blockchain and transactions inside it to ensure safety for the end users.</p> 
      <p className={styles.text2}>BLOCKCHAIN CYBERSECURITY</p> 
      <div className={styles.image6}></div>
      <div className={styles.image7}></div>
      <p className={styles.text3}>BLOCKCHAIN CYBERSECURITY</p> 
      <p className={styles.text4}>BLOCKCHAIN CYBERSECURITY</p> 
      <img src="/magazine/3/images/49_50/image3.png" className={styles.image6}/>
      <img src="/magazine/3/images/49_50/image4.png" className={styles.image7}/>
      <div className={styles.image8}>
        <video ref={ref1} className={styles.image10} muted autoPlay loop>
          <source src="./magazine/3/images/49_50/video1.mp4" type="video/mp4" />
        </video>
        <button onClick={()=>{playVideo1()}}><img src={`./magazine/3/images/49_50/${isPlaying1 ? 'pause' : 'play'}.png`} className={styles.playbutton1}/></button>
      </div>
      <p className={styles.text5}>Fairy House</p> 
      <div className={styles.image11}>
        <video ref={ref2} className={styles.image13} muted autoPlay loop>
          <source src="./magazine/3/images/49_50/video2.mp4" type="video/mp4" />
        </video>
        <button onClick={()=>{playVideo2()}}><img src={`./magazine/3/images/49_50/${isPlaying2 ? 'pause' : 'play'}.png`} className={styles.playbutton2}/></button>
      </div>
      <p className={styles.text6}>Palo Santo</p> 
      <div className={styles.image14}>
        <video ref={ref3} className={styles.image16} muted autoPlay loop>
          <source src="./magazine/3/images/49_50/video3.mp4" type="video/mp4" />
        </video>
        <button onClick={()=>{playVideo3()}}><img src={`./magazine/3/images/49_50/${isPlaying3 ? 'pause' : 'play'}.png`} className={styles.playbutton2}/></button>
      </div>
      <p className={styles.text7}>Light Body</p> 
    </div>
  );
};

export default Page4950;
