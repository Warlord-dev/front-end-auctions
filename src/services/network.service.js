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

export const getExplorerUrlByChainId = (chainId) => {
  const network = getEnabledNetworkByChainId(chainId);
  return config.EXPLORER_URLS[network.alias];
};

export const getDefaultNetworkChainId = () => {
  const network = AVAILABLE_NETWORKS.find((net) => net.alias === config.DEFAULT_NETWORK);

  if (!network) {
    throw new Error('Invalid DEFAULT_NETWORK: getDefaultNetworkChainId');
  }

  return network.hex;
};


export const getWSUrlByChainId = (chainId) => {

  const url = getAPIUrlByChainId(chainId);

  if (!url) {
    throw new Error('Invalid chainId: getWSUrlByChainId');
  }

  return url.replace('http', 'ws');

};
export const getRewardContractAddressByChainId = (chainId) => {

  const network = getEnabledNetworkByChainId(chainId);

  return config.REWARD_CONTRACT_ADDRESSES[network.alias];

};
