import { AVAILABLE_NETWORKS } from '@constants/networks.constants';
import config from '@utils/config';

export const getEnabledNetworks = () => AVAILABLE_NETWORKS.filter((network) => config.NETWORKS.includes(network.alias));

export const getEnabledNetworkByChainId = (chainId) => getEnabledNetworks().find((network) => Number(network.hex) === Number(chainId));

export const getAPIUrlByChainId = (chainId) => {

  const network = getEnabledNetworkByChainId(chainId);

  if (!network || !config.API_URLS[network.alias]) {
    return config.API_URLS[config.DEFAULT_NETWORK];
  }

  return config.API_URLS[network.alias];

};

export const getWSUrlByChainId = (chainId) => {

  const url = getAPIUrlByChainId(chainId);

  return url.replace('http', 'ws');

};
