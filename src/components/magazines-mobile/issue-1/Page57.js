import React, { useRef, useState } from 'react'
import styles from './page57.module.scss'

const Page57 = () => {
  const [play1, setPlay1] = useState('./magazine/1/63_64/Group 1189');
  const [play2, setPlay2] = useState('./magazine/1/63_64/Group 1190');
  const [play3, setPlay3] = useState('./magazine/1/63_64/Group 1190');
  const [play4, setPlay4] = useState('./magazine/1/63_64/Group 1190');
  const audio1 = useRef();
  const audio2 = useRef();
  const audio3 = useRef();
  const audio4 = useRef();

  return (
    <div className={styles.wrapper}>
      <div className={styles.bg_section}>
        <img src="./magazine/1/images/mobile/page57/b-bg-1.png" className={styles.backImage1} />         
        <img src="./magazine/1/images/mobile/page57/w-bg-1.png" className={styles.backImage3} />
        <img src="./magazine/1/images/mobile/page57/w-bg-2.png" className={styles.backImage4} />
        <img src="./magazine/1/images/mobile/page57/w-bg-3.png" className={styles.backImage5} />
        <img src="./magazine/1/images/mobile/page57/img-1.png" className={styles.img1} />
        <img src="./magazine/1/images/mobile/page57/img-2.png" className={styles.img2} />
        <img src="./magazine/1/images/mobile/sound.gif" className={styles.sound}/>        
        <img
          src={`${play1}.png`}
          className={styles.play1}
          onClick={() => {
            if (!play1.includes('pause')) {
              setPlay1(play1 + '-pause');
              audio1.current.play();
            } else {
              setPlay1(play1.split('-pause')[0]);
              audio1.current.pause();
            }
          }}
        />
        <audio className={styles.audio} ref={audio1} controls>
          <source src="./magazine/1/63_64/1.wav" type="audio/wav" />
        </audio>
        <img
        src={`${play2}.png`}
        className={styles.play2}
        onClick={() => {
          if (!play2.includes('pause')) {
            setPlay2(play2 + '-pause');
            audio2.current.play();
          } else {
            setPlay2(play2.split('-pause')[0]);
            audio2.current.pause();
          }
        }}
      />
      <audio className={styles.audio} ref={audio2} controls>
        <source src="./magazine/1/63_64/2.mp3" type="audio/mp3" />
      </audio>
      <img
        src={`${play3}.png`}
        className={styles.play3}
        onClick={() => {
          if (!play3.includes('pause')) {
            setPlay3(play3 + '-pause');
            audio3.current.play();
          } else {
            setPlay3(play3.split('-pause')[0]);
            audio3.current.pause();
          }
        }}
      />
      <audio className={styles.audio} ref={audio3} controls>
        <source src="./magazine/1/63_64/3.mp3" type="audio/mp3" />
      </audio>
      <img
        src={`${play4}.png`}
        className={styles.play4}
        onClick={() => {
          if (!play4.includes('pause')) {
            setPlay4(play4 + '-pause');
            audio4.current.play();
          } else {
            setPlay4(play4.split('-pause')[0]);
            audio4.current.pause();
          }
        }}
      />
      <audio className={styles.audio} ref={audio4} controls>
        <source src="./magazine/1/63_64/4.mp3" type="audio/mp3" />
      </audio>
      </div>
      <div className={styles.title_section}>
        <h1 className={styles.title1}>
          <span>SONGCAMP MUSIC NFT AUCTION.</span>
          <br/>
          9 MUSIC ARTISTS.
          10 ETH TOTAL SALES.
        </h1>
        <h1 className={styles.title2}>HOLD ON HOPE.</h1>
        <h2 className={styles.title3}>Rowan. Kevin Paris. Gavin Slate.</h2>
        <h1 className={styles.title4}>FRESH</h1>
        <h1 className={styles.title5}>FRESH</h1>       
      </div>
      <div className={styles.title_section_1}>
        <p className={styles.title6}>J-KIND</p>
        <p className={styles.title7}>Gregory Gordon</p>
        <p className={styles.title8}>J-KIND</p>
      </div>
      <div className={styles.title_section_2}>         
        <h1 className={styles.title9}>PARABOLIC DREAMS</h1>
        <h1 className={styles.title10}>PARABOLIC DREAMS</h1>
        <h1 className={styles.title11}>PARABOLIC DREAMS</h1>
        <h1 className={styles.title12}>PARABOLIC DREAMS</h1>
      </div>
      <div className={styles.text_section}>
        <p className={styles.text1}>
          An incredible melodic journey through a positive energy field - this latest hit by San Francisco’s most sought-after tech house DJ, J-KIND will make you smile and think about the good times shared with friends on the dance floor.  A raspy growling synth underlays an incredibly catchy melody, forming a unique blend of uplifting sounds guaranteed to bring your spirits up!
        </p>
        <p className={styles.text2}>
          An incredible melodic journey through a positive energy field - this latest hit by San Francisco’s most sought-after tech house DJ, J-KIND will make you smile and think about the good times shared with friends on the dance floor.  A raspy growling synth underlays an incredibly catchy melody, forming a unique blend of uplifting sounds guaranteed to bring your spirits up!
        </p>
        <p className={styles.text3}>
        An incredible melodic journey through a positive energy field - this latest hit by San Francisco’s most sought-after tech house DJ, J-KIND will make you smile and think about the good times shared with friends on the dance floor.  A raspy growling synth underlays an incredibly catchy melody, forming a unique blend of uplifting sounds guaranteed to bring your spirits up!
        </p>
      </div>
    </div>
  )
}

export default Page57