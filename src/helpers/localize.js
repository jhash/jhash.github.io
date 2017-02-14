import _ from 'lodash'

import { DEFAULT_LANGUAGE_CODE } from 'content/global'

const ERROR_LOCATION = '/helpers/localize.js:'

export function resolveLocalizationGet (localizerContainer, localizerLocationString, languageCode) {
  return resolveLocalization(_.get(localizerContainer, localizerLocationString), languageCode)
}

export function resolveLocalization (localizer, languageCode = DEFAULT_LANGUAGE_CODE) {
  if (_.isString(localizer)) return localizer
  if (_.isArray(localizer)) throw new Error(`${ERROR_LOCATION} arrays not supported`)
  if (_.isFunction(localizer)) {
    const finalLocalization = localizer(languageCode) || localizer(DEFAULT_LANGUAGE_CODE)
    if (_.isUndefined(finalLocalization)) throw new Error(`${ERROR_LOCATION} failed to localize`)
    return finalLocalization
  }
  if (_.isObject(localizer)) {
    const finalLocalization = localizer[languageCode] || localizer[DEFAULT_LANGUAGE_CODE]
    if (_.isUndefined(finalLocalization)) throw new Error(`${ERROR_LOCATION} failed to localize`)
    return finalLocalization
  }
  throw new Error(`${ERROR_LOCATION} no valid localizer provided`)
}

export function resolveLocalizationBoundToLanguage (languageCode) {
  return function (localizer) {
    return resolveLocalization(localizer, languageCode)
  }
}
