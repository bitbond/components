<template>
  <component
    :is="tag"
    :class="classes"
    v-bind="$attrs"
    :disabled="disabled"
    v-on="listeners"
  >
    <div class="flex justify-center items-center w-full h-full">
      <bb-loading-icon
        v-if="loading"
        :size="size"
        :color="loadingColorClass"
        class="mr-2"
      />
      <div v-else class="leading-none">
        <bb-icon
          v-if="icon"
          :name="icon"
          :class="[textColorClass, iconSize, { 'mr-2': !circle }]"
        />
        <slot />
      </div>
    </div>
  </component>
</template>

<script>
export default {
  name: 'bbBtn',

  props: {
    tag: { type: String, default: 'button' },
    size: { type: String, default: 'md' },
    color: { type: String, default: 'primary' },
    rounded: { type: Boolean, default: false },
    outline: { type: Boolean, default: false },
    block: { type: Boolean, default: false },
    circle: { type: Boolean, default: false },
    flat: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    icon: { type: String }
  },

  computed: {
    listeners() {
      return { ...this.$listeners }
    },

    classes() {
      return [
        this.defaultClass,
        this.sizeClass,
        this.shapeClass,
        this.bgClass,
        this.textColorClass,
        this.borderClass,
        this.shadowClass,
        this.displayClass,
        this.cursorClass
      ]
    },

    defaultClass() {
      return 'bb-btn font-medium border-2'
    },

    sizeClass() {
      if (this.circle) {
        switch (this.size) {
          case 'lg':
            return 'w-12 h-12 text-2xl'
          case 'sm':
            return 'w-6 h-6 text-lg'
          case 'xs':
            return 'w-4 h-4 text-xs'
          default:
            return 'w-10 h-10 text-base'
        }
      } else {
        switch (this.size) {
          case 'lg':
            return 'px-12 h-16 text-2xl'
          case 'sm':
            return 'px-4 h-8 text-xs'
          case 'xs':
            return 'px-2 h-6 text-xs'
          default:
            return 'px-8 h-12 text-base'
        }
      }
    },

    shapeClass() {
      if (this.circle) return 'rounded-full'
      switch (this.rounded) {
        case 'full':
          return 'rounded-full'
        case 'none':
          return 'rounded-none'
        default:
          return 'rounded'
      }
    },

    bgClass() {
      switch (this.color) {
        case 'white':
          if (this.flat) return this.disabled ? 'bg-white bg-opacity-25' : 'bg-white bg-opacity-25 hover:bg-opacity-50'
          if (this.outline) return 'bg-transparent'
          if (this.disabled) return 'bg-gray-200'
          return 'bg-white hover:bg-gray-100'
        case 'gray':
          if (this.flat) return this.disabled ? 'bg-gray-100': 'bg-gray-100 hover:bg-gray-200'
          if (this.outline) return 'bg-transparent'
          if (this.disabled) return 'bg-gray-400'
          return 'bg-gray-500 hover:bg-gray-600'
        default:
          if (this.flat) return this.disabled ? 'bg-primary-100': 'bg-primary-100 hover:bg-primary-200'
          if (this.outline) return 'bg-transparent'
          if (this.disabled) return 'bg-primary-400'
          return 'bg-primary-500 hover:bg-primary-600'
      }
    },

    borderClass() {
      switch (this.color) {
        case 'white':
          if (this.flat) return 'border-transparent'
          if (this.disabled) return 'border-gray-100'
          return 'border-white hover:border-gray-100'
        case 'gray':
          if (this.flat) return this.disabled ? 'border-gray-100' : 'border-gray-100 hover:border-gray-200'
          if (this.disabled) return 'border-gray-400'
          return 'border-gray-500 hover:border-gray-600'
        default:
          if (this.flat) return this.disabled ? 'border-primary-100' : 'border-primary-100 hover:border-primary-200'
          if (this.disabled) return 'border-primary-400'
          return 'border-primary-500 hover:border-primary-600'
      }
    },

    textColorClass() {
      switch (this.color) {
        case 'white':
          if (this.outline || this.flat) return 'text-white'
          return 'text-primary-500'
        case 'gray':
          if (this.outline || this.flat) return 'text-gray-500'
          return 'text-white'
        default:
          if (this.outline || this.flat) return 'text-primary-500'
          return 'text-white'
      }
    },

    loadingColorClass() {
      switch (this.color) {
        case 'white':
          if (this.outline || this.flat) return 'white'
          return 'primary'
        default:
          if (this.outline || this.flat) return 'primary'
          return 'white'
      }
    },

    shadowClass() {
      if (this.outline || this.flat || this.disabled) return ''
      return 'shadow-lg hover:shadow-none'
    },

    displayClass() {
      if (this.circle) return 'flex justify-center items-center'
      if (this.block) return 'block w-full'
      return 'inline-block'
    },

    cursorClass() {
      if (this.disabled) return 'cursor-not-allowed'
      return 'cursor-pointer'
    },

    iconSize() {
      if (this.circle) {
        switch (this.size) {
          case 'lg':
            return 'text-2xl'
          case 'sm':
            return 'text-lg'
          case 'xs':
            return 'text-xs'
          default:
            return 'text-base'
        }
      } else {
        switch (this.size) {
          case 'lg':
            return 'text-2xl'
          case 'sm':
            return 'text-xs'
          case 'xs':
            return 'text-xs'
          default:
            return 'text-base'
        }
      }
    }
  }
}
</script>

<style scoped>
.bb-btn {
  transition: all .2s ease;
  -webkit-transition: all .2s ease;
  -moz-transition: all .2s ease;
  -o-transition: all .2s ease;
  -ms-transition: all .2s ease;
  text-decoration: none !important;
  line-height: 0;
}

.bb-btn:focus, .bb-btn:active {
  outline: none !important;
}
</style>
