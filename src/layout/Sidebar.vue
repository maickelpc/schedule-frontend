<template>
  <side-bar :title="title">
    <!-- <mobile-menu slot="content"></mobile-menu> -->
    <sidebar-link :to="'/'+user.id" v-for="user of users" :key="user.id">
      <i class="nc-icon nc-circle-09"></i>
      <p>{{user.name}}</p>
    </sidebar-link>
  </side-bar>
</template>
<style lang="scss">
</style>
<script>
import MobileMenu from './MobileMenu'
export default {
  components: {
    MobileMenu
  },
  methods: {
    toggleSidebar () {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false)
      }
    }
  },
  computed: {
    users () {
      return this.$store.state.users
    },
    title () {
      return process.env.APP_NAME || 'Agenda'
    }
  }
}
</script>
