<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="card-plain" v-if="userSchedule">
            <h4 class="card-title">Agenda {{ userSchedule.name }}</h4>
            <hr />
            <div tile height="54" class="d-flex">
              <button class="ma-2" @click="$refs.calendar.prev()">
                <v-icon>mdi-chevron-left</v-icon>
              </button>
              <select v-model="type"  class="ma-2">
                <option v-for="t of types" :key="t" :value="t"></option>
              </select>
              <button class="ma-2" @click="$refs.calendar.next()">
                <v-icon>mdi-chevron-right</v-icon>
              </button>
            </div>
            <v-sheet height="600">
              <v-calendar
                ref="calendar"
                v-model="value"
                :weekdays="weekday"
                :type="type"
                :events="events"
                :event-overlap-mode="mode"
                :event-overlap-threshold="30"
                :event-color="getEventColor"
                @change="getEvents"
              ></v-calendar>
            </v-sheet>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import moment from 'moment'
import UserService from '../services/users.service'

const userService = new UserService()

export default {
  data: () => ({
    type: 'week',
    types: ['month', 'week', 'day', '4day'],
    mode: 'stack',
    modes: ['stack', 'column'],
    weekday: [1, 2, 3, 4, 5],
    value: '',
    events: [],
    colors: [
      'blue',
      'indigo',
      'deep-purple',
      'cyan',
      'green',
      'orange',
      'grey darken-1'
    ],
    names: [
      'Meeting',
      'Holiday',
      'PTO',
      'Travel',
      'Event',
      'Birthday',
      'Conference',
      'Party'
    ]
  }),
  methods: {
    getEvents ({ start, end }) {
      const initialDate = moment(start).format('YYYY-MM-DD')
      const finalDate = moment(start).format('YYYY-MM-DD')
      userService.getSchedule(this.userSchedule.id, {initial_date: initialDate, final_date: finalDate})
        .then(response => {
          this.events = response.data.data.map(x => {
            x.name = x.subject || 'Compromisso'
            x.start = moment(x.start_date).toDate()
            x.end = moment(x.end_date).toDate()
            x.timed = true
            x.color = x.status === 'CONFIRMED' ? 'indigo' : 'grey darken-1'
            return x
          })
        })
      console.log(this.events)
    },
    getEventColor (event) {
      return event.color
    },
    rnd (a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a
    }
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
