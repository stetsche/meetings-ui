<template>
<div class="avatar">
  <img 
    v-if="hasImage"
    v-bind:class="isSquare ? 'square' : 'circle'" 
    v-bind:src="image"
    v-bind:width="size"
    v-bind:height="size"
  />
  <div
    v-if="!hasImage"
    v-bind:style="letterStyle" 
    v-bind:class="isSquare ? 'square' : 'circle'" 
  >
    <span class="initials">{{initials}}</span>
  </div>
</div>
</template>

<style scoped>
.circle {
  border-radius: 50%;
}
.square {
  border-radius: 10%;
}
</style>

<script>
export default {
  data () {
    return {
    }
  },
  computed: {
    hasImage: function (){
      return this.image != null && this.image != '';
    },
    isSquare: function () {
      return this.square;
    },
    initials: function () {
      return this.username.split(' ').splice(0,3).map((n) => n[0]).join('').toUpperCase();
    },
    letterStyle: function () {
      var style;
      style = 'width:' + this.size + 'px;';
      style += 'height:' + this.size + 'px;';
      style += 'background-color:' + this.backgroundColor + ';';
      style += 'display: flex;flex-direction: column;justify-content: center; text-align: center;';
      style += 'font-size:' + this.size / this.initials.length + 'px;';
      return style;
    }
  },
  props: {
    size: { type: Number, default: 100 },
    image: { type: String, default: null },
    square: { type: Boolean, default: false },
    username: {type: String, default: 'Not Available' },
    backgroundColor: {type: String, default: 'aqua' },
  }
}
</script>