import _ from 'lodash'

import React from 'react'

import './CoreLayout.scss'
import 'styles/core.scss'

import Header from 'components/Header/Header'

import { SOCIAL_LINKS } from 'content/me'

import ME_WITH_FLOWERS_CUT_OUT from 'static/images/MeWithFlowersCutOut.png'

export class CoreLayout extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }
  static propTypes = {
    children: React.PropTypes.element.isRequired
  }
  coreLayoutViewportClasses () {
    const classes = ['core-layout__viewport']
    if (this.context.router.isActive('/', null, true)) classes.push('core-layout__viewport--home')
    return classes.join(' ')
  }
  render () {
    return (
      <div style={{ height: '100%' }}>
        <Header />
        <div className={this.coreLayoutViewportClasses()}>
          {this.props.children}
        </div>
        <div className='footer'>
          {this.context.router.isActive('/', null, true)
            ? <div className='footer__me-cut-out-image-wrapper'>
              <img className='footer__me-cut-out-image' src={ME_WITH_FLOWERS_CUT_OUT} />
            </div>
          : null}
          <div className='footer__link-container'>
            {_.map(SOCIAL_LINKS, (link) => {
              return (
                <a
                  className='footer__link--social'
                  href={link.href}
                  key={link.title}
                  title={link.title}
                  target='_blank'
                >
                  <i className={['footer__link--social__icon', link.iconClass].join(' ')} />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default CoreLayout
