import { DEFAULT_LANGUAGE_CODE } from 'content/global'

export const CURRENT_WORK_SOFTWARE = [
  {
    title: 'WorkHands',
    company: 'WorkHands',
    shortDescription: {
      [DEFAULT_LANGUAGE_CODE]: '"LinkedIn for the Blue Collar World"'
    },
    href: 'https://www.workhands.us/',
    favicon: '',
    location: ['San Francisco, CA', 'Remote'],
    tags: ['Web', 'Mobile', 'Cordova', 'JS', 'Angular', 'iOS', 'Android', 'HTML', 'CSS', 'Ruby on Rails'],
    dates: [
      {
        start: new Date('06/01/2016')
      },
      {
        start: new Date('05/01/2015'),
        end: new Date('01/01/2016')
      }
    ]
  }
]

export const ALL_WORK_SOFTWARE = CURRENT_WORK_SOFTWARE.concat([
  {
    title: 'COSMOS, Luzero',
    company: 'Kimera Systems',
    shortDescription: {
      [DEFAULT_LANGUAGE_CODE]: 'D3 Data Graphs and React View Layer Code'
    },
    href: 'http://niuera.co/',
    favicon: '',
    location: ['Remote'],
    tags: ['Web', 'JS', 'D3', 'Web', 'HTML', 'CSS', 'SVG'],
    dates: [
      {
        start: new Date('09/26/2016'),
        end: new Date('07/31/2017')
      }
    ]
  },
  // {
  //   title: 'Volley',
  //   company: 'Propeller Labs',
  //   tags: ['Web', 'React', 'GSAP', 'Animation'],
  //   shortDescription: {
  //     [DEFAULT_LANGUAGE_CODE]: 'Green-field landing page in React'
  //   },
  //   href: 'http://volley.com/',
  //   location: ['Remote'],
  //   dates: [
  //     {
  //       start: new Date('01/02/2016'),
  //       end: new Date('01/03/2016')
  //     }
  //   ]
  // },
  {
    title: 'Society6',
    company: 'Leaf Group',
    tags: ['Web', 'JS', 'React', 'PHP', 'jQuery'],
    shortDescription: {
      [DEFAULT_LANGUAGE_CODE]: 'Product Page and the Artist Upload Studio'
    },
    href: 'https://society6.com/',
    location: ['Los Angeles, CA'],
    dates: [
      {
        start: new Date('02/24/2016'),
        end: new Date('09/01/2016')
      }
    ]
  },
  {
    title: 'Copy.com',
    company: 'Barracuda Networks',
    tags: ['Web', 'JS', 'Backbone', 'Marionette'],
    shortDescription: {
      [DEFAULT_LANGUAGE_CODE]: 'Developed a new front-end for the site Copy.com using Backbone/Marionette JS'
    },
    href: 'https://copy.com/',
    location: ['Ann Arbor, MI'],
    dates: [
      {
        start: new Date('04/01/2014'),
        end: new Date('05/01/2015')
      }
    ]
  },
  {
    title: 'ADMI',
    company: 'ADMI',
    tags: ['Web', 'JS', 'ColdFusion', 'jQuery', 'Office 365'],
    shortDescription: {
      [DEFAULT_LANGUAGE_CODE]:
        'Helped implement Javascript, scaffolded new pages in ColdFusion, set up Office 365 mail server'
    },
    href: 'http://admiglobal.com/',
    location: ['Ann Arbor, MI'],
    dates: [
      {
        start: new Date('02/01/2014'),
        end: new Date('04/01/2014')
      }
    ]
  },
  {
    title: 'Videolog',
    company: 'Videolog',
    tags: ['Web', 'JS', 'CSS', 'PHP', 'HTML', 'jQuery'],
    shortDescription: {
      [DEFAULT_LANGUAGE_CODE]: 'Reorganized and centralized CSS, built UIs in JS and HTML/PHP'
    },
    href: 'https://en.wikipedia.org/wiki/Videolog.tv',
    location: ['Rio de Janeiro, Brazil'],
    dates: [
      {
        start: new Date('05/01/2013'),
        end: new Date('10/01/2013')
      }
    ]
  }
])

export const CURRENT_PERSONAL_PROJECTS = [
  {
    title: 'JakeHash.com',
    role: 'I am Jake Hash',
    shortDescription: {
      [DEFAULT_LANGUAGE_CODE]: 'Personal Portfolio'
    },
    href: '/',
    favicon: '',
    location: ['Remote'],
    tags: ['Web', 'JS', 'React', 'Redux', 'Node.js', 'HTML', 'CSS'],
    dates: [
      {
        start: new Date('01/01/2015')
      }
    ]
  }
]

export const WORK_VIEW_CONTENT = {
  softwareWorkTitle: {
    [DEFAULT_LANGUAGE_CODE]: 'Software'
  }
}

export default WORK_VIEW_CONTENT
