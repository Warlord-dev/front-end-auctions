import React, { useRef, useState } from 'react';
import styles from './page4748.module.scss';

const Page4748 = () => {
  return (
    <div className={styles.wrapper}>
      <img src="/magazine/6/images/47_48_back.png" className={styles.back} />
      <a href="https://www.instagram.com/dansky3d/" target="_blank">
        <div className={styles.link1}>Dansky3D</div>
      </a>
      <div className={styles.text1}>
        Dansky3D is a self-taught 3D artist and graphic designer from Seattle, Washington. He enjoys
        creating new artwork every day. His inspiration comes from his personal thoughts/emotions,
        pop culture and current events.
      </div>
      <a href="https://www.instagram.com/maxim_gehricke/" target="_blank">
        <div className={styles.link2}>Dansky3D</div>
      </a>
      <div className={styles.text2}>
        Preferably operating in 3D, I started my career working with Blender when I was 15, creating
        my first animations and renders. Today I am mainly working in Maya and Substance Painter,
        but have also picked up some experience in Nuke, Houdini, Zbrush and Mari. Over the years I
        have also become fluent in dealing with Photoshop, After Effects and Premiere. I am
        currently working on my first 3d animated short called "SEN". You can find more info on the
        portfolio tab.
      </div>
    </div>
  );
};

export default Page4748;
