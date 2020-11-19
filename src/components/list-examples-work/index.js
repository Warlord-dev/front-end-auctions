import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getDesignerById } from '@selectors/designer.selectors';
import { getAllGarmentsById } from '@selectors/garment.selectors';
import ExamplesWorkLine from './examples-work-line';
import styles from './styles.module.scss';


const ListExamplesWork = ({ designerId, headerTitle }) => {

  const designer = useSelector(getDesignerById(designerId));
  const garmentsById = useSelector(getAllGarmentsById);

  return (
    <div>
      <div className={styles.headerTitle}>
        {headerTitle.map((item) => <p key={item} className={styles.headerTitleItem}>{item}</p>)}
      </div>
      <div className={styles.body}>
        {designer && designer.listings && designer.listings.map((item) => {
          const garment = garmentsById.get(item.id);

          return (
            <ExamplesWorkLine
              key={item.id}
              {...item}
              tokenUri={garment ? garment.tokenUri : ''}
              clothesName={garment ? garment.id : ''}
              address={garment ? garment.id : ''}
              estimateApy={120}
            />
          );
        })}
      </div>
    </div>
  );
};


ListExamplesWork.propTypes = {
  headerTitle: PropTypes.array,
  designerId: PropTypes.string.isRequired,
};

ListExamplesWork.defaultProps = {
  headerTitle: ['Design', '', 'Last Price', 'Yield (estimates)', 'Listed Date', 'Status'],
};

export default memo(ListExamplesWork);
