import React, { useState } from 'react';
import dynamic from 'next/dynamic';

// import KeyboardEventHandler from 'react-keyboard-event-handler'
import CoverPage from '../../components/magazines/issue-1/CoverPage';
import Page12 from '../../components/magazines/issue-1/Page12';
import Page34 from '../../components/magazines/issue-1/Page34';
import Page56 from '../../components/magazines/issue-1/Page56';
import Page4546 from '../../components/magazines/issue-1/Page4546';
import WebPageWrapper from '../../components/magazines/common/WebPageWrapper';
import ViewerSwitch from '../../components/magazines/common/ViewerSwitch';
import styles from './styles.module.scss';
import Page4748 from '@components/magazines/issue-1/Page4748';
import Page4950 from '@components/magazines/issue-1/Page4950';
import Page5152 from '@components/magazines/issue-1/Page5152';
import Page5354 from '@components/magazines/issue-1/Page5354';
import Page5556 from '@components/magazines/issue-1/Page5556';
import Page5758 from '@components/magazines/issue-1/Page5758';
import Page6162 from '@components/magazines/issue-1/Page6162';
import Page6970 from '@components/magazines/issue-1/Page6970';
import Page7172 from '@components/magazines/issue-1/Page7172';
import Page7778 from '@components/magazines/issue-1/Page7778';
import Page8586 from '@components/magazines/issue-1/Page8586';
import Page8788 from '@components/magazines/issue-1/Page8788';
import Backcover from '@components/magazines/issue-1/Backcover';
import Page4142 from '@components/magazines/issue-1/Page4142';
import Page4344 from '@components/magazines/issue-1/Page4344';

const KeyboardEventHandler = dynamic(() => import('react-keyboard-event-handler'), {
  ssr: false,
});

const WebViewer = (props) => {
  const { onSwitchViewer } = props;
  const [zoom, setZoom] = useState(1);

  const zoomList = [0.05, 0.1, 0.25, 0.5, 0.75, 1];

  const handleAnswerChange = (key, e) => {
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
            <Page6162 />
          </WebPageWrapper>
          <WebPageWrapper secondPart zoom={zoom}>
            <Page6162 />
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
            <Page7778 />
          </WebPageWrapper>
          <WebPageWrapper secondPart zoom={zoom}>
            <Page7778 />
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
        <div className={styles.zoomViewer}>{zoom * 100 + '%'}</div>
        <KeyboardEventHandler handleKeys={['-', '=']} onKeyEvent={handleAnswerChange} />
      </div>
      <ViewerSwitch viewers={['magazineview', 'mapview']} onSwitchViewer={onSwitchViewer} />
    </>
  );
};

export default WebViewer;
