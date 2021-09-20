import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Router, { useRouter } from 'next/router';
import WebViewer from '@containers/web-view';
import MagazineViewer from '@containers/magazine-view';
import MagazineMobile from '@containers/magazine-mobile';
import api from '@services/api/api.service';
import MapViewer from '@containers/map-view';
import magazineIssues from '@constants/magazines';
import { details } from '@constants/nft_subscription_issues';
import { getAccount } from '@selectors/user.selectors';
import globalActions from '@actions/global.actions';

const MagazinePages = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [viewMethod, setViewMethod] = useState('magazineview');
  const { slug } = router.query;
  const [currentPage, setCurrentPage] = useState(-1);
  const account = useSelector(getAccount);
  const width = window.innerWidth;

  const issueId = slug && slug.length > 0 ? slug[0] : magazineIssues[0].issueId;

  useEffect(() => {
    const fetchDigitalaxSubscriptionCollectors = async () => {
      try {
        const { digitalaxSubscriptionCollectors } = await api.getSubscriptionNftStatus(account);
        const issueIndex = magazineIssues.findIndex((item) => item.issueId === issueId);
        let contentUnlocked = false;

        if (
          digitalaxSubscriptionCollectors[0] &&
          digitalaxSubscriptionCollectors[0].parentsOwned.filter((value) =>
            value.name.includes(`DIGIFIZZY ${details[issueIndex][0].issueIndex}`)
          ).length
        ) {
          dispatch(globalActions.setContentUnlocked(true));
          contentUnlocked = true;
        } else {
          dispatch(globalActions.setContentUnlocked(false));
        }

        if (issueIndex < 0) {
          Router.push(`/magazines/${magazineIssues[0].issueId}`);
          return;
        }

        const pageNumber =
          slug.length > 1
            ? slug[1] === 'hidden'
              ? magazineIssues[issueIndex].freePageCount + 1
              : parseInt(slug[1])
            : 0;

        if (pageNumber > magazineIssues[issueIndex].freePageCount && !contentUnlocked) {
          console.log('redirecting... to : ', magazineIssues[issueIndex].freePageCount);
          Router.push(`/magazines/${issueId}/${magazineIssues[issueIndex].freePageCount}`);
          return;
        } else {
          console.log('pageNumber: ', pageNumber);
          setCurrentPage(pageNumber);
        }
      } catch (e) {
        console.log('e: ', e)
      }
      
    };

    fetchDigitalaxSubscriptionCollectors();
  }, [slug]);

  const switchViewer = (viewer) => {
    if (viewer === 'exit') {
      Router.push('/');
      return;
    }
    setViewMethod(viewer);
  };

  if (currentPage < 0) {
    return <></>;
  }

  if (viewMethod === 'webview') {
    return (
      <WebViewer
        issueId={issueId}
        initPage={currentPage}
        onSwitchViewer={switchViewer}
        onChangePageNumber={(number) => {
          setCurrentPage(number);
        }}
      ></WebViewer>
    );
  } else if (viewMethod === 'magazineview') {
    if (width > 768) {
      return (
        <MagazineViewer
          issueId={issueId}
          initPage={currentPage}
          onSwitchViewer={switchViewer}
        ></MagazineViewer>
      );
    } else {
      return (
        <MagazineMobile
          issueId={issueId}
          initPage={currentPage}
          onSwitchViewer={switchViewer}
        ></MagazineMobile>
      );
    }
  }

  return (
    <MapViewer
      issueId={issueId}
      onClickItem={(pageNumber) => {
        setCurrentPage(pageNumber);
        setViewMethod('webview');
      }}
      onSwitchViewer={switchViewer}
    ></MapViewer>
  );
};

export default MagazinePages;
