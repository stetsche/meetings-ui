<template>
  <button type="button" @click="onClick" class="btn" :class="{clear,circle,disabled}">
    <slot name="prepend" />
    <span v-if="text.length > 0">{{text}}</span>
    <slot name="append" />
  </button>
</template>

<script>
export default {
  components: {
  },
  props: {
    text:{
      type: String,
    default: 'Button'
    },
    clear: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    }

  },
  data () {
    return {
      showMenu: true
    }
  },

  methods: {
    onClick() {
      this.showMenu = !this.showMenu;
    }
  }
}
</script>

<style scoped>
.btn {
  background-color: rgb(228, 236, 233) !important;
  border: 1px solid rgb(172, 172, 172) !important;
  padding: 0.3rem 0.7rem !important;
  margin-right: 5px;
  line-height: inherit !important;
  height: 100%;
}
.btn:hover {
  background-color: rgb(218, 226, 233) !important;
}
.btn:focus {
  background-color: rgb(200, 219, 236) !important;
  box-shadow: none !important;
}
.clear {
  background-color: transparent !important;
  border: none !important;
}
.circle {
  border-radius: 50% !important;
  width: 40px;
  height: 40px;
}
.disable {
  background-color: rgb(247, 247, 247) !important;  
  border: 1px solid rgb(228, 228, 228) !important;
  color: rgb(163, 163, 163);
}
.marginR {
  margin-right: 6px;
}
.marginL {
  margin-left: 6px;
}
.hover {
  background-color: rgb(243, 248, 253)!important;
  cursor: pointer;
}
</style>
