import _ from 'lodash'

import { LANGUAGE_CODES } from './language'

import { resolveLocalization, resolveLocalizationBoundToLanguage } from '../helpers/localize'

export const DEFAULT_LANGUAGE_CODE = LANGUAGE_CODES.en.code

const FIRST_NAME_VARIATIONS = {
  [DEFAULT_LANGUAGE_CODE]: 'Jake',
  [LANGUAGE_CODES.pt.code]: 'Jacó',
  [LANGUAGE_CODES.es.code]: 'Jacobo'
}

export const FIRST_NAME = {
  [DEFAULT_LANGUAGE_CODE]: 'Jake',
  [LANGUAGE_CODES.pt.code]: 'Jacó',
  [LANGUAGE_CODES.es.code]: 'Jacobo'
}

export const FIRST_NAME_FULL = _.extend({}, FIRST_NAME, {
  [DEFAULT_LANGUAGE_CODE]: 'Jacob'
})

export const MIDDLE_NAME = 'Daniel'
export const LAST_NAME = 'Hash'

export const FULL_NAME = (languageCode) => {
  return _.map([FIRST_NAME_FULL, LAST_NAME], resolveLocalizationBoundToLanguage(languageCode)).join(' ')
}

export const FULL_NAME_WITH_MI = (languageCode) => {
  return _.map([FIRST_NAME_FULL, MIDDLE_NAME, LAST_NAME], resolveLocalizationBoundToLanguage(languageCode)).join(' ')
}

export const DISPLAY_NAME = (languageCode) => {
  return _.map([FIRST_NAME, LAST_NAME], resolveLocalizationBoundToLanguage(languageCode)).join(' ')
}
