import React from 'react';
import Link from 'next/link';
import styles from './page6364.module.scss';

const Page6364 = () => {
  return (
    <div className={styles.wrapper}>
      <img src="/magazine/6/images/63_64_back.png" className={styles.back} />
      <video autoPlay muted loop className={styles.video1}>
        <source src="./magazine/1/videos/moshed-05-02-1-15-28.mp4" type="video/mp4" />
      </video>
      <img src="/magazine/6/images/63_64_image2.png" className={styles.image2} />
      <a href="https://poap.xyz" target="_blank">
        <img src="/magazine/6/images/53_54_image2.png" className={styles.link1} />
      </a>
      <img src="/magazine/6/images/53_54_image3.png" className={styles.image3} />
      <div className={styles.text1}>P O R T U G A L</div>
      <div className={styles.text2}> INTERNATIONAL PLAYERS</div>
      <a href="https://designers.digitalax.xyz/designers/Tania%20MV%20Studio/" target="_blank">
        <div className={styles.text3}> Tania Viegas </div>
      </a>
      <div className={styles.rect1} />
      <div className={styles.rect2} />
      <div className={styles.text4}>
        Getting into fashion design was something that came very naturally for me in my early teens,
        as I grown more conscious of what to wear the picker I got and the more difficult it began
        to find something that I would like to wear! And a very big factor was that I was going
        through my "emo phase" and that really sparked my creativity in fashion as I didn't have
        much influence in IRL, like stores selling that type of style or even other people's styles.
        So, I started expressing my creative side in that way, imagining what I would like to
        actually wear in my day to day that would transmit my character as a person...
      </div>
      <div className={styles.text5}>
        Growing up in Tavira, South of Portugal, fashion influence was basically 0 during my
        childhood and when I got my first PC and internet connection, I started looking for missing
        pieces of influence what I desired! When I was around 15 years old and thinking on what to
        study - I had to pick the area of studies when applying to high school - I realized I didn't
        want to study such a broad subject for 3 years because I have always known what I wanted to
        do! With the support of my lovely parents, I have applied to Escola de Moda do Porto (600km
        from my hometown) which is a professional high school, basically I could graduate from high
        school and learn Fashion Design at the same time! No need to be drawing fruit bowls and
        naked people for 3 years!
        <br />
        <br />
        ps. I have discovered, later, that my mom's top 2 career choices were fashion design, so...
        I may have been subconsciously bias this all time!
        <br />
        <br />
        When I used to make IRL fashion I would always start by playing with silhouettes in the
        mannequin and finding new ways of constructing and conceptually I would join my interests
        with my day-to-day experiences. My interests have been somewhat connected to the
        "mysterious" side of our existence, from the occult to the psychologic traits... my graduate
        collection was inspiring by the traits that distinguish a psychopath and by analyzing those
        I managed to extract a lot of concept ideas that led me to different shapes and construction
        forms. And now developing these in the digital space has amplified these inspirations even
        more and once I am even more knowledgeable in the field, I believe my art will show that
        storytelling even greater! fashion design, so... I may have been subconsciously bias this
        all time!
      </div>
      <img src="/magazine/6/images/63_64_image1.png" className={styles.image1} />
    </div>
  );
};

export default Page6364;
