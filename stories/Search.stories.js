import Search from '../src/components/Search.vue';

export default {
  component: Search,
  title: 'Components/Search',
};

const Template = (args, { argTypes }) => ({
  components: { Search },
  props: Object.keys(argTypes),
  template: '<Search v-bind="$props"/>',
});

export const Primary = Template.bind({});
Primary.args = {
};