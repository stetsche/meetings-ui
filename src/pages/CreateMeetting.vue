<template>
  <div class="p-4">
    <sakai-accordion>
      <sakai-accordion-item title="1. Meeting Information" open="true">
        <SakaiInputLabelled title="Meetings Title"/>
        <SakaiInputLabelled title="Description" textarea="true"/>
        <div class="d-flex align-items-end">
          <SakaiInputLabelled title="Preupload presentation" class="me-2"/>
          <SakaiButton text="Add" class="mb-4"/>
        </div>
        <label class="mb-1" for="">Choose Web Conferencing Service</label>
        <SakaiInput/>
      </sakai-accordion-item>
      <sakai-accordion-item title="2. Participants">
        Some Participants Settings
        Some Participants Settings
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
import SakaiInputLabelled from "../components/sakai-input-labelled.vue";
import SakaiButton from "../components/sakai-button.vue";
import SakaiInput from "../components/sakai-input.vue";
// import SakaiDropdown from "../components/sakai-dropdown.vue";
export default {
  components: {
    SakaiAccordionItem,
    SakaiAccordion,
    SakaiInputLabelled,
    SakaiButton,
    SakaiInput
    //SakaiDropdown,
    
  },
  props: {
    items: {
      type: Array,
      default: () => [
        { string: 'Big Bule Button', url: "https://translate.google.es/?hl=es&sl=es&tl=en&op=translate" },
        { string: 'Microsoft Teams', url: "https://getbootstrap.com/docs/5.0/components/card/#list-groups" },
        { string: 'Zoom', url: "https://v3.vuejs.org/guide/list.html#v-for-with-a-component" }
      ]
    }
  }
};
</script>
