import React from 'react'
// import classes from './HomeView.scss'

import { resolveLocalizationGet } from '../../../helpers/localize'

import HOME_VIEW_CONTENT from '../../../content/views/Home/home'

export const HomeView = () => (
  <div className='view--home'>
    <h3>{resolveLocalizationGet(HOME_VIEW_CONTENT, 'header.title')}</h3>
    <h5>{resolveLocalizationGet(HOME_VIEW_CONTENT, 'header.subtitle')}</h5>
    <p>{resolveLocalizationGet(HOME_VIEW_CONTENT, 'header.paragraph')}</p>
  </div>
)

export default HomeView
