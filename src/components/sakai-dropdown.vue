<template>
  <div>
    <div class="dropdown">
      <div data-bs-toggle="dropdown">
        <slot name="activation"> </slot>
      </div>
      <ul class="dropdown-menu">
        <li
          v-for="item in items"
          :key="item.id"
          @click="select(item.id)"
          class="dropdown-item"
        >
          <sakai-icon
            :iconkey="item.icon"
            class="iconWrap"
            :class="item.icon"
          />
          {{ item.string }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line
import Dropdown from "bootstrap/js/dist/dropdown";
import SakaiIcon from "./sakai-icon.vue";
export default {
  components: {
    SakaiIcon,
  },
  props: {
    items: {
      type: Array,
      default: () => [
        {
          id: 0,
          icon: "permissions",
          string: "Permissions",
          url: "https://translate.google.es/?hl=es&sl=es&tl=en&op=translate",
        },
        {
          id: 1,
          icon: "template",
          string: "Templates",
          url: "https://getbootstrap.com/docs/5.0/components/card/#list-groups",
        },
        {
          id: 2,
          icon: "link",
          string: "Link",
          url: "https://v3.vuejs.org/guide/list.html#v-for-with-a-component",
        },
      ],
    },
  },
  data() {
    return {
      selectedId: null,
    };
  },

  methods: {
    select(itemId) {
      this.selectedId = itemId;
      window.location.href = this.items[itemId].url;
    },
    /*    dimBackground() {
      if (!document.getElementById('wrapper').classList.contains('overflow')){
        document.getElementById('wrapper').classList.add('overflow');        
      } else {
        document.getElementById('wrapper').classList.remove('overflow');
      }
    }*/
  },
};
</script>

<style>
@import "../assets/sakai-colors.css";
.iconWrap {
  width: 16.5px;
  margin-right: 6px;
}
.dropdown-item:hover {
  background-color: var(--tool-menu-item-hover-background-color) !important;
  cursor: pointer;
}
.dropdown-menu {
  min-width: 0 !important;
  background-color: var(--tool-menu-background-color) !important;
  box-shadow: var(--elevation-1dp) !important;
  border: 1px solid var(--button-border-color) !important;
}
.dropdown-item {
  padding: 0.35rem 1rem !important;
  color: var(--tool-menu-item-text-color) !important;
}
@media (max-width: 600px) {
  .dropdown-menu {
    inset: auto auto -8px 0px !important;
    transform: unset !important;
    position: fixed !important;
    padding: 0.6rem 2.5rem 0.8rem 2.5rem !important;
    box-shadow: 0 0 0 100vmax #9f9f9f42 !important;
    border-radius: 10px !important;
    width: 100%;
  }
  .dropdown-item {
    padding: 1rem 1rem 1rem 30% !important;
    border-bottom: 1px solid var(--sakai-border-color) !important;
  }
  .dropdown-item:last-child {
    border-bottom: none !important;
  }
}
</style>
