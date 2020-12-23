import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  getDesignerInfoByName,
  getDesignerById,
} from '@selectors/designer.selectors';
import ExamplesWorkLine from './examples-work-line';
import styles from './styles.module.scss';

const ListExamplesWork = ({ designerName, headerTitle }) => {
  const currentDesigner = useSelector(getDesignerInfoByName(designerName));
  const designer = useSelector(getDesignerById(currentDesigner.id));

  return (
    <div>
      <div className={styles.headerTitle}>
        {headerTitle.map((item) => (
          <p key={item} className={styles.headerTitleItem}>
            {item}
          </p>
        ))}
      </div>
      <div className={styles.body}>
        {(!designer || !designer.listings) && (
          <div className={styles.loading}>Loading...</div>
        )}
        {designer
          && designer.listings
          && designer.listings.map((item) => (
            <ExamplesWorkLine key={item.id} {...item} clothesId={item.id} />
          ))}
      </div>
    </div>
  );
};

ListExamplesWork.propTypes = {
  headerTitle: PropTypes.array,
  designerName: PropTypes.string.isRequired,
};

ListExamplesWork.defaultProps = {
  headerTitle: [
    'Design',
    '',
    'Last Price',
    'Yield (estimates)',
    'Listed Date',
    'Status',
  ],
};

export default memo(ListExamplesWork);
