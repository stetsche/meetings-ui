<template>
  <div>
    <div>Hola soy la app</div>
    <div class="d-flex gap-4">
        <div>
            <Card/>
        </div>
        <div>
            <Card/>
        </div>
    </div>
  </div>
</template>
<script>
import Card from "./components/Card.vue";
export default {
  components: {
    Card,
  },
  data() {
    return {
      meetintgsList: [
        {
          title: "Basic Class Meeting",
          lesson: "Lesson 23: name here",
          participants: [
            {
              name: "John",
              lastmame: "Doe",
              avatar: null,
            },
            {
              name: "John",
              lastmame: "Doe",
              avatar: null,
            },
            {
              name: "John",
              lastmame: "Doe",
              avatar: null,
            },
            {
              name: "John",
              lastmame: "Doe",
              avatar: null,
            },
          ],
        },
        {
          title: "Study Group Meeting",
          lesson: "Lesson 23: name here",
          participants: [],
        },
      ],
    };
  },
};
</script>
<style >
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css";
@import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
</style>
