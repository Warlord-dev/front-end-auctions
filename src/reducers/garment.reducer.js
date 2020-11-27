import { createModule } from 'redux-modules';
import cloneDeep from 'lodash.clonedeep';
import { Map, List } from 'immutable';
import TransformModules from '../utils/transform-modules';

const DEFAULT_FIELDS = Map({
  garmentsById: Map({}),
  garmentsReceiveByName: List([
    {
      name: 'Bitcoin For Pizza',
      receive: '3 X PNG renders different views, FBX file, GIF, Child NFTs',
    },
    {
      name: 'HODL King',
      receive: '3 X PNG renders different views, FBX file, GIF, Child NFTs',
    },
    {
      name: 'Decentralised Dress',
      receive: '3 X PNG renders different views, FBX file, GIF, Child NFTs',
    },
    {
      name: 'DAI DAI DAI',
      receive: '3 X PNG renders different views, FBX file, GIF, Child NFTs',
    },
    {
      name: 'The Puurse',
      receive: '3 X PNG renders different views, FBX file, GIF, Child NFTs',
    },
    {
      name: 'DAO Out',
      receive: '3 X PNG renders different views, FBX file, GIF, Child NFTs',
    },
    {
      name: 'When Lambo?',
      receive: '3 X PNG renders different views, FBX file, GIF, Child NFTs',
    },
    {
      name: 'The Whale Hunter',
      receive: '3 X PNG renders different views, FBX file, GIF, Child NFTs',
    },
    {
      name: 'Crypto Bitch',
      receive: '3 X PNG renders different views, FBX file, GIF, Child NFTs',
    },
    {
      name: 'The Shitcoin Jacket',
      receive: '3 X PNG renders different views, FBX file, GIF, Child NFTs',
    },
    {
      name: 'DeFi Summer (Male)',
      receive: '3 X PNG renders different views, FBX file, GIF, Child NFTs',
    },
    {
      name: 'DeFi Summer (Female)',
      receive: '3 X PNG renders different views, FBX file, GIF, Child NFTs',
    },
    {
      name: 'Crypto Winter',
      receive: '3 X PNG renders different views, FBX file, GIF, Child NFTs',
    },
    {
      name: 'Incognito',
      receive: '3 X PNG renders different views, FBX file, GIF, Child NFTs',
    },
    {
      name: 'To the Moon',
      receive: '3 X PNG renders different views, FBX file, GIF, Child NFTs',
    },
    {
      name: 'ICO Suit',
      receive: '3 X PNG renders different views, FBX file, GIF, Child NFTs',
    },
    {
      name: 'DeFi Shoe',
      receive: '3 X PNG renders different views, FBX file, GIF, Child NFTs',
    },
    {
      name: 'Lightning Network',
      receive: '3 X PNG renders different views, FBX file, GIF, Child NFTs',
    },
  ]),
});

export default createModule({
  name: 'garment',
  initialState: cloneDeep(DEFAULT_FIELDS),
  transformations: cloneDeep(TransformModules(DEFAULT_FIELDS)),
});
