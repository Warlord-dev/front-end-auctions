import React, { memo } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './styles.module.scss';

const DesignInformation = ({
  currentClothesInfo, estimateAPY,
}) => (
  <div className={cn(styles.wrapper, 'animate__animated animate__fadeIn')}>
    <p className={styles.description}>{currentClothesInfo?.description}</p>
    <div className={styles.footerWrapper}>
      <div className={styles.leftFooter}>
        {currentClothesInfo?.youReceive && <p className={styles.youReceiveText}>You will receive</p>}
        <p className={styles.youReceive}>{currentClothesInfo?.youReceive}</p>
      </div>
      <p className={styles.estimateWrapper}>
        <span className={styles.estimateApy}>{estimateAPY}%</span>
        <span className={styles.estimateApyTextWrapper}>
          <span className={styles.estimateApyText}>Estimate APY</span>
          <span
            className={styles.questionMark}
          >
            ?
          </span>
          <span className={styles.hint}>APY estimated based on the current total staked value across each of the $MONA
            reward pools and current highest bid value of the NFT.
          </span>
        </span>
      </p>
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
