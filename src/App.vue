<template>
  <div id="wrapper">
    <div class="m-2 p-2">
      <div class="d-flex 1 mb-2 gap-1 div-heigth">
        <sakai-icon iconkey="videocamera" />
        <h5>MEETINGS</h5>
        <SakaiButton class="ms-auto" text="Help">
          <template #prepend>
            <i class="fa fa-question me-2"></i>
          </template>
        </SakaiButton>
        <SakaiButton text="" class="">
          <template #prepend>
            <i class="fa fa-arrows-alt"></i>
          </template>
        </SakaiButton>
      </div>

      <div
        class="d-flex flex-comumn flex-sm-row flex-wrap gap-2 mb-4 div-heigth"
      >
        <SakaiButton text="Create New Meeting" class="order-1">
          <template #prepend>
            <i class="fa fa-plus me-2"></i>
          </template>
        </SakaiButton>
        <div class="order-2 flex-fill"></div>
        <SakaiInput
          class="order-xs-0 order-sm-3 flex-fill div-height"
          style="max-width: 570px; min-width: 340px"
        >
          <template #prepend>
            <i class="fa fa-search search-icon"></i>
          </template>
        </SakaiInput>
        <div @click="btnPress1 = !btnPress1" class="order-4">
          <SakaiDropdown :items="items">
            <template #activation>
              <SakaiButton text="Options">
                <template #append>
                  <i
                    class="fa ms-2"
                    :class="btnPress1 ? 'fa-chevron-up' : 'fa-chevron-down'"
                  ></i>
                </template>
              </SakaiButton>
            </template>
          </SakaiDropdown>
        </div>
      </div>

      <h5 class="accordion-header" id="flush-headingOne">Happening Today</h5>
      <hr class="mb-0 mt-2" />
      <div>
        <div class="accordion-body p-0 pb-4">
          <div
            class="row row-cols-1 row-cols-md-2 row-cols-xl-3 row-cols-xxl-4 align-content-stretch"
          >
            <div
              class="col pt-4"
              v-for="meeting in happeningToday"
              :key="meeting.id"
            >
              <sakai-meeting-card
                class="h-100"
                :placement="isMobile ? 'left' : 'right'"
                :title="meeting.title"
                :contextTitle="meeting.contextTitle"
                :participants="meeting.participants"
                :actions="meeting.actions"
                :live="meeting.live"
                :startDate="meeting.startDate"
                :endDate="meeting.endDate"
              >
              </sakai-meeting-card>
            </div>
          </div>
        </div>
      </div>
      <h5 class="accordion-header" id="flush-headingTwo">Future</h5>
      <hr class="mb-0 mt-2" />
      <div>
        <div class="accordion-body p-0 pb-4">
          <div
            class="row row-cols-1 row-cols-md-2 row-cols-xl-3 row-cols-xxl-4"
          >
            <div class="col pt-4" v-for="meeting in inFuture" :key="meeting.id">
              <sakai-meeting-card
                class="h-100"
                :title="meeting.title"
                :contextTitle="meeting.contextTitle"
                :participants="meeting.participants"
                :actions="meeting.actions"
                :live="meeting.live"
                :startDate="meeting.startDate"
                :endDate="meeting.endDate"
              >
              </sakai-meeting-card>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex align-items-end">
        <div>
          <h5 class="accordion-header" id="flush-headingThree">Past</h5>
        </div>
        <div class="ms-auto">
          <div @click="btnPress2 = !btnPress2" class="ms-auto">
            <SakaiDropdown :items="showAll">
              <template #activation>
                <SakaiButton text="Show All" :clear="true">
                  <template #append>
                    <i
                      class="fa ms-2"
                      :class="btnPress2 ? 'fa-chevron-up' : 'fa-chevron-down'"
                    ></i>
                  </template>
                </SakaiButton>
              </template>
            </SakaiDropdown>
          </div>
        </div>
      </div>
      <hr class="mb-0 mt-2" />
      <div>
        <div class="accordion-body p-0 pb-4">
          <div
            class="row row-cols-1 row-cols-md-2 row-cols-xl-3 row-cols-xxl-4"
          >
            <div class="col pt-4" v-for="meeting in inPast" :key="meeting.id">
              <sakai-meeting-card
                class="h-100"
                :title="meeting.title"
                :contextTitle="meeting.contextTitle"
                :participants="meeting.participants"
                :actions="meeting.actions"
                :live="meeting.live"
                :startDate="meeting.startDate"
                :endDate="meeting.endDate"
              >
              </sakai-meeting-card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import dayjs from "dayjs";
import SakaiMeetingCard from "./components/sakai-meeting-card.vue";
import SakaiInput from "./components/sakai-input.vue";
import SakaiButton from "./components/sakai-button.vue";
import SakaiDropdown from "./components/sakai-dropdown.vue";
import SakaiIcon from "./components/sakai-icon.vue";

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
          icon: "fa-lock",
          string: "Permissions",
          url: "https://translate.google.es/?hl=es&sl=es&tl=en&op=translate",
        },
        {
          id: 1,
          icon: "fa-book",
          string: "Templates",
          url: "https://getbootstrap.com/docs/5.0/components/card/#list-groups",
        },
        {
          id: 2,
          icon: "fa-link",
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
          icon: "fa-th-large",
          string: "All",
          url: "https://translate.google.es/?hl=es&sl=es&tl=en&op=translate",
        },
        {
          id: 1,
          icon: "fa-play-circle",
          string: "Recordings",
          url: "https://getbootstrap.com/docs/5.0/components/card/#list-groups",
        },
      ],
    },
  },
  methods: {
    loadMeetingsList: async function () {
      const response = await fetch(
        "http://http://192.168.0.84:3001/meetingList"
      );
      const list = await response.json();
      this.meetingsList = list;
    },
    clearBackground() {
      if (document.getElementById("wrapper").classList.contains("overflow")) {
        document.getElementById("wrapper").classList.remove("overflow");
      }
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
<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css";
@import "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.0/font/bootstrap-icons.css";
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
@import "./assets/sakai-colors.css";
.icon-wrap {
  margin: 4px 4px 0px 0px;
}
.div-heigth {
  line-height: 1.4rem;
}
.overflow {
  overflow: hidden;
  position: fixed;
}
</style>
