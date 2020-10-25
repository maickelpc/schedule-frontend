export default {
  'CHANGE_USERS' (state, users) {
    state.users = users
  },
  'CHANGE_USER_SCHEDULE' (state, userSchedule) {
    state.userSchedule = userSchedule
  },
  'CHANGE_SCHEDULE' (state, schedule) {
    state.schedule = schedule
  },
  'LOGGEDIN_USER' (state, accessToken) {
    let user = accessToken.split('.')[1]
    user = JSON.parse(atob(user))
    user.accessToken = accessToken
    state.loggedinUser = user
    localStorage.setItem('loggedinUser', JSON.stringify(user))
  }
}
