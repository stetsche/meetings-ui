<template>
  <div class="mb-4">
    <div>
      <label class="mb-1" for="input">{{ title }}</label>
    </div>
    <textarea v-if="textarea" class="sakai-area" rows="10" cols="85" />
    <SakaiSelect v-else-if="select" :items="items" />
    <SakaiInput v-else :type="inputType" />
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
      default: "Tile",
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
    inputType: {
      type: String,
      default: "text",
    },
  },
};
</script>

<style>
.sakai-area {
  resize: auto;
  background: var(--sakai-background-color-1);
  color: var(--sakai-text-color-1);
  border: 1px solid var(--sakai-border-color);
  border-radius: 5px;
  padding: 0.375rem;
  outline: none;
}
</style>
