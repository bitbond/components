<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "bbCard",

  props: {
    bgClass: { type: String, default: "bg-white" },
    roundedClass: { type: String, default: "rounded" },
    shadowClass: { type: String, default: "shadow" }
  },

  computed: {
    classes() {
      return [this.bgClass, this.roundedClass, this.shadowClass];
    }
  }
};
</script>
<style scoped>
</style>