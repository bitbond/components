<template>
  <div :class="['inline-block whitespace-no-wrap rounded', ...classes]" v-on="listeners">
    <div class="flex items-center leading-none h-full">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'bbChip',

  props: {
    textColor: { type: String, default: 'white' },
    color: { type: String, default: 'gray' },
    size: {
      type: String,
      default: 'sm',
      validator: value => ['sm', 'md', 'lg'].indexOf(value) !== -1,
    },
    outline: { type: Boolean, default: false }
  },

  computed: {
    listeners() {
      return { ...this.$listeners }
    },

    classes() {
      return [this.sizeClasses, this.colorClasses, this.textClasses]
    },

    sizeClasses() {
      switch (this.size) {
        case 'sm':
          return 'px-2 h-6 text-xs'
        case 'lg':
          return 'px-4 h-10 text-base'
        default:
          return 'px-3 h-8 text-sm'
      }
    },

    colorClasses() {
      switch (this.color) {
        case 'primary':
          if (this.outline) return 'bg-primary-100 border border-primary-500'
          return 'bg-primary-200 border border-primary-200'
        default:
          if (this.outline) return 'bg-gray-100 border border-gray-500'
          return 'bg-gray-200 border border-gray-200'
      }
    },

    textClasses() {
      switch (this.color) {
        case 'primary':
          if (this.outline) return 'text-primary-500'
          return 'text-primary-600'
        default:
          if (this.outline) return 'text-gray-600'
          return 'text-gray-700'
      }
    }
  }
}
</script>

<style scoped>
</style>
