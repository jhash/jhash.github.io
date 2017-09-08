import React from 'react'
// import { Link } from 'react-router'
import './WorkCell.scss'

export class WorkCell extends React.Component {
  static propTypes = {
    rowOneLeft: React.PropTypes.node.isRequired,
    rowOneRight: React.PropTypes.node.isRequired,
    rowTwoLeft: React.PropTypes.node.isRequired,
    rowTwoRight: React.PropTypes.node.isRequired,
    rowThree: React.PropTypes.node.isRequired,
    rowFour: React.PropTypes.node.isRequired,
    rowFive: React.PropTypes.node.isRequired
  }
  render () {
    return (
      <div className='work-cell'>
        <div className='row work-cell__row work-cell__row--1'>
          <div className='six columns work-cell__row__side work-cell__row--1__left'>
            {this.props.rowOneLeft}
          </div>
          <div className='six columns work-cell__row__side work-cell__row--1__right'>
            <span className='work-cell__row--1__right__text'>{this.props.rowOneRight}</span>
          </div>
        </div>
        <div className='row work-cell__row work-cell__row--2'>
          <div className='six columns work-cell__row__side work-cell__row--2__left'>
            {this.props.rowTwoLeft}
          </div>
          <div className='six columns work-cell__row__side work-cell__row--2__right'>
            {this.props.rowTwoRight}
          </div>
        </div>
        <div className='row work-cell__row work-cell__row--3'>
          <div className='twelve columns'>
            {this.props.rowThree}
          </div>
        </div>
        <div className='row work-cell__row work-cell__row--4'>
          <div className='twelve columns'>
            {this.props.rowFour}
          </div>
        </div>
        <div className='row work-cell__row work-cell__row--5'>
          <div className='twelve columns'>
            {this.props.rowFive}
          </div>
        </div>
      </div>
    )
  }
}

export default WorkCell
