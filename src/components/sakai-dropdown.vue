<template>
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
        <sakai-icon :iconkey="item.icon" class="iconWrap" :class="item.icon" />
        {{ item.string }}
      </li>
    </ul>
  </div>
</template>

<script>
import SakaiIcon from "./sakai-icon.vue";
import "/node_modules/bootstrap/js/dist/dropdown.js";
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
.iconWrap {
  width: 16.5px;
  margin-right: 6px;
}
.dropdown-item:hover {
  background-color: rgb(240, 245, 252) !important;
  cursor: pointer;
}
ul {
  box-shadow: 1px 2px 5px 1px #e0e0e0;
}
.dropdown-menu {
  min-width: 0 !important;
}
.dropdown-item {
  padding: 0.35rem 1rem !important;
}
@media (max-width: 600px) {
  ul {
    inset: auto auto -8px 0px !important;
    transform: unset !important;
    position: fixed !important;
    border-radius: 10px !important;
    box-shadow: 0 0 0 100vmax #9f9f9f42 !important;
    width: 100%;
  }
  .dropdown-menu {
    padding: 0.6rem 2.5rem 0.8rem 2.5rem !important;
  }
  .dropdown-item {
    padding: 1rem 1rem 1rem 30% !important;
    border-bottom: 1px solid #e9e9e9 !important;
  }
  .dropdown-item:last-child {
    border-bottom: none !important;
  }
}
</style>
