<template>
  <div class="sakai-icon" aria-hidden="true">
    <i :class="iconClass"></i>
  </div>
</template>

<script>
import icons from "../assets/icons.js";

export default {
  props: {
    iconkey: {
      Type: String,
      default: "error",
      validator: function (value) {
        return Object.entries(icons).indexOf(value) > -1;
      },
    },
  },
  computed: {
    iconClass: function () {
      console.log(icons["live"]);
      return icons[this.iconkey];
    },
  },
};
</script>
