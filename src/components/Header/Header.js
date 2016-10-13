import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'

export const Header = () => (
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
        <Link to='/software' className='route' activeClassName='route--active'>
          Software
        </Link>
        <Link to='/counter' className='route' activeClassName='route--active'>
          Photography
        </Link>
        <Link to='/counter' className='route' activeClassName='route--active'>
          Film
        </Link>
        <Link to='/counter' className='route' activeClassName='route--active'>
          Design
        </Link>
        <Link to='/counter' className='route' activeClassName='route--active'>
          Music
        </Link>
        <Link to='/counter' className='route' activeClassName='route--active'>
          Me
        </Link>
        <Link to='/counter' className='route' activeClassName='route--active'>
          Blog
        </Link>
      </div>
    </div>
  </div>
)

export default Header
