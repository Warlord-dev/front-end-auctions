import React, { useEffect, useRef } from 'react'
const ModelViewer = require('@metamask/logo')


const MetamaskLogo = props => {
  const { className } = props
  const container = useRef()

  let viewer = null
// To render with fixed dimensions:
  

  useEffect(() => {
    if (container.current.children.length < 1) {
      viewer = ModelViewer({

        // Dictates whether width & height are px or multiplied
        pxNotRatio: true,
        width: 330,
        height: 330,
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
    
    return () => {
      viewer && viewer.stopAnimation()
    }
  }, [])
  return (
    <div
    className={[className].join(' ')}
      ref={container}
    /> 
  )
}

export default MetamaskLogo