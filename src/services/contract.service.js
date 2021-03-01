import Web3 from 'web3';
import { isMetamaskInstalled } from '@services/metamask.service';
import config from '@utils/config';
import { providers as EthersProviders } from 'ethers';
import { create as createUniswapPair } from '@helpers/uniswap.helpers';

export const getMarketplaceContract = async (ContractAddress) => {
  const web3 = new Web3(window.ethereum);
  const jsonInterface = [
    {
      inputs: [
        { internalType: 'uint256', name: '_garmentCollectionId', type: 'uint256' },
        { internalType: 'bool', name: '_payWithMona', type: 'bool' },
      ],
      name: 'buyOffer',
      outputs: [],
      stateMutability: 'payable',
      type: 'function',
    },
  ];

  const contract = await new web3.eth.Contract(jsonInterface, ContractAddress);

  return contract;
};

export const getMonaTokenContract = async (ContractAddress) => {
  const web3 = new Web3(window.ethereum);
  const jsonInterface = [
    {
      inputs: [
        { internalType: 'string', name: 'symbol_', type: 'string' },
        { internalType: 'string', name: 'name_', type: 'string' },
        { internalType: 'uint8', name: 'decimals_', type: 'uint8' },
        {
          internalType: 'contract DigitalaxAccessControls',
          name: 'accessControls_',
          type: 'address',
        },
        { internalType: 'address', name: 'tokenOwner', type: 'address' },
        { internalType: 'uint256', name: 'initialSupply', type: 'uint256' },
      ],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
      ],
      name: 'Approval',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'cap',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'bool',
          name: 'freezeCap',
          type: 'bool',
        },
      ],
      name: 'CapUpdated',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'from',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
      ],
      name: 'Transfer',
      type: 'event',
    },
    {
      inputs: [],
      name: 'accessControls',
      outputs: [{ internalType: 'contract DigitalaxAccessControls', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'tokenOwner', type: 'address' },
        { internalType: 'address', name: 'spender', type: 'address' },
      ],
      name: 'allowance',
      outputs: [{ internalType: 'uint256', name: 'remaining', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'spender', type: 'address' },
        { internalType: 'uint256', name: 'tokens', type: 'uint256' },
      ],
      name: 'approve',
      outputs: [{ internalType: 'bool', name: 'success', type: 'bool' }],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'availableToMint',
      outputs: [{ internalType: 'uint256', name: 'tokens', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'address', name: 'tokenOwner', type: 'address' }],
      name: 'balanceOf',
      outputs: [{ internalType: 'uint256', name: 'balance', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'uint256', name: 'tokens', type: 'uint256' }],
      name: 'burn',
      outputs: [{ internalType: 'bool', name: 'success', type: 'bool' }],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'cap',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'decimals',
      outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'freezeCap',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'tokenOwner', type: 'address' },
        { internalType: 'uint256', name: 'tokens', type: 'uint256' },
      ],
      name: 'mint',
      outputs: [{ internalType: 'bool', name: 'success', type: 'bool' }],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'name',
      outputs: [{ internalType: 'string', name: '', type: 'string' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'uint256', name: '_cap', type: 'uint256' },
        { internalType: 'bool', name: '_freezeCap', type: 'bool' },
      ],
      name: 'setCap',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'symbol',
      outputs: [{ internalType: 'string', name: '', type: 'string' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'totalSupply',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'to', type: 'address' },
        { internalType: 'uint256', name: 'tokens', type: 'uint256' },
      ],
      name: 'transfer',
      outputs: [{ internalType: 'bool', name: 'success', type: 'bool' }],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'from', type: 'address' },
        { internalType: 'address', name: 'to', type: 'address' },
        { internalType: 'uint256', name: 'tokens', type: 'uint256' },
      ],
      name: 'transferFrom',
      outputs: [{ internalType: 'bool', name: 'success', type: 'bool' }],
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ];

  const contract = await new web3.eth.Contract(jsonInterface, ContractAddress);

  return contract;
};

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

  const contract = await new web3.eth.Contract(jsonInterface, auctionContractAddress);

  return contract;
};

export const getRewardContract = async (contractAddress) => {
  const web3 = new Web3(isMetamaskInstalled() ? window.ethereum : config.DEFAULT_WEB3_URL);

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
    '6e9690131f584ee0a8b445ebb4740f8b'
  );

  const monaToken = createUniswapPair(contractAddress, provider);

  const price = await monaToken.getPrice();

  return price;
};
