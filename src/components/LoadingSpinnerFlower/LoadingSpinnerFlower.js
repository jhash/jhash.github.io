import _ from 'lodash'

import React from 'react'
import './LoadingSpinnerFlower.scss'

export const LoadingSpinnerFlower = () => (
  <div className='loading-spinner loading-spinner--flower'>{_.times(7).map((value, key) =>
    <span className='loading-spinner--flower__span' key={key} />
  )}</div>
)

export default LoadingSpinnerFlower
