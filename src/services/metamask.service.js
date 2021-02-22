import Web3 from 'web3';

export const isMetamaskInstalled = () => typeof window.ethereum !== 'undefined';

export const handleSignMessage = ({ publicAddress, signMsg }) => {
  const web3 = new Web3(window.ethereum);

  return new Promise((resolve, reject) =>
    web3.eth.personal.sign(signMsg, publicAddress, (err, signature) => {
      if (err) return reject(err);
      return resolve({ publicAddress, signature });
    })
  );
};
