<template>

  <div v-if="showMenu">
    <div class="card marginT" :style="{'width':widthRem+'rem'}">
      <ul class="list-group list-group-flush">

        <li v-for="item in items" :key="item.id" @click="select(item.id)" @mouseover="onHover(item.id)" @mouseleave="hoverId=null" class="list-group-item" :class="{'selectedItem' : selectedId === item.id, 'hoverItem' : hoverId === item.id}">
          <i class="fa iconWrap" :class="item.icon"></i>{{item.string}}
        </li>

      </ul>
    </div>
  </div>

</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [
        { id: 0, icon: 'fa-lock', string: 'Permissions', url: "https://translate.google.es/?hl=es&sl=es&tl=en&op=translate" },
        { id: 1, icon: 'fa-book', string: 'Templates', url: "https://getbootstrap.com/docs/5.0/components/card/#list-groups" },
        { id: 2, icon: 'fa-link', string: 'Link', url: "https://v3.vuejs.org/guide/list.html#v-for-with-a-component" }
      ]
    },
    showMenu: {
      type: Boolean,
      default: 'false'
    },
    showMenu: {
      type: Boolean,
      default: 'false'
    },
    widthRem: {
      type: Number,
      default: 9
    }

  },
  data () {
    return {
      selectedId: null,
      hoverId: null,
      widthRem: 12
    }
  },

  methods: {

    onClick() {
      this.showMenu = !this.showMenu;
      this.selectedId = null;
    },

    onHover(itemId) {
      this.hoverId = itemId;
    },

    select(itemId) {
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
.hoverItem {
  background-color: rgb(243, 248, 253)!important;
  cursor: pointer;
}
.selectedItem {
  background-color: rgb(231, 243, 255)!important;
}
.marginT {
  margin-top: 6px;
}
</style>
