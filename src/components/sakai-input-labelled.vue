<template>
  <div>
    <div>
        <label class="sakai-label" for="input">{{title}}</label>
    </div>
    <textarea v-if="textarea" class="sakai-area" rows="10" cols="50"></textarea>
    <SakaiInput :type="inputType" v-else />
  </div>
</template>

<script>
import SakaiInput from './sakai-input.vue';
export default {
    components: {
        SakaiInput
    },
    props: {
        title: {
            type: String,
            default: "Tile"
        },
        textarea: {
            textarea: Boolean,
            default: false 
        },
        inputType: {
            type: String,
            default: 'text'
        }
    }
}
</script>

<style>
.sakai-area {
    resize: auto;
    border-radius: 5px;
    border: 1px solid #9e9e9e;
    padding: 5px;
    outline: none;
}
.sakai-label {
    margin-bottom: 4px;
    font-size: 1.1rem;
}
</style>