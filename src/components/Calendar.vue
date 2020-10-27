<template>
  <div class="schedule">
    <div class="time-ground">
    </div>
    <div class="task-ground">
      <table class="table" style="width: 100%">
          <thead class="thead-dark">
              <tr>
                  <th style="width: 12%" scope="col"></th>
                  <th style="width: 12%" scope="col">{{dayOfWeek(0)}}</th>
                  <th style="width: 12%" scope="col">{{dayOfWeek(1)}}</th>
                  <th style="width: 12%" scope="col">{{dayOfWeek(2)}}</th>
                  <th style="width: 12%" scope="col">{{dayOfWeek(3)}}</th>
                  <th style="width: 12%" scope="col">{{dayOfWeek(4)}}</th>
                  <th style="width: 12%" scope="col">{{dayOfWeek(5)}}</th>
                  <th style="width: 12%" scope="col">{{dayOfWeek(6)}}</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="(time, hourIndex) in times" :key="hourIndex">
                  <th>{{time}}</th>
                  <td >
                      <div v-for="(event, i) in eventsOfDayHour(0,time)" :key="i"
                        style="cursor:pointer; width:90%" class="badge"
                        :class="{'badge-primary': event.status === 'CONFIRMED', 'badge-secondary': event.status !== 'CONFIRMED'}"
                         @click="showDetail(event)"   >
                          <small> {{ event.start_date | time }}h</small><br>
                          <span>{{event.name}}</span><br>
                          <small>{{event.client_name}}</small>
                      </div>
                      <button class="btn btn-outline-success btn-sm btn-block" style="padding: 0px" @click="newEvent(0, time)">Novo</button>
                  </td>
                  <td >
                      <div v-for="(event, i) in eventsOfDayHour(1,time)" :key="i"
                        style="cursor:pointer; width:90%" class="badge"
                        :class="{'badge-primary': event.status === 'CONFIRMED', 'badge-secondary': event.status !== 'CONFIRMED'}"
                         @click="showDetail(event)"   >
                          <small> {{ event.start_date | time }}h</small><br>
                          <span>{{event.name}}</span><br>
                          <small>{{event.client_name}}</small>
                      </div>
                      <button class="btn btn-outline-success btn-sm btn-block" style="padding: 0px" @click="newEvent(1, time)">Novo</button>
                  </td>
                  <td >
                      <div v-for="(event, i) in eventsOfDayHour(2,time)" :key="i"
                        style="cursor:pointer; width:90%" class="badge"
                        :class="{'badge-primary': event.status === 'CONFIRMED', 'badge-secondary': event.status !== 'CONFIRMED'}"
                         @click="showDetail(event)"   >
                          <small> {{ event.start_date | time }}h</small><br>
                          <span>{{event.name}}</span><br>
                          <small>{{event.client_name}}</small>
                      </div>
                      <button class="btn btn-outline-success btn-sm btn-block" style="padding: 0px" @click="newEvent(2, time)">Novo</button>
                  </td>
                  <td >
                      <div v-for="(event, i) in eventsOfDayHour(3,time)" :key="i"
                        style="cursor:pointer; width:90%" class="badge"
                        :class="{'badge-primary': event.status === 'CONFIRMED', 'badge-secondary': event.status !== 'CONFIRMED'}"
                         @click="showDetail(event)"   >
                          <small> {{ event.start_date | time }}h</small>
                          <span>{{event.name}}</span>
                          <small>{{event.client_name}}</small>
                      </div>
                      <button class="btn btn-outline-success btn-sm btn-block" style="padding: 0px" @click="newEvent(3, time)">Novo</button>
                  </td>
                  <td >
                      <div v-for="(event, i) in eventsOfDayHour(4,time)" :key="i"
                        style="cursor:pointer; width:90%" class="badge"
                        :class="{'badge-primary': event.status === 'CONFIRMED', 'badge-secondary': event.status !== 'CONFIRMED'}"
                         @click="showDetail(event)"   >
                          <small> {{ event.start_date | time }}h</small>
                          <span>{{event.name}}</span>
                          <small>{{event.client_name}}</small>
                      </div>
                      <button class="btn btn-outline-success btn-sm btn-block" style="padding: 0px" @click="newEvent(4, time)">Novo</button>
                  </td>
                  <td >
                      <div v-for="(event, i) in eventsOfDayHour(5,time)" :key="i"
                        style="cursor:pointer; width:90%" class="badge"
                        :class="{'badge-primary': event.status === 'CONFIRMED', 'badge-secondary': event.status !== 'CONFIRMED'}"
                         @click="showDetail(event)"   >
                          <small> {{ event.start_date | time }}h</small>
                          <span>{{event.name}}</span>
                          <small>{{event.client_name}}</small>
                      </div>
                      <button class="btn btn-outline-success btn-sm btn-block" style="padding: 0px" @click="newEvent(5, time)">Novo</button>
                  </td>
                  <td >
                      <div v-for="(event, i) in eventsOfDayHour(6,time)" :key="i"
                        style="cursor:pointer; width:90%" class="badge"
                        :class="{'badge-primary': event.status === 'CONFIRMED', 'badge-secondary': event.status !== 'CONFIRMED'}"
                         @click="showDetail(event)"   >
                          <small> {{ event.start_date | time }}h</small>
                          <span>{{event.name}}</span>
                          <small>{{event.client_name}}</small>
                      </div>
                      <button class="btn btn-outline-success btn-sm btn-block" style="padding: 0px" @click="newEvent(6, time)">Novo</button>
                  </td>
              </tr>
          </tbody>
      </table>
    </div>

    <modal :show="showModal" :show-modal-detail="showModalDetail" :newEvent="eventIsNew"> </modal>
  </div>
</template>

<style scoped>
    /* td {
        cursor: pointer;
    }
    td:hover {
        background-color: bisque;
    } */
</style>

<script>
import Modal from './Modal.vue'
import moment from 'moment'
export default {
  name: 'Schedule',
  props: {
    events: {
      type: Array,
      default: () => []
    },
    startDate: {
      type: moment,
      default: () => moment()
    },
    timeGround: {
      type: Array,
      default: () => []
    },
    weekGround: {
      type: Array,
      default: () => ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']
    },
    taskDetail: {
      type: Array,
      default: () => []
    },
    color: {
      type: Array,
      default () {
        return [
          '#2B2E4A',
          '#521262',
          '#903749',
          '#53354A',
          '#40514E',
          '#537780'
        ]
      }
    }
  },
  components: {
    Modal: Modal
  },
  watch: {
    timeGround (value) {
      // console.log('value=', value);
      this.pageTimeGround = this.initTimeGroud(value)
      // return value;
    }
  },
  data () {
    return {
      eventIsNew: false,
      times: [
        '08:00',
        '09:00',
        '10:00',
        '11:00',
        '12:00',
        '13:00',
        '14:00',
        '15:00',
        '16:00',
        '17:00',
        '18:00'
      ],
      pageTimeGround: [],
      showModal: false,
      showModalDetail: {
        dateStart: '09:30',
        dateEnd: '10:30',
        title: 'Metting',
        week: 'Monday',
        styleObj: {
          backgroundColor: '#903749'
        },
        detail:
          'Metting (German: Mettingen) is a commune in the Moselle department in Grand Est in north-eastern France.'
      },
      taskListSty: {
        height: '900px'
      },
      timeListSty: {
        width: '100%'
      }
    }
  },
  created () {
    // console.log(this.ta)
    this.pageTimeGround = this.initTimeGroud(this.timeGround)
    let maxTime = this.pageTimeGround[this.pageTimeGround.length - 1]
    let minTime = this.pageTimeGround[0]
    let maxMin = maxTime.split(':')[0] * 60 + maxTime.split(':')[1] * 1
    let minMin = minTime.split(':')[0] * 60 + minTime.split(':')[1] * 1
    // console.log(maxMin);
    // console.log(minMin);
    // console.log(maxTime);
    for (let i = 0; i < this.taskDetail.length; i++) {
      for (let j = 0; j < this.taskDetail[i].length; j++) {
        // console.log(this.taskDetail[i][j]);
        let startMin =
          this.taskDetail[i][j].dateStart.split(':')[0] * 60 +
          this.taskDetail[i][j].dateStart.split(':')[1] * 1
        let endMin =
          this.taskDetail[i][j].dateEnd.split(':')[0] * 60 +
          this.taskDetail[i][j].dateEnd.split(':')[1] * 1
        if (startMin < minMin || endMin > maxMin) {
          this.taskDetail[i].splice(j, 1)
          j--
          continue
        }
        // console.log(endMin);
        let difMin = endMin - startMin
        // console.log(startMin);
        // console.log(endMin);
        this.taskDetail[i][j].styleObj = {
          height: (difMin * 100) / 60 + 'px',
          top:
            ((startMin -
              (this.pageTimeGround[0].split(':')[0] * 60 +
                this.pageTimeGround[0].split(':')[1] * 1)) *
              100) /
              60 +
            50 +
            'px',
          backgroundColor: this.color[~~(Math.random() * this.color.length)]
        }
      }
    }
  },
  mounted () {
    this.taskListSty.height = (this.pageTimeGround.length - 1) * 100 + 'px'
    this.timeListSty.width = this.weekGround.length * 14 + '%'
  },
  methods: {
    newEvent (i, time) {
      this.eventIsNew = true
      let initialTime = time.substring(0, 2) * 1
      this.showModalDetail = { start_date: moment(this.startDate.toDate()).add(i, 'days').set({hour: initialTime, minute: 0, second: 0}) }
      this.showModal = true
    },
    eventsOfDayHour (i, time) {
      let date = moment(this.startDate.toDate()).add(i, 'days')
      let initialTime = time.substring(0, 2) * 1
      date = date.set({hour: initialTime, minute: 0, second: 0})

      return this.events.filter(x => {
        return x.start_date.format('YYYY-MM-DD-HH') === date.format('YYYY-MM-DD-HH')
      })
    },
    dayOfWeek (i) {
      let date = moment(this.startDate.toDate())
      let day = date.add(i, 'days').day()
      switch (day) {
        case 0: return 'Domingo'
        case 1: return 'Segunda-feira'
        case 2: return 'Terça-feira'
        case 3: return 'Quarta-feira'
        case 4: return 'Quinta-feira'
        case 5: return 'Sexta-feira'
        case 6: return 'Sábado'
      }
    },
    showDetail (obj) {
      this.eventIsNew = false
      this.showModalDetail = obj
      this.showModal = !this.showModal
    },
    initTimeGroud (value) {
      if (value && value.length === 2) {
        let startTime = value[0].split(':')[0] * 1
        let endTime = value[1].split(':')[0] * 1
        value = []
        for (let i = startTime; i <= endTime; i++) {
          // console.log(1);
          // value.push()
          let hour = i < 10 ? '0' + i : '' + i
          value.push(hour + ':00')
        }
      } else {
        value = [
          '09:00',
          '10:00',
          '11:00',
          '12:00',
          '13:00',
          '14:00',
          '15:00',
          '16:00',
          '17:00',
          '18:00'
        ]
      }
      return value
    }
  }
}
</script>
