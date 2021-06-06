import React from 'react';
import { useSelector } from 'react-redux';
import UnlockPage from '../common/UnlockPage';
import styles from './page8788.module.scss';
import cn from 'classnames';

const Page8788 = () => {
  const { contentUnlocked } = useSelector((state) => state.global.toJS());

  return (
    <div className={styles.wrapper}>
      <img src="./magazine/1/87_88/page87-left.png" className={styles.leftBack} />
      <img src="./magazine/1/87_88/page87-right.png" className={styles.rightBack} />
      <img src="./magazine/1/87_88/page87-right2.png" className={styles.rightBack} />
      <img src="./magazine/1/87_88/page87-right3.png" className={styles.rightBottom} />
      <div className={cn(styles.text, styles.text1)}>
      WHAT ARE YOU WEARING?
      </div>
      <div className={cn(styles.text, styles.text2)}>
      WHAT ARE YOU WEARING?
      </div>
      <div className={cn(styles.text, styles.text3)}>
      WHAT ARE YOU WEARING?
      </div>
      <div className={cn(styles.text, styles.text4)}>
      WHAT ARE YOU WEARING?
      </div>
      <div className={cn(styles.text, styles.text5)}>
      WHAT ARE YOU WEARING?
      </div>
      <div className={styles.text6}>
      FASHION FOR THE METAVERSE
      </div>
      <div className={styles.text7}>
      This month DIGITALAX ran...
      </div>
      <div className={styles.text8}>
      #FLEXYOURFLARE
      </div>
      <div className={styles.text9}>
      #FLEXYOURFLARE
      </div>
      <div className={styles.text10}>
      #FLEXYOURFLARE
      </div>
      <div className={styles.text11}>
      An open digital fashion competition bringing together amazingly talented creators from across the realms, focused on enabling creatives for modding their version of the metaverse.
      </div>
      <div className={styles.text12}>
      This might sound cliche but all entries were too good not to include in DIGIFIZZY. We truly felt that everyone’s efforts deserved to be seen! 
      </div>
      <div className={styles.text13}>
      So, for the next pages of What Are you Wearing? feast your eyes on some delightful digital fashion visual salience. 
      </div>
      {/* {!contentUnlocked && <UnlockPage />} */}
    </div>
  );
};

export default Page8788;
