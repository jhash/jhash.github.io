import _ from 'lodash'

import './EurotripView.scss'

import React from 'react'

import {
  IMAGE_WIDTH_SMALL
} from 'constants/images/images'

import ONE_512 from '../../assets/Eurotrip/9S2A8480.jpg' // 512
import TWO_512 from '../../assets/Eurotrip/9S2A8670.jpg' // 512
import THREE_512 from '../../assets/Eurotrip/9S2A9012.jpg' // 512
import FOUR_512 from '../../assets/Eurotrip/9S2A9440.jpg' // 512
import FIVE_512 from '../../assets/Eurotrip/9S2A9823.jpg' // 512
import SIX_512 from '../../assets/Eurotrip/9S2A9972.jpg' // 512
import SEVEN_512 from '../../assets/Eurotrip/9S2A8482.jpg' // 512
import EIGHT_512 from '../../assets/Eurotrip/9S2A8679.jpg' // 512
import NINE_512 from '../../assets/Eurotrip/9S2A9027.jpg' // 512
import TEN_512 from '../../assets/Eurotrip/9S2A9460.jpg' // 512
import ELEVEN_512 from '../../assets/Eurotrip/9S2A9829.jpg' // 512
import TWELVE_512 from '../../assets/Eurotrip/9S2A9995.jpg' // 512
import THIRTEEN_512 from '../../assets/Eurotrip/9S2A8552.jpg' // 512
import FOURTEEN_512 from '../../assets/Eurotrip/9S2A8694.jpg' // 512
import FIFTEEN_512 from '../../assets/Eurotrip/9S2A9031.jpg' // 512
import SIXTEEN_512 from '../../assets/Eurotrip/9S2A9654.jpg' // 512
import SEVENTEEN_512 from '../../assets/Eurotrip/9S2A9868.jpg' // 512
import EIGHTEEN_512 from '../../assets/Eurotrip/9S2A8600.jpg' // 512
import NINETEEN_512 from '../../assets/Eurotrip/9S2A8698.jpg' // 512
import TWENTY_512 from '../../assets/Eurotrip/9S2A9037.jpg' // 512
import TWENTYONE_512 from '../../assets/Eurotrip/9S2A9680.jpg' // 512
import TWENTYTWO_512 from '../../assets/Eurotrip/9S2A9893.jpg' // 512
import TWENTYTHREE_512 from '../../assets/Eurotrip/9S2A8610.jpg' // 512
import TWENTYFOUR_512 from '../../assets/Eurotrip/9S2A8873.jpg' // 512
import TWENTYFIVE_512 from '../../assets/Eurotrip/9S2A9106.jpg' // 512
import TWENTYSIX_512 from '../../assets/Eurotrip/9S2A9725.jpg' // 512
import TWENTYSEVEN_512 from '../../assets/Eurotrip/9S2A9913.jpg' // 512
import TWENTYEIGHT_512 from '../../assets/Eurotrip/9S2A8658.jpg' // 512
import TWENTYNINE_512 from '../../assets/Eurotrip/9S2A8992.jpg' // 512
import THIRTY_512 from '../../assets/Eurotrip/9S2A9131.jpg' // 512
// import THIRTYONE from '../../assets/Eurotrip/9S2A9774.jpg' // 512
// import THIRTYTWO from '../../assets/Eurotrip/9S2A9941.jpg' // 512

const ONE = {
  [IMAGE_WIDTH_SMALL]: ONE_512
}
const TWO = {
  [IMAGE_WIDTH_SMALL]: TWO_512
}
const THREE = {
  [IMAGE_WIDTH_SMALL]: THREE_512
}
const FOUR = {
  [IMAGE_WIDTH_SMALL]: FOUR_512
}
const FIVE = {
  [IMAGE_WIDTH_SMALL]: FIVE_512
}
const SIX = {
  [IMAGE_WIDTH_SMALL]: SIX_512
}
const SEVEN = {
  [IMAGE_WIDTH_SMALL]: SEVEN_512
}
const EIGHT = {
  [IMAGE_WIDTH_SMALL]: EIGHT_512
}
const NINE = {
  [IMAGE_WIDTH_SMALL]: NINE_512
}
const TEN = {
  [IMAGE_WIDTH_SMALL]: TEN_512
}
const ELEVEN = {
  [IMAGE_WIDTH_SMALL]: ELEVEN_512
}
const TWELVE = {
  [IMAGE_WIDTH_SMALL]: TWELVE_512
}
const THIRTEEN = {
  [IMAGE_WIDTH_SMALL]: THIRTEEN_512
}
const FOURTEEN = {
  [IMAGE_WIDTH_SMALL]: FOURTEEN_512
}
const FIFTEEN = {
  [IMAGE_WIDTH_SMALL]: FIFTEEN_512
}
const SIXTEEN = {
  [IMAGE_WIDTH_SMALL]: SIXTEEN_512
}
const SEVENTEEN = {
  [IMAGE_WIDTH_SMALL]: SEVENTEEN_512
}
const EIGHTEEN = {
  [IMAGE_WIDTH_SMALL]: EIGHTEEN_512
}
const NINETEEN = {
  [IMAGE_WIDTH_SMALL]: NINETEEN_512
}
const TWENTY = {
  [IMAGE_WIDTH_SMALL]: TWENTY_512
}
const TWENTYONE = {
  [IMAGE_WIDTH_SMALL]: TWENTYONE_512
}
const TWENTYTWO = {
  [IMAGE_WIDTH_SMALL]: TWENTYTWO_512
}
const TWENTYTHREE = {
  [IMAGE_WIDTH_SMALL]: TWENTYTHREE_512
}
const TWENTYFOUR = {
  [IMAGE_WIDTH_SMALL]: TWENTYFOUR_512
}
const TWENTYFIVE = {
  [IMAGE_WIDTH_SMALL]: TWENTYFIVE_512
}
const TWENTYSIX = {
  [IMAGE_WIDTH_SMALL]: TWENTYSIX_512
}
const TWENTYSEVEN = {
  [IMAGE_WIDTH_SMALL]: TWENTYSEVEN_512
}
const TWENTYEIGHT = {
  [IMAGE_WIDTH_SMALL]: TWENTYEIGHT_512
}
const TWENTYNINE = {
  [IMAGE_WIDTH_SMALL]: TWENTYNINE_512
}
const THIRTY = {
  [IMAGE_WIDTH_SMALL]: THIRTY_512
}
// const THIRTYONE = {
//   [IMAGE_WIDTH_SMALL]: THIRTYONE_512
// }
// const THIRTYTWO = {
//   [IMAGE_WIDTH_SMALL]: THIRTYTWO_512
// }

const EUROTRIP_2017 = [
  ONE,
  TWO,
  THREE,
  FOUR,
  FIVE,
  SIX,
  SEVEN,
  EIGHT,
  NINE,
  TEN,
  ELEVEN,
  TWELVE,
  THIRTEEN,
  FOURTEEN,
  FIFTEEN,
  SIXTEEN,
  SEVENTEEN,
  EIGHTEEN,
  NINETEEN,
  TWENTY,
  TWENTYONE,
  TWENTYTWO,
  TWENTYTHREE,
  TWENTYFOUR,
  TWENTYFIVE,
  TWENTYSIX,
  TWENTYSEVEN,
  TWENTYEIGHT,
  TWENTYNINE,
  THIRTY
]

export const eurotripPreview = {
  title: 'Eurotrip - Summer 2017',
  image: EUROTRIP_2017[0],
  linkTo: '/photography/europe'
}

export class EurotripView extends React.Component {
  static propTypes = {}
  render () {
    return (
      <div className='view--photography'>
        {_.map(EUROTRIP_2017, (image, index) => (
          <div className='view--photography__gallery__image-wrapper' key={index}>
            <img className='view--photography__gallery__image' src={image[IMAGE_WIDTH_SMALL]} />
          </div>
        ))}
      </div>
    )
  }
}

export default EurotripView
