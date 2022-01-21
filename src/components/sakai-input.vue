<template>
  <form :action="formAction">
    <div
      :class="[
        { 'sakai-wrapper': type == 'search' },
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
        :role="type == 'search' ? 'search' : null"
        :disabled="disabled"
        :placeholder="placeholder"
      />

      <slot name="append">
        <!-- <sakai-icon
          v-if="type == 'date'"
          class="icon-append"
          iconkey="calendar"
        ></sakai-icon> -->
      </slot>
    </div>
  </form>
</template>

<script>
// import sakaiIcon from "./sakai-icon.vue";
export default {
  // components: { sakaiIcon },
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
    formAction: {
      type: String,
      default: null,
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
.sakai-wrapper:focus-within {
  outline: 3px solid var(--focus-outline-color);
}
input {
  background: var(--sakai-background-color-1);
  color: var(--sakai-text-color-1);
  border: 1px solid var(--sakai-border-color);
  border-radius: 5px;
  box-shadow: none;
  padding: 0.375rem;
  width: 100%;
}
input[type="search"] {
  color: var(--sakai-text-color-1);
  background: transparent;
  border: none;
  outline: none;
  padding: 0.375rem;
  width: 100%;
}
input[type="checkbox"] {
  appearance: none;
  height: 15px;
  width: 15px;
  border-radius: 3px;
  background-color: var(--sakai-background-color-1);
  border: 1px solid var(--sakai-border-color);
}
input[type="checkbox"]:checked {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='2 2 12 12'%3E%3Cpath fill='white' d='M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z'/%3E%3C/svg%3E");
  background-color: var(--sakai-color-blue--darker-3);
}
input[type="date"]::-webkit-calendar-picker-indicator {
  background-image: none;
  cursor: pointer;
  position: absolute;
  height: auto;
  width: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
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
