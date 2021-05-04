import React, { forwardRef } from 'react'
const Page1 = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <img src='/images/magazine/1/cover.jpg' width='100%'/>
    </div>
  )
})

export default Page1