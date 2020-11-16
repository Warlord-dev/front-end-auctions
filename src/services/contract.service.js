
import Web3 from 'web3';

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
