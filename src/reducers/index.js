import user from './user.reducer';
import clothesInfo from './clothes-info.reducer';
import designersInfo from './designers-info.reducer';
import materials from './materials.reducer';
import infoAboutTransaction from './info-about-transaction';
import modals from './modals.reducer';
import global from './global.reducer';

export default {
  user: user.reducer,
  clothesInfo: clothesInfo.reducer,
  designersInfo: designersInfo.reducer,
  materials: materials.reducer,
  infoAboutTransaction: infoAboutTransaction.reducer,
  modals: modals.reducer,
  global: global.reducer,
};
