export default {
  'CHANGE_USERS' (state, users) {
    state.users = users
  },
  'CHANGE_USER_SCHEDULE' (state, userSchedule) {
    console.log(userSchedule)
    state.userSchedule = userSchedule
  },
  'CHANGE_SCHEDULE' (state, schedule) {
    state.schedule = schedule
  }
}
