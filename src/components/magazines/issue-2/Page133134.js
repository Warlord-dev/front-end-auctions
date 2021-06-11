import React, { useState } from 'react';
import styles from './page133134.module.scss';
import Link from 'next/link';

const Page133134 = () => {
  const [usually] = useState("{usually}")
  return (
    <div className={styles.wrapper}>
        <img src="./magazine/1/133_134/image1.png" className={styles.image1} />
       <img src="./magazine/1/133_134/image2.png" className={styles.image2} />
       <p className={styles.text1}>A Variance Swap for Life.</p>
       <p className={styles.text2}>Life comes with no instruction manual and the advice given along the way is all over the place; others try to impose their views and thoughts, not out of maliciousness {usually}, but rather out of conviction that they think they know what is best or good for us, despite it often being a case of either naive intervensionism or the green lumber phallacy (i.e. attempting to draw conclusions from what they know or have experienced as holding the same contextual weight within our own situations). 
<br/><br/>
My mindset on a lot of things, and most certainly when building DIGITALAX, is how to build in a way that is antifragile; by doing this, an instruction set is really not needed. Predicting is a fool’s game and only leads to the initiating of a perpetual oscilliation between signal and noise, where in almost all cases the two cannot be distinguished from each other, leading to more often than not a mistaking of noise for signal. And, if this mistake is made too often, which it will be, catastrophe will ensue. 
<br/><br/>
A sustainable, antifragile ecosystem must be set up like a variance swap— where puts and calls are incramentally placed around your current spot, ensuring the capture of the delta between the current spot and the final state can be absolutely maximised, despite where, what or when that state may be. Ultimately, it’s detached from the outcome and instead attentively focused around the exposure and increasing the access to optionality at any given time. This is not just relevant for ecosystem building, but rather, it’s relevant for anything that desires to be done right. Internal antifragility I would argue is one of the hardest characteristics to obtain, and then continue to maintain, however, if it is achieved the exposure to positive convexity far outweighs the “work done” for achieving it — if you know you are on the right track and have set out to do something unbelievabley world changing then you can’t expect others to understand it, let alone support it. But being antifragile means that you really don’t care— the words or actions of the world won’t deter you, your mission is too intrinsic, and you will keep pushing forward no matter what, because after all you know that it is the only right path forward. Anything else and you are just cheating yourself and accepting an easy way out. And antifragility at that core level is indestructable, it’s the ultimate authentically undeniable ace up the sleeve. 
</p>
<p className={styles.text3}>- Emma-Jane MacKinnon-Lee</p>
<p className={styles.text4}>Bowser, King of Chaos</p>
<p className={styles.text5}>McMistrzYT</p>
    </div>
  );
};

export default Page133134;
