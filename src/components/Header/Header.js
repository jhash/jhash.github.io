import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'

export class Header extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }
  render () {
    return (
      <div className='header'>
        <IndexLink to='/' className='logo-h' activeClassName='logo-h--active'>
          <span className='logo-h__text'>H</span>
        </IndexLink>
        <div className='route-container'>
          <div className='route-row'>
            <IndexLink to='/' className='route' activeClassName='route--active'>
              Home
            </IndexLink>
            <Link to='/work' className='route' activeClassName='route--active'>
              Work
            </Link>
            <Link to='/photography' className='route' activeClassName='route--active'>
              Photography
            </Link>
            {
            // <Link to='/software' className='route' activeClassName='route--active'>
            //   Software
            // </Link>
            // <Link to='/film' className='route' activeClassName='route--active'>
            //   Film
            // </Link>
            // <Link to='/design' className='route' activeClassName='route--active'>
            //   Design
            // </Link>
            // <Link to='/music' className='route' activeClassName='route--active'>
            //   Music
            // </Link>
            // <Link to='/me' className='route' activeClassName='route--active'>
            //   Me
            // </Link>
            // <Link to='/blog' className='route' activeClassName='route--active'>
            //   Blog
            // </Link>
            }
          </div>
          {this.context.router.isActive('photography')
            ? <div className='route-row'>
              <Link to='/photography/utah-colorado' className='route route--subroute' activeClassName='route--active'>
                Utah and Colorado
              </Link>
              <Link to='/photography/europe' className='route route--subroute' activeClassName='route--active'>
                Europe
              </Link>
            </div>
          : null}
        </div>
      </div>
    )
  }
}

export default Header
