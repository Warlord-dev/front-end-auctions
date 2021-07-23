import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { getChainId } from '@selectors/global.selectors';
import CollectionList from '@containers/collection-list';
import PageProductsList from '@containers/page-products-list';

const Index = () => {
  const chainId = useSelector(getChainId);
  // let isMatic = chainId === '0x13881' || chainId === '0x89';
  return <CollectionList />;
};

export default memo(Index);
