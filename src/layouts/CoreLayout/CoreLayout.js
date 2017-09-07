import _ from 'lodash'

import React from 'react'

import './CoreLayout.scss'
import 'styles/core.scss'

import Header from 'components/Header/Header'

import { SOCIAL_LINKS } from 'content/me'

export const CoreLayout = ({ children }) => (
  <div>
    <Header />
    <div className='container text-center core-layout__viewport'>
      {children}
    </div>
    <div className='footer'>
      <div className='footer__link-container'>
        {_.map(SOCIAL_LINKS, (link) => {
          return (
            <a className='footer__link--social' href={link.href} key={link.title} title={link.title} target='_blank'>
              <i className={['footer__link--social__icon', link.iconClass].join(' ')} />
            </a>
          )
        })}
      </div>
    </div>
  </div>
)

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default CoreLayout
