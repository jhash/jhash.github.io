import React from 'react'

import './WorkView.scss'

export const WorkView = (props) => (
  <div className='view--software row'>
    <div className='view--software__tab col-xs-12 text-left'>
      <h4 className='view--software__tab__header'>Web</h4>
      <table className='view--software__tab__table table text-left'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Tech</th>
            <th>Description</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Volley</th>
            <td>React</td>
            <td>Green-field landing page in React</td>
            <td>Remote</td>
          </tr>
          <tr>
            <th>Society6</th>
            <td>React & PHP</td>
            <td>Product Page and the Artist Upload Studio</td>
            <td>Los Angeles, CA</td>
          </tr>
          <tr>
            <th>WorkHands</th>
            <td>Angular, Ruby on Rails</td>
            <td>Worked on various features in Angular, including the search bar component</td>
            <td>San Francisco, CA</td>
          </tr>
          <tr>
            <th>Barracuda Networks</th>
            <td>Angular, Cordova, Ruby on Rails</td>
            <td>Developed a new front-end for the site Copy.com using Backbone/Marionette JS</td>
            <td>Ann Arbor, MI</td>
          </tr>
          <tr>
            <th>ADMI</th>
            <td>JS & ColdFusion</td>
            <td>Helped implement Javascript and scaffolded new pages in ColdFusion</td>
            <td>Ann Arbor, MI</td>
          </tr>
          <tr>
            <th>Videolog</th>
            <td>JS, CSS, PHP, HTML</td>
            <td>Reorganized and centralized CSS, built UIs in JS and HTML/PHP</td>
            <td>Rio de Janeiro, Brazil</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className='view--software__tab col-sm-6 col-xs-12 text-left'>
      <h4 className='view--software__tab__header'>Mobile</h4>
      <table className='view--software__tab__table table text-left'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Platform</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Volley</th>
            <td>React</td>
            <td>Green-field landing page in React</td>
          </tr>
          <tr>
            <th>Society6</th>
            <td>React & PHP</td>
            <td>Product Page and the Artist Upload Studio</td>
          </tr>
          <tr>
            <th>WorkHands</th>
            <td>Angular, Cordova</td>
            <td>Built Cordova iOS and Android wraparound</td>
          </tr>
          <tr>
            <th>Barracuda Networks</th>
            <td>Angular, Cordova, Ruby on Rails</td>
            <td>Built Cordova iOS and Android wraparound</td>
          </tr>
          <tr>
            <th>ADMI</th>
            <td>JS and </td>
            <td>Built Cordova iOS and Android wraparound</td>
          </tr>
          <tr>
            <th>Videolog</th>
            <td>Angular, Cordova, Ruby on Rails</td>
            <td>Built Cordova iOS and Android wraparound</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className='view--software__tab col-sm-6 col-xs-12 text-left'>
      <h4 className='view--software__tab__header'>Games</h4>
      <table className='view--software__tab__table table text-left'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Underworld</th>
            <td>Built character movement engine, </td>
          </tr>
          <tr>
            <th>FlappyUniverse</th>
            <td>Built during a 48 hour hackathon with the intention of teaching students about the lifecycle of a star</td>
          </tr>
          <tr>
            <th>Ducktales</th>
            <td>Rebuilt the NES game, Ducktales, using Unity - duplicated one level and created a new one as well</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className='view--software__tab col-xs-12 text-left'>
      <h4 className='view--software__tab__header'>Other</h4>
      <table className='view--software__tab__table table text-left'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Tech</th>
            <th>Description</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Volley</th>
            <td>React</td>
            <td>Green-field landing page in React</td>
            <td>Remote</td>
          </tr>
          <tr>
            <th>Society6</th>
            <td>React & PHP</td>
            <td>Product Page and the Artist Upload Studio</td>
            <td>Los Angeles, CA</td>
          </tr>
          <tr>
            <th>WorkHands</th>
            <td>Angular, Cordova, Ruby on Rails</td>
            <td>Built Cordova iOS and Android wraparound and various features in Angular</td>
            <td>San Francisco, CA</td>
          </tr>
          <tr>
            <th>Barracuda Networks</th>
            <td>Angular, Cordova, Ruby on Rails</td>
            <td>Built Cordova iOS and Android wraparound and various features in Angular</td>
            <td>Ann Arbor, MI</td>
          </tr>
          <tr>
            <th>ADMI</th>
            <td>JS and </td>
            <td>Built Cordova iOS and Android wraparound and various features in Angular</td>
            <td>Ann Arbor, MI</td>
          </tr>
          <tr>
            <th>Videolog</th>
            <td>Angular, Cordova, Ruby on Rails</td>
            <td>Built Cordova iOS and Android wraparound and various features in Angular</td>
            <td>Rio de Janeiro, Brazil</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
)

WorkView.propTypes = {}

export default WorkView
