/* eslint-disable react/no-array-index-key */
import React, { memo, useState } from 'react';
import { useSelector } from 'react-redux';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { Dropdown } from 'semantic-ui-react';
import CardProduct from '@components/card-product';
import 'semantic-ui-css/components/dropdown.css';
import 'semantic-ui-css/components/transition.css';
import styles from './styles.module.scss';


const CardList = ({ className, dropdownOptions }) => {
  const clothesInfo = useSelector((state) => state.clothesInfo.toJS());
  const [dropdownActiveItem, setDropdownActiveItem] = useState(0);

  // TODO logic will be added when requirements appear
  switch (dropdownActiveItem) {
    case 1:
      //
      break;

    case 2:
      //
      break;

    case 3:
      //
      break;

    case 4:
      //
      break; // no default
  }

  return (
    <>
      <div className={styles.dropdown}>
        <span className={styles.caption}>Sort by</span>
        <Dropdown
          onChange={(event, data) => setDropdownActiveItem(data.value)}
          placeholder="Sort by"
          options={dropdownOptions}
          selection
        />
      </div>
      <ul className={cn(styles.list, className)}>
        {clothesInfo.map((item, index) => <CardProduct key={index} {...item} />)}
      </ul>
    </>
  );
};

CardList.propTypes = {
  className: PropTypes.string,
  dropdownOptions: PropTypes.array.isRequired,
};

CardList.defaultProps = {
  className: '',
};


export default memo(CardList);
