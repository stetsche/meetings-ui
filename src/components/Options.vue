<template>
<div>
  <button type="button" :class="[background ? 'button' : 'button-clear']" @click="onClick">
    <span class="marginR">Options</span>
    <i class="fa" :class="[showMenu ? 'fa-chevron-up' : 'fa-chevron-down']"></i>
  </button>

  <div v-if="showMenu">
    <div class="card" style="width: 9rem;">
      <ul class="list-group list-group-flush">

        <li v-for="item in items" :key="item.id" @click="select(item.id)" @mouseover="onHover(item.id)" @mouseleave="hoverId=null" class="list-group-item" :class="{'selectedItem' : selectedId === item.id, 'hoverItem' : hoverId === item.id}">
          <i class="fa iconWrap" :class="item.icon"></i>{{item.string}}
        </li>

      </ul>
    </div>
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
    background: {
      type: Boolean,
      default: true
    }

  },
  data () {
    return {
      showMenu: false,
      selectedId: null,
      hoverId: null,
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
.button {
  background-color: rgb(228, 236, 233);
  border: 1px solid rgb(172, 172, 172);
  border-radius: 5px;
  padding: 4px 26px 4px 26px;
  margin-bottom: 4px;
}
.button-clear {
  background-color: transparent;
  border: none;
  border-radius: 5px;
  padding: 4px 26px 4px 30px;
  margin-bottom: 6px;
}
.marginR {
  margin-right: 14px;
}
.iconWrap {
  width: 16.5px;
  margin-right: 6px;
}
.hoverItem {
  background-color: rgb(243, 248, 253)!important;
  cursor: pointer;
}
.selectedItem {
  background-color: rgb(234, 245, 255)!important;
}
</style>
