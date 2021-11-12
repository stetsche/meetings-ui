<template>
  <div class="m-2 p-2">
    
    <div class="d-flex 1 mb-1 div-heigth">
      <i class="fa fa-video-camera icon-wrap"></i>
      <h5>MEETINGS</h5>
      <SakaiButton class="ms-auto" text="Help">
        <template #prepend>
          <i class="fa fa-question marginR"></i>
        </template>
      </SakaiButton>
      <SakaiButton text="">
        <template #prepend>
          <i class="fa fa-arrows-alt"></i>
        </template>
      </SakaiButton>
    </div>

    <div class="d-flex 2 mb-5 div-heigth">
      <SakaiButton text="Create New Meeting">
        <template #prepend>
          <i class="fa fa-plus marginR"></i>
        </template>
      </SakaiButton>
      <SakaiInput class="ms-auto">
        <template #prepend>
          <i class="fa fa-search search-icon"></i>
        </template>          
      </SakaiInput>
      <div @click="showMenu = !showMenu">
        <SakaiDropdown :items="items" :widthRem="8.5">
          <template #activation>
            <SakaiButton class="ms-0" text="Options" style="width:116px;">
              <template #append>
                <i class="fa marginL" :class="showMenu ? 'fa-chevron-up' : 'fa-chevron-down'"></i>
              </template>
            </SakaiButton>
          </template>
        </SakaiDropdown>
      </div>
    </div>

        <h5 class="accordion-header" id="flush-headingOne">
            Happening Today
        </h5>
        <hr class="mb-0 mt-2"/>
        <div>
          <div class="accordion-body p-0 pb-4">
            <div class="row row-cols-md-3 row-cols-xl-4">
                <template v-for="meeting in happeningToday">
                  <div class="col pt-4" :key="meeting.id">
                    <sakai-meeting-card 
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
                </template>
            </div>
          </div>
        </div>
        <h5 class="accordion-header" id="flush-headingTwo">
            Future
        </h5>
        <hr class="mb-0 mt-2"/>
        <div>
          <div class="accordion-body p-0 pb-4">
            <div class="row row-cols-md-3 row-cols-xl-4">
                <template v-for="meeting in inFuture">
                  <div class="col pt-4" :key="meeting.id">
                    <sakai-meeting-card 
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
                </template>
            </div>
          </div>
        </div>
        <div class="d-flex align-items-end">
          <div>
            <h5 class="accordion-header" id="flush-headingThree">Past</h5>
          </div>
          <div class="ms-auto">
            <div @click="showMenu = !showMenu" class="ms-auto">
              <SakaiDropdown :items="showAll" :widthRem="8.5">
                <template #activation>
                  <SakaiButton class="ms-0" text="Show All" :clear="true">
                    <template #append>
                      <i class="fa marginL" :class="showMenu ? 'fa-chevron-up' : 'fa-chevron-down'"></i>
                    </template>
                  </SakaiButton>
                </template>
              </SakaiDropdown>
            </div>
          </div>
        </div>
        <hr class="mb-0 mt-2"/>
        <div>
          <div class="accordion-body p-0 pb-4">
            <div class="row row-cols-md-3 row-cols-xl-4">
                <template v-for="meeting in inPast">
                  <div class="col pt-4" :key="meeting.id">
                    <sakai-meeting-card 
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
                </template>
            </div>
          </div>
        </div>
  </div>
</template>
<script>
import dayjs from 'dayjs';
import SakaiMeetingCard from "./components/sakai-meeting-card.vue";
import { Collapse } from '../node_modules/bootstrap/dist/js/bootstrap.esm.min.js'
import SakaiInput from "./components/sakai-input.vue";
import SakaiButton from "./components/sakai-button.vue";
import SakaiDropdown from "./components/sakai-dropdown.vue";

    Array.from(document.querySelectorAll('.accordion'))
      .forEach(accordionNode => new Collapse(accordionNode))
export default {
  components: {
    SakaiMeetingCard,
    SakaiInput,
    SakaiButton,
    SakaiDropdown,
  },
  data() {
    return {
     meetingsList: [],
     showMenu: false
    };
  },
  props: {
    items: {
      type: Array,
      default: () => [
        { id: 0, icon: 'fa-lock', string: 'Permissions', url: "https://translate.google.es/?hl=es&sl=es&tl=en&op=translate" },
        { id: 1, icon: 'fa-book', string: 'Templates', url: "https://getbootstrap.com/docs/5.0/components/card/#list-groups" },
        { id: 2, icon: 'fa-link', string: 'Link', url: "https://v3.vuejs.org/guide/list.html#v-for-with-a-component" }
      ]
    },
    showAll: {
      type: Array,
      default: () => [
        { id: 0, icon: 'fa-th-large', string: 'All', url: "https://translate.google.es/?hl=es&sl=es&tl=en&op=translate" },
        { id: 1, icon: 'fa-play-circle', string: 'Recordings', url: "https://getbootstrap.com/docs/5.0/components/card/#list-groups" }
      ]
    }
  },
  methods: {
    loadMeetingsList: async function () {
      const response = await fetch('http://127.0.0.1:3000/meetingList');
      const list = await response.json();
      this.meetingsList = list;
    }
  },
  computed: {
    day: function () {
      return dayjs();
    },
    startDate: function () {
      return this.day.hour(16).toISOString();
    },
    endDate: function () {
      return dayjs('2021-12-24T16:30:00+01:00').toISOString();
    },
    happeningToday: function() {
      let ht = this.meetingsList.filter(meeting => {
        return dayjs().isSame(dayjs(meeting.startDate), 'day');
      });
      return ht;
    },
    inPast: function() {
      let ht = this.meetingsList.filter(meeting => {
        return dayjs().isAfter(dayjs(meeting.startDate), 'day');
      });
      return ht;
    },
    inFuture: function() {
      let ht = this.meetingsList.filter(meeting => {
        return dayjs().isBefore(dayjs(meeting.startDate), 'day');
      });
      return ht;
    }
  },
  mounted: function () {
    this.loadMeetingsList();

  }
};
</script>
<style >
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css";
@import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
@import "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.0/font/bootstrap-icons.css";
.icon-wrap {
  margin: 4px 4px 0px 0px;
}
.div-heigth {
  line-height: 1.4rem;
}
</style>
