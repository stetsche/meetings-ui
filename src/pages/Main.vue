<template>
  <div>
    <div class="d-flex flex-column flex-md-row gap-2 mb-4 div-heigth">
      <div class="order-1 me-md-auto">
        <SakaiButton
          text="Create New Meeting"
          @click="handleCreateNewMeeting"
          class="w-100"
        >
          <template #prepend>
            <sakai-icon class="me-1" iconkey="plus" />
          </template>
        </SakaiButton>
      </div>
      <SakaiInput
        type="search"
        placeholder="Search for meetings"
        class="order-0 order-md-2 w-auto"
        style="min-width: 20%"
      >
        <template #prepend>
          <sakai-icon class="search-icon" iconkey="search" />
        </template>
      </SakaiInput>
      <SakaiDropdown
        :items="items"
        @click="btnPress1 = !btnPress1"
        class="order-3"
      >
        <template #activation>
          <SakaiButton text="Options" class="w-100" role="menu">
            <template #append>
              <sakai-icon
                class="ms-1"
                :iconkey="btnPress1 ? 'chevron_up' : 'chevron_down'"
              />
            </template>
          </SakaiButton>
        </template>
      </SakaiDropdown>
    </div>
    <div v-if="happeningToday.length > 0">
      <div class="section-heading">
        <h1 id="flush-headingOne">Happening Today</h1>
        <hr aria-hidden="true" class="mb-0 mt-2" />
      </div>
      <div>
        <div class="accordion-body p-0 pb-4">
          <ul
            class="
              meetings-list
              row row-cols-1 row-cols-md-2 row-cols-xl-3 row-cols-xxl-4
              align-content-stretch
            "
          >
            <li
              class="col pt-4"
              v-for="meeting in happeningToday"
              :key="meeting.id"
            >
              <sakai-meeting-card
                class="h-100"
                :title="meeting.title"
                :description="meeting.description"
                :contextTitle="meeting.contextTitle"
                :participants="meeting.participants"
                :actions="meeting.actions"
                :live="meeting.live"
                :startDate="meeting.startDate"
                :endDate="meeting.endDate"
                :menuitems="meeting.menuitems"
              >
              </sakai-meeting-card>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div v-if="inFuture.length > 0">
      <div class="section-heading">
        <h1 class="accordion-header" id="flush-headingTwo">Future</h1>
        <hr aria-hidden="true" class="mb-0 mt-2" />
      </div>
      <div>
        <ul class="meetings-list accordion-body p-0 pb-4">
          <li class="row row-cols-1 row-cols-md-2 row-cols-xl-3 row-cols-xxl-4">
            <div class="col pt-4" v-for="meeting in inFuture" :key="meeting.id">
              <sakai-meeting-card
                class="h-100"
                :title="meeting.title"
                :description="meeting.description"
                :contextTitle="meeting.contextTitle"
                :participants="meeting.participants"
                :actions="meeting.actions"
                :live="meeting.live"
                :startDate="meeting.startDate"
                :endDate="meeting.endDate"
                :menuitems="meeting.menuitems"
              >
              </sakai-meeting-card>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div v-if="inPast.length > 0">
      <div
        class="section-heading d-flex align-items-end"
      >
        <h1 class="mb-0" id="flush-headingThree">Past</h1>
        <div class="ms-auto">
          <div @click="btnPress2 = !btnPress2" class="ms-auto">
            <SakaiDropdown :items="showAll">
              <template #activation>
                <SakaiButton text="Show All" role="menu" :clear="true">
                  <template #append>
                    <sakai-icon
                      class="ms-1"
                      :iconkey="btnPress2 ? 'chevron_up' : 'chevron_down'"
                    />
                  </template>
                </SakaiButton>
              </template>
            </SakaiDropdown>
          </div>
        </div>
      </div>
      <hr aria-hidden="true" class="mb-0 mt-2" />
      <div>
        <div class="accordion-body p-0 pb-4">
          <ul
            class="
              meetings-list
              row row-cols-1 row-cols-md-2 row-cols-xl-3 row-cols-xxl-4
            "
            v-if="inPast.length > 0"
          >
            <li class="col pt-4" v-for="meeting in inPast" :key="meeting.id">
              <sakai-meeting-card
                class="h-100"
                :title="meeting.title"
                :description="meeting.description"
                :contextTitle="meeting.contextTitle"
                :participants="meeting.participants"
                :actions="meeting.actions"
                :live="meeting.live"
                :startDate="meeting.startDate"
                :endDate="meeting.endDate"
                :menuitems="meeting.menuitems"
              >
              </sakai-meeting-card>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import dayjs from "dayjs";
import SakaiMeetingCard from "../components/sakai-meeting-card.vue";
import SakaiInput from "../components/sakai-input.vue";
import SakaiButton from "../components/sakai-button.vue";
import SakaiDropdown from "../components/sakai-dropdown.vue";
import SakaiIcon from "../components/sakai-icon.vue";
import dbData from "../../data/db.json";

// eslint-disable-next-line
import toggletheme from "../assets/toggletheme.js";

export default {
  components: {
    SakaiMeetingCard,
    SakaiInput,
    SakaiButton,
    SakaiDropdown,
    SakaiIcon,
  },
  data() {
    return {
      meetingsList: [],
      btnPress1: false,
      btnPress2: false,
    };
  },
  props: {
    items: {
      type: Array,
      default: () => [
        {
          id: 0,
          icon: "permissions",
          string: "Permissions",
          url: "https://translate.google.es/?hl=es&sl=es&tl=en&op=translate",
        },
        {
          id: 1,
          icon: "template",
          string: "Templates",
          url: "https://getbootstrap.com/docs/5.0/components/card/#list-groups",
        },
        {
          id: 2,
          icon: "link",
          string: "Link",
          url: "https://v3.vuejs.org/guide/list.html#v-for-with-a-component",
        },
      ],
    },
    showAll: {
      type: Array,
      default: () => [
        {
          id: 0,
          icon: "all",
          string: "All",
          url: "https://translate.google.es/?hl=es&sl=es&tl=en&op=translate",
        },
        {
          id: 1,
          icon: "play",
          string: "Recordings",
          url: "https://getbootstrap.com/docs/5.0/components/card/#list-groups",
        },
      ],
    },
  },
  methods: {
    handleCreateNewMeeting: function () {
      this.$router.push({ path: "/meetings-ui/settings" });
    },
    loadMeetingsList: function () {
      //const response = await fetch("/db.json");
      //let list = await response.json();

      const db = JSON.parse(JSON.stringify(dbData));
      const list = db.meetingList;
      this.meetingsList = [...list];
    },
    switchtheme: function () {
      toggletheme();
    },
  },
  computed: {
    happeningToday: function () {
      return this.meetingsList.filter(
        (meeting) =>
          dayjs().isSame(dayjs(meeting.startDate), "day") || meeting.live
      );
    },
    inPast: function () {
      return this.meetingsList.filter(
        (meeting) =>
          dayjs().isAfter(dayjs(meeting.startDate), "day") && !meeting.live
      );
    },
    inFuture: function () {
      return this.meetingsList.filter(
        (meeting) =>
          dayjs().isBefore(dayjs(meeting.startDate), "day") && !meeting.live
      );
    },
  },
  mounted: function () {
    this.loadMeetingsList();
  },
};
</script>
