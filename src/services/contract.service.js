import ERC721ABIv0 from '@constants/erc721_abi_V0.json';
import ERC721ABIv1 from '@constants/erc721_abi_V1.json';
import ERC721ABIv2 from '@constants/erc721_abi_V2.json';
import { providers as EthersProviders } from 'ethers';
import { create as createUniswapPair } from '@helpers/uniswap.helpers';
import { abi as IUniswapV2Router02ABI } from '@uniswap/v2-periphery/build/IUniswapV2Router02.json';
import Web3 from 'web3';
import config from '@utils/config';
import {
  getDigiMaterialV2AddressByChainId,
  getDigiRootTunnelAddressByChainId,
  getDTXAddressByChainId,
  getDTXV1AddressByChainId,
  getUSDTAddressByChainId,
  getUpgraderAddressByChainId,
} from './network.service';

import DigiMaterialV2ABI from '../constants/digi_material_v2_abi.json';
import DigiRootTunnelABI from '../constants/digi_root_tunnel_abi.json';
import ERC20ABI from '../constants/erc20_abi.json';
import UpgraderABI from '../constants/upgrader_abi.json';

export const getMarketplaceContract = async (ContractAddress) => {
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
    {
      inputs: [],
      name: 'lastOracleQuote',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
  ];

  const contract = await new window.web3.eth.Contract(jsonInterface, ContractAddress);

  return contract;
};

export const getMonaTokenContract = async (ContractAddress) => {
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

  const contract = await new window.web3.eth.Contract(jsonInterface, ContractAddress);

  return contract;
};

export const getDTXContract = (isMainnet) => {
  const provider = new Web3.providers.HttpProvider(
    isMainnet ? config.DEFAULT_WEB3_URL : config.WEB3_URLS.GOERLI,
  );
  const web3 = new Web3(provider);
  const address = getDTXAddressByChainId(isMainnet ? '0x1' : '0x5');
  const contract = new web3.eth.Contract(ERC721ABIv0, address);

  return contract;
};

export const getDTXMaticContract = (isMainnet) => {
  // const web3 = new Web3(isMainnet ? config.WEB3_URLS.MATIC : config.WEB3_URLS.MUMBAI);
  const address = getDTXAddressByChainId(isMainnet ? '0x89' : '0x13881');
  // const web3 = new Web3(config.WEB3_URLS.MUMBAI);
  // const contract = new web3.eth.Contract(ERC721ABIv2, address);
  const contract = new window.web3.eth.Contract(ERC721ABIv2, address);

  return contract;
};

export const getDigiMaterialV2Contract = (isMainnet) => {
  const provider = new Web3.providers.HttpProvider(
    isMainnet ? config.WEB3_URLS.MATIC : config.WEB3_URLS.MUMBAI,
  );
  const web3 = new Web3(provider);
  const address = getDigiMaterialV2AddressByChainId(isMainnet ? '0x89' : '0x13881');
  const contract = new web3.eth.Contract(DigiMaterialV2ABI, address);

  return contract;
};

export const getDitiRootTunnelContract = (isMainnet) => {
  const address = getDigiRootTunnelAddressByChainId(isMainnet ? '0x1' : '0x5');
  if (window.web3) {
    const contract = new window.web3.eth.Contract(DigiRootTunnelABI, address);
    return contract;
  }
};

export const getDTXMaticV1Contract = async (isMainnet) => {
  // const provider = new Web3.providers.HttpProvider(
  //   isMainnet ? config.WEB3_URLS.MATIC : config.WEB3_URLS.MUMBAI,
  // );
  // const web3 = new Web3(provider);
  const address = getDTXV1AddressByChainId(isMainnet ? '0x89' : '0x13881');
  const contract = new window.web3.eth.Contract(ERC721ABIv1, address);

  return contract;
};

export const getUpgraderMaticContract = async (isMainnet) => {
  const provider = new Web3.providers.HttpProvider(
    isMainnet ? config.WEB3_URLS.MATIC : config.WEB3_URLS.MUMBAI,
  );
  const web3 = new Web3(window.ethereum);
  const address = getUpgraderAddressByChainId(isMainnet ? '0x89' : '0x13881');
  const contract = new web3.eth.Contract(UpgraderABI, address);

  return contract;
};

export const getUSDTContract = async (chainId) => {
  const web3 = new Web3(window.ethereum);
  const address = await getUSDTAddressByChainId(chainId);
  const contract = await new web3.eth.Contract(ERC20ABI, address);

  return contract;
};

export const getContract = async (auctionContractAddress) => {
  const jsonInterface = [
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '_garmentTokenId',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '_monaAmount',
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

  const contract = await new window.web3.eth.Contract(jsonInterface, auctionContractAddress);

  return contract;
};

export const getRewardContract = async (contractAddress) => {
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

  const contract = await new window.web3.eth.Contract(jsonInterface, contractAddress);

  return contract;
};

export const getQuickSwapRouterContract = async () => {
  // const web3 = new Web3(isMetamaskInstalled() ? window.ethereum : config.DEFAULT_WEB3_URL);

  const contract = await new window.web3.eth.Contract(
    IUniswapV2Router02ABI,
    config.QUICKSWAP_ROUTER,
  );

  return contract;
};

export const getTokenPrice = async (contractAddress) => {
  if (!contractAddress) return 0;

  const provider = new EthersProviders.InfuraProvider(
    'homestead',
    '6e9690131f584ee0a8b445ebb4740f8b',
  );

  const monaToken = createUniswapPair(contractAddress, provider);
  const price = await monaToken.getPrice();

  return price;
};

export const getTokenPriceMatic = async () =>
  new Promise(async (resolve) => {
    try {
      const jsonInterface = [
        {
          inputs: [],
          name: 'lastOracleQuote',
          outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
          stateMutability: 'view',
          type: 'function',
        },
      ];
      const web3 = new Web3(new Web3.providers.HttpProvider('https://rpc-mainnet.matic.network/'));
      const contract = await new web3.eth.Contract(
        jsonInterface,
        config.DIGITAL_MARKETPLACE_ADDRESSES.matic,
      );

      const value = await contract.methods.lastOracleQuote().call();
      resolve(value);
    } catch {
      resolve(1);
    }
  });
