import _ from 'lodash'

import React from 'react'
import { Link } from 'react-router'

import './WorkView.scss'

import { resolveLocalization, resolveLocalizationGet } from 'helpers/localize'

import { ALL_EMPLOYED_WORK, ALL_PERSONAL_WORK, WORK_VIEW_CONTENT } from 'content/views/Work/work'
import { TAGS_LABEL } from 'content/tags'

import WorkCell from 'components/WorkCell/WorkCell'

export const WorkView = (props) => (
  <div className='view--work row'>
    <div className='view--work__tab twelve columns text-left'>
      <div className='view--work__tab__table'>
        <h4 className='view--work__tab__table__section-title'>{resolveLocalizationGet(WORK_VIEW_CONTENT, 'employedWorkTitle')}</h4>
        <div>
          {ALL_EMPLOYED_WORK.map((workContent, index) => {
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
                        {date.start.toLocaleDateString()}
                        {!date.end ? '+' : null}
                      </span>
                    : null}
                    {date.end
                      ? <span>
                        {date.start ? ' - ' : null}
                        {date.end.toLocaleDateString()}
                      </span>
                    : null}
                    {workContent.dates.length > 1 && index === 0
                      ? ', '
                    : null}
                  </span>
                )
              })}
              rowThree={resolveLocalizationGet(workContent, 'shortDescription')}
              rowFour={
                <div className='view--work__tag-container'>
                  <div className='view--work__tag-container__label'>{resolveLocalization(TAGS_LABEL)}</div>
                  <div className='view--work__tag-wrapper'>
                    {_.map(workContent.tags, (tag, index) => (
                      <span className='view--work__tag' key={`view-work-tag-${index}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
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
        <h4 className='view--work__tab__table__section-title'>{resolveLocalizationGet(WORK_VIEW_CONTENT, 'personalWorkTitle')}</h4>
        <div>
          {ALL_PERSONAL_WORK.map((workContent, index) => {
            const textContent = <WorkCell
              key={`view-work-work-cell-${index}`}
              rowOneLeft={resolveLocalizationGet(workContent, 'title')}
              rowOneRight={workContent.location.join(', ')}
              rowTwoLeft={resolveLocalizationGet(workContent, 'role')}
              rowTwoRight={_.map(_.sortBy(workContent.dates, 'start'), (date, index) => {
                return (
                  <span key={`view-work-date-${index}`}>
                    {date.start
                      ? <span>
                        {date.start.toLocaleDateString()}
                        {!date.end ? '+' : null}
                      </span>
                    : null}
                    {date.end
                      ? <span>
                        {date.start ? ' - ' : null}
                        {date.end.toLocaleDateString()}
                      </span>
                    : null}
                    {workContent.dates.length > 1 && index === 0
                      ? ', '
                    : null}
                  </span>
                )
              })}
              rowThree={resolveLocalizationGet(workContent, 'shortDescription')}
              rowFour={
                <div className='view--work__tag-container'>
                  <div className='view--work__tag-container__label'>{resolveLocalization(TAGS_LABEL)}</div>
                  <div className='view--work__tag-wrapper'>
                    {_.map(workContent.tags, (tag, index) => (
                      <span className='view--work__tag' key={`view-work-tag-${index}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
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
)

WorkView.propTypes = {}

export default WorkView
