<template>
<div>
  <div class="wrapper" :class="[{'disabled-style' : disabled}, {'invalid-style' : invalid}]">
    <label for="input">
      <slot name="prepend">
        <!-- <i class="fa fa-search search-icon"></i> -->
      </slot>
    </label>
    <input id="input" type="search" class="sakai-input" :disabled="disabled" v-model="value" :placeholder="placeholder">
    <slot name="append">
      <!-- <i class="fa fa-search search-icon"></i> -->
    </slot>
  </div>

</div>
</template>

<script>
export default {
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
      default: 'Search'
    }
  },
  data () {
    return {
      value: null
    }
  },

  mounted() {
    console.log(this.$slots);
  }

}
</script>

<style>
.wrapper{
  background-color: rgb(253, 253, 253);
  border: 1px solid silver;
  border-radius: 5px;
  width: fit-content;
  height: fit-parent;
  margin-right: 5px;
}
.sakai-input{
  border: 0;
  background: transparent;
  outline: none;  
  padding: 0px 5px;
}
.wrapper {
  position: relative;
  display: flex;
  min-width: 100px;
}
.search-icon {
  top: 6px;
  left: 8px;
  padding: 4px 8px 4px 8px;
}
.invalid-style {
  outline: 1px solid rgb(255, 120, 96);
  color: rgb(228, 155, 155);
}
.disabled-style {
  outline: 1px solid rgb(204, 204, 204);
  color: rgb(240, 240, 240);
}
</style>
