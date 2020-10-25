import { Api } from './Api'
import Axios from 'axios'

export default class UserService extends Api {
  getAll () {
    return Axios.get(`${this.API_URL}/user`, { headers: this.HEADERS })
  }
}
