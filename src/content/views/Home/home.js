import _ from 'lodash'

import { DEFAULT_LANGUAGE_CODE, DISPLAY_NAME } from '../../global'

import { resolveLocalizationBoundToLanguage } from '../../../helpers/localize'

const HEADER_TITLE_BEGINNING = {
  [DEFAULT_LANGUAGE_CODE]: 'Hi, my name is'
}

const HOME_VIEW_CONTENT = {
  header: {
    title: (languageCode) => {
      return _.map([HEADER_TITLE_BEGINNING, DISPLAY_NAME], resolveLocalizationBoundToLanguage(languageCode)).join(' ')
    },
    subtitle: {
      [DEFAULT_LANGUAGE_CODE]: 'I am currently seeking freelance / contract work'
    },
    paragraph: {
      [DEFAULT_LANGUAGE_CODE]: 'You should totally hire me'
    }
  }
}

export default HOME_VIEW_CONTENT
