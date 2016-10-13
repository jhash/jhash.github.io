import { DEFAULT_LANGUAGE_CODE, DISPLAY_NAME, CURRENT_LOCATION } from '../../global'

const HOME_VIEW_CONTENT = {
  header: {
    name: DISPLAY_NAME,
    location: CURRENT_LOCATION,
    jobTitle: {
      [DEFAULT_LANGUAGE_CODE]: 'Web and Mobile Developer / Designer / Software Engineer'
    },
    currentWorkHeader: {
      [DEFAULT_LANGUAGE_CODE]: 'Currently working on:'
    },
    workTogetherQuestion: {
      [DEFAULT_LANGUAGE_CODE]: 'Interested in working together?'
    },
    workTogetherEmailPlaceholder: {
      [DEFAULT_LANGUAGE_CODE]: 'your@email.please'
    },
    workTogetherEmailDisclaimer: {
      [DEFAULT_LANGUAGE_CODE]: 'I will not start sending you cat videos unless you want me to.'
    },
    workTogetherMessagePlaceholder: {
      [DEFAULT_LANGUAGE_CODE]: 'Your message to me...'
    }
  }
}

export default HOME_VIEW_CONTENT
