<template>
  <div class="dropdown">
    <div data-bs-toggle="dropdown" ref="activationwrapper">
      <slot name="activation"></slot>
    </div>
    <ul class="dropdown-menu" role="menu" :id="menuid">
      <li v-for="item in items" :key="item.id">
        <a
          class="dropdown-item"
          :role="getAnchorRole(item)"
          :tabindex="!item.url ? '0' : undefined"
          :href="item.url"
          @click="handleClick(item)"
          @keyup.enter="handleClick(item)"
          @keyup.space="item.action ? handleClick(item) : undefined"
        >
          <sakai-icon
            :iconkey="item.icon"
            class="iconWrap"
            :class="item.icon"
          />
          {{ item.string }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import "/node_modules/bootstrap/js/src/dropdown.js";
import SakaiIcon from "./sakai-icon.vue";
export default {
  components: {
    SakaiIcon,
  },
  props: {
    items: {
      type: Array,
      default: () => [
        {
          id: 0,
          icon: "error",
          string: "emty",
          route: "/meetings-ui",
        },
      ],
    },
    menuid: { type: String, default: undefined },
  },
  data() {
    return {
      selectedId: null,
      expanded: false
    };
  },
  computed: {},
  methods: {
    getAnchorRole: function (item) {
      if (item.action) {
        return "button";
      } else {
        return "link";
      }
    },
    handleClick: function (item) {
      this.selectedId = item.id;
      if (item.route) {
        this.handleRoute(item.route);
      } else if (item.action) {
        item.action();
      }
    },
    handleRoute: function (route) {
      this.$router.push({ path: route });
    },
    onMutation: function (mutationsList) {
      for(const mutation of mutationsList) {
        if(mutation.type === 'attributes' && mutation.attributeName === 'aria-expanded') {
          this.expanded = (mutation.target.attributes["aria-expanded"].value === 'true');
        }
      }
    },
  },
  mounted: function () {
    const observer = new MutationObserver(this.onMutation);
    observer.observe(this.$refs.activationwrapper, { attributes: true });
  },
};
</script>

<style>
@import "../assets/sakai-colors.css";
.iconWrap {
  width: 16.5px;
  margin-right: 6px;
}
.dropdown-menu {
  min-width: 0 !important;
  background-color: var(--tool-menu-background-color) !important;
  box-shadow: var(--elevation-1dp) !important;
  border: 1px solid var(--button-border-color) !important;
}
.dropdown-item {
  padding: 0.35rem 1rem !important;
  color: var(--tool-menu-item-text-color) !important;
}
.dropdown-item:hover {
  background-color: var(--tool-menu-item-hover-background-color) !important;
  cursor: pointer;
}
.dropdown-item:focus {
  outline: 3px solid var(--focus-outline-color);
}
@media (max-width: 600px) {
  .dropdown-menu {
    inset: auto auto -8px 0px !important;
    transform: unset !important;
    position: fixed !important;
    padding: 0.6rem 2.5rem 0.8rem 2.5rem !important;
    box-shadow: 0 0 0 100vmax #9f9f9f42 !important;
    border-radius: 10px !important;
    width: 100%;
  }
  .dropdown-item {
    padding: 1rem 1rem 1rem 30% !important;
    border-bottom: 1px solid var(--sakai-border-color) !important;
  }
  .dropdown-item:last-child {
    border-bottom: none !important;
  }
}
</style>
