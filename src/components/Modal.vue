<template>
    <transition name="modal" v-if="newEvent">
    <div class="modal-mask" v-show="modalShow" @click="close">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
              <div>
                <h3>Novo Compromisso</h3>
                <small> Data {{ showModalDetail.start_date | datetime }}h </small>
              </div>
            <a style="float: right" class="close" @click="modalShow = false">X</a>
          </div>
          <div class="modal-body row">
            <div class="form-group col-4">
                <label for="">Nome:</label>
            </div>
            <div class="form-group col-8">
                <input class="form-control" type="text" v-model="client_name">
            </div>
            <div class="form-group col-4">
                <label for="">Email:</label>
            </div>
            <div class="form-group col-8">
                <input class="form-control" type="email" v-model="client_email">
            </div>
            <div class="form-group col-4">
                <label for="">Telefone:</label>
            </div>
            <div class="form-group col-8">
                <input class="form-control" type="text" v-model="client_phone">
            </div>
            <div class="form-group col-4">
                <label for="">Assunto:</label>
            </div>
            <div class="form-group col-8">
                <input class="form-control" type="text" v-model="subject">
            </div>
            <div class="form-group col-4">
                <label for="">Detalhes:</label>
            </div>
            <div class="form-group col-8">
                <textarea class="form-control" name="" id="" cols="30" rows="5" v-model="meeting_agenda"></textarea>
            </div>
            <div class="col-12" v-if="success || error">
                <div v-if="success" class="alert alert-success">
                    {{success}}
                </div>
                <div v-if="error" class="alert alert-danger">
                    <ul>
                        <li v-for="(e,i) in error" :key="i">
                            {{e}}
                        </li>
                    </ul>
                </div>
            </div>
            <div class="form-group col-8 offset-2">
                <button class="btn btn-block btn-primary" :disabled="requested" @click="saveSchedule()">Solicitar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
  <transition name="modal" v-else>
    <div class="modal-mask" v-show="modalShow" @click="close">
      <div class="modal-wrapper">
        <div
          class="modal-container"
        >
          <div class="modal-header">
            <h3>Evento: {{ showModalDetail.name }}</h3>
            <a style="float: right" class="close" @click="modalShow = false">X</a>
          </div>
          <div class="modal-body">
            <small> {{ showModalDetail.start_date | time }}h - {{ showModalDetail.end_date | time }}h</small>
            <p>{{ showModalDetail.meeting_agenda }}</p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.form-group {
    margin-bottom: 0rem !important;
}
.col, .col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col-auto, .col-lg, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-auto, .col-md, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md-auto, .col-sm, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-auto, .col-xl, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl-auto {
    width: 100%;
    padding: 5px;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.modal-container {
  width: 50%;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
  color: #000;
}
.close {
  float: right;
  margin: -0.5rem -1rem 0 0;
  text-decoration: none;
  color: #000;
  font-size: 1rem;
  cursor: pointer;
}
.modal-body {
  text-align: center;
  margin: 20px 0;
}
.modal-body h2 {
  font-size: 1.5rem;
  font-weight: bold;
}
.modal-body p {
  font-size: 0.8rem;
  text-align: left;
}
.modal-body small {
  display: block;
  font-size: 0.8rem;
  margin: 20px 0;
  /*font-weight: bold;*/
}
.modal-default-button {
  float: right;
}
.modal-enter {
  opacity: 0;
}
.modal-leave-active {
  opacity: 0;
}
.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>

<script>
import UserService from '../services/users.service'
const userService = new UserService()
export default {
  name: 'Modal',
  data () {
    return {
      modalShow: false,
      client_name: '',
      client_email: '',
      client_phone: '',
      subject: '',
      meeting_agenda: '',
      error: null,
      success: null,
      requested: false
    }
  },
  props: {
    newEvent: {
      type: Boolean,
      defalt: false
    },
    show: {
      type: Boolean,
      default: false
    },
    showModalDetail: {
      type: Object,
      default: () => {}
    }
  },
  watch: {
    show (value) {
      this.modalShow = true
    }
  },
  created () {
    this.modalShow = this.show
  },
  methods: {
    close (e) {
      if (e.target.className === 'modal-wrapper') {
        this.modalShow = false
        // this.show = false;
      }
      // console.log(e);
      // console.log(e.target.className)
    },
    saveSchedule () {
      this.success = null
      this.error = null

      const obj = {
        client_name: this.client_name,
        client_email: this.client_email,
        client_phone: this.client_phone,
        subject: this.subject,
        meeting_agenda: this.meeting_agenda,
        start_date: this.showModalDetail.start_date
      }

      userService.createSechedule(1, obj)
        .then(
          response => {
            this.success = 'Requisição registrada com sucesso!'
            this.requested = true
          }
        )
        .catch(
          error => {
            console.log(error, error.response)
            this.error = error.response.status === 422 ? error.response.data.errors : ['Erro ao tentar salvar a agenda']
          }
        )
    }
  }
}
</script>
