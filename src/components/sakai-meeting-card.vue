<template>
  <div class="card" aria-describedby="title">
    <div class="card-header h-100">
      <sakai-dropdown class="card-menu">
        <template #activation>
          <sakai-button circle="true" clear="true" text="">
            <template #prepend>
              <sakai-icon iconkey="menu_kebab" />
            </template>
          </sakai-button>
        </template>
      </sakai-dropdown>

      <div class="mt-1 mb-2 contextTitle">{{ contextTitle }}</div>
      <h2 id="title" class="card-title" :title="title">{{ title }}</h2>
      <div class="d-flex flex-row flex-wrap mb-2">
        <div>
          {{ schedule }}
        </div>
        <div v-if="currentStatus != status.over" class="mx-1">
          <span>|</span>
        </div>
        <div
          v-if="currentStatus != status.over"
          class="d-flex flex-row flex-nowrap"
        >
          <div>
            <span>{{ statusText }}</span>
          </div>
          <div class="mx-1">
            <span class="statusIcon" :class="statusIcon"></span>
          </div>
        </div>
      </div>
      <a href="#">View Description</a>
      <div v-if="participants.length > 0" class="d-flex gap-1 my-2">
        <sakai-avatar
          v-for="participant in shownParticipants"
          :key="participant.userid"
          :userId="participant.userid"
          :text="participant.text"
          :userName="participant.name"
          :size="avatarHeight"
        />
        <SakaiDropdown />
      </div>
    </div>
    <div class="card-body p-0 d-flex">
      <div class="action-list d-flex">
        <!--TODO Replace this with sakai-button-->
        <div v-for="action in actions" :key="action.icon">
          <sakai-button circle="true" clear="true" text="">
            <template #prepend>
              <sakai-icon :iconkey="action.icon" />
            </template>
          </sakai-button>
        </div>
        <slot name="actions"> </slot>
      </div>
      <div class="ms-auto p-1">
        <slot name="right"> </slot>
        <!--TODO Replace this with sakai-button-->
        <sakai-button
          v-if="currentStatus != status.over"
          :disabled="!live"
          :primary="true"
        >
          Join Meeting
        </sakai-button>
      </div>
    </div>
  </div>
</template>

<style>
.action-list > div {
  border-right: 1px solid rgba(0, 0, 0, 0.125);
  padding: 0.125rem;
  /*display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-size: 1.5rem;*/
}
</style>
<style scoped>
.card-menu {
  position: absolute;
  right: 0.5rem;
}

h2 {
  font-weight: 600;
  font-size: 22px;
}

.statusIcon {
  color: #279be1; /*Sakai secondary-color*/
}

.statusIcon.livered {
  color: #d0021b; /*like record button*/
}

.contextTitle {
  text-transform: uppercase;
}
</style>

<script>
import SakaiAvatar from "./sakai-avatar.vue";
import SakaiIcon from "./sakai-icon.vue";
import SakaiButton from "./sakai-button.vue";
import SakaiDropdown from "./sakai-dropdown.vue";

import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import relativeTime from "dayjs/plugin/relativeTime";
//import locale_es from 'dayjs/locale/es';

dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);
//dayjs.locale(locale_es);
export default {
  components: {
    SakaiAvatar,
    SakaiIcon,
    SakaiButton,
    SakaiDropdown,
  },
  data() {
    return {
      status: { live: 0, waiting: 1, timeUntil: 2, over: 3 },
      avatarHeight: 40,
    };
  },
  props: {
    title: { type: String, default: undefined },
    contextTitle: { type: String, default: undefined },
    live: { type: Boolean, default: false },
    maxAvatars: {
      default: 5,
      validator: function (value) {
        return value >= 1;
      },
    },
    startDate: {
      validator: function (value) {
        return dayjs(value).isValid();
      },
    },
    endDate: {
      validator: function (value) {
        return dayjs(value).isValid();
      },
    },
    participants: { type: Array, default: new Array() },
    actions: { type: Array, default: new Array() },
  },
  computed: {
    schedule: function () {
      let start = dayjs(this.startDate);
      let end = dayjs(this.endDate);
      let startTextFormat;
      let endTextFormat;
      if (dayjs().isSame(start, "year")) {
        //starts this year
        if (dayjs().isSame(start, "week")) {
          //starts this week
          if (dayjs().isSame(start, "day")) {
            //starts today
            startTextFormat = "LT";
          } else {
            //starts this week, not today
            startTextFormat = "ddd LT";
          }
        } else {
          //starts this year, not this week
          startTextFormat = "lll";
        }
      } else {
        //starts other year
        startTextFormat = "lll";
      }

      if (start.isSame(end, "day")) {
        //meeting covers just one local day
        endTextFormat = "LT";
      } else {
        //meeting covers more then one local day
        endTextFormat = dayjs().isSame(end, "week") ? "ddd LT" : "lll";
      }
      let startText = start.format(startTextFormat);
      let endText = end.format(endTextFormat);
      return startText + " - " + endText;
    },
    currentStatus: function () {
      if (this.live) {
        return this.status.live;
      } else {
        if (dayjs().isBefore(dayjs(this.startDate))) {
          return this.status.timeUntil;
        } else if (dayjs().isAfter(dayjs(this.endDate))) {
          return this.status.over;
        } else {
          return this.status.timeUntil;
        }
      }
    },
    statusText: function () {
      switch (this.currentStatus) {
        case this.status.live:
          return "live";
        case this.status.waiting:
          return "waiting for start";
        case this.status.timeUntil:
          return "starts " + dayjs().to(dayjs(this.startDate));
        default:
          return "weired state";
      }
    },
    statusIcon: function () {
      //TODO - Use sakai-icon
      switch (this.currentStatus) {
        case this.status.live:
          return "bi bi-record-circle livered";
        case this.status.waiting:
          return "fa fa-hourglass-o";
        case this.status.timeUntil:
          return "fa fa-bell";
        default:
          return "fa fa-ban";
      }
    },
    shownParticipants: function () {
      let maxAvatars = Math.round(this.maxAvatars);
      if (maxAvatars && this.participants.length > maxAvatars) {
        let hidden = this.participants.length - (maxAvatars - 1);
        let shown = this.participants.slice(0, maxAvatars - 1);
        let plus = { text: "+" + hidden };
        shown.push(plus);
        return shown;
      } else {
        return this.participants;
      }
    },
  },
};
</script>
