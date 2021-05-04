import React, { forwardRef } from 'react'
const CoverPage = forwardRef((props, ref) => {
  return (
    <div ref={ref} data-density="hard">
      <img src='/images/magazine/1/cover.jpg' width='100%'/>
    </div>
  )
})

export default CoverPage