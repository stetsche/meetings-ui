import SakaiDropdown from '../src/components/sakai-dropdown.vue';

export default {
  component: SakaiDropdown,
  title: 'Components/SakaiDropdown',
};

const Template = (args, { argTypes }) => ({
  components: { SakaiDropdown },
  props: Object.keys(argTypes),
  template: '<SakaiDropdown v-bind="$props"/>',
});

export const Primary = Template.bind({});
Primary.args = {
};