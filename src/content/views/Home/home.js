import { DEFAULT_LANGUAGE_CODE, DISPLAY_NAME, CURRENT_LOCATION } from 'content/global'

const HOME_VIEW_CONTENT = {
  header: {
    name: DISPLAY_NAME,
    location: CURRENT_LOCATION,
    jobTitle: {
      [DEFAULT_LANGUAGE_CODE]: 'Full-Stack Software Engineer'
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
      [DEFAULT_LANGUAGE_CODE]: 'I will not start sending you cat videos unless you want me to'
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
    },
    workTogetherMessageSendError: {
      [DEFAULT_LANGUAGE_CODE]: 'Failed to send message. Please try easing up on the sass'
    },
    workTogetherMessageSending: {
      [DEFAULT_LANGUAGE_CODE]: 'Message sending'
    },
    workTogetherMessageSent: {
      [DEFAULT_LANGUAGE_CODE]: 'Message sent successfully. Expect to hear from me or my butler soon'
    }
  }
}

export default HOME_VIEW_CONTENT
