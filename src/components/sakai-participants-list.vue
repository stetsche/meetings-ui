<template>
  <div class="wrapper">
    <div class="me-3">
      <div class="d-flex p-2 border-bottom w-100">
        <div class="d-flex w-100">
          <label class="fw-bold" for=""
            >Participants ({{ numberOfParticipants }})</label
          >
        </div>
        <div class="d-flex justify-content-center w-100">
          <label class="fw-bold" for="">Role</label>
        </div>
        <div class="d-flex justify-content-end w-100" @click="selectAll()">
          <label class="fw-bold me-2" for="checkAll">Select All </label>
          <SakaiInput id="checkAll" v-model="selectAllCheck" type="checkbox" />
        </div>
      </div>
    </div>
    <div v-if="ourParticipants.length > 0" class="participants-container mb-4">
      <div
        v-for="participant in ourParticipants"
        :key="participant.userId"
        class="d-flex align-items-center justify-content-between p-2 border-bottom"
      >
        <div class="d-flex align-items-center w-100">
          <SakaiAvatar
            :size="40"
            :userId="participant.userId"
            :userName="participant.userName"
            class="pe-2"
          />
          <label for="">{{ participant.userName }}</label>
        </div>

        <div
          class="d-flex justify-content-center w-100"
          @click="btnPress1 = !btnPress1"
        >
          <SakaiSelect :items="role" style="width: 11.2rem; border: none" />
        </div>
        <div class="d-flex justify-content-end w-100">
          <SakaiInput
            name="chBox"
            type="checkbox"
            v-model="participant.selected"
          />
        </div>
      </div>
    </div>
    <div class="d-flex me-3">
      <SakaiButton text="Add Breakout Room" :primary="true" />
      <SakaiButton
        class="ms-2"
        text="New Room"
        :primary="true"
        @click="emitSelected"
      />
      <SakaiButton class="ms-auto me-2" text="Edit roles" />
      <SakaiButton text="Remove" @click="removeSelection()" />
    </div>
  </div>
</template>

<script>
import SakaiAvatar from "./sakai-avatar.vue";
import SakaiInput from "./sakai-input.vue";
import SakaiButton from "./sakai-button.vue";
import SakaiSelect from "./sakai-select.vue";
export default {
  components: {
    SakaiInput,
    SakaiAvatar,
    SakaiButton,
    SakaiSelect,
  },
  props: {
    role: {
      type: Array,
      default: () => [
        {
          id: 0,
          icon: "permissions",
          string: "Moderator",
          url: "https://translate.google.es/?hl=es&sl=es&tl=en&op=translate",
        },
        {
          id: 1,
          icon: "template",
          string: "Attendee",
          url: "https://getbootstrap.com/docs/5.0/components/card/#list-groups",
        },
        {
          id: 2,
          icon: "link",
          string: "Teaching Assistant",
          url: "https://v3.vuejs.org/guide/list.html#v-for-with-a-component",
        },
      ],
    },
    participants: {
      type: Array,
      default: () => [
        {
          form: "square",
          userId: "9072hbs3-sb23-sfef-f93r-9q678g7g3qrh",
          userName: "Bailey Ruthe",
        },
        {
          userId: "454db719-443a-400f-b4d4-4dfada8091c0",
          userName: "Victor van Dijk",
        },
        {
          userId: "67aefef6-32df-8fe7-87fe-90721ar79def",
          userName: "Aufderhar Jamison",
        },
      ],
    },
  },
  data() {
    return {
      btnPress1: false,
      btnPress2: false,
      ourParticipants: [],
      selectAllCheck: false,
    };
  },
  watch: {
    selectAllCheck(newValue) {
      if (newValue) {
        this.$set(
          this,
          "ourParticipants",
          [...this.participants].map((participant) => {
            participant.selected = true;
            return participant;
          })
        );
      }
    },
  },
  computed: {
    numberOfParticipants() {
      let num = Object.keys(this.ourParticipants).length;
      return num;
    },
    selectedParticipants() {
      return this.ourParticipants.filter((el) => el.selected);
    },
  },
  methods: {
    emitSelected() {
      this.$emit("select", this.selectedParticipants);
    },
    selectAll() {
      /*  this.$set(
        this,
        "ourParticipants",
        [...this.participants].map((participant) => {
          participant.selected = true;
          return participant;
        })
      );*/

      let checkAll = document.getElementById("checkAll").checked;
      const checkBoxes = document.getElementsByName("chBox");

      for (let checkBox of checkBoxes) {
        checkBox.checked = checkAll;
      }
    },
    newParticipants: function () {
      this.$set(
        this,
        "ourParticipants",
        [...this.participants].map((participant) => {
          participant.selected = false;
          return participant;
        })
      );
    },
    removeSelection() {
      let checkAll = document.getElementById("checkAll");
      const checkBoxes = document.getElementsByName("chBox");

      checkAll.checked = false;
      for (let checkBox of checkBoxes) {
        checkBox.checked = false;
      }
    },
    getSelection() {
      //console.log(this.ourParticipants);
    },
  },
  mounted() {
    this.$set(
      this,
      "ourParticipants",
      [...this.participants].map((participant) => {
        participant.selected = false;
        return participant;
      })
    );
  },
};
</script>

<style scoped>
.wrapper {
  max-width: 55rem;
  min-width: 40rem;
}
.participants-container {
  padding-right: 1rem;
  overflow-y: overlay;
  max-height: 40rem;
}
</style>
