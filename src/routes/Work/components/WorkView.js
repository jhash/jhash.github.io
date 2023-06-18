import _ from 'lodash'

import React from 'react'
import { Link } from 'react-router'

import './WorkView.scss'

import { resolveLocalizationGet } from 'helpers/localize'

import { ALL_WORK_SOFTWARE, WORK_VIEW_CONTENT } from 'content/views/Work/work'

import WorkCell from 'components/WorkCell/WorkCell'

export const WorkView = (props) => (
  <div className='view--work container'>
    <div className='row'>
      <div className='view--work__tab twelve columns text-left'>
        <div className='view--work__tab__table'>
          <h4 className='view--work__tab__table__section-title'>{
              resolveLocalizationGet(WORK_VIEW_CONTENT, 'softwareWorkTitle')
          }</h4>
          <div>
            {ALL_WORK_SOFTWARE.map((workContent, index) => {
              const textContent = <WorkCell
                key={`view-work-work-cell-${index}`}
                rowOneLeft={resolveLocalizationGet(workContent, 'company')}
                rowOneRight={workContent.location.join(', ')}
                rowTwoLeft={resolveLocalizationGet(workContent, 'title')}
                rowTwoRight={_.map(_.sortBy(workContent.dates, 'start'), (date, index) => {
                  return (
                    <span key={`view-work-date-${index}`}>
                      {date.start
                        ? <span>
                          {date.start.toLocaleDateString(undefined, { year: 'numeric', month: 'long' })}
                          {!date.end ? ' to present' : null}
                        </span>
                      : null}
                      {date.end
                        ? <span>
                          {date.start ? ' - ' : null}
                          {date.end.toLocaleDateString(undefined, { year: 'numeric', month: 'long' })}
                        </span>
                      : null}
                      {workContent.dates.length > 1 && index === 0
                        ? ', '
                      : null}
                    </span>
                  )
                })}
                rowThree={
                  <span className='view--work__description'>
                    {resolveLocalizationGet(workContent, 'projectNames')}
                    {workContent.shortDescription
                      ? ` - ${resolveLocalizationGet(workContent, 'shortDescription')}`
                      : ''
                    }
                  </span>
                }
                rowFour={
                  <span className='view--work__description'>
                    <ul className='view--work__description__list'>
                      {resolveLocalizationGet(workContent, 'workDescription').map((descriptionLine, key) =>
                        <li key={key} className='view--work__description__list__item'>{descriptionLine}</li>
                      )}
                    </ul>
                  </span>
                }
                rowFive={
                  <div className='view--work__tag-wrapper'>
                    {_.map(workContent.tags, (tag, index) => (
                      <span className='view--work__tag' key={`view-work-tag-${index}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                }
              />

              return _.get(workContent, 'link')
                ? <Link
                  className='work-cell-link'
                  key={`work-${index}`}
                  to={_.get(workContent, 'link')}
                >
                  {textContent}
                </Link> : <a
                  className='work-cell-link'
                  key={`work-${index}`}
                  href={_.get(workContent, 'href')}
                  target='_blank'
                >
                  {textContent}
                </a>
            })}
          </div>
        </div>
      </div>
    </div>
  </div>
)

WorkView.propTypes = {}

export default WorkView
