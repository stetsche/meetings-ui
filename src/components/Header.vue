<template>
<div>

  <div class="d-flex">
    <div>{{title}}</div>
    <div class="ms-auto end-0 position-absolute">
      <slot name="menuSlot">
       
          <Options :items="items" :background="false"/>
        
      </slot>
    </div>
  </div>

  <hr style="margin: 0.5rem 0;">
  
</div>
</template>

<script>
import Options from "./Options.vue";
export default {
  components: {
    Options
  },
  data () {
    return {
      showMenu: false,
      selectedId: null,
      hoverId: null,

      items: [
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
    title: { type: String, default: 'Past'}
  }
}
</script>