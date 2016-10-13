import React from 'react'
import Header from '../../components/Header'
import './CoreLayout.scss'
import '../../styles/core.scss'

export const CoreLayout = ({ children }) => (
  <div>
    <Header />
    <div className='container text-center core-layout__viewport'>
      {children}
    </div>
    <div className='footer'>
      <a className='footer__link--social' href='facebook.com' target='_blank'><i className='footer__link--social__icon mdi mdi-facebook' /></a>
      <a className='footer__link--social' href='twitter.com' target='_blank'><i className='footer__link--social__icon mdi mdi-twitter' /></a>
      <a className='footer__link--social' href='linkedin.com' target='_blank'><i className='footer__link--social__icon mdi mdi-linkedin' /></a>
      <a className='footer__link--social' href='stackoverflow.com' target='_blank'><i className='footer__link--social__icon mdi mdi-stackoverflow' /></a>
      <a className='footer__link--social' href='github.com' target='_blank'><i className='footer__link--social__icon mdi mdi-github-circle' /></a>
    </div>
  </div>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
