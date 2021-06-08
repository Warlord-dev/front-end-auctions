import ERC721ABIv0 from '@constants/erc721_abi_V0.json';
import ERC721ABIv1 from '@constants/erc721_abi_V1.json';
import ERC721ABIv2 from '@constants/erc721_abi_V2.json';
import childTunnelAbi from '@constants/child_tunnel_abi.json';
import rootTunnelV2Abi from '@constants/root_tunnel_abi_v2.json';
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
  getChildTunnelAddressV2ByChainId,
  getRootTunnelAddressV2ByChainId,
  getMarketplaceContractAddressByChainId,
} from './network.service';

import DigiMaterialV2ABI from '../constants/digi_material_v2_abi.json';
import DigiRootTunnelABI from '../constants/digi_root_tunnel_abi.json';
import ERC20ABI from '../constants/erc20_abi.json';
import UpgraderABI from '../constants/upgrader_abi.json';
import MarketplaceV2ABI from '../constants/marketplace_v2_abi.json';
import { toast } from 'react-toastify';

export const getMarketplaceContract = async (chainId) => {
  const address = getMarketplaceContractAddressByChainId(chainId);
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

  const contract = await new window.web3.eth.Contract(
    chainId === 1 || chainId === 4 ? jsonInterface : MarketplaceV2ABI,
    address,
  );

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
  if (!window.web3?.eth) return null;
  const contract = await new window.web3.eth.Contract(jsonInterface, ContractAddress);

  return contract;
};

export const getDTXContract = (isMainnet) => {
  const address = getDTXAddressByChainId(isMainnet ? '0x1' : '0x5');
  if (!window.web3?.eth) return null;
  const contract = new window.web3.eth.Contract(ERC721ABIv0, address);

  return contract;
};

export const getDTXMaticContract = (isMainnet) => {
  // const web3 = new Web3(isMainnet ? config.WEB3_URLS.MATIC : config.WEB3_URLS.MUMBAI);
  const address = getDTXAddressByChainId(isMainnet ? '0x89' : '0x13881');
  // const web3 = new Web3(config.WEB3_URLS.MUMBAI);
  // const contract = new web3.eth.Contract(ERC721ABIv2, address);
  if (!window.web3?.eth) return null;
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
      type: 'constructor',
      stateMutability: 'nonpayable',
      inputs: [
        {
          type: 'address',
          name: '_accessControls',
          internalType: 'contract DigitalaxAccessControls',
        },
        { type: 'address', name: '_garmentNft', internalType: 'contract IDigitalaxGarmentNFT' },
        { type: 'address', name: '_oracle', internalType: 'contract IDigitalaxMonaOracle' },
        { type: 'address', name: '_monaToken', internalType: 'contract IERC20' },
        { type: 'address', name: '_platformFeeRecipient', internalType: 'address payable' },
        { type: 'address', name: '_trustedForwarder', internalType: 'address' },
      ],
    },
    {
      type: 'event',
      name: 'AuctionCancelled',
      inputs: [{ type: 'uint256', name: 'garmentTokenId', internalType: 'uint256', indexed: true }],
      anonymous: false,
    },
    {
      type: 'event',
      name: 'AuctionCreated',
      inputs: [{ type: 'uint256', name: 'garmentTokenId', internalType: 'uint256', indexed: true }],
      anonymous: false,
    },
    {
      type: 'event',
      name: 'AuctionResulted',
      inputs: [
        { type: 'uint256', name: 'garmentTokenId', internalType: 'uint256', indexed: true },
        { type: 'address', name: 'winner', internalType: 'address', indexed: true },
        { type: 'uint256', name: 'winningBid', internalType: 'uint256', indexed: false },
      ],
      anonymous: false,
    },
    {
      type: 'event',
      name: 'BidPlaced',
      inputs: [
        { type: 'uint256', name: 'garmentTokenId', internalType: 'uint256', indexed: true },
        { type: 'address', name: 'bidder', internalType: 'address', indexed: true },
        { type: 'uint256', name: 'bid', internalType: 'uint256', indexed: false },
      ],
      anonymous: false,
    },
    {
      type: 'event',
      name: 'BidRefunded',
      inputs: [
        { type: 'address', name: 'bidder', internalType: 'address', indexed: true },
        { type: 'uint256', name: 'bid', internalType: 'uint256', indexed: false },
      ],
      anonymous: false,
    },
    {
      type: 'event',
      name: 'BidWithdrawn',
      inputs: [
        { type: 'uint256', name: 'garmentTokenId', internalType: 'uint256', indexed: true },
        { type: 'address', name: 'bidder', internalType: 'address', indexed: true },
        { type: 'uint256', name: 'bid', internalType: 'uint256', indexed: false },
      ],
      anonymous: false,
    },
    { type: 'event', name: 'DigitalaxAuctionContractDeployed', inputs: [], anonymous: false },
    {
      type: 'event',
      name: 'PauseToggled',
      inputs: [{ type: 'bool', name: 'isPaused', internalType: 'bool', indexed: false }],
      anonymous: false,
    },
    {
      type: 'event',
      name: 'UpdateAccessControls',
      inputs: [{ type: 'address', name: 'accessControls', internalType: 'address', indexed: true }],
      anonymous: false,
    },
    {
      type: 'event',
      name: 'UpdateAuctionEndTime',
      inputs: [
        { type: 'uint256', name: 'garmentTokenId', internalType: 'uint256', indexed: true },
        { type: 'uint256', name: 'endTime', internalType: 'uint256', indexed: false },
      ],
      anonymous: false,
    },
    {
      type: 'event',
      name: 'UpdateAuctionReservePrice',
      inputs: [
        { type: 'uint256', name: 'garmentTokenId', internalType: 'uint256', indexed: true },
        { type: 'uint256', name: 'reservePrice', internalType: 'uint256', indexed: false },
      ],
      anonymous: false,
    },
    {
      type: 'event',
      name: 'UpdateAuctionStartTime',
      inputs: [
        { type: 'uint256', name: 'garmentTokenId', internalType: 'uint256', indexed: true },
        { type: 'uint256', name: 'startTime', internalType: 'uint256', indexed: false },
      ],
      anonymous: false,
    },
    {
      type: 'event',
      name: 'UpdateBidWithdrawalLockTime',
      inputs: [
        { type: 'uint256', name: 'bidWithdrawalLockTime', internalType: 'uint256', indexed: false },
      ],
      anonymous: false,
    },
    {
      type: 'event',
      name: 'UpdateMinBidIncrement',
      inputs: [
        { type: 'uint256', name: 'minBidIncrement', internalType: 'uint256', indexed: false },
      ],
      anonymous: false,
    },
    {
      type: 'event',
      name: 'UpdateOracle',
      inputs: [{ type: 'address', name: 'oracle', internalType: 'address', indexed: true }],
      anonymous: false,
    },
    {
      type: 'event',
      name: 'UpdatePlatformFee',
      inputs: [{ type: 'uint256', name: 'platformFee', internalType: 'uint256', indexed: false }],
      anonymous: false,
    },
    {
      type: 'event',
      name: 'UpdatePlatformFeeRecipient',
      inputs: [
        {
          type: 'address',
          name: 'platformFeeRecipient',
          internalType: 'address payable',
          indexed: false,
        },
      ],
      anonymous: false,
    },
    {
      type: 'function',
      stateMutability: 'view',
      outputs: [{ type: 'address', name: '', internalType: 'contract DigitalaxAccessControls' }],
      name: 'accessControls',
      inputs: [],
    },
    {
      type: 'function',
      stateMutability: 'view',
      outputs: [
        { type: 'uint256', name: 'reservePrice', internalType: 'uint256' },
        { type: 'uint256', name: 'startTime', internalType: 'uint256' },
        { type: 'uint256', name: 'endTime', internalType: 'uint256' },
        { type: 'bool', name: 'resulted', internalType: 'bool' },
        { type: 'bool', name: 'isMonaPayment', internalType: 'bool' },
      ],
      name: 'auctions',
      inputs: [{ type: 'uint256', name: '', internalType: 'uint256' }],
    },
    {
      type: 'function',
      stateMutability: 'view',
      outputs: [{ type: 'uint256', name: '', internalType: 'uint256' }],
      name: 'bidWithdrawalLockTime',
      inputs: [],
    },
    {
      type: 'function',
      stateMutability: 'nonpayable',
      outputs: [],
      name: 'cancelAuction',
      inputs: [{ type: 'uint256', name: '_garmentTokenId', internalType: 'uint256' }],
    },
    {
      type: 'function',
      stateMutability: 'nonpayable',
      outputs: [],
      name: 'createAuction',
      inputs: [
        { type: 'uint256', name: '_garmentTokenId', internalType: 'uint256' },
        { type: 'uint256', name: '_reservePrice', internalType: 'uint256' },
        { type: 'uint256', name: '_startTimestamp', internalType: 'uint256' },
        { type: 'uint256', name: '_endTimestamp', internalType: 'uint256' },
        { type: 'bool', name: '_isMonaPayment', internalType: 'bool' },
      ],
    },
    {
      type: 'function',
      stateMutability: 'nonpayable',
      outputs: [],
      name: 'createAuctionOnBehalfOfOwner',
      inputs: [
        { type: 'uint256', name: '_garmentTokenId', internalType: 'uint256' },
        { type: 'uint256', name: '_reservePrice', internalType: 'uint256' },
        { type: 'uint256', name: '_startTimestamp', internalType: 'uint256' },
        { type: 'uint256', name: '_endTimestamp', internalType: 'uint256' },
        { type: 'bool', name: '_isMonaPayment', internalType: 'bool' },
      ],
    },
    {
      type: 'function',
      stateMutability: 'view',
      outputs: [{ type: 'address', name: '', internalType: 'contract IDigitalaxGarmentNFT' }],
      name: 'garmentNft',
      inputs: [],
    },
    {
      type: 'function',
      stateMutability: 'view',
      outputs: [
        { type: 'uint256', name: '_reservePrice', internalType: 'uint256' },
        { type: 'uint256', name: '_startTime', internalType: 'uint256' },
        { type: 'uint256', name: '_endTime', internalType: 'uint256' },
        { type: 'bool', name: '_resulted', internalType: 'bool' },
        { type: 'bool', name: '_isMonaPayment', internalType: 'bool' },
      ],
      name: 'getAuction',
      inputs: [{ type: 'uint256', name: '_garmentTokenId', internalType: 'uint256' }],
    },
    {
      type: 'function',
      stateMutability: 'view',
      outputs: [
        { type: 'address', name: '_bidder', internalType: 'address payable' },
        { type: 'uint256', name: '_bid', internalType: 'uint256' },
        { type: 'uint256', name: '_lastBidTime', internalType: 'uint256' },
      ],
      name: 'getHighestBidder',
      inputs: [{ type: 'uint256', name: '_garmentTokenId', internalType: 'uint256' }],
    },
    {
      type: 'function',
      stateMutability: 'view',
      outputs: [
        { type: 'address', name: 'bidder', internalType: 'address payable' },
        { type: 'uint256', name: 'bid', internalType: 'uint256' },
        { type: 'uint256', name: 'lastBidTime', internalType: 'uint256' },
      ],
      name: 'highestBids',
      inputs: [{ type: 'uint256', name: '', internalType: 'uint256' }],
    },
    {
      type: 'function',
      stateMutability: 'view',
      outputs: [{ type: 'bool', name: '', internalType: 'bool' }],
      name: 'isPaused',
      inputs: [],
    },
    {
      type: 'function',
      stateMutability: 'view',
      outputs: [{ type: 'bool', name: '', internalType: 'bool' }],
      name: 'isTrustedForwarder',
      inputs: [{ type: 'address', name: 'forwarder', internalType: 'address' }],
    },
    {
      type: 'function',
      stateMutability: 'view',
      outputs: [{ type: 'uint256', name: '', internalType: 'uint256' }],
      name: 'minBidIncrement',
      inputs: [],
    },
    {
      type: 'function',
      stateMutability: 'view',
      outputs: [{ type: 'address', name: '', internalType: 'contract IERC20' }],
      name: 'monaToken',
      inputs: [],
    },
    {
      type: 'function',
      stateMutability: 'view',
      outputs: [{ type: 'address', name: '', internalType: 'contract IDigitalaxMonaOracle' }],
      name: 'oracle',
      inputs: [],
    },
    {
      type: 'function',
      stateMutability: 'payable',
      outputs: [],
      name: 'placeBid',
      inputs: [
        { type: 'uint256', name: '_garmentTokenId', internalType: 'uint256' },
        { type: 'uint256', name: '_monaAmount', internalType: 'uint256' },
      ],
    },
    {
      type: 'function',
      stateMutability: 'view',
      outputs: [{ type: 'uint256', name: '', internalType: 'uint256' }],
      name: 'platformFee',
      inputs: [],
    },
    {
      type: 'function',
      stateMutability: 'view',
      outputs: [{ type: 'address', name: '', internalType: 'address payable' }],
      name: 'platformFeeRecipient',
      inputs: [],
    },
    {
      type: 'function',
      stateMutability: 'nonpayable',
      outputs: [],
      name: 'reclaimERC20',
      inputs: [{ type: 'address', name: '_tokenContract', internalType: 'address' }],
    },
    {
      type: 'function',
      stateMutability: 'nonpayable',
      outputs: [],
      name: 'reclaimETH',
      inputs: [],
    },
    {
      type: 'function',
      stateMutability: 'nonpayable',
      outputs: [],
      name: 'resultAuction',
      inputs: [{ type: 'uint256', name: '_garmentTokenId', internalType: 'uint256' }],
    },
    {
      type: 'function',
      stateMutability: 'nonpayable',
      outputs: [],
      name: 'setTrustedForwarder',
      inputs: [{ type: 'address', name: '_trustedForwarder', internalType: 'address' }],
    },
    {
      type: 'function',
      stateMutability: 'nonpayable',
      outputs: [],
      name: 'toggleIsPaused',
      inputs: [],
    },
    {
      type: 'function',
      stateMutability: 'view',
      outputs: [{ type: 'address', name: '', internalType: 'address' }],
      name: 'trustedForwarder',
      inputs: [],
    },
    {
      type: 'function',
      stateMutability: 'nonpayable',
      outputs: [],
      name: 'updateAccessControls',
      inputs: [
        {
          type: 'address',
          name: '_accessControls',
          internalType: 'contract DigitalaxAccessControls',
        },
      ],
    },
    {
      type: 'function',
      stateMutability: 'nonpayable',
      outputs: [],
      name: 'updateAuctionEndTime',
      inputs: [
        { type: 'uint256', name: '_garmentTokenId', internalType: 'uint256' },
        { type: 'uint256', name: '_endTimestamp', internalType: 'uint256' },
      ],
    },
    {
      type: 'function',
      stateMutability: 'nonpayable',
      outputs: [],
      name: 'updateAuctionReservePrice',
      inputs: [
        { type: 'uint256', name: '_garmentTokenId', internalType: 'uint256' },
        { type: 'uint256', name: '_reservePrice', internalType: 'uint256' },
      ],
    },
    {
      type: 'function',
      stateMutability: 'nonpayable',
      outputs: [],
      name: 'updateAuctionStartTime',
      inputs: [
        { type: 'uint256', name: '_garmentTokenId', internalType: 'uint256' },
        { type: 'uint256', name: '_startTime', internalType: 'uint256' },
      ],
    },
    {
      type: 'function',
      stateMutability: 'nonpayable',
      outputs: [],
      name: 'updateBidWithdrawalLockTime',
      inputs: [{ type: 'uint256', name: '_bidWithdrawalLockTime', internalType: 'uint256' }],
    },
    {
      type: 'function',
      stateMutability: 'nonpayable',
      outputs: [],
      name: 'updateMinBidIncrement',
      inputs: [{ type: 'uint256', name: '_minBidIncrement', internalType: 'uint256' }],
    },
    {
      type: 'function',
      stateMutability: 'nonpayable',
      outputs: [],
      name: 'updateOracle',
      inputs: [{ type: 'address', name: '_oracle', internalType: 'contract IDigitalaxMonaOracle' }],
    },
    {
      type: 'function',
      stateMutability: 'nonpayable',
      outputs: [],
      name: 'updatePlatformFee',
      inputs: [{ type: 'uint256', name: '_platformFee', internalType: 'uint256' }],
    },
    {
      type: 'function',
      stateMutability: 'nonpayable',
      outputs: [],
      name: 'updatePlatformFeeRecipient',
      inputs: [{ type: 'address', name: '_platformFeeRecipient', internalType: 'address payable' }],
    },
    {
      type: 'function',
      stateMutability: 'view',
      outputs: [{ type: 'string', name: '', internalType: 'string' }],
      name: 'versionRecipient',
      inputs: [],
    },
    {
      type: 'function',
      stateMutability: 'nonpayable',
      outputs: [],
      name: 'withdrawBid',
      inputs: [{ type: 'uint256', name: '_garmentTokenId', internalType: 'uint256' }],
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

export const getChildTunnelContract = (chainId) => {
  const address = getChildTunnelAddressV2ByChainId(chainId);
  if (!window.web3?.eth) return null;
  const contract = new window.web3.eth.Contract(childTunnelAbi, address);
  return contract;
};

export const getRootTunnelV2Contract = (chainId) => {
  const address = getRootTunnelAddressV2ByChainId(chainId);
  if (!window.web3?.eth) return null;
  const contract = new window.web3.eth.Contract(rootTunnelV2Abi, address);
  return contract;
};
