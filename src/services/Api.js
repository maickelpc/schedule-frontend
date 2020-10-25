export class Api {
  constructor () {
    this.API_URL = localStorage.getItem('api-url') || process.env.ROOT_API || ''
    let token = localStorage.getItem('user-token') || false
    let headers = { 'Content-Type': 'application/json' }
    if (token) {
      headers = {...headers, 'Authorization': `bearer ${token}`}
    }
    this.HEADERS = { ...headers }
  }

  getQueryString (object) {
    if (!object) {
      return ''
    }

    if (typeof (object) === 'string') {
      return object
    }

    if (typeof (object) === 'object') {
      object = {...object}
    }

    let queryString = Object.keys(object).forEach((key) => {
      if (object[key] !== null && object[key] !== undefined && object[key] !== '') {
        if (queryString.length > 0) {
          queryString += '&'
        }
        queryString += key + '=' + object[key]
      }
    })
    return queryString
  }
}
