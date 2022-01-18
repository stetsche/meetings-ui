<template>
  <div>
    <div>
      <label class="mb-1" for="input">{{ title }}</label>
    </div>
    <textarea v-if="textarea" class="sakai-area" rows="10" />
    <SakaiSelect v-else-if="select" :items="items" :value="value" />
    <SakaiInput v-else :type="type" :value="value">
      <template #prepend>
        <slot name="prepend" />
      </template>
      <template #append>
        <slot name="append" />
      </template>
    </SakaiInput>
  </div>
</template>

<script>
import SakaiInput from "./sakai-input.vue";
import SakaiSelect from "./sakai-select.vue";
export default {
  components: {
    SakaiInput,
    SakaiSelect,
  },
  props: {
    title: {
      type: String,
      default: "Title",
    },
    textarea: {
      textarea: Boolean,
      default: false,
    },
    select: {
      textarea: Boolean,
      default: false,
    },
    items: {
      type: Array,
    },
    type: {
      type: String,
      default: "text",
    },
    value: {
      type: [String, Boolean, Number],
      default: undefined,
    },
  },
};
</script>

<style>
@import "../assets/sakai-colors.css";
.sakai-area {
  resize: auto;
  background: var(--sakai-background-color-1);
  color: var(--sakai-text-color-1);
  border: 1px solid var(--sakai-border-color);
  border-radius: 5px;
  padding: 0.375rem;
  width: 100%;
}
</style>
