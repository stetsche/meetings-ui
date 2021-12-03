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
        <div class="d-flex flex-column gap-2">
          <div class="d-flex flex-column gap-2 align-items-md-end flex-md-row">
            <SakaiInputLabelled title="Meetings Title" />
          </div>
          <div class="d-flex flex-column gap-2 align-items-md-end flex-md-row">
            <SakaiInputLabelled title="Description" textarea="true" />
          </div>
          <div class="d-flex flex-column gap-2 align-items-md-end flex-md-row">
            <SakaiInputLabelled title="Preupload presentation" />
            <SakaiButton text="Add" class="me-md-auto" />
          </div>
          <div class="d-flex flex-column gap-2 align-items-md-end flex-md-row">
            <SakaiInputLabelled
              title="Video conferencing service"
              select="true"
              :items="confServ"
            />
          </div>
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
      </sakai-accordion-item>
      <sakai-accordion-item title="2. Participants">
        <div class="d-flex flex-column gap-2 align-items-md-end flex-md-row">
          <SakaiInputLabelled
            title="Participant Type"
            select="true"
            :items="partType"
          />
          <SakaiButton text="Apply" />
        </div>
      </sakai-accordion-item>
      <sakai-accordion-item title="3. Availability">
        <div class="d-flex flex-column gap-2 align-items-md-end flex-md-row">
          <sakai-input-labelled title="Open Date" type="date" />
        </div>
        <div class="d-flex flex-column gap-2 align-items-md-end flex-md-row">
          <sakai-input-labelled title="Closed Date" type="date" />
        </div>
        <div class="d-flex flex-column gap-2 align-items-md-end flex-md-row">
          <SakaiInputLabelled
            title="Closed Date"
            select="true"
            :items="calendars"
          />
        </div>
      </sakai-accordion-item>
      <sakai-accordion-item title="4. Notification" :open="true">
        <div
          class="d-flex flex-column gap-2 mb-2 align-items-md-end flex-md-row"
          v-for="notification in notifications"
          :key="notification.id"
        >
          <sakai-input-labelled
            :select="true"
            :title="notification.notificationTypes.label"
            :items="notification.notificationTypes.options"
            v-model="notification.notificationTypes.selected"
          />
          <div class="d-flex flex-row gap-2 align-items-end">
            <sakai-input v-model.number="notification.frequency.times" />
            <sakai-input-labelled
              :select="true"
              :title="notification.frequency.label"
              :items="notification.frequency.options"
              v-model="notification.frequency.selected"
            />
          </div>
          <sakai-button
            text="Remove Notification"
            :circle="true"
            :textHidden="true"
            :clear="true"
          >
            <template #append>
              <sakai-icon iconkey="remove" />
            </template>
          </sakai-button>
        </div>
        <sakai-button
          text="New Notification"
          :primary="true"
          @click="addNotification"
        />
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
// eslint-disable-next-line
import toggletheme from "../assets/toggletheme.js";
import SakaiIcon from "../components/sakai-icon.vue";
export default {
  components: {
    SakaiAccordionItem,
    SakaiAccordion,
    SakaiInputLabelled,
    SakaiButton,
    SakaiInput,
    SakaiIcon,
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
  methods: {
    switchtheme: function () {
      toggletheme();
    },
    addNotification() {
      console.log(this.notifications[0]);
    },
  },
};
</script>
