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
              font-family: "A DAY WITHOUT SUN";
              src: url("./fonts/A DAY WITHOUT SUN.otf");
              font-weight: 400;
            }

            @font-face {
              font-family: "Abel";
              src: url("./fonts/Abel-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Nella Sue Demo';
              src: url("./fonts/NellaSueDEMO.ttf");
              font-weight: 400;
            }
            
            @font-face {
              font-family: 'Sweetly Broken';
              src: url("./fonts/Sweetly Broken.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Sweetly Broken';
              src: url("./fonts/Sweetly Broken SemiBold.ttf");
              font-weight: 700;
            }

            @font-face {
              font-family: 'Sweetly Broken';
              src: url("./fonts/Sweetly Broken Bold.ttf");
              font-weight: 900;
            }

            @font-face {
              font-family: 'Artisual Deco DEMO';
              src: url("./fonts/ArtisualDeco-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Mad Galaxy Demo';
              src: url("./fonts/MadGalaxyDemoRegular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Archie Websters';
              src: url("./fonts/Archie Websters.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Rugrats';
              src: url("./fonts/RugratS.ttf");
              font-weight: 400;
            }
            
            @font-face {
              font-family: 'Rugsnatcher DEMO';
              src: url("./fonts/rugsnatcher DEMO.otf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Beth Ellen';
              src: url("./fonts/Beth-Ellen-2.0.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Jockey One';
              src: url("./fonts/JockeyOne-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Jacques Francois';
              src: url("./fonts/JacquesFrancois-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Lexend Tera';
              src: url("./fonts/LexendTera-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Lexend Zetta';
              src: url("./fonts/LexendZetta-Regular.ttf");
              font-weight: 400;
            }
            
            @font-face {
              font-family: 'Medula One';
              src: url("./fonts/MedulaOne-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Aldrich';
              src: url("./fonts/Aldrich-Regular.ttf");
              font-weight: 400;
            }
            
            @font-face {
              font-family: 'Cool Chaos';
              src: url("./fonts/Cool Chaos.otf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Heaven Wanders DEMO';
              src: url("./fonts/Heaven_Wanders_DEMO.otf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Comics Tricks';
              src: url("./fonts/Comics Tricks.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Habbo';
              src: url("./fonts/HabboFont.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Ayuthaya';
              src: url("./fonts/ayuthaya-webfont.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Arima Madurai';
              src: url("./fonts/ArimaMadurai-Bold.ttf");
              font-weight: 700;
            }

            @font-face {
              font-family: 'Mada';
              src: url("./fonts/Mada-Regular.ttf");
              font-weight: 400;
            }
            
            @font-face {
              font-family: 'Mervale Script';
              src: url("./fonts/MervaleScript-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'PLAYPULL';
              src: url("./fonts/PLAYPULL_Demo.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Acme';
              src: url("./fonts/Acme-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Rochester';
              src: url("./fonts/Rochester-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Nunito Sans';
              src: url("./fonts/NunitoSans-Regular.ttf");
              font-weight: 400;
              font-family: 'Blacker Display';
              src: url("./fonts/Blacker-Display-Regular-trial.ttf");
            }
          
            @font-face {
              font-family: 'Arapey';
              src: url("./fonts/Arapey-Regular.ttf");
            }
          
            @font-face {
              font-family: 'EB Garamond';
              src: url("./fonts/EBGaramond-VariableFont_wght.ttf");
            }
          
            @font-face {
              font-family: 'Julietta Messie Demo';
              src: url("./fonts/FontsFree-Net-Julietta-Messie-Demo.ttf");
              font-weight: 400;
            }
          
            @font-face {
              font-family: 'Asdonuts';
              src: url("./fonts/Asdonuts.ttf");
            }
          
            @font-face {
              font-family: 'Olivia & Kevin';
              src: url("./fonts/Olivia & Kevin.ttf");
            }
          
            @font-face {
              font-family: 'Knife Princess';
              src: url("./fonts/Knife Princess.ttf");
            }
          
            @font-face {
              font-family: 'Sen';
              src: url("./fonts/Sen-Regular.ttf");
            }
          
            @font-face {
              font-family: 'Digital Dare';
              src: url("./fonts/Digital Dare.ttf");
            }
          
            @font-face {
              font-family: 'Didot';
              src: url("./fonts/GFSDidot-Regular.ttf");
            }
          
            @font-face {
              font-family: 'Dhurjati';
              src: url("./fonts/Dhurjati-Regular.ttf");
            }
          
            @font-face {
              font-family: 'Bahiana';
              src: url("./fonts/Bahiana-Regular.ttf");
            }
            
            @font-face {
              font-family: 'DM Mono';
              src: url("./fonts/DMMono-Regular.ttf");
            }
          
            @font-face {
              font-family: 'Masterblast';
              src: url("./fonts/Masterblast.otf");
            }
            
            @font-face {
              font-family: 'Carter One';
              src: url("./fonts/CarterOne-Regular.ttf");
            }
          
            @font-face {
              font-family: 'Baloo Tamma 2';
              src: url("./fonts/BalooTamma2-Regular.ttf");
            }
          
            @font-face {
              font-family: 'Covered By Your Grace';
              src: url("./fonts/CoveredByYourGrace-Regular.ttf");
            }
          
            @font-face {
              font-family: 'Boldfinger';
              src: url("./fonts/Boldfinger.ttf");
            }
          
            @font-face {
              font-family: 'Crafty Girls';
              src: url("./fonts/CraftyGirls-Regular.ttf");
            }
          
            @font-face {
              font-family: 'Cinzel Decorative';
              font-weight: 400;
              src: url("./fonts/CinzelDecorative-Regular.ttf");
            }

            @font-face {
              font-family: 'Cinzel Decorative';
              font-weight: 900;
              src: url("./fonts/CinzelDecorative-Black.ttf");
            }
            
            @font-face {
              font-family: 'Trocchi';
              src: url("./fonts/Trocchi-Regular.ttf");
            }
          
            @font-face {
              font-family: 'Fresca';
              src: url("./fonts/Fresca-Regular.ttf");
            }
          
            @font-face {
              font-family: 'Empirez';
              src: url("./fonts/Empirez.ttf");
            }
          
            @font-face {
              font-family: 'Mouse Deco';
              src: url("./fonts/Mouse_Deco.ttf");
            }
          
            @font-face {
              font-family: 'Neucha';
              src: url("./fonts/Neucha-Regular.ttf");
            }
          
            @font-face {
              font-family: 'Neon Nanoborg';
              src: url("./fonts/Neon Nanoborg.otf");
            }
            
            @font-face {
              font-family: 'Rose Cake-Personal Use';
              src: url("./fonts/Rose Cake - Personal Use.woff");
            }
            
            @font-face {
              font-family: 'Courier Prime';
              src: url("./fonts/CourierPrime-Regular.ttf");
            }

            @font-face {
              font-family: 'Minecrafter';
              src: url("./fonts/Minecrafter.Reg.ttf");
            }
            
            @font-face {
              font-family: 'ZCOOL KuaiLe';
              src: url("./fonts/ZCOOLKuaiLe-Regular.ttf");
            }
              
            @font-face {
              font-family: 'Finger Paint';
              src: url("./fonts/FingerPaint-Regular.ttf");
            }
               
            @font-face {
              font-family: 'Finger Paint';
              src: url("./fonts/FingerPaint-Regular.ttf");
            }
              
            @font-face {
              font-family: 'B612 Mono';
              src: url("./fonts/B612Mono-Regular.ttf");
            }
                
            @font-face {
              font-family: 'Biryani';
              src: url("./fonts/Biryani-Regular.ttf");
            }

            @font-face {
              font-family: 'Capriola';
              src: url("./fonts/Capriola-Regular.ttf");
            }

            @font-face {
              font-family: 'Barlow';
              src: url("./fonts/Barlow-Regular.ttf");
            }

            @font-face {
              font-family: 'FresHot_DEMO';
              src: url("./fonts/FresHot_DEMO.ttf");
            }

            @font-face {
              font-family: 'Jura';
              src: url("./fonts/Jura-VariableFont_wght.ttf");
            }

            @font-face {
              font-family: 'Parabolic';
              src: url("./fonts/Parabolic.ttf");
            }

            @font-face {
              font-family: 'Days One';
              src: url("./fonts/DaysOne-Regular.ttf");
            }

            @font-face {
              font-family: 'Basic';
              src: url("./fonts/Basic-Regular.ttf");
            }

            @font-face {
              font-family: 'NATS';
              src: url("./fonts/NATS-Regular.woff");
            }

            @font-face {
              font-family: 'Noto Sans Armenian';
              src: url("./fonts/NotoSans-Regular.ttf");
            }

            @font-face {
              font-family: 'Kite One';
              src: url("./fonts/KiteOne-Regular.ttf");
            }

            @font-face {
              font-family: 'Karla';
              src: url("./fonts/Karla-VariableFont_wght.ttf");
            }

            @font-face {
              font-family: 'Fasthand';
              src: url("./fonts/Fasthand-Regular.ttf");
              font-family: 'Rockabye';
              src: url("./fonts/Rockabye-Regular.otf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Sanchez';
              src: url("./fonts/Sanchez-Regular.ttf");
              font-style: normal;
              font-weight: 400;
            }
          
            @font-face {
              font-family: 'Sanchez';
              font-style: italic;
              src: url("./fonts/Sanchez-Italic.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Rosario';
              src: url("./fonts/Rosario-Regular.ttf");
              font-style: normal;
              font-weight: 400;
            }
          
            @font-face {
              font-family: 'Rosario';
              font-style: italic;
              src: url("./fonts/Rosario-Italic.ttf");
              font-weight: 400;
            }
           
            @font-face {
              font-family: 'B612';
              src: url("./fonts/B612-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Miama';
              src: url("./fonts/Miama.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'THIS FONT IS EMPTY1';
              src: url("./fonts/THIS FONT IS EMPTY1.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'DigitalRiver';
              src: url("./fonts/DigitalRiver.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Damion';
              src: url("./fonts/Damion-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Single Day';
              src: url("./fonts/SingleDay-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Joti One';
              src: url("./fonts/JotiOne-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'THE AMAZING SPIDER-MAN';
              src: url("./fonts/The Amazing Spider-Man.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Aclonica';
              src: url("./fonts/Aclonica-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Bahianita';
              src: url("./fonts/Bahianita-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Artypa';
              src: url("./fonts/Artypa-Regular.otf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'The ART';
              src: url("./fonts/THE ART.otf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Arthure';
              src: url("./fonts/Arthure.ttf");
            }

            @font-face {
              font-family: 'Baloo Paaji 2';
              src: url("./fonts/BalooPaaji2-Regular.ttf");
              font-weight: 400;
            }
            
            @font-face {
              font-family: 'Baloo Paaji 2';
              src: url("./fonts/BalooPaaji2-Bold.ttf");
              font-weight: 700;
            }

            @font-face {
              font-family: 'Pixel Berry 08/84 Ltd.Edition';
              src: url("./fonts/Pixel_Berry_08_84_Ltd.Edition.TTF");
            }

            @font-face {
              font-family: 'TS Block';
              src: url("./fonts/TS Block Bold.ttf");
            }

            @font-face {
              font-family: 'Montserrat';
              src: url("./fonts/Montserrat-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Montserrat';
              src: url("./fonts/Montserrat-Bold.ttf");
              font-weight: 700;
            }
            
            @font-face {
              font-family: 'Haarlem Deco DEMO';
              src: url("./fonts/Haarlem Deco DEMO.ttf");
            }

            @font-face {
              font-family: 'Delius';
              src: url("./fonts/Delius-Regular.ttf");
            }

            @font-face {
              font-family: 'Maker Van';
              src: url("./fonts/MakerVan-Regular.ttf");
            }

            @font-face {
              font-family: 'Reenie Beanie';
              src: url("./fonts/ReenieBeanie-Regular.ttf");
            }
            
            @font-face {
              font-family: 'Atures 900 PERSONAL USE ONLY';
              src: url("./fonts/Atures-900_PERSONAL_USE.ttf");
            }

            @font-face {
              font-family: 'Burst My Bubble';
              src: url("./fonts/BurstMyBubbleBold.ttf");
              font-weight: 700;
            }

            @font-face {
              font-family: 'Burst My Bubble';
              src: url("./fonts/BurstMyBubble.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Corben';
              src: url("./fonts/Corben-Regular.ttf");
              font-weight: 400;
            }
            
            @font-face {
              font-family: 'Corben';
              src: url("./fonts/Corben-Bold.ttf");
              font-weight: 700;
            }
            
            @font-face {
              font-family: 'Carme';
              src: url("./fonts/Carme-Regular.ttf");
            }
            
            @font-face {
              font-family: 'Neon Lights';
              src: url("./fonts/neon2.ttf");
            }
            
            @font-face {
              font-family: 'Cinzel';
              src: url("./fonts/Cinzel-Black.ttf");
              font-weight: 900;
            }

            @font-face {
              font-family: 'Decovar Alpha';
              src: url("./fonts/DecovarAlpha-VF.ttf");
            }
   
            @font-face {
              font-family: 'DIN Alternate';
              src: url("./fonts/DINAlternate-Bold.woff");
            }
             
            @font-face {
              font-family: 'Think Thick';
              src: url("./fonts/Think Thick.ttf");
            }

            @font-face {
              font-family: 'Homenaje';
              src: url("./fonts/Homenaje-Regular.ttf");
              font-weight: 400;
            }
            
            @font-face {
              font-family: 'Antonio';
              src: url("./fonts/Antonio-Regular.ttf");
              font-weight: 400;
            }
            
            @font-face {
              font-family: 'Antonio';
              src: url("./fonts/Antonio-Light.ttf");
              font-weight: 300;
            }
          
            @font-face {
              font-family: 'Anton';
              src: url("./fonts/Anton-Regular.ttf");
              font-weight: 400;
            }
          
            @font-face {
              font-family: 'Antic Didone';
              src: url("./fonts/AnticDidone-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Monoton';
              src: url("./fonts/Monoton-Regular.ttf");
              font-weight: 400;
            }

            @font-face {
              font-family: 'Chilanka';
              src: url("./fonts/Chilanka-Regular.ttf");
              font-weight: 400;
            }
          
            @font-face {
              font-family: 'Chivo';
              src: url("./fonts/Chivo-Regular.ttf");
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
