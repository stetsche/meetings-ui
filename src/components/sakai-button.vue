<template>
<div>
  <button type="button" class="button" :class="[{'clear' : !background}, {'circle' : circle}, {'disable' : disabled}, {'selected' : selected}]" @click="onClick">
    <slot name="prepend">
      <i class="fa fa-lock marginR"></i>
    </slot>
    <span v-if="text.length > 0" class="marginR">{{text}}</span>
    <slot name="append">
      <i class="fa" :class="[showMenu ? 'fa-chevron-up' : 'fa-chevron-down']"></i>
    </slot>
  </button>

  <slot name="dropdown">
    <SakaiDropdown :items="items" :showMenu="showMenu" :widthRem="10"/>
  </slot>

</div>
</template>

<script>
import SakaiDropdown from "./sakai-dropdown.vue";
export default {
  components: {
    SakaiDropdown
  },
  props: {
    items: {
      type: Array,
      default: () => [
        { id: 0, icon: 'fa-lock', string: 'Permissions', url: "https://translate.google.es/?hl=es&sl=es&tl=en&op=translate" },
        { id: 1, icon: 'fa-book', string: 'Templates', url: "https://getbootstrap.com/docs/5.0/components/card/#list-groups" },
        { id: 2, icon: 'fa-link', string: 'Link', url: "https://v3.vuejs.org/guide/list.html#v-for-with-a-component" }
      ]
    },
    text:{
      type: String,
      default: 'Button'
    },
    background: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    coloredIfSelected: {
      type: Boolean,
      default: false
    }

  },
  data () {
    return {
      showMenu: false,
      selected: false,
      hovering: false,

    }
  },

  methods: {

    onClick() {
      this.showMenu = !this.showMenu;
      if (this.coloredIfSelected) {
        this.selected = !this.selected;
      }
    },

    onHover(itemId) {
      this.hoverId = itemId;
    }
  }
}
</script>

<style>
.button {
  background-color: rgb(228, 236, 233);
  border: 1px solid rgb(172, 172, 172);
  border-radius: 5px;
  padding: 4px 26px 4px 26px;
  margin-bottom: 4px;
}
.clear {
  background-color: transparent;
  border: none;
  border-radius: 5px;
  padding: 4px 26px 4px 30px;  
}
.circle {
  padding: 10px;
  border-radius: 50%;
  width: 40px;
  height: 40px;
}
.disable {
  background-color: rgb(247, 247, 247);  
  border: 1px solid rgb(228, 228, 228);
  color: rgb(163, 163, 163);
  padding: 4px 26px 4px 26px;
}
.marginR {
  margin-right: 14px;
}
.iconWrap {
  width: 16.5px;
  margin-right: 6px;
}
.hover {
  background-color: rgb(243, 248, 253)!important;
  cursor: pointer;
}
.selected {
  background-color: rgb(234, 245, 255)!important;
}
</style>
