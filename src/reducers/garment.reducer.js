import { createModule } from 'redux-modules';
import cloneDeep from 'lodash.clonedeep';
import { Map, List } from 'immutable';
import TransformModules from '../utils/transform-modules';

const DEFAULT_FIELDS = Map({
  garmentsById: Map({}),
  garmentsReceiveByName: List([
    {
      name: 'Bitcoin For Pizza',
      receive: 'You will receive: 3 x 4K renders different views, FBX file, MP4 video.',
    },
    {
      name: 'HODL King',
      receive: 'You will receive: 3 x PNG renders different views, FBX file, MP4 video.',
    },
    {
      name: 'Decentralised Dress',
      receive: 'You will receive: 3 x 4K renders different views, FBX file, MP4 video.',
    },
    {
      name: 'DAI DAI DAI',
      receive: 'You will receive: 3 x 4K renders different views, FBX file, MP4 video.',
    },
    {
      name: 'The Puurse',
      receive: 'You will receive: 3 x 4K renders different views, FBX file, MP4 video.',
    },
    {
      name: 'DAO Out',
      receive: 'You will receive: 3 x 4K renders different views, FBX file, MP4 video.',
    },
    {
      name: 'When Lambo?',
      receive: 'You will receive: 3 x 4K renders different views, FBX file, MP4 video.',
    },
    {
      name: 'The Whale Hunter',
      receive: 'You will receive: 3 x 4K renders different views, FBX file, MP4 video.',
    },
    {
      name: 'Crypto Bitch',
      receive: 'You will receive: 3 x 4K renders different views, FBX file, MP4 video.',
    },
    {
      name: 'The Shitcoin Jacket',
      receive: 'You will receive: 3 x 4K renders different views, FBX file, MP4 video.',
    },
    {
      name: 'DeFi Summer (Male)',
      receive: 'You will receive: 3 x 4K renders different views, FBX file, MP4 video.',
    },
    {
      name: 'Design Title: DeFi Summer (Female)',
      receive: 'You will receive: 3 x 4K renders different views, FBX file, MP4 video.',
    },
    {
      name: 'Crypto Winter',
      receive: 'You will receive: 3 x renders different views, FBX file, MP4 video.',
    },
    {
      name: 'Incognito',
      receive: 'You will receive: 3 x renders different views, FBX file, MP4 video.',
    },
    {
      name: 'To the Moon',
      receive: 'You will receive: 3 x 4K renders different views, FBX file, MP4 video.',
    },
    {
      name: 'ICO Suit',
      receive: 'You will receive: 3 x 4K renders different views, FBX file, MP4 video.',
    },
    {
      name: 'DeFi Shoe',
      receive: 'You will receive: 3 x 4K renders different views, FBX file, MP4 video.',
    },
    {
      name: 'Lightning Network',
      receive: 'You will receive: 3 x 4K renders different views, FBX file, MP4 video.',
    },
  ]),
});

export default createModule({
  name: 'garment',
  initialState: cloneDeep(DEFAULT_FIELDS),
  transformations: cloneDeep(TransformModules(DEFAULT_FIELDS)),
});
