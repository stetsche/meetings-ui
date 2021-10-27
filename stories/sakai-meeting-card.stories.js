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
   firstTitle: 'Some Lesson: whatever',
   mainTitle: 'Basic Class Meeting',
};