<template>
  <div class="p-4">
    <div class="d-flex">
      <SakaiButton
        id="themeswitch"
        class="ms-auto mb-2"
        @click="switchtheme()"
        text=""
      >
        <template #prepend>
          <i class="bi bi-moon-fill"></i>
        </template>
      </SakaiButton>
    </div>
    <sakai-accordion>
      <sakai-accordion-item title="1. Meeting Information" open="true">
        <SakaiInputLabelled title="Meetings Title" />
        <SakaiInputLabelled title="Description" textarea="true" />
        <div class="d-flex align-items-end">
          <SakaiInputLabelled title="Preupload presentation" class="me-2" />
          <SakaiButton text="Add" class="mb-4" />
        </div>
        <SakaiInputLabelled
          title="Description"
          select="true"
          :items="confServ"
        />
        <div class="d-flex">
          <SakaiInput type="checkbox" />
          <label class="ms-2" for="input">Record Meeting</label>
        </div>
        <div class="d-flex">
          <SakaiInput type="checkbox" />
          <label class="ms-2" for="input">Disable Chat</label>
        </div>
        <div class="d-flex">
          <SakaiInput type="checkbox" />
          <label class="ms-2" for="input">Wait For Moderator</label>
        </div>
      </sakai-accordion-item>
      <sakai-accordion-item title="2. Participants">
        <SakaiInputLabelled
          title="Participant Type"
          select="true"
          :items="partType"
        />
        <SakaiButton text="Apply" />
        <SakaiParticipantsList
          :participants="participants"
          @select="createRoom"
          class="mt-4"
        />
        <!-- <div>{{ selectedParticipants }}</div> -->
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
@import "../assets/sakai-colors.css";
@import "../assets/page.css";
</style>

<script>
import SakaiAccordionItem from "../components/sakai-accordion-item.vue";
import SakaiAccordion from "../components/sakai-accordion.vue";
import SakaiInputLabelled from "../components/sakai-input-labelled.vue";
import SakaiButton from "../components/sakai-button.vue";
import SakaiInput from "../components/sakai-input.vue";
import SakaiParticipantsList from "../components/sakai-participants-list.vue";
// eslint-disable-next-line
import toggletheme from "../assets/toggletheme.js";
export default {
  components: {
    SakaiAccordionItem,
    SakaiAccordion,
    SakaiInputLabelled,
    SakaiButton,
    SakaiInput,
    SakaiParticipantsList,
  },
  props: {
    confServ: {
      type: Array,
      default: () => [
        {
          string: "Big Bule Button",
          url: "https://translate.google.es/?hl=es&sl=es&tl=en&op=translate",
        },
        {
          string: "Microsoft Teams",
          url: "https://getbootstrap.com/docs/5.0/components/card/#list-groups",
        },
        {
          string: "Zoom",
          url: "https://v3.vuejs.org/guide/list.html#v-for-with-a-component",
        },
      ],
    },
    partType: {
      type: Array,
      default: () => [
        {
          string: "All Site Members",
          url: "https://translate.google.es/?hl=es&sl=es&tl=en&op=translate",
        },
        {
          string: "Role",
          url: "https://getbootstrap.com/docs/5.0/components/card/#list-groups",
        },
        {
          string: "Selections/Groups",
          url: "https://v3.vuejs.org/guide/list.html#v-for-with-a-component",
        },
        {
          string: "Users",
          url: "https://v3.vuejs.org/guide/list.html#v-for-with-a-component",
        },
      ],
    },
  },
  data() {
    return {
      participants: [
        {
          form: "square",
          userId: "9072hbs3-sb23-sfef-f93r-9q678g7g3qrh",
          userName: "Bailey Rutheee",
        },
        {
          userId: "454db719-443a-400f-b4d4-4dfada8091c0",
          userName: "Victor van Dijkdd",
        },
        {
          userId: "67aefef6-32df-8fe7-87fe-90721ar79def",
          userName: "Aufderhar Jamison",
        },
      ],
      selectedParticipants: [],
    };
  },
  methods: {
    switchtheme: function () {
      toggletheme();
    },
    createRoom(participants) {
      this.$set(this, "selectedParticipants", participants);
    },
  },
};
</script>
