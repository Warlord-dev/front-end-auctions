import loadable from '@loadable/component';
const CoverPage = loadable(() => import('./CoverPage'));
const Page12 = loadable(() => import('./Page12'));
const Page34 = loadable(() => import('./Page34'));
const PageList = [
  <CoverPage />,
  <Page12 />,
  <Page34 />,
];

export default PageList;
