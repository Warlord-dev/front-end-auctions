import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Router, { useRouter } from 'next/router'
import WebViewer from '@containers/web-view'
import MagazineViewer from '@containers/magazine-view'
import MapViewer from '@containers/map-view'
import magazineIssues from '@constants/magazines'
import api from '@services/api/api.service';
import { getAccount } from '@selectors/user.selectors'

const MagazinePages = () => {
  const router = useRouter()
  const [viewMethod, setViewMethod] = useState('magazineview')
  const { slug } = router.query;
  const [currentPage, setCurrentPage] = useState(-1)
  const account = useSelector(getAccount);
  const [contentUnlocked, setContentUnlocked] = useState(false);

  const issueId = slug && slug.length > 0
  ? slug[0] : magazineIssues[0].issueId

  useEffect(() => {
    const issueIndex = magazineIssues.findIndex(item => item.issueId === issueId)
    if (issueIndex < 0) {
      Router.push(`/magazines/${magazineIssues[0].issueId}`)
      return
    }

    const pageNumber = slug.length > 1 
      ? slug[1] === 'hidden' 
        ? magazineIssues[issueIndex].freePageCount + 1
        : parseInt(slug[1])
      : 0

    const contentUnlocked = false // it needs to be updated with real data - Cameron
    if (pageNumber > magazineIssues[issueIndex].freePageCount && !contentUnlocked) {
      console.log('redirecting... to : ', magazineIssues[issueIndex].freePageCount)
      Router.push(`/magazines/${issueId}/${magazineIssues[issueIndex].freePageCount}`)
      return
    } else {
      console.log('pageNumber: ', pageNumber)
      setCurrentPage(pageNumber)

    }

    
  }, [slug])

  
  useEffect(() => {
    const fetchDigitalaxSubscriptionCollectors = async () => {
      const { digitalaxSubscriptionCollectors } = await api.getSubscriptionNftStatus(account);
      if (digitalaxSubscriptionCollectors[0] && digitalaxSubscriptionCollectors[0].parentsOwned.length) {
        setContentUnlocked(true);
      }
    }

    fetchDigitalaxSubscriptionCollectors();
  }, []);
  

  const switchViewer = viewer => {
    if (viewer === 'exit') {
      Router.push('/')
      return
    }
    setViewMethod(viewer)
  }

  if (currentPage < 0) {
    return <></>
  }
  
  if (viewMethod === 'webview') {
    return (
      <WebViewer
        issueId={issueId}
        initPage={currentPage}
        onSwitchViewer={switchViewer}
        contentUnlocked={contentUnlocked}
        onChangePageNumber={
          number => {
            setCurrentPage(number)
          }
        }
      >
      </WebViewer>
    )
  } else if (viewMethod === 'magazineview') {
    return (
      <MagazineViewer
        issueId={issueId}
        initPage={currentPage}
        onSwitchViewer={switchViewer}
        contentUnlocked={contentUnlocked}
      >
      </MagazineViewer>
    )
  }

  return (
    <MapViewer
      issueId={issueId}
      onClickItem={pageNumber => {
        setCurrentPage(pageNumber)
        setViewMethod('webview')
      }}
      onSwitchViewer={switchViewer}
    >
    </MapViewer>
  )
}

export default MagazinePages