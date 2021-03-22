import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { getChainId } from '@selectors/global.selectors';
import CollectionList from '@containers/collection-list';
import PageProductsList from '@containers/page-products-list';

const Index = () => {
  const chainId = useSelector(getChainId);
  let isMumbai = chainId === '0x13881';
  return isMumbai ? <CollectionList /> : <PageProductsList />;
}

export default memo(Index);
