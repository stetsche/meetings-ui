import SakaiMeetingCard from '../src/components/sakai-meeting-card.vue';

export default {
  component: SakaiMeetingCard,
  title: 'Components/sakai-meeting-card',
};

const Template = (args, { argTypes }) => ({
  components: { SakaiMeetingCard },
  props: Object.keys(argTypes),
  template: '<sakai-meeting-card v-bind="$props"/>',
});

export const Primary = Template.bind({});
Primary.args = {
  contextTitle: 'Some Lesson: whatever',
  title: 'Basic Class Meeting',
  live: false,
  participants: [
      {
          "userid": "454db719-443a-400f-b4d4-4dfada8091c0",
          "name": "Victor van Dijk"
      },
      {
          "userid": "67aefef6-32df-8fe7-87fe-90721ar79def",
          "name": "Aufderhar Jamisonk"
      },
      {
          "userid": "9072hbs3-sb23-sfef-f93r-9q678g7g3qrh",
          "name": "Bailey Ruthe"
      },
      {
          "userid": "9072hbs3-sb23-sfef-f93r-9q678g7g3qrh",
          "name": "Bailey Ruthe"
      },
      {
          "userid": "67aefef6-32df-8fe7-87fe-90721ar79def",
          "name": "Aufderhar Jamisonk"
      },
      {
          "userid": "454db719-443a-400f-b4d4-4dfada8091c0",
          "name": "Victor van Dijk"
      },
      {
          "userid": "klsde436-45kl-ds80-214f-f399nfm3lw93",
          "name": "Random Guy"
      }
  ],
  actions: [
  {
      "label": "Presentation",
      "icon": "bi bi-easel",
      "disabled": false,
      "href": "https:edf.global"
  },
  {
      "label": "Attachments",
      "icon": "bi bi-paperclip",
      "disabled": false,
      "href": "https:edf.global"
  },
  {
      "label": "Chat",
      "icon": "bi bi-chat-right-text",
      "disabled": false,
      "href": "https:edf.global"
  }
]
};