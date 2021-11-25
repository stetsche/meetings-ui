<template>
  <button
    type="button"
    :title="textHidden ? text : undefined"
    @click="handleClick"
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
    handleClick() {
      this.$emit("click");
    },
  },
};
</script>

<style scoped>
.btn {
  background-color: var(--button-background);
  color: var(--button-text-color);
  border: 1px solid var(--button-border-color);
  box-shadow: var(--button-shadow);
  padding: 0.3rem 0.7rem;
  height: 100%;
}
.btn-primary {
  background-color: var(--button-primary-background);
  color: var(--button-primary-text-color);
  border: 1px solid var(--button-primary-border-color);
  box-shadow: var(--button-primary-shadow);
}
.btn:hover {
  background-color: var(--button-hover-background);
  color: var(--button-hover-text-color);
  border: 1px solid var(--button-hover-border-color);
  box-shadow: var(--button-hover-shadow);
}
.btn-primary:hover {
  background-color: var(--button-primary-hover-background);
  color: var(--button-primary-hover-text-color);
  border: 1px solid var(--button-primary-hover-border-color);
  box-shadow: var(--button-hover-primary-shadow);
}
.btn:focus {
  background-color: var(--button-active-background);
  color: var(--button-active-text-color);
  border: 1px solid var(--button-active-border-color);
  box-shadow: var(--button-active-shadow);
}
.btn-primary:focus {
  background-color: var(--button-primary-active-background);
  color: var(--button-primary-active-text-color);
  border: 1px solid var(--button-primary-active-border-color);
  box-shadow: var(--button-primary-active-shadow);
}
.btn:disabled,
.btn-primary:disabled {
  background-color: var(--button-disabled-background);
  color: var(--button-disabled-text-color);
  border: 1px solid var(--button-disabled-border-color);
  box-shadow: var(--button-disabled-shadow);
}
.clear {
  background-color: transparent;
  color: var(--link-color);
  border: 1px solid transparent;
}
.circle {
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  font-size: 1.5rem;
  padding: 0;
}
</style>
