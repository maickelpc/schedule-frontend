import { Api } from './Api'
import Axios from 'axios'

export default class LoginService extends Api {
  login (credentials) {
    return Axios.post(`${this.API_URL}/auth/login`, credentials, { headers: this.HEADERS })
  }
}
