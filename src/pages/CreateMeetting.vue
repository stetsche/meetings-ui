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
      <sakai-accordion-item title="1. Meeting Information">
        <div class="col-sm-12 col-xl-7">
          <div class="row">
            <div class="col">
              <SakaiInputLabelled title="Meetings Title" />
            </div>
          </div>
          <div class="row mt-3">
            <div class="col">
              <SakaiInputLabelled title="Description" textarea="true" />
            </div>
          </div>
          <div class="row mt-3 align-items-md-end">
            <div class="col">
              <SakaiInputLabelled title="Preupload presentation" />
            </div>
            <div class="col-sm-12 col-md-auto mt-3">
              <SakaiButton text="Add" class="w-100" />
            </div>
          </div>
          <div class="row mt-3">
            <div class="col">
              <SakaiInputLabelled
                title="Video conferencing service"
                select="true"
                :items="confServ"
              />
            </div>
          </div>
          <div class="row mt-3">
            <div class="col">
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
            </div>
          </div>
        </div>
      </sakai-accordion-item>
      <sakai-accordion-item title="2. Participants" :open="true">
        <div class="row">
          <div class="col-sm-12 col-xl-7">
            <div class="row align-items-md-end">
              <div class="col">
                <SakaiInputLabelled
                  title="Participant Type"
                  select="true"
                  :items="partType"
                />
              </div>
              <div class="col-sm-12 col-md-auto mt-3">
                <SakaiButton text="Apply" class="w-100" />
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12 col-xl-7">
            <div class="row align-items-md-end">
              <div class="col">
                <SakaiParticipantsList
                  :participants="participants"
                  @select="createRoom"
                  class="mt-4"
                />
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-xl-5">
            <sakai-selected-participants
              v-if="selectedParticipants.length > 0"
              :maxUsers="8"
              title="Room 1"
              :users="selectedParticipants"
            />
          </div>
        </div>
      </sakai-accordion-item>
      <sakai-accordion-item title="3. Availability">
        <div class="col-sm-12 col-xl-7">
          <div class="row align-items-md-end">
            <div class="col">
              <sakai-input-labelled title="Open Date" type="date" />
            </div>
          </div>
          <div class="row align-items-md-end">
            <div class="col">
              <sakai-input-labelled title="Closed Date" type="date" />
            </div>
          </div>
          <div class="row align-items-md-end">
            <div class="col">
              <SakaiInputLabelled
                title="Closed Date"
                select="true"
                :items="calendars"
              />
            </div>
          </div>
        </div>
      </sakai-accordion-item>
      <sakai-accordion-item title="4. Notification">
        <div class="col-sm-12 col-xl-7">
          <div
            class="d-flex flex-column gap-3 mb-3 align-items-md-end flex-md-row"
            v-for="notification in notifications"
            :key="notification.id"
          >
            <sakai-input-labelled
              :select="true"
              :title="notification.notificationTypes.label"
              :items="notification.notificationTypes.options"
              v-model="notification.notificationTypes.selected"
              class="w-auto"
            />
            <div class="d-flex flex-row gap-3 align-items-end">
              <sakai-input
                v-model.number="notification.frequency.times"
                style="max-width: 3rem"
              />
              <sakai-input-labelled
                :select="true"
                :title="notification.frequency.label"
                :items="notification.frequency.options"
                v-model="notification.frequency.selected"
                class="w-100"
              />
            </div>
            <sakai-button text="Remove Notification"> </sakai-button>
          </div>
          <div class="row">
            <div class="col-sm-12 col-md-auto">
              <sakai-button
                text="New Notification"
                :primary="true"
                @click="addNotification"
                class="w-100"
              />
            </div>
          </div>
        </div>
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
import SakaiSelectedParticipants from "../components/sakai-selected-participants.vue";
export default {
  components: {
    SakaiAccordionItem,
    SakaiAccordion,
    SakaiInputLabelled,
    SakaiButton,
    SakaiInput,
    SakaiParticipantsList,
    SakaiSelectedParticipants,
  },
  data() {
    return {
      notifications: [
        {
          id: 1,
          notificationTypes: {
            label: "Notification Type",
            selected: "email",
            options: [
              {
                string: "Email",
                value: "email",
              },
              {
                string: "Browser",
                value: "browser",
              },
            ],
          },
          frequency: {
            label: "Frequency",
            selected: "days",
            times: 1,
            options: [
              {
                string: "Days before",
                value: "days",
              },
              {
                string: "Hours before",
                value: "hours",
              },
              {
                string: "Minutes before",
                value: "minutes",
              },
            ],
          },
        },
      ],
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
  props: {
    confServ: {
      type: Array,
      default: () => [
        {
          string: "Big Bule Button",
          value: "big_blue_button",
        },
        {
          string: "Microsoft Teams",
          value: "microsoft_teams",
        },
        {
          string: "Zoom",
          value: "zoom",
        },
      ],
    },
    partType: {
      type: Array,
      default: () => [
        {
          string: "All Site Members",
          value: "all_site_members",
        },
        {
          string: "Role",
          value: "role",
        },
        {
          string: "Selections/Groups",
          value: "sections_or_groups",
        },
        {
          string: "Users",
          value: "users",
        },
      ],
    },
    calendars: {
      type: Array,
      default: () => [
        {
          string: "Google Calendar",
          value: "calendar_google",
        },
        {
          string: "Outlook",
          value: "calendar_outlook",
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
    addNotification() {
      console.log(this.notifications[0]);
    },
  },
};
</script>
