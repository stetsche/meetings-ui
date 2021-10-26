import Options from '../src/components/Options.vue';

export default {
  component: Options,
  title: 'Components/Options',
};

const Template = (args, { argTypes }) => ({
  components: { Options },
  props: Object.keys(argTypes),
  template: '<Options v-bind="$props"/>',
});

export const Primary = Template.bind({});
Primary.args = {
};