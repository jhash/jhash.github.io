import { DEFAULT_LANGUAGE_CODE } from 'content/global'

export const CURRENT_WORK_SOFTWARE = [
  {
    title: 'Full Stack Developer',
    projectNames: 'WorkHands',
    company: 'WorkHands',
    shortDescription: {
      [DEFAULT_LANGUAGE_CODE]: '"LinkedIn for the Blue Collar World"'
    },
    workDescription: {
      [DEFAULT_LANGUAGE_CODE]: [
        'Develop Angular view components',
        'Built Cordova iOS and Android web wrapper',
        'Manage mobile deployment process',
        'Implemented minor features in Ruby on Rails'
      ]
    },
    href: 'https://www.workhands.us/',
    favicon: '',
    location: ['San Francisco, CA', 'Remote'],
    tags: [
      'Web',
      'Mobile',
      'JS',
      'Angular',
      'Cordova',
      'iOS',
      'Android',
      'HAML',
      'SASS',
      'HTML',
      'CSS',
      'Ruby on Rails'
    ],
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
    title: 'Web Developer/Designer (Contract)',
    projectNames: 'COSMOS, Luzero',
    company: 'Kimera Systems',
    shortDescription: {
      [DEFAULT_LANGUAGE_CODE]: 'Energy Utilization Visualizations for Power Grids in Latin America'
    },
    workDescription: {
      [DEFAULT_LANGUAGE_CODE]: [
        'Developed and contributed to the design of various D3 Data Graphs',
        'Implemented the SPA (Single Page Application) view components in React'
      ]
    },
    href: 'http://kimerasystems.io/',
    favicon: '',
    location: ['Remote'],
    tags: ['Web', 'JS', 'D3', 'React', 'SASS', 'CSS', 'HTML', 'SVG'],
    dates: [
      {
        start: new Date('09/26/2016'),
        end: new Date('07/31/2017')
      }
    ]
  },
  {
    title: 'Application Engineer',
    projectNames: 'Society6',
    company: 'Leaf Group',
    tags: ['Web', 'JS', 'React', 'SASS', 'CSS', 'PHP', 'HTML', 'jQuery'],
    shortDescription: {
      [DEFAULT_LANGUAGE_CODE]: 'Artistic eCommerce Printing Site'
    },
    workDescription: {
      [DEFAULT_LANGUAGE_CODE]: [
        'Contributed to and partially oversaw the development of the Artist Upload Studio',
        'Completely rebuilt the Product Page front-end using React'
      ]
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
    title: 'Web Development Intern',
    projectNames: 'Copy.com',
    company: 'Barracuda Networks',
    tags: ['Web', 'JS', 'Backbone', 'Marionette', 'LESS', 'HTML', 'CSS', 'PHP'],
    shortDescription: {
      [DEFAULT_LANGUAGE_CODE]: 'Consumer Cloud Storage'
    },
    workDescription: {
      [DEFAULT_LANGUAGE_CODE]: [
        'Contributed to the development of a new file browser front-end using Backbone/Marionette',
        `Built web views to present various file-types
        (Ex. Audio/Video player for .mp3, .mp4, Office 365 iframe for .doc, .csv, PDF viewer, etc.)`
      ]
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
    title: 'Web Development Intern',
    projectNames: 'ADMI',
    company: 'ADMI',
    tags: ['Web', 'JS', 'ColdFusion', 'jQuery', 'HTML', 'CSS', 'Office 365', 'IT'],
    shortDescription: {
      [DEFAULT_LANGUAGE_CODE]:
        'Automotive Dealer Management, Inc.'
    },
    workDescription: {
      [DEFAULT_LANGUAGE_CODE]: [
        'Implemented various features in Vanilla Javascript and jQuery',
        'Scaffolded new pages in ColdFusion',
        'Set up the company-wide Office 365 mail server'
      ]
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
    title: 'Web Developer/Designer',
    projectNames: 'Videolog.tv',
    company: 'Videolog',
    tags: ['Web', 'JS', 'CSS', 'PHP', 'HTML', 'jQuery'],
    shortDescription: {
      [DEFAULT_LANGUAGE_CODE]: 'Brazilian Youtube of Yore'
    },
    workDescription: {
      [DEFAULT_LANGUAGE_CODE]: [
        'Reorganized and centralized CSS',
        'Built UIs in JS and HTML/PHP',
        'Learned a great deal of Portuguese!'
      ]
    },
    href: 'https://www.linkedin.com/company/2630358/',
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
    projectNames: 'JakeHash.com',
    role: 'I am Jake Hash',
    shortDescription: {
      [DEFAULT_LANGUAGE_CODE]: 'Personal Portfolio'
    },
    workDescription: {
      [DEFAULT_LANGUAGE_CODE]: 'Personal Portfolio'
    },
    link: '/',
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
