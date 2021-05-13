import React, { forwardRef, useState } from 'react'
import styled from 'styled-components'
import windowSize from 'react-window-size'

const WebPageWrapperDiv = styled.div`
  background-color: black;
  border-color: red;
  overflow: hidden;

  width: ${props => `${props.zoom * props.windowHeight / 1497 * 960}px`};
  min-width: ${props => `${props.zoom * props.windowHeight / 1497 * 960}px`};
  max-width: ${props => `${props.zoom * props.windowHeight / 1497 * 960}px`};
  height: ${props => `${props.zoom * props.windowHeight }px`};
`

const ContentWrapperDiv = styled.div`
  width: 1920px;
  height: 1497px;
  transform-origin: 0 0;
  transform: ${props => `scale(${props.zoom * props.windowHeight / 1497})`};

  margin-left: ${props => props.secondPart ? '-100%' : '0'};
`

const WebPageWrapper = forwardRef((props, ref) => {
  const {
    zoom,
    secondPart,
    windowHeight
  } = props

  return (
    <WebPageWrapperDiv zoom={zoom || 1} ref={ref} windowHeight={windowHeight - 20}>
      <ContentWrapperDiv
        zoom={zoom || 1}
        windowHeight={windowHeight - 20}
        secondPart={secondPart}
      >
      { props.children }
      </ContentWrapperDiv>
    </WebPageWrapperDiv>
  )
})

export default windowSize(WebPageWrapper)