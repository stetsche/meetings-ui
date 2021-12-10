<template>
  <div
    :class="[
      { 'sakai-wrapper': type != 'checkbox' },
      { 'sakai-disabled': disabled },
      { 'sakai-invalid': invalid },
    ]"
  >
    <slot name="prepend" />
    <input
      v-model="internalValue"
      :id="id"
      :name="name"
      :type="type"
      :class="{ 'sakai-input': type != 'checkbox' }"
      :disabled="disabled"
      :placeholder="placeholder"
    />

    <slot name="append">
      <sakai-icon
        v-if="type == 'date'"
        class="icon-append"
        iconkey="calendar"
      ></sakai-icon>
    </slot>
  </div>
</template>

<script>
import sakaiIcon from "./sakai-icon.vue";
export default {
  components: { sakaiIcon },
  data() {
    return {
      internalValue: null,
    };
  },
  watch: {
    internalValue(newValue) {
      this.$emit("input", newValue);
    },
  },
  props: {
    id: {
      type: String,
      default: "input",
    },
    type: {
      type: String,
      default: "text",
    },
    name: {
      type: String,
      default: "input",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    invalid: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: "",
    },
    value: {
      type: [String, Boolean],
      default: "",
    },
    min: {
      //for input number
      type: [String, Number],
      default: undefined,
    },
  },
  mounted() {
    this.internalValue = this.value;
  },
  model: {
    prop: "value",
    event: "input",
  },
};
</script>

<style>
@import "../assets/sakai-colors.css";
.sakai-wrapper {
  position: relative;
  display: flex;
  min-width: 100px;
  background: var(--sakai-background-color-1);
  color: grey;
  border: 1px solid var(--sakai-border-color);
  border-radius: 5px;
  height: 2.25rem;
  width: 100%;
}
.sakai-input {
  color: var(--sakai-text-color-1);
  border: 0;
  background: transparent;
  outline: none;
  padding: 0.375rem;
  width: 100%;
}
input[type="checkbox"] {
  background-color: var(--sakai-background-color-1);
  border: 1px solid var(--sakai-border-color);
}
.search-icon {
  padding: 0 0 0 8px;
  align-self: center;
}
.icon-append {
  padding: 0 8px 0 0;
  align-self: center;
}
.sakai-invalid {
  outline: 1px solid rgb(205 137 137);
  color: rgb(205 137 137);
}
.sakai-disabled {
  outline: 1px solid rgb(255, 255, 255);
  color: rgb(217 217 217);
}
</style>
