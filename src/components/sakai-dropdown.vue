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
.selectedItem {
  background-color: rgb(231, 243, 255)!important;
}
</style>
