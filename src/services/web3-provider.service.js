import { isMetamaskInstalled } from '@services/metamask.service';
import config from '@utils/config';
import { WALLET_METAMASK, WALLET_ARKANE } from '@constants/global.constants';
import { STORAGE_WALLET } from '@constants/storage.constants';

const options = {
  clientId: 'DIGITALAX',
  // rpcUrl: 'https://kovan.infura.io/v3/YOUR-PROJECT-ID', //optional
  environment: 'staging', //optional, production by default
  // signMethod: 'POPUP', //optional, REDIRECT by default
  // bearerTokenProvider: () => 'obtained_bearer_token', //optional, default undefined
  //optional: you can set an identity provider to be used when authenticating
  // authenticationOptions: {
  //   idpHint: 'google'
  // },
  secretType: 'ETHEREUM', //optional, ETHEREUM by default
};

export const getWeb3Provider = async () => {
  const WALLET = localStorage.getItem(STORAGE_WALLET);
  if (WALLET === WALLET_ARKANE) return await Arkane.createArkaneProviderEngine(options);
  if (WALLET === WALLET_METAMASK) {
    return isMetamaskInstalled() ? window.ethereum : config.DEFAULT_WEB3_URL;
  }
  return null;
};
