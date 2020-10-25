<template>
  <side-bar>
    <mobile-menu slot="content"></mobile-menu>
    <sidebar-link to="/admin/overview">
      <i class="nc-icon nc-chart-pie-35"></i>
      <p>Dashboard</p>
    </sidebar-link>
    <sidebar-link to="/admin/user">
      <i class="nc-icon nc-circle-09"></i>
      <p>User Profile</p>
    </sidebar-link>
    <sidebar-link to="/admin/table-list">
      <i class="nc-icon nc-notes"></i>
      <p>Table list</p>
    </sidebar-link>
    <sidebar-link to="/admin/typography">
      <i class="nc-icon nc-paper-2"></i>
      <p>Typography</p>
    </sidebar-link>
    <sidebar-link to="/admin/icons">
      <i class="nc-icon nc-atom"></i>
      <p>Icons</p>
    </sidebar-link>
    <sidebar-link to="/admin/maps">
      <i class="nc-icon nc-pin-3"></i>
      <p>Maps</p>
    </sidebar-link>
    <sidebar-link to="/admin/notifications">
      <i class="nc-icon nc-bell-55"></i>
      <p>Notifications</p>
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
  }
}
</script>
