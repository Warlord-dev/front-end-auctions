import React from 'react';
import { useSelector } from 'react-redux';
import UnlockPage from '../common/UnlockPage';
import styles from './page8990.module.scss';
import cn from 'classnames';

const Page8990 = () => {
  return (
    <div className={styles.wrapper}>
      <img src="./magazine/1/89_90/left.png" className={styles.leftBack} />
      <img src="./magazine/1/89_90/right.png" className={styles.rightBack} />
      <div className={styles.text1}>
      BLADE RUNWAY
      </div>
      <p className={styles.text2}>
      Welcome to the Meta-Jungle
      </p>
      <div className={styles.text3}>
      Sheantoz Story
      </div>
      <p className={styles.text4}>
Sheantoz is an intergalactic alien singer from a distant future. She has an unique and powerful voice that can both fascinate  and enchant the audience with just a single song. She is originally from a planet called Saquarious, where her species has blue color skin and the ability to breath under water— her planet is 60% liquid water and 30% iced water. Only %10 of the planet is solid land, where the enemy species rules. 
<br/>
<br/>
Sheantoz was once captured by enemy forces for their own amusement, however, her voice was able to enchant the soldiers, allowing her to escape via space craft. 
<br/>
<br/>
Ever since, she has been roaming from one planet to the next, travelling across galaxies. She plans one day to also visit Earth, giving a concert to her fans and using her voice for the greater good. 
      </p>
      <div className={styles.text5}>
      Burak Dahan
      </div>
      {/* {!contentUnlocked && <UnlockPage />} */}
    </div>
  );
};

export default Page8990;
