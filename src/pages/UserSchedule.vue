<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="card-plain" v-if="userSchedule">
            <h4 class="card-title">Agenda {{ userSchedule.name }}</h4>
            <hr />
            <calendar :events="events"></calendar>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import moment from 'moment'
import UserService from '../services/users.service'
import Calendar from '../components/Calendar'
const userService = new UserService()

export default {
  components: {
    Calendar
  },
  data: () => ({
    events: [],
    startDate: moment()
  }),
  methods: {
    getEvents (startDate) {
      this.startDate = startDate
      const initialDate = startDate.format('YYYY-MM-DD')

      let fDate = moment(startDate.toDate()).add(7, 'days')
      const finalDate = fDate.format('YYYY-MM-DD')
      userService.getSchedule(this.userSchedule.id, {initial_date: initialDate, final_date: finalDate})
        .then(response => {
          this.events = response.data.data.map(x => {
            x.name = x.subject || 'Compromisso'
            x.start_date = moment(x.start_date)
            x.end_date = moment(x.end_date)
            return x
          })
        })
    }
  },
  mounted () {
    this.getEvents(this.startDate)
  },
  computed: {
    userSchedule () {
      return this.$store.state.userSchedule
    }
    // schedule () {
    //   return this.$store.state.schedule
    // }
  }
}
</script>
<style>
</style>
