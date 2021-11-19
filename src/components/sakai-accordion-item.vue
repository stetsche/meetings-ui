<template>
  <div class="accordion-item">
    <h2 class="accordion-header" :id="'heading' + id">
      <button
        class="accordion-button"
        type="button"
        data-bs-toggle="collapse"
        aria-expanded="true"
        :aria-controls="'item' + id"
        :class="!open ? 'collapsed' : ''"
        :data-bs-target="'#item' + id"
      >
        {{ title }}
      </button>
    </h2>
    <div
      class="accordion-collapse collapse"
      :aria-labelledby="'heading' + id"
      :data-bs-parent="parentId()"
      :id="'item' + id"
      :class="open ? 'show' : ''"
    >
      <div class="accordion-body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line
import { Collapse } from "bootstrap";
import { v4 as uuid } from "uuid";
export default {
  data() {
    return {
      id: "accordion",
    };
  },
  props: {
    title: { Type: String, default: "" },
    open: { Type: Boolean, default: false },
  },
  computed: {
    showsOpen: function () {
      return this.open;
    },
  },
  methods: {
    parentId: function () {
      //Only set a parentId if the if we want the accordions to close automatically
      if (!this.independent()) {
        return "#" + this.$parent.$data.id;
      }
      return undefined;
    },
    independent: function () {
      if (!(this.$parent.$vnode.componentOptions.tag == "sakai-accordion")) {
        return true;
      } else {
        return this.$parent.$props.independent;
      }
    },
  },
  created: function () {
    this.id = uuid().substring(8, 13); //random id '-34F4'
  },
};
</script>
