import { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';

import { getAccount } from '@selectors/user.selectors';
import config from '@utils/config';
import useMaticPosClient from './useMaticPosClient';
import { useIsMainnet } from './useIsMainnet';
import usePollar from './usePollar';

import { useDTXV1Balance } from "./useERC721V1Balance";

export function useDTXV1TokenIds() {
  const [dtxV1MaticIds, setDtxV1MaticIds] = useState([]);

  const account = useSelector(getAccount);
  const isMainnet = useIsMainnet();

  const [posClientParent, posClientChild] = useMaticPosClient();

  const [dtxEthBalance, dtxMaticBalance] = useDTXV1Balance();

  const fetchDtxIds = useCallback(async () => {
    if (account && posClientParent && posClientChild) {

      const maticIds = await Promise.all(
        [...Array(parseInt(dtxMaticBalance)).keys()].map((i) =>
          posClientParent.tokenOfOwnerByIndexERC721(
            account,
            config.DTXV1_ADDRESSES[isMainnet ? 'matic' : 'mumbai'],
            i,
            { parent: false }
          )
        )
      );

      setDtxV1MaticIds(maticIds);
    }
  }, [isMainnet, posClientParent, posClientChild, dtxEthBalance, dtxMaticBalance]);

  usePollar(fetchDtxIds);

  return [dtxV1MaticIds];
}
