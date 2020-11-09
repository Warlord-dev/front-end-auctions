/* eslint-disable max-len */
import React from 'react';
import Document, {
  NextScript, Html, Main, Head,
} from 'next/document';

class MyDocument extends Document {

  getPreloadFontsLinks() {
    const fontSizes = [400, 600, 700, 800, 900];
    return fontSizes.map((size) => (<link rel="preload" key={size} as="font" href={`/fonts/inter-${size}.woff2`} type="font/woff2" crossOrigin="" />));
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {this.getPreloadFontsLinks()}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }

}

export default MyDocument;
