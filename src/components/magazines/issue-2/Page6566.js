import React from 'react';
import styles from './page6566.module.scss';

const Page6566 = () => {
  return (
    <div className={styles.wrapper}>
      <img src="./magazine/1/65_66/Group 1142.png" className={styles.left} />
      <img src="./magazine/1/65_66/right6.png" className={styles.right} />
      <img src="./magazine/1/65_66/movie.gif" className={styles.movie} />
      <a href="https://gamebanana.com/mods/185093" className={styles.link1} target="_blank">
        SEE MODS
      </a>
      <a href="https://discord.gg/bzdVPUE8T4" className={styles.link2} target="_blank">
        PLAY HERE!
      </a>
      <div className={styles.rightBottomText}>
        Modded by{' '}
        <a href="https://www.nexusmods.com/brawlhalla/mods/27" target="_blank">
          Starmiinor.
        </a>{' '}
        It’s the Brawlhalla Cheetos Edition.
      </div>
    </div>
  );
};

export default Page6566;
