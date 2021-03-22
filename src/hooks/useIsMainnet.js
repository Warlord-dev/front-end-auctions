import { getChainId } from '@selectors/global.selectors';
import { getEnabledNetworkByChainId } from '@services/network.service';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export function useIsMainnet() {
  const [isMainnet, setIsMainnet] = useState(true);
  const chainId = useSelector(getChainId);

  useEffect(() => {
    const network = getEnabledNetworkByChainId(chainId);
    setIsMainnet(network.alias === 'mainnet' || network.alias === 'matic' ? true : false);
  }, [chainId]);

  return isMainnet;
}
