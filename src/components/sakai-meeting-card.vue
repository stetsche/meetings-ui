<template>
<div class="card" style="width: 30rem;" aria-describedby="">
  <div class="card-header">
    <div class="mt-1 mb-2">{{firstTitle}}</div>
    <h2 class="card-title">{{mainTitle}}</h2>
    <div class="card-subtitle mb-2">{{schedule}}
     <span class="ml-1 mr-1">|</span>
     <span class="mr-2">live</span><span v-bind:class="statusIcon"></span><br/>
    </div>
    <a href="#">View Description</a>
  </div>
  <div class="card-body">
    BUTTONS HERE
  </div>
</div>
</template>

<style>
    @import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
</style>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    mainTitle: { type: String, default: undefined },
    firstTitle: { type: String, default: undefined },
    userId: { type: String, default: undefined },
  },
  methods: {
  },
  computed: {
    schedule: function () {
      return new Date(Date.now()).toLocaleString('en-GB', { timeZone: 'UTC' })
    },
    statusIcon: function () {
      var iconBase = 'fa ';
      return iconBase + 'fa-plus-circle'
    },
  },
}
</script>