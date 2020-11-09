import React, { memo } from 'react';
import PropTypes from 'prop-types';
import MaterialLine from '@components/material-line';
import styles from './styles.module.scss';


const MaterialList = ({
  currentMaterial, childNftsText, headerTitle, valueChildNfts,
}) => (
  <div className={styles.wrapper}>
    <p className={styles.titleWrapper}>
      {valueChildNfts && (
        <>
          <span className={styles.title}>{childNftsText}</span>
          <span className={styles.titleValue}>{valueChildNfts}</span>
        </>
      )}
    </p>
    <div className={styles.headerTitle}>
      {headerTitle.map((item) => <p key={item} className={styles.headerTitleItem}>{item}</p>)}
    </div>
    <MaterialLine list={currentMaterial} className={styles.materialLine} />
  </div>
);


MaterialList.propTypes = {
  childNftsText: PropTypes.string,
  currentMaterial: PropTypes.array,
  headerTitle: PropTypes.array,
  valueChildNfts: PropTypes.string,
};

MaterialList.defaultProps = {
  childNftsText: 'Child NFTs:',
  currentMaterial: null,
  headerTitle: ['name', '', 'Price', 'Yield (estimates)'],
  valueChildNfts: '',
};

export default memo(MaterialList);
