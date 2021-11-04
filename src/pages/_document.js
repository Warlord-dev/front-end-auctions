/* eslint-disable max-len */
import React from 'react';
import Document, { NextScript, Html, Main, Head } from 'next/document';

const scriptTxt = `
(function () {
  const { pathname } = window.location;
  const ipfsMatch = /.*\\/Qm\\w{44}\\//.exec(pathname); 
  const base = document.createElement('base') 
  base.href = ipfsMatch ? ipfsMatch[0] : '/';
  document.head.append(base); 
})();
`;

const gaScriptText = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-194369113-2');
`;

class MyDocument extends Document {
  getPreloadFontsLinks() {
    const fontSizes = [400, 600, 700, 800, 900];
    return fontSizes.map((size) => (
      <link
        rel="preload"
        key={size}
        as="font"
        href={`/fonts/inter-${size}.woff2`}
        type="font/woff2"
        crossOrigin=""
      />
    ));
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <script src="/arkane-network/web3-arkane-provider.js"></script>
          <script dangerouslySetInnerHTML={{ __html: scriptTxt }} />
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-194369113-2"></script>
          <script dangerouslySetInnerHTML={{ __html: gaScriptText }} />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900"
          ></link>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Orbitron:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900"
          ></link>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Oswald:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900"
          ></link>
          {this.getPreloadFontsLinks()}
          {/* ipfs next.js fix */}
          <style
            dangerouslySetInnerHTML={{
              __html: `
            @font-face {
              font-family: "inter";
              font-display: swap;
              src: url("./fonts/inter-400.woff2") format("woff2"),
              url("./fonts/inter-400.woff") format("woff");
              font-weight: normal;
              font-style: normal;
            } 
          
            @font-face {
              font-family: "inter";
              font-display: swap;
              src: url("./fonts/inter-600.woff2") format("woff2"),
              url("./fonts/inter-600.woff") format("woff");
              font-weight: 600;
              font-style: normal;
            }
            
            @font-face {
              font-family: "inter";
              font-display: swap;
              src: url("./fonts/inter-700.woff2") format("woff2"),
                url("./fonts/inter-700.woff") format("woff");
              font-weight: 700;
              font-style: normal;
            }
          
            @font-face {
              font-family: "inter";
              font-display: swap;
              src: url("./fonts/inter-800.woff2") format("woff2"),
                url("./fonts/inter-800.woff") format("woff");
              font-weight: 800;
              font-style: normal;
            }
            
            @font-face {
              font-family: "inter";
              font-display: swap;
              src: url("./fonts/inter-900.woff2") format("woff2"),
                url("./fonts/inter-900.woff") format("woff");
              font-weight: 900;
              font-style: normal;
            }

            @font-face {
              font-family: "Internal Rainbows";
              src: url("./fonts/Internal Rainbows.otf");
              font-weight: 400;
            }

            @font-face {
              font-family: "Gilroy";
              src: url("./fonts/Gilroy-Light.otf");
              font-weight: 400;
            }
            
            @font-face {
              font-family: "Gilroy";
              src: url("./fonts/Gilroy-ExtraBold.otf");
              font-weight: 700;
            }
            
            @font-face {
              font-family: "Gilroy";
              src: url("./fonts/Gilroy-ExtraBold.otf");
              font-weight: 900;
            }
            @font-face {
              font-family: "Armata-Regular";
              src: url("./fonts/Armata-Regular.ttf");
              font-weight: 400;
            }
            @font-face {
              font-family: "Animosa";
              src: url("./fonts/Animosa-Regular.otf");
              font-weight: 400;
            }
            
            @font-face {
              font-family: "Bebas Neue";
              src: url("./fonts/BebasNeue-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: "m12";
              src: url("./fonts/m12.TTF");
              font-weight: 400;
            }

            @font-face {
              font-family: "Trans America";
              src: url("./fonts/transamerica.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: "Rose Cake";
              src: url("./fonts/Rose Cake - Personal Use.otf");
              font-weight: 400;
            }

            @font-face {
              font-family: "Oswald";
              src: url("./fonts/Oswald-VariableFont_wght.ttf");
              font-weight: 400;
            }
          
          `,
            }}
          />
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
