<template>
<div>
  <div class="wrapper">
    <slot name="prepend">
      <i class="fa fa-search search-icon"></i>
    </slot>
    <input type="search" class="bar-style" :class="[{'invalid-style' : invalid}, {'disabled-style' : $slots.prepend}]" v-model="value" @keyup.enter="search()" :placeholder="placeholder" >
  </div> 
    <slot name="append">

    </slot>
</div>
</template>

<script>
export default {
    computed: {

    filledSlot () {
      return this.$slots['prepend']
    }
  },

  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    invalid: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: 'search'
    }
  },
  data () {
    return {
      value: null
    }
  },

  methods: {

    search() {
      for (let x = 0; x < this.items.length; x++){
        if (this.items[x].string === this.value){
          return console.log("Found!");
        } else {
          return console.log("not found");
        }
      }
    },

  },


}
</script>

<style>
.bar-style {
  border-radius: 0.3em;
  border: 2px solid rgb(212, 212, 212);
  padding: 2px 23px 2px 30px;
  margin-bottom: 4px;
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
.invalid-style {
  outline: solid rgb(215 96 96);
  color: green;
}
.disabled-style {
  outline: solid gainsboro;
  color: red;
}
</style>
