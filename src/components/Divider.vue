<template>
<div>


  <div>
    <span>{{timeline}}</span>
    <button type="button" class="btn" v-if="enableShowAll" @click="onClick">
      <span class="marginR">Show all</span>
      <i class="fa" :class="[showMenu ? 'fa-chevron-up' : 'fa-chevron-down']"></i>
    </button>
  </div>

  <div class="divider"></div>
  <div class="spacer"></div>

  <div class="pull-right">
    <div v-if="showMenu">
      <div class="card" style="width: 9rem;">
        <ul class="list-group list-group-flush">

          <li v-for="opts in object" :key="opts.id" @click="select(opts.id)" @mouseover="onHover(opts.id)" @mouseleave="hoverId=null" class="list-group-item" :class="{'hoverItem' : hoverId === opts.id}" >
            <i class="fa iconWrap" :class="opts.icon"></i>{{opts.string}}
          </li>

        </ul>
      </div>
    </div>
  </div>
  
</div>
</template>

<style scoped>
@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css';
.btn {
  background: none;
  box-shadow: none;
  float: right;
  padding: 0px;
}
.marginR {
  margin-right: 8px;
}
.spacer {
  height: 4px;
}
.divider {
  height: 2px;
  width: 100%;
  background-color: rgb(216, 216, 216);
  margin-top: 4px;
}
.iconWrap {
  width: 16.5px;
  margin-right: 6px;
}
.hoverItem {
  background-color: rgb(243, 248, 253);
  cursor: pointer;
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
        { id: 0, icon: 'fa-th-large', string: 'All', url: "https://translate.google.es/?hl=es&sl=es&tl=en&op=translate" },
        { id: 1, icon: 'fa-play-circle', string: 'Recordings', url: "https://getbootstrap.com/docs/5.0/components/card/#list-groups" }
      ]
    }
  },

  methods: {

    onClick() {
      this.showMenu = !this.showMenu;
      this.hoverId = null;
    },

    onHover(optsId) {
      this.hoverId = optsId;
    },

    select(optsId) {
      this.selectedId = optsId;     
      window.location.href = this.object[optsId].url;
    },

  },

  props:{
    timeline: { type: Array, default: 'Past' },
    enableShowAll: { type: Boolean, default: false }
  }
}
</script>