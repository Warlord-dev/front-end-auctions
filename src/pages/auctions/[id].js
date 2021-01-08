import React, { memo } from 'react';
import { useRouter } from 'next/router';
import PageProductsList from '@containers/page-products-list';

const AuctionPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <PageProductsList
      sold
      auctionId={id}
    />
  );
};

export default memo(AuctionPage);
