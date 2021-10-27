<template>
<div class="wrapper">

  <i class="fa fa-search search-icon"></i>
  <input type="search" class="bar-style" v-model="value" @keyup.enter="search()" placeholder="Search">
  
</div>
</template>

<style scoped>
.bar-style {
  border-radius: 0.3em;
  border: 2px solid rgb(212, 212, 212);
  padding: 2px 23px 2px 30px;
  outline: 0;
}
.wrapper {
  position: relative;
  display: flex;
  min-width: 100px;
}
.search-icon {
  position: absolute;
  top: 6px;
  left: 8px;
  width: 14px;
}
</style>

<script>
export default {
  data () {
    return {
      value: '',
      showMenu: false,
      selectedId: null,
      hoverId: null,

      object: [
        { id: 0, title: 'meeting1', url: "https://translate.google.es/?hl=es&sl=es&tl=en&op=translate" },
        { id: 1, title: 'meeting2', url: "https://getbootstrap.com/docs/5.0/components/card/#list-groups" }
      ]
    }
  },

  methods: {

    search() {
      //console.log(this.value);

      for (let x = 0; x < this.object.lenght; x++){
        if (this.object.title[x] == this.value){
          console.log("Found!");
        } else {
          console.log("not found");
        }
      }
      
    },

  },

  props:{
  }
}
</script>