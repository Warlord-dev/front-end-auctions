import Web3 from 'web3';
import { isMetamaskInstalled } from '@services/metamask.service';
import config from '@utils/config';
import { WALLET_METAMASK, WALLET_ARKANE } from '@constants/global.constants';
import { STORAGE_WALLET } from '@constants/storage.constants';

const options = {
  clientId: 'DIGITALAX',
  // rpcUrl: 'https://kovan.infura.io/v3/YOUR-PROJECT-ID', //optional
  environment: 'production', //optional, production by default
  signMethod: 'POPUP', //optional, REDIRECT by default
  // bearerTokenProvider: () => 'obtained_bearer_token', //optional, default undefined
  //optional: you can set an identity provider to be used when authenticating
  // authenticationOptions: {
  //   idpHint: 'google'
  // },
  secretType: 'MATIC', //optional, ETHEREUM by default
};

export const setWeb3Provider = async () => {
  const WALLET = localStorage.getItem(STORAGE_WALLET);
  if (WALLET === WALLET_METAMASK) {
    const provider = isMetamaskInstalled() ? window.ethereum : config.DEFAULT_WEB3_URL;
    window.web3 = new Web3(provider);
    return;
  }
  if (WALLET === WALLET_ARKANE) {
    const provider = await Arkane.createArkaneProviderEngine(options);
<<<<<<< HEAD
    console.log(provider);
=======
    console.log('The arkane provider is');
>>>>>>> 9d2d61d6e5a7863ac6b656f2d30bd742c87ca6e1
    window.web3 = new Web3(provider);

    console.log(window.web3.eth.getAccounts());
    return;
  }
};
