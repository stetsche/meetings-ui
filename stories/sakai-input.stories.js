import SakaiInput from '../src/components/sakai-input.vue';

export default {
  component: SakaiInput,
  title: 'Components/SakaiInput',
};

const Template = (args, { argTypes }) => ({
  components: { SakaiInput },
  props: Object.keys(argTypes),
  template: '<SakaiInput v-bind="$props"/>',
});

export const Primary = Template.bind({});
Primary.args = {
};