import _ from 'lodash'

import React from 'react'
import { Link } from 'react-router'
import './HomeView.scss'

import { resolveLocalizationGet } from '../../../helpers/localize'

import HOME_VIEW_CONTENT from '../../../content/views/Home/home'
import { CURRENT_WORK } from '../../../content/views/Work/work'

export class HomeView extends React.Component {
  static propTypes = {
    sendMessage: React.PropTypes.func.isRequired
  }

  constructor (props) {
    super(props)

    this.state = {
      nameValid: true,
      emailValid: true,
      messageValid: true
    }

    this._sendMessage = this._sendMessage.bind(this)
  }

  _sendMessage (e) {
    e.preventDefault()

    const name = this.refs.letsWorkTogetherName.value.trim()
    const email = this.refs.letsWorkTogetherEmail.value.trim()
    const message = this.refs.letsWorkTogetherMessage.value.trim()

    const nameValid = this.validateEmail(name)
    const emailValid = this.validateName(email)
    const messageValid = this.validateMessage(message)

    this.setState({
      nameValid,
      emailValid,
      messageValid
    })

    if (!nameValid || !emailValid || !messageValid) return

    this.props.sendMessage({
      email,
      message
    })
  }

  // TODO: move to Container
  validateName (name) {
    return !_.isEmpty(name)
  }

  validateEmail (email) {
    return !_.isEmpty(email)
  }

  validateMessage (message) {
    return !_.isEmpty(message)
  }

  render () {
    return (
      <div className='view--home'>
        <div className='row'>
          <h2 className='display--inline-block align--vertical--middle'>
            {resolveLocalizationGet(HOME_VIEW_CONTENT, 'header.name')}
          </h2>
          <h5 className='view--home__header__location'>
            <i className='view--home__header__location__icon' />
            {resolveLocalizationGet(HOME_VIEW_CONTENT, 'header.location')}
          </h5>
        </div>
        <h4 className='row'>{resolveLocalizationGet(HOME_VIEW_CONTENT, 'header.jobTitle')}</h4>
        <div className='row'>
          <h5>{resolveLocalizationGet(HOME_VIEW_CONTENT, 'header.currentWorkHeader')}</h5>
          <ul>
            {_.map(CURRENT_WORK, (workContent) => {
              return (
                <li>
                  {_.get(workContent, 'link')
                    ? <Link to={_.get(workContent, 'link')}>
                      <div className='view--home__current_work__li__text'>
                        {[
                          resolveLocalizationGet(workContent, 'title'),
                          resolveLocalizationGet(workContent, 'shortDescription')
                        ].join(' - ')}
                      </div>
                    </Link>
                    : <a href={_.get(workContent, 'href')} target='_blank'>
                      <div className='view--home__current_work__li__text'>
                        {[
                          resolveLocalizationGet(workContent, 'title'),
                          resolveLocalizationGet(workContent, 'shortDescription')
                        ].join(' - ')}
                      </div>
                    </a>
                  }
                </li>
              )
            })}
          </ul>
        </div>
        <form onSubmit={this._sendMessage}>
          <div className='row'>
            <div className='four columns font-size--5 view--home__lets-work-together__title'>
              {resolveLocalizationGet(HOME_VIEW_CONTENT, 'header.workTogetherQuestion')}
            </div>
            <div className='four columns'>
              <label htmlFor='lets-work-together-email' className='view--home__lets-work-together__label'>
                {resolveLocalizationGet(HOME_VIEW_CONTENT, 'header.workTogetherEmailLabel')}
              </label>
              <input
                type='email'
                className='view--home__lets-work-together__input'
                ref='letsWorkTogetherEmail'
                id='lets-work-together-email'
                name='lets-work-together-email'
                placeholder={resolveLocalizationGet(HOME_VIEW_CONTENT, 'header.workTogetherEmailPlaceholder')}
              />
              <div className='view--home__lets-work-together__disclaimer'>
                {resolveLocalizationGet(HOME_VIEW_CONTENT, 'header.workTogetherEmailDisclaimer')}
              </div>
              {this.state.emailValid ? null
                : <div className='view--home__lets-work-together__error'>
                  {resolveLocalizationGet(HOME_VIEW_CONTENT, 'header.workTogetherEmailError')}
                </div>
              }
            </div>

            <div className='four columns'>
              <label htmlFor='lets-work-together-name' className='view--home__lets-work-together__label'>
                {resolveLocalizationGet(HOME_VIEW_CONTENT, 'header.workTogetherNameLabel')}
              </label>
              <input
                type='text'
                className='view--home__lets-work-together__input'
                ref='letsWorkTogetherName'
                id='lets-work-together-name'
                name='lets-work-together-name'
                placeholder={resolveLocalizationGet(HOME_VIEW_CONTENT, 'header.workTogetherNamePlaceholder')}
              />
              {this.state.nameValid ? null
                : <div className='view--home__lets-work-together__error'>
                  {resolveLocalizationGet(HOME_VIEW_CONTENT, 'header.workTogetherNameError')}
                </div>
              }
            </div>
          </div>
          <div className='row view--home__lets-work-together__message-section'>
            <div className='eight columns'>
              <label htmlFor='lets-work-together-message' className='view--home__lets-work-together__label'>
                {resolveLocalizationGet(HOME_VIEW_CONTENT, 'header.workTogetherMessageLabel')}
              </label>
              <textarea
                className='view--home__lets-work-together__input view--home__lets-work-together__textarea'
                ref='letsWorkTogetherMessage'
                id='lets-work-together-message'
                name='lets-work-together-message'
                placeholder={resolveLocalizationGet(HOME_VIEW_CONTENT, 'header.workTogetherMessagePlaceholder')}
              />
              {this.state.messageValid ? null
                : <div className='view--home__lets-work-together__error view--home__lets-work-together__error--mobile'>
                  {resolveLocalizationGet(HOME_VIEW_CONTENT, 'header.workTogetherMessageError')}
                </div>
              }
            </div>
            <div className='four columns'>
              <label
                htmlFor='lets-work-together-send-button'
                className='view--home__lets-work-together__label view--home__lets-work-together__label--hidden'
              >
                {resolveLocalizationGet(HOME_VIEW_CONTENT, 'header.workTogetherSendLabel')}
              </label>
              <button
                className='view--home__lets-work-together__input view--home__lets-work-together__send-button'
                type='submit'
                id='lets-work-together-send-button'
                name='lets-work-together-send-button'
              >
                Send
              </button>
              {this.state.messageValid ? null
                : <div className='view--home__lets-work-together__error view--home__lets-work-together__error--tablet'>
                  {resolveLocalizationGet(HOME_VIEW_CONTENT, 'header.workTogetherMessageError')}
                </div>
              }
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default HomeView
