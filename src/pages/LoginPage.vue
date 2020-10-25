<template>
  <div class="row">
    <form class="col col-md-8 offset-md-2" @submit="login($event)">
        <div class="form-group">
            <h3>Entre com suas credenciais</h3>
        </div>
        <div class="form-group">
            <label for="exampleInputEmail1">Email</label>
            <input type="email" class="form-control" v-model="email" placeholder="Digite seu email">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Senha</label>
            <input type="password" class="form-control" placeholder="Senha" v-model="password">
        </div>
        <div class="form-group" v-if="error || success">
            <div class="alert alert-danger" v-if="error">
                {{error}}
            </div>
            <div class="alert alert-success" v-if="success">
                Login efetuado com sucesso!
            </div>
        </div>
        <button :disabled="!email || !password" type="submit" class="btn btn-primary">Acessar</button>
    </form>
  </div>
</template>
<style lang="scss">

</style>
<script>
import LoginService from '../services/login.service'
const loginService = new LoginService()

export default {
  data () {
    return {
      email: '',
      password: '',
      loading: false,
      error: null,
      success: null
    }
  },
  methods: {
    login: function (event) {
      event.preventDefault()
      this.error = null
      this.success = null
      loginService.login({email: this.email, password: this.password})
        .then(
          response => {
            this.success = true
            this.$store.commit('LOGGEDIN_USER', response.data.access_token)
          }
        )
        .catch(
          error => {
            if (error.response.status === 401) {
              this.error = 'Credenciais inválidas'
            } else {
              console.log(error)
              this.error = 'Não foi possível efetuar login!'
            }
          }
        )
    }
  }
}

</script>
