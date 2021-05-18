import React, { forwardRef } from 'react'
import windowSize from 'react-window-size'
import styled from 'styled-components'

const WebPageWrapperDiv = styled.div`
  background-color: black;
  overflow: scroll;

  height: ${props => `${props.windowHeight - 80}px`};
  width: ${props => `${props.windowWidth}px`};
  min-width: ${props => `${props.windowWidth}px`};
  max-width: ${props => `${props.windowWidth}px`};
  margin-left: -1px;
`
const ContentWrapperDiv = styled.div`
  width: 375px;
  height: 100%;
  transform-origin: 0 0;
  transform: ${props => `scale(${props.windowWidth / 375}, ${props.windowWidth / 375})`};
`

const MobilePageWrapper = forwardRef((props, ref) => {
  const {
    windowWidth,
    windowHeight,
    screenHeight
  } = props

  return (
    <WebPageWrapperDiv ref={ref} windowWidth={windowWidth} windowHeight={windowHeight}>
      <ContentWrapperDiv
        windowWidth={windowWidth}
        windowHeight={screenHeight}
      >
      { props.children }
      </ContentWrapperDiv>
    </WebPageWrapperDiv>
  )
})

export default windowSize(MobilePageWrapper)
