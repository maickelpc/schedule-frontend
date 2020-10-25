<template>
  <component :is="tag"
             @click.native="hideSidebar"
             v-bind="$attrs"
             tag="li">
    <a class="nav-link" v-bind="$attrs" @click="setUserAndSchedule()">
      <slot>
        <i v-if="link.icon" :class="link.icon"></i>
        <p>{{link.name}}</p>
      </slot>
    </a>
  </component>
</template>
<script>
import UserService from '../../services/users.service'
const userService = new UserService()
export default {
  inheritAttrs: false,
  inject: {
    autoClose: {
      default: true
    }
  },
  props: {
    link: {
      type: [String, Object],
      default: () => {
        return {
          name: '',
          path: '',
          icon: ''
        }
      }
    },
    tag: {
      type: String,
      default: 'router-link'
    },
    item: {
      type: Object,
      default: null
    }
  },
  methods: {
    hideSidebar () {
      if (this.autoClose && this.$sidebar && this.$sidebar.showSidebar === true) {
        this.$sidebar.displaySidebar(false)
      }
    },
    setUserAndSchedule: function () {
      if (this.$props['item']) {
        let user = this.$props['item']
        userService.getSchedule(user.id).then(
          response => this.$store.commit('CHANGE_SCHEDULE', response.data)
        )
        this.$store.commit('CHANGE_USER_SCHEDULE', this.$props['item'])
      }
    }
  }
}
</script>
<style>
</style>
