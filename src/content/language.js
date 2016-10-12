import _ from 'lodash'

import ISO6391 from 'iso-639-1'

export const LANGUAGE_CODES = _.mapKeys(ISO6391.getLanguages(ISO6391.getAllCodes()), 'code')
