import Avatar from '../src/components/Avatar.vue';

export default {
  component: Avatar,
  title: 'Archive/Avatar',
};

const Template = (args, { argTypes }) => ({
  components: { Avatar },
  props: Object.keys(argTypes),
  template: '<Avatar v-bind="$props"/>',
});

export const Primary = Template.bind({});
Primary.args = {
   square: false,
   image: 'https://placekitten.com/500/500',
   size: 200,
};

export const Square = Template.bind({});
Square.args = {
   square: true,
   image: 'https://placekitten.com/400/400',
   size: 200,
};

export const NoImage = Template.bind({});
NoImage.args = {
   square: true,
   size: 200,
   username: "My Name"
}