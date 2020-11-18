import { createModule } from 'redux-modules';
import { List } from 'immutable';
import cloneDeep from 'lodash.clonedeep';

const DEFAULT_FIELDS = List([
  {
    materialId: '1',
    imgUrl: './images/material-1.png',
    textForImg: '#PN8798',
    name: 'Material ABC...',
    address: '0xe45efe0ca012xe45efe0cc13e',
    price: 2.1,
    estimate: 231,
  },
  {
    materialId: '2',
    imgUrl: './images/material-1.png',
    textForImg: '#PN8798',
    name: 'Material #PN8798',
    address: '0xe45efe0cc13eb9',
    price: 10.2,
    estimate: 192,
  },
  {
    materialId: '3',
    imgUrl: './images/material-1.png',
    textForImg: '#PN8798',
    name: 'Material ABC...',
    address: 'e45efe0ca012xe45efe',
    price: 3.5,
    estimate: 99,
  },
  {
    materialId: '4',
    imgUrl: './images/material-1.png',
    textForImg: '#PN8798',
    name: 'Material #PN8798',
    address: '0xe45efe0cc13eb92',
    price: 2.1,
    estimate: 107,
  },
  {
    materialId: '5',
    imgUrl: './images/material-2.png',
    textForImg: '#M087EE',
    name: 'Material ABC...',
    address: '0xe45efe0ca012xe45efe0cc13e',
    price: 2.1,
    estimate: 231,
  },
  {
    materialId: '6',
    imgUrl: './images/material-1.png',
    textForImg: '#PN8798',
    name: 'Material #PN8798',
    address: '0xe45efe0cc13eb9',
    price: 10.2,
    estimate: 192,
  },
  {
    materialId: '7',
    imgUrl: './images/material-2.png',
    textForImg: '#M087EE',
    name: 'Material ABC...',
    address: 'e45efe0ca012xe45efe',
    price: 3.5,
    estimate: 99,
  },
  {
    materialId: '8',
    imgUrl: './images/material-1.png',
    textForImg: '#PN8798',
    name: 'Material #PN8798',
    address: '0xe45efe0cc13eb92',
    price: 2.1,
    estimate: 107,
  },
]);


export default createModule({
  name: 'materials',
  initialState: cloneDeep(DEFAULT_FIELDS),
});
