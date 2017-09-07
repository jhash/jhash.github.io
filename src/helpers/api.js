import axios from 'axios'

export const API_BASE = (
  JAKE_HASH_API_BASE[JAKE_HASH_API_BASE.length - 1] === '/'
    ? JAKE_HASH_API_BASE
    : `${JAKE_HASH_API_BASE}/`
)

export function constructApiUrl (url) {
  return `${API_BASE}${url}`
}

export function apiPost (url, data, config) {
  return axios.post(constructApiUrl(url), data, config)
}

// axios.request(config)
//
// axios.get(url[, config])
//
// axios.delete(url[, config])
//
// axios.head(url[, config])
//
// axios.options(url[, config])
//
// axios.put(url[, data[, config]])
//
// axios.patch(url[, data[, config]])
