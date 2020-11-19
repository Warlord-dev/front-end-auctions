import React, { memo, useState } from 'react';
import { useSelector } from 'react-redux';
import cn from 'classnames';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Dropdown } from 'semantic-ui-react';
import CardProduct from '@components/card-product';
import Loader from '@components/loader';
import { STORAGE_SORT_BY } from '@constants/storage.constants';
import { getAllGarmentsById } from '@selectors/garment.selectors';
import { getAllHistoryByTokenId } from '@selectors/history.selectors';
import { getAuctionsIsLoaded } from '@selectors/auction.page.selectors';
import {
  sortByLowestBid, sortByHighestBid, sortByHighestVolume, sortByLowestVolume,
} from '@helpers/sort.helpers';
import 'semantic-ui-css/components/dropdown.css';
import 'semantic-ui-css/components/transition.css';
import styles from './styles.module.scss';

const CardList = ({ auctions, className }) => {

  const dropdownOptions = [
    { key: 1, text: 'Highest bid', value: 'highest_bid' },
    { key: 2, text: 'Lowest bid', value: 'lowest_bid' },
    { key: 3, text: 'Highest Volume', value: 'highest_volume' },
    { key: 4, text: 'Lowest Volume', value: 'lowest_volume' },
  ];
  const historyByTokenId = useSelector(getAllHistoryByTokenId);
  const garmentsById = useSelector(getAllGarmentsById);
  const auctionsIsLoaded = useSelector(getAuctionsIsLoaded);
  const [dropdownActiveItem, setDropdownActiveItem] = useState(localStorage.getItem(STORAGE_SORT_BY));


  switch (dropdownActiveItem) {
    case 'highest_bid':
      auctions = sortByHighestBid(auctions);
      break;
    case 'lowest_bid':
      auctions = sortByLowestBid(auctions);
      break;

    case 'highest_volume':
      auctions = sortByHighestVolume(auctions, historyByTokenId);
      break;

    case 'lowest_volume':
      auctions = sortByLowestVolume(auctions, historyByTokenId);
      break;
    default:
  }

  const onHandleDropdownChange = (value) => {
    setDropdownActiveItem(value);
    localStorage.setItem(STORAGE_SORT_BY, value);
  };

  return (
    <>
      <div className={styles.dropdown}>
        <span className={styles.caption}>Sort by</span>
        <Dropdown
          onChange={(event, data) => onHandleDropdownChange(data.value)}
          placeholder="Sort by"
          options={dropdownOptions}
          selection
          value={dropdownActiveItem}
        />
      </div>
      {auctionsIsLoaded ? (
        <>
          {auctions.toJS().length
            ? (
              <ul className={cn(styles.list, className, 'animate__animated animate__fadeIn')}>
                {auctions.map((auction) => {
                  const garment = garmentsById.get(auction.get('id'));
                  return (
                    <CardProduct
                      key={auction.get('id')}
                      history={historyByTokenId.get(auction.get('id'))}
                      garment={garment}
                    />
                  );
                })}
              </ul>
            )
            : <p className={styles.empty}>Data is empty</p>}
        </>
      ) : <Loader size="large" className={styles.loader} /> }
    </>
  );
};

CardList.propTypes = {
  auctions: ImmutablePropTypes.listOf(ImmutablePropTypes.contains({})).isRequired,
  className: PropTypes.string,
};

CardList.defaultProps = {
  className: '',
};


export default memo(CardList);
