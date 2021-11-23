<template>
  <div class="mb-4">
    <div>
        <label class="mb-1" for="input">{{title}}</label>
    </div>
    <textarea v-if="textarea" class="sakai-area" rows="10" cols="85"></textarea>
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
    padding: .375rem;
    outline: none;
}
</style>