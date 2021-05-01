import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { getAccount } from '@selectors/user.selectors';
import config from '@utils/config';
import useMaticPosClient from './useMaticPosClient';
import { useIsMainnet } from './useIsMainnet';
import usePollar from './usePollar';

import { useDTXV1Balance } from './useERC721V1Balance';

export function useDTXV1TokenIds() {
  const [dtxV1MaticIds, setDtxV1MaticIds] = useState([]);

  const account = useSelector(getAccount);
  const isMainnet = useIsMainnet();

  const [posClientParent, posClientChild] = useMaticPosClient();

  const [garmentMaticV1Balance] = useDTXV1Balance();
  const fetchDtxIds = useCallback(async () => {
    if (account && posClientParent && posClientChild) {
      console.log('checking these v1 ids');
      const maticIds = await Promise.all(
        [...Array(parseInt(garmentMaticV1Balance)).keys()].map((i) =>
          posClientParent.tokenOfOwnerByIndexERC721(
            account,
            config.DTXV1_ADDRESSES[isMainnet ? 'matic' : 'mumbai'],
            i,
            { parent: false },
          ),
        ),
      );

      console.log('v1 token ids');
      console.log(maticIds);

      setDtxV1MaticIds(maticIds);
    }
  }, [isMainnet, posClientParent, posClientChild, garmentMaticV1Balance]);

  useEffect(() => {
    fetchDtxIds();
  }, [garmentMaticV1Balance]);

  // usePollar(fetchDtxIds);

  return [dtxV1MaticIds];
}
