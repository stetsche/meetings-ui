<template>
  <div @click="onClick">
    <slot name="activation" >
                <!-- <SakaiButton  class="ms-0" :showMenu="showMenu">
                  <template #prepend>
                    <i class="fa fa-lock marginR"></i>
                  </template>
                  <template #append>
                    <i class="fa marginL" :class="showMenu ? 'fa-chevron-up' : 'fa-chevron-down'"></i>
                  </template>
                </SakaiButton> -->
    </slot>
    <div v-if="showMenu">
      <div class="card position-absolute marginT" :style="{'width':widthRem+'rem'}">
        <ul class="list-group list-group-flush">

        <li v-for="item in items" :key="item.id" @click="select(item.id)" class="list-group-item hoverItem" :class="{'selectedItem' : selectedId === item.id}">
          <i class="fa iconWrap" :class="item.icon"></i>{{item.string}}
        </li>

      </ul>
      </div>
    </div>
  </div>
</template>

<script>
// import SakaiButton from "./sakai-button.vue";
export default {
  components: {
    //  SakaiButton,
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
    widthRem: {
      type: Number,
      default: 9
    }

  },
  data () {
    return {
      selectedId: null,
      hoverId: null,
      showMenu: false
    }
  },

  methods: {
    prueba(){
      console.log('asdasdasda 1111');
    },

    select(itemId) {
      this.selectedId = itemId;      
      window.location.href = this.items[itemId].url;
    },
     onClick() {
      this.showMenu = !this.showMenu;
      console.log(this.showMenu);
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
.marginT {
  margin-top: 6px;
}
.list-group-item {
  padding: 0.5rem 0.8rem !important;
}
.list-group {
  z-index: 1;
}
</style>
