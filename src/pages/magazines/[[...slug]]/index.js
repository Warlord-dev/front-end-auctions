import React, { useState } from 'react'
import Router, { useRouter } from 'next/router'
import WebViewer from '../../../containers/web-view'
import MagazineViewer from '../../../containers/magazine-view'
import MapViewer from '../../../containers/map-view'

const magazineIssues = ['1']

const MagazinePages = () => {
  const router = useRouter()
  const { slug } = router.query;
  console.log('slug: ', slug)
  const issueId = slug && slug.length > 0
    ? slug[0] : magazineIssues[0]

  console.log('issueId: ', issueId)
  if (magazineIssues.findIndex(item => item === issueId) < 0) {
    Router.push(`/magazines/${magazineIssues[0]}`)
    console.log('redrecting...')
    return <></>
  }

  const pageNumber = slug.length > 1 ? slug[1] : 0

  const [viewMethod, setViewMethod] = useState('magazineview')
  const [currentPage, setCurrentPage] = useState(parseInt(pageNumber))

  console.log(currentPage)
  

  const switchViewer = viewer => {
    if (viewer === 'exit') {
      Router.push('/')
      return
    }
    setViewMethod(viewer)
  }
  
  if (viewMethod === 'webview') {
    return (
      <WebViewer
        issueId={issueId}
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
        issueId={issueId}
        initPage={currentPage}
        onSwitchViewer={switchViewer}
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