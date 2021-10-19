import Card from '../src/components/Card.vue';

export default {
  component: Card,
  title: 'Components/Card',
};

export const Primary = () => ({
  components: { Card },
  template: '<Card/>',
});