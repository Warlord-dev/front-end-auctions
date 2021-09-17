import React, { forwardRef, useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import WebPageWrapper from '@components/magazines/common/WebPageWrapper';
import ViewerSwitch from '@components/magazines/common/ViewerSwitch';
import getPageList from '@components/magazines/PageList';
import magazineIssues from '@constants/magazines';
import styles from './styles.module.scss';
import { useSelector } from 'react-redux';

const KeyboardEventHandler = dynamic(() => import('react-keyboard-event-handler'), {
  ssr: false,
});

const WebViewer = forwardRef((props, refs) => {
  const { onSwitchViewer, initPage, issueId, onChangePageNumber } = props;
  // const { contentUnlocked } = useSelector((state) => state.global.toJS());
  const contentUnlocked = true
  const [zoom, setZoom] = useState(1);
  const [currentPage, setCurrentPage] = useState(0);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const currentIssue = magazineIssues.find((item) => item.issueId === issueId) || magazineIssues[0];

  const zoomList = [0.05, 0.1, 0.25, 0.5, 0.75, 1];
  const viewerWrapperRef = useRef();
  const contentWrapperRef = useRef();
  const pageList = getPageList(issueId);
  const totalPageCount = contentUnlocked
    ? (pageList.length - 1) * 2
    : currentIssue.freePageCount + 2;

  const handleZoom = (key, e) => {
    const zoomIndex = zoomList.indexOf(zoom);
    console.log('zoom: ', zoom);
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

  const onScrollWrapper = () => {
    const pageNumber = (viewerWrapperRef.current.scrollLeft / getPageWidth(windowHeight)) | 0;
    setCurrentPage(pageNumber);
    onChangePageNumber && onChangePageNumber(pageNumber);
  };

  const handleMouseWeel = (e) => {
    if (e.ctrlKey) {
      if (e.deltaY < 0) {
        handleZoom('=');
      } else if (e.deltaY > 0) {
        handleZoom('-');
      }
    }
  };

  const updatePagePosition = (pageNumber) => {
    console.log('current Page: ', pageNumber);
    setCurrentPage(pageNumber);
    viewerWrapperRef.current.scrollLeft = ((pageNumber * getPageWidth(windowHeight)) | 0) + 1;
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
      setCurrentPage(initPage);
      viewerWrapperRef.current.scrollLeft = ((initPage * getPageWidth(window.innerHeight)) | 0) + 1;
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    updatePagePosition(currentPage);
  }, [zoom]);

  const getPageWidth = (height) => ((zoom * (height - 20)) / 1497) * 960;

  useEffect(() => {
    updatePagePosition(initPage);
  }, [windowHeight]);

  const getChildrenList = () => {
    const childrenList = [];
    let realPageNum = 0;

    pageList.forEach((item, index) => {
      if (
        realPageNum > currentIssue.freePageCount &&
        !contentUnlocked &&
        index < pageList.length - 1
      )
        return;
      childrenList.push(
        <WebPageWrapper key={realPageNum} zoom={zoom}>
          {item}
        </WebPageWrapper>
      );
      realPageNum++;

      if (index > 0 && index < pageList.length - 1) {
        childrenList.push(
          <WebPageWrapper zoom={zoom} secondPart key={realPageNum}>
            {item}
          </WebPageWrapper>
        );
        realPageNum++;
      }
    });
    return childrenList;
  };

  return (
    <>
      <div
        className={styles.webViewerWrapper}
        ref={viewerWrapperRef}
        onScroll={onScrollWrapper}
        onWheel={handleMouseWeel}
      >
        <div
          className={[styles.contentWrapper, zoom < 1 ? styles.center : ''].join(' ')}
          ref={contentWrapperRef}
          style={{
            width: `${getPageWidth(windowHeight) * totalPageCount + 100}px`,
            height: `${(windowHeight - 20) * zoom}px`,
          }}
        >
          {getChildrenList()}
        </div>
        <KeyboardEventHandler handleKeys={['-', '=']} onKeyEvent={handleZoom} />
      </div>
      <ViewerSwitch viewers={['magazineview', 'mapview', 'exit']} onSwitchViewer={onSwitchViewer} />
    </>
  );
});

export default WebViewer;
