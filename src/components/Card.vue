<template>
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Titile Number<span v-if="num != 0">: {{num}}</span></h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a v-on:click="countUp" class="card-link">Card link</a>
    <a v-on:click="countDown" class="card-link">Another link</a>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      num: 0
    }
  },
  methods: {
    countUp: function () {
      this.num++;
      console.log(this.num);
    },
    countDown: function () {
      this.num--;
      console.log(this.num);
    }
  }
}
</script>