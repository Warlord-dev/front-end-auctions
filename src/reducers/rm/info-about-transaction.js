import { createModule } from 'redux-modules';
import { List } from 'immutable';
import cloneDeep from 'lodash.clonedeep';

const DEFAULT_FIELDS = List([
  {
    clothesId: '1',
    priceEth: 13.5,
    date: '14 hours ago',
    sendersPhoto: './images/Nessa-Verve-large.png',
    sendersAddress: '0xe45efe0cc13eb90xe45efe0c1c13eb92',
    recipientPhoto: './images/avatar.svg',
    recipientAddress: '0xe45efe0cc13eb90xe45efe0cc13eb9',
  },
  {
    clothesId: '1',
    priceEth: 8,
    date: '9 hours ago',
    sendersPhoto: './images/Chamila-Hetti.png',
    sendersAddress: '012xe45ef3e0cc13e0xe45efe0cc13eb9',
    recipientPhoto: './images/avatar.svg',
    recipientAddress: '0xe05efe0cc13e670xe45efe0cc13eb9',
  },
  {
    clothesId: '1',
    priceEth: 10.6,
    date: '2 hours ago',
    sendersPhoto: './images/Kris-Seed.png',
    sendersAddress: '0xe45efe0cc13eb90xe45efe0cc13eb9',
    recipientPhoto: './images/avatar.svg',
    recipientAddress: '0xe45efe0cc13eb90xe45efe0cc13eb9',
  },
  {
    clothesId: '1',
    priceEth: 1.5,
    date: '5 days ago',
    sendersPhoto: './images/Sergion-Neffortunotti.png',
    sendersAddress: '39e45efe0cc13eb90xe45efe0cc13eb9',
    recipientPhoto: './images/avatar.svg',
    recipientAddress: '0xe05efe0cc13e670xe45efe0cc13eb9',
  },
  {
    clothesId: '2',
    priceEth: 13.5,
    date: '9 days ago',
    sendersPhoto: './images/avatar-2.png',
    sendersAddress: '8xe45efe0cc13eb90xe45efe0cc13eb9',
    recipientPhoto: './images/avatar.svg',
    recipientAddress: '0xe45efe0cc13eb90xe45efe0cc13eb9',
  },
  {
    clothesId: '1',
    priceEth: 13.5,
    date: '14 hours ago',
    sendersPhoto: './images/Nessa-Verve-large.png',
    sendersAddress: '0xe45efe0cc13eb90xe45efe0cc13eb92',
    recipientPhoto: './images/avatar.svg',
    recipientAddress: '0xe45efe0cc13eb90xe45efe0cc13eb9',
  },
  {
    clothesId: '1',
    priceEth: 8,
    date: '9 hours ago',
    sendersPhoto: './images/Chamila-Hetti.png',
    sendersAddress: '012xe45efe0cc13e0xe45efe0cc13eb9',
    recipientPhoto: './images/avatar.svg',
    recipientAddress: '0xe05efe0cc13e670xe45efe0cc13eb9',
  },
  {
    clothesId: '2',
    priceEth: 10.6,
    date: '2 hours ago',
    sendersPhoto: './images/Kris-Seed.png',
    sendersAddress: '0xe45efe0cc13eb90xe45efe0cc13eb9',
    recipientPhoto: './images/avatar.svg',
    recipientAddress: '0xe45efe0cc13eb90xe45efe0cc13eb9',
  },
  {
    clothesId: '2',
    priceEth: 1.5,
    date: '5 days ago',
    sendersPhoto: './images/Sergion-Neffortunotti.png',
    sendersAddress: '39e45efe0cc13eb90xe45efe0cc13eb9',
    recipientPhoto: './images/avatar.svg',
    recipientAddress: '0xe05efe0cc13e670xe45efe0cc13eb9',
  },
]);


export default createModule({
  name: 'infoAboutTransaction',
  initialState: cloneDeep(DEFAULT_FIELDS),
});
