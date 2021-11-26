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
      id="input"
      :name="name"
      :type="type"
      :class="{ 'sakai-input': type != 'checkbox' }"
      :disabled="disabled"
      v-model="value"
      :placeholder="placeholder"
    />
    <slot name="apend" />
  </div>
</template>

<script>
export default {
  props: {
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
  },
  data() {
    return {
      value: null,
    };
  },
};
</script>

<style>
.sakai-wrapper {
  position: relative;
  display: flex;
  min-width: 100px;
  background: var(--sakai-background-color-1);
  border: 1px solid var(--sakai-border-color);
  border-radius: 5px;
  width: 22rem;
  height: 2.25rem;
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
.sakai-invalid {
  outline: 1px solid rgb(255, 120, 96);
  color: rgb(228, 155, 155);
}
.sakai-disabled {
  outline: 1px solid rgb(204, 204, 204);
  color: rgb(240, 240, 240);
}
</style>
