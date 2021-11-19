<template>
  <div class="sakai-wrapper" :class="[{'sakai-disabled' : disabled}, {'sakai-invalid' : invalid}]">    
    <slot name="prepend">
    </slot>
    <input id="input" :type="type" class="sakai-input" :disabled="disabled" v-model="value" :placeholder="placeholder">
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
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  data () {
    return {
      value: null
    }
  }
}
</script>

<style>
.sakai-wrapper{
  position: relative;
  display: flex;
  min-width: 100px;
  background-color: rgb(253, 253, 253);
  border: 1px solid #9e9e9e;
  border-radius: 5px;
  width: 22rem;
  height: 2.25rem;
}
.sakai-input{
  border: 0;
  background: transparent;
  outline: none;  
  padding: .375rem .6rem;
  width: 100%;
}
.search-icon {
  padding: 0 0 0 8px;
  align-self: center;
}
.sakai-invalid {
  outline: 1px solid rgb(255, 120, 96);
  color: rgb(228, 155, 155);
}
.sakai-disabled {
  outline: 1px solid rgb(204, 204, 204);
  color: rgb(240, 240, 240);
}
</style>
