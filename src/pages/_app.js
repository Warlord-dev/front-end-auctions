import React from 'react';
import { Provider } from 'react-redux';
import * as Sentry from '@sentry/browser';

import withRedux from 'next-redux-wrapper';
import { deserialize, serialize } from 'json-immutable/lib';
import PropTypes from 'prop-types';
import HeaderTopLine from '@components/layouts/header-top-line';
import Modals from '@containers/modals/index';
import Footer from '@components/layouts/footer';
import getOrCreateStore from '../lib/with-redux-store';
import config from '../utils/config';
import '../assets/scss/global.scss';


if (config.SENTRY_DSN) {
  Sentry.init({
    dsn: config.SENTRY_DSN,
    environment: config.ENVIRONMENT,
  });
}

const MyApp = ({
  Component, pageProps, store, err,
}) => {


  if (err) {
    Sentry.captureException(err, {
      extra: {},
    });
    return <Component {...pageProps} />;
  }
  return (
    <Provider store={store}>
      <HeaderTopLine />
      <Modals />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
};

MyApp.getInitialProps = async () => {};

MyApp.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  pageProps: PropTypes.object,
  store: PropTypes.object,
  err: PropTypes.any,
  backError: PropTypes.object,
};

MyApp.defaultProps = {
  pageProps: {},
  store: {},
  err: undefined,
  backError: {},
};

const serializeWrapper = (value, cb) => {
  try {
    value = cb(value);
  } catch (e) {
    // eslint-disable no-empty
  }
  return value;
};


export default withRedux(
  (initialState) => getOrCreateStore(initialState),
  {
    serializeState: (state = {}) => serializeWrapper(state, serialize),
    deserializeState: (state = serialize({})) => serializeWrapper(state, deserialize),
  },
)(MyApp);
