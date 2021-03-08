import React, { memo } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './styles.module.scss';

const DesignInformation = ({ currentClothesInfo, estimateAPY }) => (
  <div className={cn(styles.wrapper, 'animate__animated animate__fadeIn')}>
    <p className={styles.description}>{currentClothesInfo?.description}</p>
    <div className={styles.footerWrapper}>
      <div className={styles.gameTable}>
        <div className={styles.header}>
          <span className={styles.col1}>GAME CLASSIFIER</span>
          <span className={styles.col2}>SKIN ID</span>
          <span className={styles.col3}>HAT ID</span>
        </div>
        <div className={styles.body}>
          <div className={styles.row}>
            <div className={styles.col1}>
              Among Us Sheriff Mod
              <span>ESPA Tournaments</span>
            </div>
            <span className={styles.col2}>4511</span>
            <span className={styles.col3}>322</span>
          </div>
        </div>
      </div>
      <div className={styles.row}>
        <p className={styles.espaLink}>
          See more about ESPA&nbsp;<a href="https://espa.digitalax.xyz/">here.</a>
        </p>
        <p className={styles.estimateWrapper}>
          <span className={styles.estimateApy}>{estimateAPY}%</span>
          <span className={styles.estimateApyTextWrapper}>
            <span className={styles.estimateApyText}>Estimate APY</span>
            <span className={styles.questionMark}>?</span>
            <span className={styles.hint}>
              APY estimated based on the current total staked value across each of the $MONA reward
              pools and current highest bid value of the NFT.
            </span>
          </span>
        </p>
      </div>
    </div>
  </div>
);

DesignInformation.propTypes = {
  currentClothesInfo: PropTypes.object,
  estimateAPY: PropTypes.string,
};

DesignInformation.defaultProps = {
  currentClothesInfo: {},
  estimateAPY: '0.00',
};

export default memo(DesignInformation);
