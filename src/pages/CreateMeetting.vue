<template>
  <div class="p-4">
    <sakai-accordion>
      <sakai-accordion-item title="1. Meeting Information" open="true">
        Some Meeting Information Settings
      </sakai-accordion-item>
      <sakai-accordion-item title="2. Participants">
        Some Participants Settings
      </sakai-accordion-item>
      <sakai-accordion-item title="3. Availability">
        Some Availability Settings
      </sakai-accordion-item>
      <sakai-accordion-item title="4. Notification">
        Some Notification Settings
      </sakai-accordion-item>
      <sakai-accordion-item title="5. Meeting Add-ons">
        Some Meeting Add-ons Settings
      </sakai-accordion-item>
    </sakai-accordion>
  </div>
</template>

<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css";
@import "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.0/font/bootstrap-icons.css";
@import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
.wrapper {
  background-color: pink;
  padding: 1rem;
}
</style>

<script>
import SakaiAccordionItem from "../components/sakai-accordion-item.vue";
import SakaiAccordion from "../components/sakai-accordion.vue";
export default {
  components: {
    SakaiAccordionItem,
    SakaiAccordion,
  },
};
</script>
