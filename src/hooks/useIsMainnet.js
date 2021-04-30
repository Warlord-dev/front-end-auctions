import { getChainId } from '@selectors/global.selectors';
import { getEnabledNetworkByChainId } from '@services/network.service';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export function useIsMainnet() {
  const chainId = useSelector(getChainId);
  const network = getEnabledNetworkByChainId(chainId);
  const [isMainnet, setIsMainnet] = useState(
    network.alias === 'mainnet' || network.alias === 'matic' ? true : false,
  );

  useEffect(() => {
    setIsMainnet(network.alias === 'mainnet' || network.alias === 'matic' ? true : false);
  }, [network]);

  return isMainnet;
}
