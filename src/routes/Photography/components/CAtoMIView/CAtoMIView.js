import _ from 'lodash'

import './CAtoMIView.scss'

import React from 'react'

import {
  IMAGE_WIDTH_SMALL,
  IMAGE_WIDTH_MEDIUM,
  IMAGE_WIDTH_LARGE
} from 'constants/images/images'

import ANGELS_LANDING_RAILING_2048 from '../../assets/CAtoMI/9S2A7282-2.jpg'
import ANGELS_LANDING_RAILING_1024 from '../../assets/CAtoMI/9S2A7282.jpg'
import ANGELS_LANDING_RAILING_512 from '../../assets/CAtoMI/9S2A7282-3.jpg'

const ANGELS_LANDING_RAILING = {
  [IMAGE_WIDTH_SMALL]: ANGELS_LANDING_RAILING_512,
  [IMAGE_WIDTH_MEDIUM]: ANGELS_LANDING_RAILING_1024,
  [IMAGE_WIDTH_LARGE]: ANGELS_LANDING_RAILING_2048
}

import COLORADO_HIGHWAY_STOP_LAKE_2048 from '../../assets/CAtoMI/9S2A7756-2.jpg'
import COLORADO_HIGHWAY_STOP_LAKE_1024 from '../../assets/CAtoMI/9S2A7756.jpg'
import COLORADO_HIGHWAY_STOP_LAKE_512 from '../../assets/CAtoMI/9S2A7756-3.jpg'

const COLORADO_HIGHWAY_STOP_LAKE = {
  [IMAGE_WIDTH_SMALL]: COLORADO_HIGHWAY_STOP_LAKE_512,
  [IMAGE_WIDTH_MEDIUM]: COLORADO_HIGHWAY_STOP_LAKE_1024,
  [IMAGE_WIDTH_LARGE]: COLORADO_HIGHWAY_STOP_LAKE_2048
}

// import ARCHES_CANYON_SIDE_DIAGONAL_2048 from '../../assets/CAtoMI/9S2A7733-3.jpg'
// import ARCHES_CANYON_SIDE_DIAGONAL_1024 from '../../assets/CAtoMI/9S2A7733.jpg'
// import ARCHES_CANYON_SIDE_DIAGONAL_512 from '../../assets/CAtoMI/9S2A7733-2.jpg'
//
// const ARCHES_CANYON_SIDE_DIAGONAL = {
//   [IMAGE_WIDTH_SMALL]: ARCHES_CANYON_SIDE_DIAGONAL_512,
//   [IMAGE_WIDTH_MEDIUM]: ARCHES_CANYON_SIDE_DIAGONAL_1024,
//   [IMAGE_WIDTH_LARGE]: ARCHES_CANYON_SIDE_DIAGONAL_2048
// }

import ARCHES_DOUBLE_ARCH_2048 from '../../assets/CAtoMI/9S2A7691-3.jpg'
import ARCHES_DOUBLE_ARCH_1024 from '../../assets/CAtoMI/9S2A7691.jpg'
import ARCHES_DOUBLE_ARCH_512 from '../../assets/CAtoMI/9S2A7691-2.jpg'

const ARCHES_DOUBLE_ARCH = {
  [IMAGE_WIDTH_SMALL]: ARCHES_DOUBLE_ARCH_512,
  [IMAGE_WIDTH_MEDIUM]: ARCHES_DOUBLE_ARCH_1024,
  [IMAGE_WIDTH_LARGE]: ARCHES_DOUBLE_ARCH_2048
}

import ARCHES_TREE_CAVE_2048 from '../../assets/CAtoMI/9S2A7670-2.jpg'
import ARCHES_TREE_CAVE_1024 from '../../assets/CAtoMI/9S2A7670.jpg'
import ARCHES_TREE_CAVE_512 from '../../assets/CAtoMI/9S2A7670-3.jpg'

const ARCHES_TREE_CAVE = {
  [IMAGE_WIDTH_SMALL]: ARCHES_TREE_CAVE_512,
  [IMAGE_WIDTH_MEDIUM]: ARCHES_TREE_CAVE_1024,
  [IMAGE_WIDTH_LARGE]: ARCHES_TREE_CAVE_2048
}

import ARCHES_MONSTER_ARCH_2048 from '../../assets/CAtoMI/9S2A7636-3.jpg'
import ARCHES_MONSTER_ARCH_1024 from '../../assets/CAtoMI/9S2A7636.jpg'
import ARCHES_MONSTER_ARCH_512 from '../../assets/CAtoMI/9S2A7636-2.jpg'

const ARCHES_MONSTER_ARCH = {
  [IMAGE_WIDTH_SMALL]: ARCHES_MONSTER_ARCH_512,
  [IMAGE_WIDTH_MEDIUM]: ARCHES_MONSTER_ARCH_1024,
  [IMAGE_WIDTH_LARGE]: ARCHES_MONSTER_ARCH_2048
}

import CANYONLANDS_FASHION_STATEMENT_2048 from '../../assets/CAtoMI/9S2A7567-3.jpg'
import CANYONLANDS_FASHION_STATEMENT_1024 from '../../assets/CAtoMI/9S2A7567.jpg'
import CANYONLANDS_FASHION_STATEMENT_512 from '../../assets/CAtoMI/9S2A7567-2.jpg'

const CANYONLANDS_FASHION_STATEMENT = {
  [IMAGE_WIDTH_SMALL]: CANYONLANDS_FASHION_STATEMENT_512,
  [IMAGE_WIDTH_MEDIUM]: CANYONLANDS_FASHION_STATEMENT_1024,
  [IMAGE_WIDTH_LARGE]: CANYONLANDS_FASHION_STATEMENT_2048
}

import CANYONLANDS_HORIZON_2048 from '../../assets/CAtoMI/9S2A7560-3.jpg'
import CANYONLANDS_HORIZON_1024 from '../../assets/CAtoMI/9S2A7560.jpg'
import CANYONLANDS_HORIZON_512 from '../../assets/CAtoMI/9S2A7560-2.jpg'

const CANYONLANDS_HORIZON = {
  [IMAGE_WIDTH_SMALL]: CANYONLANDS_HORIZON_512,
  [IMAGE_WIDTH_MEDIUM]: CANYONLANDS_HORIZON_1024,
  [IMAGE_WIDTH_LARGE]: CANYONLANDS_HORIZON_2048
}

import CAPITOL_REEF_SUNSET_ROCK_2048 from '../../assets/CAtoMI/9S2A7498-2.jpg'
import CAPITOL_REEF_SUNSET_ROCK_1024 from '../../assets/CAtoMI/9S2A7498.jpg'
import CAPITOL_REEF_SUNSET_ROCK_512 from '../../assets/CAtoMI/9S2A7498-3.jpg'

const CAPITOL_REEF_SUNSET_ROCK = {
  [IMAGE_WIDTH_SMALL]: CAPITOL_REEF_SUNSET_ROCK_512,
  [IMAGE_WIDTH_MEDIUM]: CAPITOL_REEF_SUNSET_ROCK_1024,
  [IMAGE_WIDTH_LARGE]: CAPITOL_REEF_SUNSET_ROCK_2048
}

import CAPITOL_REEF_BURNT_ROCK_2048 from '../../assets/CAtoMI/9S2A7465-3.jpg'
import CAPITOL_REEF_BURNT_ROCK_1024 from '../../assets/CAtoMI/9S2A7465.jpg'
import CAPITOL_REEF_BURNT_ROCK_512 from '../../assets/CAtoMI/9S2A7465-2.jpg'

const CAPITOL_REEF_BURNT_ROCK = {
  [IMAGE_WIDTH_SMALL]: CAPITOL_REEF_BURNT_ROCK_512,
  [IMAGE_WIDTH_MEDIUM]: CAPITOL_REEF_BURNT_ROCK_1024,
  [IMAGE_WIDTH_LARGE]: CAPITOL_REEF_BURNT_ROCK_2048
}

import ZION_LONG_ROAD_2048 from '../../assets/CAtoMI/9S2A7379-2.jpg'
import ZION_LONG_ROAD_1024 from '../../assets/CAtoMI/9S2A7379.jpg'
import ZION_LONG_ROAD_512 from '../../assets/CAtoMI/9S2A7379-3.jpg'

const ZION_LONG_ROAD = {
  [IMAGE_WIDTH_SMALL]: ZION_LONG_ROAD_512,
  [IMAGE_WIDTH_MEDIUM]: ZION_LONG_ROAD_1024,
  [IMAGE_WIDTH_LARGE]: ZION_LONG_ROAD_2048
}

import ZION_RIVER_2048 from '../../assets/CAtoMI/9S2A7374-2.jpg'
import ZION_RIVER_1024 from '../../assets/CAtoMI/9S2A7374.jpg'
import ZION_RIVER_512 from '../../assets/CAtoMI/9S2A7374-3.jpg'

const ZION_RIVER = {
  [IMAGE_WIDTH_SMALL]: ZION_RIVER_512,
  [IMAGE_WIDTH_MEDIUM]: ZION_RIVER_1024,
  [IMAGE_WIDTH_LARGE]: ZION_RIVER_2048
}

import ZION_SUNSET_OVER_CLIFF_2048 from '../../assets/CAtoMI/9S2A7365-2.jpg'
import ZION_SUNSET_OVER_CLIFF_1024 from '../../assets/CAtoMI/9S2A7365.jpg'
import ZION_SUNSET_OVER_CLIFF_512 from '../../assets/CAtoMI/9S2A7365-3.jpg'

const ZION_SUNSET_OVER_CLIFF = {
  [IMAGE_WIDTH_SMALL]: ZION_SUNSET_OVER_CLIFF_512,
  [IMAGE_WIDTH_MEDIUM]: ZION_SUNSET_OVER_CLIFF_1024,
  [IMAGE_WIDTH_LARGE]: ZION_SUNSET_OVER_CLIFF_2048
}

// import HORSESHOE_BEND_2048 from '../../assets/CAtoMI/9S2A7225-3.jpg'
// import HORSESHOE_BEND_1024 from '../../assets/CAtoMI/9S2A7225.jpg'
// import HORSESHOE_BEND_512 from '../../assets/CAtoMI/9S2A7225-2.jpg'
//
// const HORSESHOE_BEND = {
//   [IMAGE_WIDTH_SMALL]: HORSESHOE_BEND_512,
//   [IMAGE_WIDTH_MEDIUM]: HORSESHOE_BEND_1024,
//   [IMAGE_WIDTH_LARGE]: HORSESHOE_BEND_2048
// }

const UTAH_COLORADO = [
  ANGELS_LANDING_RAILING,
  // ARCHES_CANYON_SIDE_DIAGONAL,
  ARCHES_DOUBLE_ARCH,
  ZION_SUNSET_OVER_CLIFF,
  // HORSESHOE_BEND,
  CAPITOL_REEF_SUNSET_ROCK,
  ARCHES_TREE_CAVE,
  CAPITOL_REEF_BURNT_ROCK,
  ZION_LONG_ROAD,
  ARCHES_MONSTER_ARCH,
  ZION_RIVER,
  CANYONLANDS_FASHION_STATEMENT,
  CANYONLANDS_HORIZON,
  COLORADO_HIGHWAY_STOP_LAKE
]

export const utahColoradoPreview = {
  title: 'Utah and Colorado',
  image: UTAH_COLORADO[0],
  linkTo: '/photography/utah-colorado'
}

export class CAtoMIView extends React.Component {
  static propTypes = {}
  render () {
    return (
      <div className='view--photography'>
        {_.map(UTAH_COLORADO, (image, index) => (
          <div className='view--photography__gallery__image-wrapper' key={index}>
            <img className='view--photography__gallery__image' src={image[IMAGE_WIDTH_SMALL]} />
          </div>
        ))}
      </div>
    )
  }
}

export default CAtoMIView