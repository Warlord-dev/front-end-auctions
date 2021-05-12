import React, { useState } from 'react'
import { useRouter } from 'next/router'
import WebViewer from '../../../containers/web-view'
import MagazineViewer from '../../../containers/magazine-view'
import MapViewer from '../../../containers/map-view'

const MagazinePages = () => {
  const router = useRouter()
  const { id } = router.query;

  const [viewMethod, setViewMethod] = useState('magazineview')
  const [currentPage, setCurrentPage] = useState(0)
  
  if (viewMethod === 'webview') {
    return (
      <WebViewer
        issueId={id}
        initPage={currentPage}
        onSwitchViewer={
          viewer => {
            setViewMethod(viewer)
          }
        }
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
        onSwitchViewer={
          viewer => {
            setViewMethod(viewer)
          }
        }
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
      onSwitchViewer={
        viewer => {
          setViewMethod(viewer)
        }
      }
    >
    </MapViewer>
  )
}

export default MagazinePages