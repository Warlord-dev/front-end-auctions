import React, { forwardRef } from 'react'

const Page = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      { props.children }
    </div>
  )
})

export default Page