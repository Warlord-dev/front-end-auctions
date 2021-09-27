import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { getCurrentPage, getViewMethod } from '@selectors/global.selectors'
const ModelViewer = require('@metamask/logo')

const MetamaskLogo = props => {
  const { className, refreshNum } = props
  const container = useRef()
  const viewMethod = useSelector(getViewMethod)
  const currentPage = useSelector(getCurrentPage)

  let viewer = null

  const addFox = () => {
    if (container && container.current.children.length < 1) {
      viewer = ModelViewer({
        // Dictates whether width & height are px or multiplied
        pxNotRatio: true,
        width: 500,
        height: 500,
        // pxNotRatio: false,
        // width: 0.9,
        // height: 0.9,
    
        // To make the face follow the mouse.
        followMouse: true,
        // followMotion: true,
        // head should slowly drift (overrides lookAt)
        slowDrift: false,
    
      })
      container.current.appendChild(viewer.container)
    }
  }
  useEffect(() => {
    if (viewMethod === 'magazineview') {
      if (currentPage == 25) {
        setTimeout(addFox, 1000)
      } else {
        if (viewer) {
          viewer.stopAnimation()
          container.current.removeChild(viewer.container)
        }  
      }
      
    } else {
      addFox()
    }
    
    return () => {
      if (viewer) {
        viewer.stopAnimation()
        container.current.removeChild(viewer.container)

      }
    }
  }, [viewMethod, refreshNum, currentPage])
  return (
    <div
      className={[className].join(' ')}
      ref={container}
    /> 
  )
}

export default MetamaskLogo