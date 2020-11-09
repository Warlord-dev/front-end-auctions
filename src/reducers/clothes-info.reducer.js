import { createModule } from 'redux-modules';
import { List } from 'immutable';
import cloneDeep from 'lodash.clonedeep';

const DEFAULT_FIELDS = List([
  {
    clothesId: '1',
    clothesName: 'Little Black Dress',
    clothesHashAddress: '0xe45efe0cc13eb90xe45efe0cc13eb90xe45efe0cc2',
    clothesPhotos: List([
      {
        isMain: true,
        image: '/images/dress1.png',
      },
      {
        image: '/images/dress2.png',
      },
      {
        image: '/images/dress3.png',
      },
    ]),
    priceEth: 13.5,
    estimateApy: 127,
    expirationDate: 'November 12, 2020, 1:59 PM PST',
    chartImage: '/images/chart-small.png',
    youReceive: '1 x FBX (specs), 1 x JPEG (1080x1350)',
    listedDate: '9 hour ago',
    status: 'sold',
    valueChildNfts: 'ERC1155',
    valueApy: '',
    materialsId: List(['1', '2', '3', '4']),
    designerId: '1',
  },
  {
    clothesId: '2',
    clothesName: 'Ethereum Design Style 1',
    clothesHashAddress: '0xe45efeb90xe45we0c0cc13eb90xe45we0cc13eb90xe45we0cb9',
    clothesPhotos: List([
      {
        isMain: true,
        image: '/images/dress2.png',
      },
    ]),
    priceEth: 9.5,
    estimateApy: 78,
    expirationDate: 'November 12, 2020, 5:59 PM PST',
    chartImage: '/images/chart-small.png',
    youReceive: '2 x FBX (specs), 1 x JPEG (2680x1350)',
    listedDate: '9 hour ago',
    status: '',
    valueChildNfts: 'ERC1155',
    valueApy: '',
    materialsId: List(['4', '5', '1', '2', '3', '6']),
    designerId: '2',
  },
  {
    clothesId: '3',
    clothesName: 'Style 2.0',
    clothesHashAddress: '0xe45efe0cc13eb90xe245qe0cc13eb9',
    clothesPhotos: List([
      {
        isMain: true,
        image: '/images/dress3.png',
      },
    ]),
    priceEth: 21,
    estimateApy: 33,
    expirationDate: 'November 14, 2020, 04:59 PM PST',
    chartImage: '/images/chart-small.png',
    youReceive: '2 x FBX (specs), 2 x JPEG (780x1350)',
    listedDate: '',
    status: '',
    valueChildNfts: '',
    valueApy: '',
    materialsId: List(['1', '2', '4', '5']),
    designerId: '3',
  },
  {
    clothesId: '4',
    clothesName: 'Outlet',
    clothesHashAddress: '0xe45ef11e0cc13eb90xe245qe0cc13eb9',
    clothesPhotos: List([
      {
        isMain: true,
        image: '/images/dress4.png',
      },
    ]),
    priceEth: 16.5,
    estimateApy: 65,
    expirationDate: 'November 10, 2020, 06:59 PM PST',
    chartImage: '/images/chart-small.png',
    youReceive: '2 x FBX (specs), 1 x JPEG (1680x1350)',
    listedDate: '',
    status: '',
    valueChildNfts: '',
    valueApy: '',
    materialsId: List(['1', '2', '3', '4']),
    designerId: '4',
  },
  {
    clothesId: '5',
    clothesName: 'Ethereum Design Title 1',
    clothesHashAddress: '0xe45ef11e0cc13eb90xe2413eb9',
    clothesPhotos: List([
      {
        isMain: true,
        image: '/images/dress4.png',
      },
    ]),
    priceEth: 13.5,
    estimateApy: 127,
    expirationDate: 'November 15, 2020, 3:59 PM PST',
    chartImage: '/images/chart-small.png',
    youReceive: '1 x FBX (specs), 1 x JPEG (1000x1000)',
    listedDate: '',
    status: '',
    valueChildNfts: '',
    valueApy: '',
    materialsId: List(['1', '2', '3', '4']),
    designerId: '1',
  },
  {
    clothesId: '6',
    clothesName: 'Come grow with us',
    clothesHashAddress: '0xe450cc13eb90xe2413eb9',
    clothesPhotos: List([
      {
        isMain: true,
        image: '/images/dress2.png',
      },
    ]),
    priceEth: 9.5,
    estimateApy: 78,
    expirationDate: 'November 12, 2020, 2:59 PM PST',
    chartImage: '/images/chart-small.png',
    youReceive: '3 x FBX (specs), 1 x JPEG (1000x1000)',
    listedDate: '',
    status: '',
    valueChildNfts: '',
    valueApy: '',
    materialsId: List(['1', '2', '3', '4']),
    designerId: '2',
  },
  {
    clothesId: '7',
    clothesName: 'Dress Little Black ',
    clothesHashAddress: '0xe45efe0cc13eb90xe45efe0cc13eb9',
    clothesPhotos: List([
      {
        isMain: true,
        image: '/images/dress2.png',
      },
      {
        image: '/images/dress1.png',
      },
      {
        image: '/images/dress3.png',
      },
    ]),
    priceEth: 13.5,
    estimateApy: 127,
    expirationDate: 'November 11, 2020, 1:59 PM PST',
    chartImage: '/images/chart-small.png',
    youReceive: '1 x FBX (specs), 1 x JPEG (1080x1350)',
    listedDate: '9 hour ago',
    status: 'sold',
    valueChildNfts: 'ERC1155',
    valueApy: '',
    materialsId: List(['1', '2', '3', '4']),
    designerId: '1',
  },
  {
    clothesId: '8',
    clothesName: 'Dress',
    clothesHashAddress: '0xe45efe0cc13eb90xe45efe0cc13eb9',
    clothesPhotos: List([
      {
        isMain: true,
        image: '/images/dress1.png',
      },
      {
        image: '/images/dress2.png',
      },
      {
        image: '/images/dress3.png',
      },
    ]),
    priceEth: 13.5,
    estimateApy: 127,
    expirationDate: 'November 13, 2020, 1:59 PM PST',
    chartImage: '/images/chart-small.png',
    youReceive: '1 x FBX (specs), 1 x JPEG (1080x1350)',
    listedDate: '9 hour ago',
    status: 'sold',
    valueChildNfts: 'ERC1155',
    valueApy: '',
    materialsId: List(['1', '2', '3', '4']),
    designerId: '1',
  },
  {
    clothesId: '9',
    clothesName: 'Little Black Dress',
    clothesHashAddress: '0xe45efe0cc13eb90xe45efe0cc13eb9',
    clothesPhotos: List([
      {
        isMain: true,
        image: '/images/dress1.png',
      },
      {
        image: '/images/dress2.png',
      },
      {
        image: '/images/dress3.png',
      },
    ]),
    priceEth: 43.5,
    estimateApy: 127,
    expirationDate: 'November 12, 2020, 1:59 PM PST',
    chartImage: '/images/chart-small.png',
    youReceive: '1 x FBX (specs), 1 x JPEG (1080x1350)',
    listedDate: '9 hour ago',
    status: 'sold',
    valueChildNfts: 'ERC1155',
    valueApy: '',
    materialsId: List(['1', '2', '3', '4']),
    designerId: '1',
  },
]);


export default createModule({
  name: 'clothesInfo',
  initialState: cloneDeep(DEFAULT_FIELDS),
  transformations: {
    setValue: {
      reducer: (state, { payload }) => List([...payload.value]),
    },
  },
});
