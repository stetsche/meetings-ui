import SakaiDropdown from "../src/components/sakai-dropdown.vue";
import SakaiButton from "../src/components/sakai-button.vue";
import SakaiIcon from "../src/components/sakai-icon.vue";

export default {
  components: { SakaiDropdown, SakaiButton, SakaiIcon },
  title: "Components/SakaiDropdown",
};

const Template = (args, { argTypes }) => ({
  components: { SakaiDropdown, SakaiButton, SakaiIcon },
  rops: Object.keys(argTypes),
  template: `
        <SakaiDropdown v-bind="$props">
          <template #activation>
            <SakaiButton text="Options">
              <template #append>
                <sakai-icon iconkey="question"/>
              </template>
            </SakaiButton>
          </template>
        </SakaiDropdown>
  `,
});

export const Primary = Template.bind({});
Primary.args = {
  showMenu: false,
};
