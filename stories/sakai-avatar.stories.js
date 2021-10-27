import SakaiAvatar from '../src/components/sakai-avatar.vue';

export default {
  component: SakaiAvatar,
  title: 'Ready/sakai-avatar',
  argTypes: {
    userId: { control: "select", options: [
      "454db719-443a-400f-b4d4-4dfada8091c0", 
      "67aefef6-32df-8fe7-87fe-90721ar79def", 
      "34058dsf-fd23-w9df-9ed6-234dsf381edn",
      "9072hbs3-sb23-sfef-f93r-9q678g7g3qrh",
      "klsde436-45kl-ds80-214f-f399nfm3lw93"
    ]}
  },
};

const Template = (args, { argTypes }) => ({
  components: { SakaiAvatar },
  props: Object.keys(argTypes),
  template: '<sakai-avatar v-bind="$props"/>',
});

export const Primary = Template.bind({});
Primary.args = {
   size: 300,
   userId: "67aefef6-32df-8fe7-87fe-90721ar79def"
};

export const Square = Template.bind({});
Square.args = {
   form: 'square',
   size: 300,
   userId: '454db719-443a-400f-b4d4-4dfada8091c0'
};