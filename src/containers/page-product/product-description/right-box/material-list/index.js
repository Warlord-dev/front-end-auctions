import React, { memo } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { useSelector } from 'react-redux';
import MaterialLine from '@components/material-line';
import { getGarmentsById } from '@selectors/garment.selectors';
import { buildClientSchema } from 'graphql';
import styles from './styles.module.scss';

const MaterialList = ({
  clothesId, childNftsText, headerTitle, valueChildNfts,
}) => {

  const garment = useSelector(getGarmentsById(clothesId));
  if (!garment) {
    return buildClientSchema;
  }

  return (
    <div className={cn(styles.wrapper, 'animate__animated animate__fadeIn')}>
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
      <div className={styles.materialLine}>
        {garment.children.map((item) => <MaterialLine key={item.id} item={item} />)}
      </div>

    </div>
  );
};

MaterialList.propTypes = {
  childNftsText: PropTypes.string,
  headerTitle: PropTypes.array,
  valueChildNfts: PropTypes.string,
  clothesId: PropTypes.string.isRequired,
};

MaterialList.defaultProps = {
  childNftsText: 'Child NFTs:',
  headerTitle: ['name', '', 'Price', 'Yield (estimates)'],
  valueChildNfts: '',
};

export default memo(MaterialList);
