<template>
<div class="avatar">
  <img
    v-on:load="onLoad"
    v-show="this.loaded" 
    v-bind:src="imageUrl"
    v-bind:width="size"
    v-bind:height="size"
    v-bind:style="imageStyle"
    v-bind:alt="username"
  />
  <div v-if="!this.loaded" v-bind:style="placeholderStyle"><span class="fa fa-file-image-o"></span></div>
</div>
</template>

<script>
export default {
  data: function() {
    return {
      loaded: false,
      backgroundColor: 'lightgrey',
      color: 'gray',
      sqareRadius: '0%',
      dark: false,
    }
  },
  props: {
    size: { type: Number, default: 100 },
    form: { type: String, default: 'circle' },
    userId: { type: String, default: undefined },
    siteId: { type: String, default: undefined },
    offical: { type: Boolean, default: false },
  },
  methods: {
    onLoad: function () {
      this.loaded = true;
    }
  },
  computed: {
    borderRadius: function () {
      return 'border-radius:' + (this.form == 'square'  ? this.sqareRadius : '50%') + ';';
    }, 
    imageStyle: function () {
      var style = this.borderRadius; 
      if(this.dark) {
        style += 'filter:brightness(75%);';
      }
      return style;
    },
    placeholderStyle: function () {
      var style = this.form;
      style += 'background-color:' + this.backgroundColor + ';';
      style += 'color:' + this.color + ';';
      style += 'width:' + this.size +'px;';
      style += 'height:' + this.size +'px;';
      style += 'display: flex;flex-direction: column;justify-content: center; text-align: center;';
      style += 'font-size:' + this.size / 2.5  + 'px;';
      return style;
    },
    imageUrl: function () {
      var url = 'http://' + window.location.host;
      url += '/direct/profile/';
      url += this.userId + '/image';
      url += this.offical ? '/official' : this.size <= 80 ? '/avatar' : this.size <= 100 ? '/thumb' : '/default';
      if (this.siteId) {
        url += '?siteId=' + this.siteId;
      }
      return url;
    },
    username: function () {
      return 'Some Name'
    }
  },
}
</script>