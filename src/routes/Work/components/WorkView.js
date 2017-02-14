import _ from 'lodash'

import React from 'react'
import { Link } from 'react-router'

import './WorkView.scss'

import { resolveLocalizationGet } from '../../../helpers/localize'

import { PREVIOUS_EMPLOYED_WORK } from '../../../content/views/Work/work'

export const WorkView = (props) => (
  <div className='view--work row'>
    <div className='view--work__tab twelve columns text-left'>
      {PREVIOUS_EMPLOYED_WORK.map((workContent, index) => {
        const textContent = <li className='view--home__current_work__li__text'>
          {[
            resolveLocalizationGet(workContent, 'title'),
            resolveLocalizationGet(workContent, 'shortDescription')
          ].join(' - ')}
        </li>

        return _.get(workContent, 'link')
          ? <Link key={`work-${index}`} to={_.get(workContent, 'link')}>{textContent}</Link>
          : <a key={`work-${index}`} href={_.get(workContent, 'href')} target='_blank'>{textContent}</a>
      })}
    </div>
  </div>
)

WorkView.propTypes = {}

export default WorkView
