import SakaiAvatar from '../src/components/sakai-avatar.vue';

export default {
  component: SakaiAvatar,
  title: 'Ready/sakai-avatar',
};

const Template = (args, { argTypes }) => ({
  components: { SakaiAvatar },
  props: Object.keys(argTypes),
  template: '<sakai-avatar v-bind="$props"/>',
});

export const Primary = Template.bind({});
Primary.args = {
   square: false,
   size: 300,
};

export const Square = Template.bind({});
Square.args = {
   square: true,
   size: 300,
};