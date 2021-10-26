<template>
<div>
  <button type="button" class="btn" @click="onClick">
    <span class="marginR">Options</span>
    <i class="fa" :class="[showMenu ? 'fa-chevron-up' : 'fa-chevron-down']"></i>
  </button>

  <div class="spacer"></div>

  <div v-if="showMenu">
    <div class="card" style="width: 9rem;">
      <ul class="list-group list-group-flush">

        <li v-for="opts in object" :key="opts.id" @click="select(opts.id)" @mouseover="onHover(opts.id)" @mouseleave="hoverId=null" class="list-group-item" :class="{ 'selectedItem' : selectedId === opts.id, 'hoverItem' : hoverId === opts.id  }">
          <i class="fa iconWrap" :class="opts.icon"></i>{{opts.string}}
          <router-link to="/test"></router-link>
        </li>

      </ul>
    </div>
  </div>
</div>
</template>

<style scoped>
@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css';
.btn {
  background-color: rgb(228, 236, 233);
  border: 1px solid rgb(172, 172, 172);
  border-radius: 5px;
  padding: 4px 18px 4px 24px;
}
.marginR {
  margin-right: 24px;
}
.spacer {
  height: 2px;
}
.iconWrap {
  width: 16.5px;
  margin-right: 6px;
}
.hoverItem {
  background-color: rgb(243, 248, 253);
  cursor: pointer;
}
.selectedItem {
  background-color: rgb(234, 245, 255);
}
</style>

<script>
export default {
  data () {
    return {
      showMenu: false,
      selectedId: null,
      hoverId: null,

      object: [
        { id: 0, icon: 'fa-lock', string: 'Permissions', url: "https://translate.google.es/?hl=es&sl=es&tl=en&op=translate" },
        { id: 1, icon: 'fa-book', string: 'Templates', url: "https://getbootstrap.com/docs/5.0/components/card/#list-groups" },
        { id: 2, icon: 'fa-link', string: 'Link', url: "https://v3.vuejs.org/guide/list.html#v-for-with-a-component" }
      ]
    }
  },

  methods: {

    onClick() {
      this.showMenu = !this.showMenu;
      this.selectedId = null;
    },

    onHover(optsId) {
      this.hoverId = optsId;
    },

    select(optsId) {
      this.selectedId = optsId;      
      window.location.href = this.object[optsId].url;
    }

  }
}
</script>