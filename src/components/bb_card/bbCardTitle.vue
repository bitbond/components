<template>
  <div class="px-4 pt-4 pb-2">
    <h3 :class="['m-0 flex items-center w-full', classes, headerClass]">
      <slot></slot>
    </h3>
  </div>
</template>
<script>
export default {
  name: "bbCardTitle",
  props: {
    center: { type: Boolean, default: false },
    headerClass: { type: String, default: "text-2xl font-medium" }
  },
  computed: {
    classes() {
      return {
        "justify-center": this.center,
        "justify-between": !this.center
      };
    }
  }
};
</script>