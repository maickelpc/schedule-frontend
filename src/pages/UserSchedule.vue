<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="card-plain" v-if="userSchedule">
              <h4 class="card-title">Agenda {{userSchedule.name }}</h4>
              <hr>

          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      data: null
    }
  },
  computed: {
    userSchedule () {
      return this.$store.state.userSchedule
    },
    schedule () {
      return this.$store.state.schedule
    }
  }
}
</script>
<style>
</style>
