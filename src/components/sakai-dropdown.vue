<template>
  <div class="dropdown">
    <div data-bs-toggle="dropdown">
      <slot name="activation" >
      </slot>
    </div>
    <ul class="dropdown-menu">
      <li v-for="item in items" :key="item.id" @click="select(item.id)" class="dropdown-item" >
        <i class="fa iconWrap" :class="item.icon"></i>{{item.string}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  components: {
  },
  props: {
    items: {
      type: Array,
      default: () => [
        { id: 0, icon: 'fa-lock', string: 'Permissions', url: "https://translate.google.es/?hl=es&sl=es&tl=en&op=translate" },
        { id: 1, icon: 'fa-book', string: 'Templates', url: "https://getbootstrap.com/docs/5.0/components/card/#list-groups" },
        { id: 2, icon: 'fa-link', string: 'Link', url: "https://v3.vuejs.org/guide/list.html#v-for-with-a-component" }
      ]
    }

  },
  data () {
    return {
      selectedId: null
    }
  },

  methods: {select(itemId) {
      this.selectedId = itemId;      
      window.location.href = this.items[itemId].url;
    }

  }
}
</script>

<style>
.iconWrap {
  width: 16.5px;
  margin-right: 6px;
}
.hoverItem:hover {
  background-color: rgb(243, 248, 253)!important;
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
    box-shadow: 3px 3px 5px 5px #e2e2e2;
    width: 100%; 
  }
  .dropdown-menu {
    padding: 0.5rem 0 1.2rem 0;
  }
  .dropdown-item {
    padding: 0.8rem 1rem 0.8rem 30% !important;
  }
}
</style>
