<template>
  <button
    type="button"
    :title="textHidden ? text : undefined"
    @click="onClick"
    class="btn"
    :disabled="disabled"
    :class="{ clear, circle, 'btn-primary': primary }"
  >
    <slot name="prepend" />
    <span v-if="!textHidden && text.length > 0">{{ text }}</span>
    <slot name="append" />
  </button>
</template>

<script>
export default {
  components: {},
  props: {
    text: {
      type: String,
      default: "Button",
    },
    clear: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    circle: {
      type: Boolean,
      default: false,
    },
    textHidden: {
      type: Boolean,
      default: false,
    },
    primary: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      showMenu: true,
    };
  },

  methods: {
    onClick() {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>

<style scoped>
.btn {
  background-color: rgb(228, 236, 233);
  border: 1px solid rgb(172, 172, 172);
  padding: 0.3rem 0.7rem;
  height: 100%;
}
.btn-primary {
  background-color: #0d6efd !important;
}
.btn:hover {
  background-color: rgb(218, 226, 233);
}
.btn:focus {
  background-color: rgb(200, 219, 236);
  box-shadow: none;
}
.clear {
  background-color: transparent;
  border: none;
}
.circle {
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  font-size: 1.5rem;
  padding: 0;
}
.marginR {
  margin-right: 6px;
}
.marginL {
  margin-left: 6px;
}
</style>
