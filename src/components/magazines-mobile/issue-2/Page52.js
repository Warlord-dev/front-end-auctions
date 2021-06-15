import Link from 'next/link';
import React from 'react';
import styles from './page52.module.scss';

const Page52 = () => {
  return (
    <div className={styles.wrapper}>
      <img src="./magazine/2/images/57_58_mobile1.jpg" className={styles.back} />
      <div className={styles.text1}>DECO ONLY FANS</div>
      <div className={styles.text2}>
        NFTs are so much more than just the metadata attached to them. The extent of the possible
        use cases and potential applications that they hold is what makes them so transformative,
        and its something that most of the broader market, particularly the web2 media, hasn’t quite
        caught onto yet.
        <br />
        <br />
        <div className={styles.subText}>
          Some of the most interesting use cases are that of the new web3 native distribution models
          they allow for— like that of a decentralised commercial only fans. Allowing creators to
          spin up personalised decentralised realms with dynamic behind the scenes access to NFT
          content and experiences.
        </div>
      </div>
      <Link href="/">
        <a>
          <div className={styles.text3}>
            Go Behind the Scenes with Exclusive NFT Content and Experiences
          </div>
          <div className={styles.text4}>
            Go Behind the Scenes with Exclusive NFT Content and Experiences
          </div>
        </a>
      </Link>
      <div className={styles.text5}>
        The DIGITALAX Ambassadors are each spinning up their own personalised world of unlockable
        NFT content and exerpierence drops as they bridge into the web3 metaverse.
        <br />
        <br />
        Holders of the DIGIFIZZY NFT content bundles will have exclusive behind the scenes access to
        following their journies + unlockable special edition NFT drops + experiences.
      </div>
      <div className={styles.text6}>ARJAY SOUL</div>
      <img src="./magazine/2/images/57_58_image1.png" className={styles.image1} />
      <img src="./magazine/2/images/57_58_image2.png" className={styles.image2} />
      <video autoPlay muted loop className={styles.video1}>
        <source src="./magazine/2/images/57_58_video1.mp4" type="video/mp4" />
      </video>
      <div className={styles.text7}>
        Not your regular R&B singer – the versatile and independent artist – ArjaySoul is not afraid
        to take risks when creating his own waves in music. The Arizona-native is no stranger to
        turning heartbreak to breakthrough and adapting to his environment. At 13 years old his
        father was shot, but as he expresses in his single, “Worst Behavior”, he knew a shift in his
        emotions was necessary to level up his mindset.
      </div>
      <div className={styles.text8}>
        After dropping out of college after his first year, Arjay was homeless and working double
        shifts just to get time in the studio but going back to his old life was never an option.
        While confident in his own sound and calling as an artist, he finds inspiration from Grammy
        Award winning artists like H.E.R., Drake, and Jhené Aiko. He also lives by the quote, “Luck
        is just being prepared at all times, so when the door opens you’re ready”, stated by one of
        the most illustrious artists in rap history – Nipsey Hussle who Arjay references in his
        single “Numb Rant”.
      </div>
      <div className={styles.text9}>
        Get your backstage pass into Arjay’s view ARJAY’s immersive content experience.
      </div>
    </div>
  );
};

export default Page52;
