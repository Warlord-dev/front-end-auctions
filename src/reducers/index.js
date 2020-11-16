import user from './user.reducer';
import designersInfo from './designers-info.reducer';
import modals from './modals.reducer';
import global from './global.reducer';
import auction from './auction.reducer';
import history from './history.reducer';
import garment from './garment.reducer';
import designer from './designer.reducer';
import designerPage from './designer.page.reducer';
import auctionPage from './auction.page.reducer';
import garmentPage from './garment.page.reducer';

export default {
  user: user.reducer,
  designersInfo: designersInfo.reducer, // TODO::rm
  modals: modals.reducer,
  global: global.reducer,
  auction: auction.reducer,
  history: history.reducer,
  garment: garment.reducer,
  designer: designer.reducer,
  designerPage: designerPage.reducer,
  auctionPage: auctionPage.reducer,
  garmentPage: garmentPage.reducer,
};
