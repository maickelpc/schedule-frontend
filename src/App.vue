<template>
  <div>
    <div class="wrapper">
      <sidebar></sidebar>
      <div class="main-panel">
        <top-navbar></top-navbar>
        <transition name="fade" mode="out-in">
           <div class="container-fluid">
            <router-view></router-view>
           </div>
        </transition>
        <content-footer></content-footer>
      </div>
    </div>
  </div>
</template>

<script>
import TopNavbar from './layout/TopNavbar.vue'
import Sidebar from './layout/Sidebar.vue'
import ContentFooter from './layout/ContentFooter.vue'
import UserService from './services/users.service'

const userService = new UserService()
export default {
  components: {
    TopNavbar,
    Sidebar,
    ContentFooter
  },
  methods: {
    toggleSidebar () {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false)
      }
    },
    getAllUsers () {
      userService.getAll().then(
        response => this.$store.commit('CHANGE_USERS', response.data.data)
      ).catch(
        response => {
          console.log('Error get all users: ', response.error)
          setTimeout(() => {
            this.getAllUsers()
          }, 1000)
        }
      )
    }
  },
  mounted () {
    let user = localStorage.getItem('loggedinUser')
    if (user) {
      user = JSON.parse(user)
      this.$store.commit('LOGGEDIN_USER', user.accessToken)
    }
    localStorage.setItem('api-url', process.env.ROOT_API)
    this.getAllUsers()
  }
}
</script>
<style lang="scss">
  .vue-notifyjs.notifications{
    .list-move {
      transition: transform 0.3s, opacity 0.4s;
    }
    .list-item {
      display: inline-block;
      margin-right: 10px;

    }
    .list-enter-active {
      transition: transform 0.2s ease-in, opacity 0.4s ease-in;
    }
    .list-leave-active {
      transition: transform 1s ease-out, opacity 0.4s ease-out;
    }

    .list-enter {
      opacity: 0;
      transform: scale(1.1);

    }
    .list-leave-to {
      opacity: 0;
      transform: scale(1.2, 0.7);
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s
  }

  .fade-enter,
  .fade-leave-to
    /* .fade-leave-active in <2.1.8 */

  {
    opacity: 0
  }
</style>
