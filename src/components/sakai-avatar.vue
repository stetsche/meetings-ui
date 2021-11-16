<template>
<div class="avatar">
  <img
    v-show="variant == 'image'" 
    v-on:load="onImageLoad"
    :src="imageUrl"
    :width="size"
    :height="size"
    :style="imageStyle"
    :alt="altText"
  />
  <div v-if="variant == 'placeholder'" :style="placeholderStyle">
    <!-- This can be replaced with the icon component later -->
    <span class="fa fa-file-image-o"></span>
  </div>
  <div v-if="variant == 'text'" :style="placeholderStyle">
    <span>{{text}}</span>
  </div>
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
    form: { 
      type: String, 
      default: 'circle',
    },
    userId: { 
      type: String, 
    },
    userName: { type: String, },
    siteId: { type: String, default: undefined },
    offical: { type: Boolean, default: false },
    text: { type: String, default: undefined},
  },
  methods: {
    onImageLoad: function () {
      this.loaded = true;
    }
  },
  computed: {
    variant: function () {
      if(this.text) {
        return 'text';
      } else if (this.loaded) {
        return 'image';
      } else {
        return 'placeholder';
      }
    },
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
    fontSize: function () {
      if(this.variant == 'placeholder') {
        return this.size / 2.5; 
      } else if (this.text.length <= 3){
        return this.size / 2;
      } else {
        return this.size / (this.text.length * (2/3));
      }
    },
    placeholderStyle: function () {
      var style = this.borderRadius;
      style += 'background-color:' + this.backgroundColor + ';';
      style += 'color:' + this.color + ';';
      style += 'width:' + this.size +'px;';
      style += 'height:' + this.size +'px;';
      style += 'display: flex;flex-direction: column;justify-content: center; text-align: center;';
      style += 'font-size:' + this.fontSize + 'px;';
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
    altText: function () {
      return 'Profile Image of ' + this .userName;
    }
  },
}
</script>