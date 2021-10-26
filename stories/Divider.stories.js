import Divider from '../src/components/Divider.vue';

export default {
  component: Divider,
  title: 'Components/Divider',
  argTypes: {
    timeline: { control: "select", options: ["Happening today", "Future", "Past"]}
  }
};

const Template = (args, { argTypes }) => ({
  components: { Divider },
  props: Object.keys(argTypes),
  template: '<Divider v-bind="$props"/>',
});

export const Primary = Template.bind({});
Primary.args = {
  enableShowAll: true
};