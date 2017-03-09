import './MusicView.scss'

import React from 'react'
import { Link } from 'react-router'

export class MusicView extends React.Component {
  static propTypes = {}
  render () {
    return (
      <div className='view--music row'>
        <Link to='music/tabitha'>
          Tabitha
        </Link>
      </div>
    )
  }
}

export default MusicView
