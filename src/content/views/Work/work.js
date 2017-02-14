import { DEFAULT_LANGUAGE_CODE } from '../../global'

export const CURRENT_EMPLOYED_WORK = [
  {
    title: 'Niuera COSMOS',
    company: 'Niuera',
    shortDescription: {
      [DEFAULT_LANGUAGE_CODE]: 'D3 Data Graphs'
    },
    href: 'http://niuera.co/',
    favicon: '',
    location: 'Remote',
    tags: ['Web', 'Javascript', 'JS', 'D3', 'Web', 'HTML', 'CSS', 'SVG'],
    dates: [
      {
        start: new Date('10/16')
      }
    ]
  },
  {
    title: 'WorkHands',
    company: 'WorkHands',
    shortDescription: {
      [DEFAULT_LANGUAGE_CODE]: 'Deploying cordova application and building Angular components'
    },
    href: 'https://www.workhands.us/',
    favicon: '',
    location: ['San Francisco, CA', 'Remote'],
    tags: ['Web', 'Mobile', 'Cordova', 'Javascript', 'JS', 'Angular', 'HTML', 'CSS'],
    dates: [
      {
        start: new Date('10/16')
      },
      {
        start: new Date('05/15'),
        end: new Date('01/16')
      }
    ]
  }
]

export const PREVIOUS_EMPLOYED_WORK = CURRENT_EMPLOYED_WORK.concat([
  {
    title: 'Volley',
    company: 'Propeller Labs',
    tags: ['Web', 'React', 'GSAP', 'Animation'],
    shortDescription: {
      [DEFAULT_LANGUAGE_CODE]: 'Green-field landing page in React'
    },
    href: 'http://volley.com/',
    location: 'Remote',
    dates: [
      {
        start: new Date('02/16'),
        end: new Date('03/16')
      }
    ]
  },
  {
    title: 'Society6',
    company: 'Society6',
    tags: ['Web', 'React', 'PHP'],
    shortDescription: {
      [DEFAULT_LANGUAGE_CODE]: 'Product Page and the Artist Upload Studio'
    },
    href: 'https://society6.com/',
    location: 'Los Angeles, CA',
    dates: [
      {
        start: new Date('03/16'),
        end: new Date('09/16')
      }
    ]
  },
  {
    title: 'Copy.com (Barracuda Networks)',
    company: 'Copy.com (Barracuda Networks)',
    tags: ['Web', 'Angular', 'Cordova', 'Ruby on Rails', 'Copy'],
    shortDescription: {
      [DEFAULT_LANGUAGE_CODE]: 'Developed a new front-end for the site Copy.com using Backbone/Marionette JS'
    },
    href: 'https://copy.com/',
    location: 'Ann Arbor, MI',
    dates: [
      {
        start: new Date('04/14'),
        end: new Date('05/15')
      }
    ]
  },
  {
    title: 'ADMI',
    company: 'ADMI',
    tags: ['Web', 'JS', 'ColdFusion'],
    shortDescription: {
      [DEFAULT_LANGUAGE_CODE]: 'Helped implement Javascript and scaffolded new pages in ColdFusion'
    },
    href: 'http://admiglobal.com/',
    location: 'Ann Arbor, MI',
    dates: [
      {
        start: new Date('02/14'),
        end: new Date('04/14')
      }
    ]
  },
  {
    title: 'Videolog',
    company: 'Videolog',
    tags: ['Web', 'JS', 'CSS', 'PHP', 'HTML'],
    shortDescription: {
      [DEFAULT_LANGUAGE_CODE]: 'Reorganized and centralized CSS, built UIs in JS and HTML/PHP'
    },
    href: 'https://en.wikipedia.org/wiki/Videolog.tv',
    location: 'Rio de Janeiro, Brazil',
    dates: [
      {
        start: new Date('05/13'),
        end: new Date('10/13')
      }
    ]
  }
])

export const CURRENT_PERSONAL_PROJECTS = [
  {
    title: 'JakeHash.com',
    shortDescription: {
      [DEFAULT_LANGUAGE_CODE]: 'Personal Portfolio'
    },
    href: 'http://jakehash.com',
    favicon: '',
    location: 'Remote',
    tags: ['Web', 'Javascript', 'JS', 'React', 'Redux', 'Node', 'Node.js', 'HTML', 'CSS'],
    dates: [
      {
        start: new Date('01/15')
      }
    ]
  }
]

export const PREVIOUS_PERSONAL_WORK = [

]

export const CURRENT_WORK = CURRENT_EMPLOYED_WORK.concat(CURRENT_PERSONAL_PROJECTS)

export const WORK_VIEW_CONTENT = {
  header: {

  }
}

export default WORK_VIEW_CONTENT
