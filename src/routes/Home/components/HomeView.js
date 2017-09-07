import _ from 'lodash'

import React from 'react'
import { Link } from 'react-router'
import './HomeView.scss'

import { resolveLocalizationGet } from 'helpers/localize'

import LoadingSpinnerFlower from 'components/LoadingSpinnerFlower/LoadingSpinnerFlower'
import EllipseDotAnimation from 'components/EllipseDotAnimation'

import HOME_VIEW_CONTENT from 'content/views/Home/home'
import { CURRENT_WORK_SOFTWARE } from 'content/views/Work/work'

export class HomeView extends React.Component {
  static propTypes = {
    sendMessage: React.PropTypes.func.isRequired
  }

  constructor (props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      message: ''
    }

    this._sendMessage = this._sendMessage.bind(this)
    this._onNameChange = this._onNameChange.bind(this)
    this._onEmailChange = this._onEmailChange.bind(this)
    this._onMessageChange = this._onMessageChange.bind(this)
  }

  _onNameChange (event) {
    this.onMessageFormChange()

    this.setState({
      name: event.target.value,
      nameValid: this.validateName(event.target.value)
    })
  }
  _onEmailChange (event) {
    this.onMessageFormChange()

    this.setState({
      email: event.target.value,
      emailValid: this.validateEmail(event.target.value)
    })
  }
  _onMessageChange (event) {
    this.onMessageFormChange()

    this.setState({
      message: event.target.value,
      messageValid: this.validateMessage(event.target.value)
    })
  }

  _sendMessage (e) {
    e.preventDefault()

    const nameValid = this.validateName(this.state.name)
    const emailValid = this.validateEmail(this.state.email)
    const messageValid = this.validateMessage(this.state.message)

    this.setState({
      nameValid,
      emailValid,
      messageValid,
      submitIntent: true
    })

    if (!nameValid || !emailValid || !messageValid) return

    this.setState({
      submitIntent: undefined,
      messageSending: true,
      loadingSpinnerHeight: this.refs.letsWorkTogetherForm.clientHeight
    })

    this.props.sendMessage({
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    }).then(() => {
      this.setState({
        messageSending: false,
        messageSentSuccessfully: true,
        loadingSpinnerHeight: undefined
      })
    }).catch(() => {
      this.setState({
        messageSending: false,
        messageSentSuccessfully: false,
        loadingSpinnerHeight: undefined
      })
    })
  }

  onMessageFormChange () {
    this.setState({
      messageSentSuccessfully: undefined
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
          <h2 className='view--home__header__name'>
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
            {_.map(CURRENT_WORK_SOFTWARE, (workContent, index) => {
              const textContent = <li className='view--home__current_work__li__text'>
                {[
                  resolveLocalizationGet(workContent, 'title'),
                  resolveLocalizationGet(workContent, 'shortDescription')
                ].join(' - ')}
              </li>

              return _.get(workContent, 'link')
                ? <Link key={`current-work-${index}`} to={_.get(workContent, 'link')}>{textContent}</Link>
                : <a key={`current-work-${index}`} href={_.get(workContent, 'href')} target='_blank'>{textContent}</a>
            })}
          </ul>
        </div>
        {!this.state.messageSending && this.state.messageSentSuccessfully !== true
          ? <form onSubmit={this._sendMessage} ref='letsWorkTogetherForm'>
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
                  value={this.state.email}
                  onChange={this._onEmailChange}
                />
                <div className='view--home__lets-work-together__disclaimer'>
                  {resolveLocalizationGet(HOME_VIEW_CONTENT, 'header.workTogetherEmailDisclaimer')}
                </div>
                {this.state.emailValid === false && this.state.submitIntent
                  ? <div className='view--home__lets-work-together__error'>
                    {resolveLocalizationGet(HOME_VIEW_CONTENT, 'header.workTogetherEmailError')}
                  </div>
                : null}
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
                  value={this.state.name}
                  onChange={this._onNameChange}
                />
                {this.state.nameValid === false && this.state.submitIntent
                  ? <div className='view--home__lets-work-together__error'>
                    {resolveLocalizationGet(HOME_VIEW_CONTENT, 'header.workTogetherNameError')}
                  </div>
                : null}
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
                  value={this.state.message}
                  onChange={this._onMessageChange}
                />
                {this.state.messageValid === false && this.state.submitIntent
                  ? <div className='view--home__lets-work-together__error view--home__lets-work-together__error--mobile'>
                    {resolveLocalizationGet(HOME_VIEW_CONTENT, 'header.workTogetherMessageError')}
                  </div>
                : null}
                {this.state.messageSentSuccessfully === false
                  ? <div className='view--home__lets-work-together__error'>
                    {resolveLocalizationGet(HOME_VIEW_CONTENT, 'header.workTogetherMessageSendError')}
                  </div>
                : null}
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
                  {resolveLocalizationGet(HOME_VIEW_CONTENT, 'header.workTogetherSendLabel')}
                </button>
                {this.state.messageValid === false && this.state.submitIntent
                  ? <div className={'view--home__lets-work-together__error view--home__lets-work-together__error--tablet'}>
                    {resolveLocalizationGet(HOME_VIEW_CONTENT, 'header.workTogetherMessageError')}
                  </div>
                : null}
              </div>
            </div>
          </form>
        : null}
        {this.state.messageSending
          ? <div className='row view--home__loading' style={{ height: this.state.loadingSpinnerHeight }}>
            <div className='view--home__loading__spinner-wrapper'>
              <LoadingSpinnerFlower />
            </div>
            <div className='view--home__loading__text'>
              {resolveLocalizationGet(HOME_VIEW_CONTENT, 'header.workTogetherMessageSending')}
              <EllipseDotAnimation />
            </div>
          </div>
        : null}
        {this.state.messageSentSuccessfully === true
          ? <h6 className='view--home__message-sent'>
            <i className='view--home__message-sent__icon' />
            {resolveLocalizationGet(HOME_VIEW_CONTENT, 'header.workTogetherMessageSent')}
          </h6>
        : null}
      </div>
    )
  }
}

export default HomeView
