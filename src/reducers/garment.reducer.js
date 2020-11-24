import { createModule } from 'redux-modules';
import cloneDeep from 'lodash.clonedeep';
import { Map, List } from 'immutable';
import TransformModules from '../utils/transform-modules';

const DEFAULT_FIELDS = Map({
  garmentsById: Map({}),
  garmentsReceiveByName: List([
    {
      name: 'Bitcoin For Pizza',
      receive: '3 X PNG renders different views, FBX file, GIF',
    },
    {
      name: 'HODL King',
      receive: '3 x PNG renders different views, FBX file, MP4 video.',
    },
    {
      name: 'Decentralised Dress',
      receive: '3 X PNG renders different views, FBX file, GIF',
    },
    {
      name: 'DAI DAI DAI',
      receive: '3 X PNG renders different views, FBX file, GIF',
    },
    {
      name: 'The Puurse',
      receive: '3 X PNG renders different views, FBX file, GIF',
    },
    {
      name: 'DAO Out',
      receive: '3 X PNG renders different views, FBX file, GIF',
    },
    {
      name: 'When Lambo?',
      receive: '3 X PNG renders different views, FBX file, GIF',
    },
    {
      name: 'The Whale Hunter',
      receive: '3 X PNG renders different views, FBX file, GIF',
    },
    {
      name: 'Crypto Bitch',
      receive: '3 X PNG renders different views, FBX file, GIF',
    },
    {
      name: 'The Shitcoin Jacket',
      receive: '3 X PNG renders different views, FBX file, GIF',
    },
    {
      name: 'DeFi Summer (Male)',
      receive: '3 X PNG renders different views, FBX file, GIF',
    },
    {
      name: 'Design Title: DeFi Summer (Female)',
      receive: '3 X PNG renders different views, FBX file, GIF',
    },
    {
      name: 'Crypto Winter',
      receive: '3 x renders different views, FBX file, MP4 video.',
    },
    {
      name: 'Incognito',
      receive: '3 x renders different views, FBX file, MP4 video.',
    },
    {
      name: 'To the Moon',
      receive: '3 X PNG renders different views, FBX file, GIF',
    },
    {
      name: 'ICO Suit',
      receive: '3 X PNG renders different views, FBX file, GIF',
    },
    {
      name: 'DeFi Shoe',
      receive: '3 X PNG renders different views, FBX file, GIF',
    },
    {
      name: 'Lightning Network',
      receive: '3 X PNG renders different views, FBX file, GIF',
    },
  ]),
});

export default createModule({
  name: 'garment',
  initialState: cloneDeep(DEFAULT_FIELDS),
  transformations: cloneDeep(TransformModules(DEFAULT_FIELDS)),
});
