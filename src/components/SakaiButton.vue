<template>
  <button type="button" @click="onClick" :class="classes"> {{ label }}</button>
</template>

<script>

export default {
  name: 'sakai-button',
  props: {
    label: {
      type: String,
      required: true,
    },
    primary: {
      type: Boolean,
      default: false,
    },
    backgroundColor: {
      type: String,
    },
  },

  computed: {
    classes: function() {
      var styleClasses = 'btn';
      if(this.primary) {
        styleClasses += ' btn-primary';
      } 
      return styleClasses;
    }
  },

  methods: {
    onClick() {
      this.$emit('onClick');
    },
  },
};
</script>
