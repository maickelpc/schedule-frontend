import { Api } from './Api'
import Axios from 'axios'

export default class UserService extends Api {
  getAll () {
    return Axios.get(`${this.API_URL}/user`, { headers: this.HEADERS })
  }

  getSchedule (id, filters = null) {
    let queryString = this.getQueryString(filters)
    return Axios.get(`${this.API_URL}/user/${id}/schedule?${queryString}`, { headers: this.HEADERS })
  }

  createSechedule (id, schedule) {
    return Axios.post(`${this.API_URL}/user/${id}/schedule`, schedule, { headers: this.HEADERS })
  }
}
