export class Api {
  constructor () {
    this.API_URL = localStorage.getItem('api-url') || process.env.ROOT_API || ''
    let headers = { 'Content-Type': 'application/json' }

    let user = localStorage.getItem('loggedinUser')
    if (user) {
      user = JSON.parse(user)
      headers = {...headers, 'Authorization': `bearer ${user.accessToken}`}
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
    let queryString = ''
    Object.keys(object).forEach((key) => {
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
