import { DEFAULT_LANGUAGE_CODE, DISPLAY_NAME, CURRENT_LOCATION } from 'content/global'

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
    workTogetherNameLabel: {
      [DEFAULT_LANGUAGE_CODE]: 'Name'
    },
    workTogetherEmailLabel: {
      [DEFAULT_LANGUAGE_CODE]: 'Email'
    },
    workTogetherMessageLabel: {
      [DEFAULT_LANGUAGE_CODE]: 'Message'
    },
    workTogetherSendLabel: {
      [DEFAULT_LANGUAGE_CODE]: 'Send'
    },
    workTogetherEmailPlaceholder: {
      [DEFAULT_LANGUAGE_CODE]: 'Your@email.please'
    },
    workTogetherEmailDisclaimer: {
      [DEFAULT_LANGUAGE_CODE]: 'I will not start sending you cat videos unless you want me to.'
    },
    workTogetherNamePlaceholder: {
      [DEFAULT_LANGUAGE_CODE]: 'Your name'
    },
    workTogetherMessagePlaceholder: {
      [DEFAULT_LANGUAGE_CODE]: 'Your message to me...'
    },
    workTogetherEmailError: {
      [DEFAULT_LANGUAGE_CODE]: 'Email invalid. Try something like back@street.boys'
    },
    workTogetherNameError: {
      [DEFAULT_LANGUAGE_CODE]: 'Ex. Warren Buffett. Haha I wish'
    },
    workTogetherMessageError: {
      [DEFAULT_LANGUAGE_CODE]: 'Surely you have something to say. And don\'t call me Shirley'
    }
  }
}

export default HOME_VIEW_CONTENT
