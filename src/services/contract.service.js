import Web3 from 'web3';
import { isMetamaskInstalled } from '@services/metamask.service';
import config from '@utils/config';
import { providers as EthersProviders } from 'ethers';
import { create as createUniswapPair } from '@helpers/uniswap.helpers';

export const getContract = async (auctionContractAddress) => {
  const web3 = new Web3(window.ethereum);
  const jsonInterface = [
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '_garmentTokenId',
          type: 'uint256',
        },
      ],
      name: 'placeBid',
      outputs: [],
      stateMutability: 'payable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '_garmentTokenId',
          type: 'uint256',
        },
      ],
      name: 'withdrawBid',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ];

  const contract = await new web3.eth.Contract(
    jsonInterface,
    auctionContractAddress,
  );

  return contract;
};

export const getRewardContract = async (contractAddress) => {
  const web3 = new Web3(
    isMetamaskInstalled() ? window.ethereum : config.DEFAULT_WEB3_URL,
  );

  const jsonInterface = [
    {
      inputs: [
        { internalType: 'uint256', name: '_from', type: 'uint256' },
        { internalType: 'uint256', name: '_to', type: 'uint256' },
      ],
      name: 'parentRewards',
      outputs: [{ internalType: 'uint256', name: 'rewards', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getMonaPerEth',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
  ];

  const contract = await new web3.eth.Contract(jsonInterface, contractAddress);

  return contract;
};

export const getTokenPrice = async (contractAddress) => {
  if (!contractAddress) return 0;

  const provider = new EthersProviders.InfuraProvider(
    'homestead',
    '1321075b381b462cae2a4697658c1f08',
  );

  const monaToken = createUniswapPair(contractAddress, provider);

  const price = await monaToken.getPrice();

  return price;
};
