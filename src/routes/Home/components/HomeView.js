import React from 'react'
import './HomeView.scss'

import { resolveLocalizationGet } from '../../../helpers/localize'

import HOME_VIEW_CONTENT from '../../../content/views/Home/home'

export const HomeView = () => (
  <div className='view--home'>
    <div className='row'>
      <h2 className='display--inline-block align--vertical--middle'>
        {resolveLocalizationGet(HOME_VIEW_CONTENT, 'header.name')}
      </h2>
      <h5 className='view--home__header__location'>
        {resolveLocalizationGet(HOME_VIEW_CONTENT, 'header.location')}
      </h5>
    </div>
    <h4 className='row'>{resolveLocalizationGet(HOME_VIEW_CONTENT, 'header.jobTitle')}</h4>
    <h5 className='row'>{resolveLocalizationGet(HOME_VIEW_CONTENT, 'header.currentWorkHeader')}</h5>
    <div className='row'>
      <div className='four columns font-size--'>
        {resolveLocalizationGet(HOME_VIEW_CONTENT, 'header.workTogetherQuestion')}
      </div>
      <div className='four columns'>
        <input
          type='email'
          className='view--home__lets-work-together__input'
          id='lets-work-together'
          name='lets-work-together'
          placeholder={resolveLocalizationGet(HOME_VIEW_CONTENT, 'header.workTogetherEmailPlaceholder')}
        />
        <label htmlFor='lets-work-together' className='view--home__lets-work-together__label'>
          {resolveLocalizationGet(HOME_VIEW_CONTENT, 'header.workTogetherEmailDisclaimer')}
        </label>
      </div>
      <div className='four columns'>
        <input
          type='text'
          className='view--home__lets-work-together__input'
          id='lets-work-together-message'
          name='lets-work-together-message'
          placeholder={resolveLocalizationGet(HOME_VIEW_CONTENT, 'header.workTogetherMessagePlaceholder')}
        />
      </div>
    </div>
  </div>
)

export default HomeView
