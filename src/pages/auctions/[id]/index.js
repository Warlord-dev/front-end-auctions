import React, { memo } from 'react';
import { useRouter } from 'next/router';
import PageProductsList from '@containers/page-products-list';

const ProductList = () => {
  const router = useRouter();
  const { id } = router.query;

  return <PageProductsList auctionId={id} />;
}

export default memo(ProductList);
