<template>
  <div>
    <div data-bs-toggle="modal" data-bs-target="#modal">
      <slot name="activator"> </slot>
    </div>

    <div
      class="modal fade"
      id="modal"
      tabindex="-1"
      aria-labelledby="modalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="modalLabel">{{ title }}</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">{{ body }}</div>
          <div class="modal-footer">
            <slot name="footer"> </slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from "bootstrap";
export default {
  props: {
    title: {
      type: String,
      default: "Modal title",
    },
    body: {
      type: String,
      default: "",
    },
  },
};
</script>

<style>
.modal-header {
  border-bottom: none;
}
.modal-footer {
  border-top: none;
}
</style>
