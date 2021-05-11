import React, { useState } from 'react';
import dynamic from 'next/dynamic';

import CoverPage from '@components/magazines/issue-1/CoverPage';
import Page12 from '@components/magazines/issue-1/Page12';
import Page34 from '@components/magazines/issue-1/Page34';
import Page56 from '@components/magazines/issue-1/Page56';
import Page78 from '@components/magazines/issue-1/Page78';
import Page910 from '@components/magazines/issue-1/Page910';
import Page1112 from '@components/magazines/issue-1/Page1112';
import Page1314 from '@components/magazines/issue-1/Page1314';
import Page1516 from '@components/magazines/issue-1/Page1516';
import Page1718 from '@components/magazines/issue-1/Page1718';
import Page1920 from '@components/magazines/issue-1/Page1920';
import Page2122 from '@components/magazines/issue-1/Page2122';
import Page2324 from '@components/magazines/issue-1/Page2324';
import Page2526 from '@components/magazines/issue-1/Page2526';
import Page2728 from '@components/magazines/issue-1/Page2728';
import Page2930 from '@components/magazines/issue-1/Page2930';
import Page3132 from '@components/magazines/issue-1/Page3132';
import Page3334 from '@components/magazines/issue-1/Page3334';
import Page3536 from '@components/magazines/issue-1/Page3536';
import Page3738 from '@components/magazines/issue-1/Page3738';
import Page3940 from '@components/magazines/issue-1/Page3940';
import Page4142 from '@components/magazines/issue-1/Page4142';
import Page4344 from '@components/magazines/issue-1/Page4344';
import Page4546 from '@components/magazines/issue-1/Page4546';
import Page4748 from '@components/magazines/issue-1/Page4748';
import Page4950 from '@components/magazines/issue-1/Page4950';
import Page5152 from '@components/magazines/issue-1/Page5152';
import Page5354 from '@components/magazines/issue-1/Page5354';
import Page5556 from '@components/magazines/issue-1/Page5556';
import Page5758 from '@components/magazines/issue-1/Page5758';
import Page5960 from '@components/magazines/issue-1/Page5960';
import Page6162 from '@components/magazines/issue-1/Page6162';
import Page6364 from '@components/magazines/issue-1/Page6364';
import Page6566 from '@components/magazines/issue-1/Page6566';
import Page6768 from '@components/magazines/issue-1/Page6768';
import Page6970 from '@components/magazines/issue-1/Page6970';
import Page7172 from '@components/magazines/issue-1/Page7172';
import Page7374 from '@components/magazines/issue-1/Page7374';
import Page7576 from '@components/magazines/issue-1/Page7576';
import Page7778 from '@components/magazines/issue-1/Page7778';
import Page7980 from '@components/magazines/issue-1/Page7980';
import Page8182 from '@components/magazines/issue-1/Page8182';
import Page8384 from '@components/magazines/issue-1/Page8384';
import Page8586 from '@components/magazines/issue-1/Page8586';
import Page8788 from '@components/magazines/issue-1/Page8788';
import Backcover from '@components/magazines/issue-1/Backcover';

import WebPageWrapper from '@components/magazines/common/WebPageWrapper';
import ViewerSwitch from '@components/magazines/common/ViewerSwitch';
import styles from './styles.module.scss';

const KeyboardEventHandler = dynamic(() => import('react-keyboard-event-handler'), {
  ssr: false,
});

const WebViewer = (props) => {
  const { onSwitchViewer } = props;
  const [zoom, setZoom] = useState(1);

  const zoomList = [0.05, 0.1, 0.25, 0.5, 0.75, 1];

  const handleZoom = (key, e) => {
    const zoomIndex = zoomList.indexOf(zoom);
    if (key === '=') {
      if (zoomIndex < 0 || zoomIndex >= zoomList.length - 1) {
        if (zoom >= 16) return;
        setZoom(zoom * 2);
      } else setZoom(zoomList[zoomIndex + 1]);
    } else if (key === '-') {
      if (zoomIndex === 0) return;
      if (zoomIndex > 0) setZoom(zoomList[zoomIndex - 1]);
      else setZoom(zoom / 2);
    }
  };
  return (
    <>
      <div className={styles.webViewerWrapper}>
        <div className={styles.contentWrapper}>
          <WebPageWrapper zoom={zoom}>
            <CoverPage />
          </WebPageWrapper>
          <WebPageWrapper zoom={zoom}>
            <Page12 />
          </WebPageWrapper>
          <WebPageWrapper secondPart zoom={zoom}>
            <Page12 />
          </WebPageWrapper>
          <WebPageWrapper zoom={zoom}>
            <Page34 />
          </WebPageWrapper>
          <WebPageWrapper secondPart zoom={zoom}>
            <Page34 />
          </WebPageWrapper>
          <WebPageWrapper zoom={zoom}>
            <Page56 />
          </WebPageWrapper>
          <WebPageWrapper secondPart zoom={zoom}>
            <Page56 />
          </WebPageWrapper>
          <WebPageWrapper zoom={zoom}>
            <Page78 />
          </WebPageWrapper>
          <WebPageWrapper secondPart zoom={zoom}>
            <Page78 />
          </WebPageWrapper>
          <WebPageWrapper zoom={zoom}>
            <Page910 />
          </WebPageWrapper>
          <WebPageWrapper secondPart zoom={zoom}>
            <Page910 />
          </WebPageWrapper>
          <WebPageWrapper zoom={zoom}>
            <Page1112 />
          </WebPageWrapper>
          <WebPageWrapper secondPart zoom={zoom}>
            <Page1112 />
          </WebPageWrapper>
          <WebPageWrapper zoom={zoom}>
            <Page1314 />
          </WebPageWrapper>
          <WebPageWrapper secondPart zoom={zoom}>
            <Page1314 />
          </WebPageWrapper>
          <WebPageWrapper zoom={zoom}>
            <Page1516 />
          </WebPageWrapper>
          <WebPageWrapper secondPart zoom={zoom}>
            <Page1516 />
          </WebPageWrapper>
          <WebPageWrapper zoom={zoom}>
            <Page1718 />
          </WebPageWrapper>
          <WebPageWrapper secondPart zoom={zoom}>
            <Page1718 />
          </WebPageWrapper>
          <WebPageWrapper zoom={zoom}>
            <Page1920 />
          </WebPageWrapper>
          <WebPageWrapper secondPart zoom={zoom}>
            <Page1920 />
          </WebPageWrapper>
          <WebPageWrapper zoom={zoom}>
            <Page2122 />
          </WebPageWrapper>
          <WebPageWrapper secondPart zoom={zoom}>
            <Page2122 />
          </WebPageWrapper>
          <WebPageWrapper zoom={zoom}>
            <Page2324 />
          </WebPageWrapper>
          <WebPageWrapper secondPart zoom={zoom}>
            <Page2324 />
          </WebPageWrapper>
          <WebPageWrapper zoom={zoom}>
            <Page2526 />
          </WebPageWrapper>
          <WebPageWrapper secondPart zoom={zoom}>
            <Page2526 />
          </WebPageWrapper>
          <WebPageWrapper zoom={zoom}>
            <Page2728 />
          </WebPageWrapper>
          <WebPageWrapper secondPart zoom={zoom}>
            <Page2728 />
          </WebPageWrapper>
          <WebPageWrapper zoom={zoom}>
            <Page2930 />
          </WebPageWrapper>
          <WebPageWrapper secondPart zoom={zoom}>
            <Page2930 />
          </WebPageWrapper>
          <WebPageWrapper zoom={zoom}>
            <Page3132 />
          </WebPageWrapper>
          <WebPageWrapper secondPart zoom={zoom}>
            <Page3132 />
          </WebPageWrapper>
          <WebPageWrapper zoom={zoom}>
            <Page3334 />
          </WebPageWrapper>
          <WebPageWrapper secondPart zoom={zoom}>
            <Page3334 />
          </WebPageWrapper>
          <WebPageWrapper zoom={zoom}>
            <Page3536 />
          </WebPageWrapper>
          <WebPageWrapper secondPart zoom={zoom}>
            <Page3536 />
          </WebPageWrapper>
          <WebPageWrapper zoom={zoom}>
            <Page3738 />
          </WebPageWrapper>
          <WebPageWrapper secondPart zoom={zoom}>
            <Page3738 />
          </WebPageWrapper>
          <WebPageWrapper zoom={zoom}>
            <Page3940 />
          </WebPageWrapper>
          <WebPageWrapper secondPart zoom={zoom}>
            <Page3940 />
          </WebPageWrapper>
          <WebPageWrapper zoom={zoom}>
            <Page4142 />
          </WebPageWrapper>
          <WebPageWrapper secondPart zoom={zoom}>
            <Page4142 />
          </WebPageWrapper>
          <WebPageWrapper zoom={zoom}>
            <Page4344 />
          </WebPageWrapper>
          <WebPageWrapper secondPart zoom={zoom}>
            <Page4344 />
          </WebPageWrapper>
          <WebPageWrapper zoom={zoom}>
            <Page4546 />
          </WebPageWrapper>
          <WebPageWrapper secondPart zoom={zoom}>
            <Page4546 />
          </WebPageWrapper>
          <WebPageWrapper zoom={zoom}>
            <Page4748 />
          </WebPageWrapper>
          <WebPageWrapper secondPart zoom={zoom}>
            <Page4748 />
          </WebPageWrapper>
          <WebPageWrapper zoom={zoom}>
            <Page4950 />
          </WebPageWrapper>
          <WebPageWrapper secondPart zoom={zoom}>
            <Page4950 />
          </WebPageWrapper>
          <WebPageWrapper zoom={zoom}>
            <Page5152 />
          </WebPageWrapper>
          <WebPageWrapper secondPart zoom={zoom}>
            <Page5152 />
          </WebPageWrapper>
          <WebPageWrapper zoom={zoom}>
            <Page5354 />
          </WebPageWrapper>
          <WebPageWrapper secondPart zoom={zoom}>
            <Page5354 />
          </WebPageWrapper>
          <WebPageWrapper zoom={zoom}>
            <Page5556 />
          </WebPageWrapper>
          <WebPageWrapper secondPart zoom={zoom}>
            <Page5556 />
          </WebPageWrapper>
          <WebPageWrapper zoom={zoom}>
            <Page5758 />
          </WebPageWrapper>
          <WebPageWrapper secondPart zoom={zoom}>
            <Page5758 />
          </WebPageWrapper>
          <WebPageWrapper zoom={zoom}>
            <Page5960 />
          </WebPageWrapper>
          <WebPageWrapper secondPart zoom={zoom}>
            <Page5960 />
          </WebPageWrapper>
          <WebPageWrapper zoom={zoom}>
            <Page6162 />
          </WebPageWrapper>
          <WebPageWrapper secondPart zoom={zoom}>
            <Page6162 />
          </WebPageWrapper>
          <WebPageWrapper zoom={zoom}>
            <Page6364 />
          </WebPageWrapper>
          <WebPageWrapper secondPart zoom={zoom}>
            <Page6364 />
          </WebPageWrapper>
          <WebPageWrapper zoom={zoom}>
            <Page6566 />
          </WebPageWrapper>
          <WebPageWrapper secondPart zoom={zoom}>
            <Page6566 />
          </WebPageWrapper>
          <WebPageWrapper zoom={zoom}>
            <Page6768 />
          </WebPageWrapper>
          <WebPageWrapper secondPart zoom={zoom}>
            <Page6768 />
          </WebPageWrapper>
          <WebPageWrapper zoom={zoom}>
            <Page6970 />
          </WebPageWrapper>
          <WebPageWrapper secondPart zoom={zoom}>
            <Page6970 />
          </WebPageWrapper>
          <WebPageWrapper zoom={zoom}>
            <Page7172 />
          </WebPageWrapper>
          <WebPageWrapper secondPart zoom={zoom}>
            <Page7172 />
          </WebPageWrapper>
          <WebPageWrapper zoom={zoom}>
            <Page7374 />
          </WebPageWrapper>
          <WebPageWrapper secondPart zoom={zoom}>
            <Page7374 />
          </WebPageWrapper>
          <WebPageWrapper zoom={zoom}>
            <Page7576 />
          </WebPageWrapper>
          <WebPageWrapper secondPart zoom={zoom}>
            <Page7576 />
          </WebPageWrapper>
          <WebPageWrapper zoom={zoom}>
            <Page7778 />
          </WebPageWrapper>
          <WebPageWrapper secondPart zoom={zoom}>
            <Page7778 />
          </WebPageWrapper>
          <WebPageWrapper zoom={zoom}>
            <Page7980 />
          </WebPageWrapper>
          <WebPageWrapper secondPart zoom={zoom}>
            <Page7980 />
          </WebPageWrapper>
          <WebPageWrapper zoom={zoom}>
            <Page8182 />
          </WebPageWrapper>
          <WebPageWrapper secondPart zoom={zoom}>
            <Page8182 />
          </WebPageWrapper>
          <WebPageWrapper zoom={zoom}>
            <Page8384 />
          </WebPageWrapper>
          <WebPageWrapper secondPart zoom={zoom}>
            <Page8384 />
          </WebPageWrapper>
          <WebPageWrapper zoom={zoom}>
            <Page8586 />
          </WebPageWrapper>
          <WebPageWrapper secondPart zoom={zoom}>
            <Page8586 />
          </WebPageWrapper>
          <WebPageWrapper zoom={zoom}>
            <Page8788 />
          </WebPageWrapper>
          <WebPageWrapper secondPart zoom={zoom}>
            <Page8788 />
          </WebPageWrapper>
          <WebPageWrapper zoom={zoom}>
            <Backcover />
          </WebPageWrapper>
        </div>
        <KeyboardEventHandler handleKeys={['-', '=']} onKeyEvent={handleZoom} />
      </div>
      <ViewerSwitch viewers={['magazineview', 'mapview']} onSwitchViewer={onSwitchViewer} />
    </>
  );
};

export default WebViewer;
