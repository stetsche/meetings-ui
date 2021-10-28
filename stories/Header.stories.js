import Header from '../src/components/Header.vue';

export default {
  component: Header,
  title: 'Components/Header'
};

const Template = (args, { argTypes }) => ({
  components: { Header },
  props: Object.keys(argTypes),
  template: '<Header v-bind="$props"/>',
});

export const Primary = Template.bind({});
Primary.args = {
  title: "Section title"
};