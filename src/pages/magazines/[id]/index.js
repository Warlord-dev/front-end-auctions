import React, { useState } from 'react'
import Router, { useRouter } from 'next/router'
import WebViewer from '../../../containers/web-view'
import MagazineViewer from '../../../containers/magazine-view'
import MapViewer from '../../../containers/map-view'

const MagazinePages = () => {
  const router = useRouter()
  const { id } = router.query;

  const [viewMethod, setViewMethod] = useState('magazineview')
  const [currentPage, setCurrentPage] = useState(0)

  const switchViewer = viewer => {
    if (viewer === 'exit') {
      Router.push('/')
      return;
    }
    setViewMethod(viewer)
  }
  
  if (viewMethod === 'webview') {
    return (
      <WebViewer
        issueId={id}
        initPage={currentPage}
        onSwitchViewer={switchViewer}
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
        issueId={id}
        onSwitchViewer={switchViewer}
      >
      </MagazineViewer>
    )
  }

  return (
    <MapViewer
      issueId={id}
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