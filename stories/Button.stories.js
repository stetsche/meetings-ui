import SakaiButton from '../src/components/SakaiButton.vue';
export default {
  title: 'Components/SakaiButton',
  component: SakaiButton,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SakaiButton },
  template: '<sakai-button @onClick="onClick" v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};