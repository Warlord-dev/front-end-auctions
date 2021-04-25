import React, { memo } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { useSelector } from 'react-redux';
import MaterialLine from '@components/material-line';
import { getGarmentsById } from '@selectors/garment.selectors';
import { buildClientSchema } from 'graphql';
import styles from './styles.module.scss';

const MaterialList = ({
  clothesId,
  childNftsText,
  headerTitle,
  valueChildNfts,
  activeTab,
  semiRare,
  common,
}) => {
  const garment = useSelector(getGarmentsById(clothesId));
  if (!garment && activeTab === 0) {
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
        {headerTitle.map((item) => (
          <p key={item} className={styles.headerTitleItem}>
            {item}
          </p>
        ))}
      </div>
      <div className={styles.materialLine}>
        {activeTab === 0
          ? garment.children.map((item) => (
              <MaterialLine key={item.id} item={item} clothesId={clothesId} />
            ))
          : activeTab === 1
          ? semiRare.children.map((item) => (
              <MaterialLine key={item.id} item={item} clothesId={clothesId} />
            ))
          : common.children.map((item) => (
              <MaterialLine key={item.id} item={item} clothesId={clothesId} />
            ))}
      </div>
    </div>
  );
};

MaterialList.propTypes = {
  childNftsText: PropTypes.string,
  headerTitle: PropTypes.array,
  valueChildNfts: PropTypes.string,
  clothesId: PropTypes.string.isRequired,
  activeTab: PropTypes.number,
  semiRare: PropTypes.object,
  common: PropTypes.object,
};

MaterialList.defaultProps = {
  childNftsText: 'Child NFTs:',
  headerTitle: ['Name', '', 'D.O.E.'],
  valueChildNfts: '',
  activeTab: 0,
  semiRare: { children: [] },
  common: { children: [] },
};

export default memo(MaterialList);
