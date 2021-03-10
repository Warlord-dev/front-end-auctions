import Web3 from 'web3';
import { getWeb3Provider } from '@services/web3-provider.service';

export const isMetamaskInstalled = () => typeof window.ethereum !== 'undefined';

export const handleSignMessage = async ({ publicAddress, signMsg }) => {
  return new Promise((resolve, reject) =>
    getWeb3Provider()
      .then((provider) => {
        const web3 = new Web3(provider);
        web3.eth.personal.sign(signMsg, publicAddress, (err, signature) => {
          if (err) return reject(err);
          return resolve({ publicAddress, signature });
        });
      })
      .catch((err) => {
        return reject(err);
      })
  );
};
