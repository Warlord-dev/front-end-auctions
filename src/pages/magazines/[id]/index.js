import React, { useState } from 'react'
import { useRouter } from 'next/router'
import WebViewer from '../../../containers/web-view'
import MagazineViewer from '../../../containers/magazine-view'
import MagazineMobile from '../../../containers/magazine-mobile'
import MapViewer from '../../../containers/map-view'

const MagazinePages = () => {
  const router = useRouter()
  const { id } = router.query;

  const [viewMethod, setViewMethod] = useState('mapview')
  const width = window.innerWidth
  
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
    if(width > 768) {
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
    }else {
      return (
        <MagazineMobile
          issueId={id}
          onSwitchViewer={
            viewer => {
              setViewMethod(viewer)
            }
          }
        >
        </MagazineMobile>
      )
    }
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