<template>
  <div :class="[...classes, { 'mb-6': !noMargin }]">
    <div>
      <label v-if="label" :for="name" :class="labelClasses">{{ label }}
        <span v-if="required">*</span>
      </label>
      <label v-else :for="name" :class="labelClasses">
        <slot name="label" />
      </label>
      <div class="flex">
        <div
          v-if="prepend"
          :class="[`prepend rounded-l`, ...prependClasses]"
        >
          <div class="flex items-center justify-center h-full">
            <slot name="prepend" />
          </div>
        </div>
        <div class="flex-1">
          <input
            :class="['w-full leading-none', ...inputClasses]"
            :type="type"
            :name="name"
            :value="value"
            v-bind="$attrs"
            :disabled="disabled"
            v-on="listeners"
          >
        </div>
        <div
          v-if="append"
          :class="[`append rounded-r`, ...appendClasses]"
        >
          <div class="flex items-center justify-center h-full">
            <slot name="append" />
          </div>
        </div>
      </div>
    </div>
    <div :class="['relative', ...labelClasses]">
      <div
        v-show="hasError"
        class="text-red-500 text-sm absolute"
      >
        {{ errors[0] }}
      </div>
      <div
        v-show="!hasError && !!hint"
        class="text-gray-500 text-sm absolute"
      >
        {{ hint }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bbTextInput',

  props: {
    type: { type: String, default: 'text' },
    value: { type: [String, Number], default: '' },
    label: { type: String, default: null },
    name: { type: String, default: 'input' },
    required: { type: Boolean, default: false },
    prepend: { type: Boolean, default: false },
    append: { type: Boolean, default: false },
    raised: { type: Boolean, default: false },
    uppercase: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    rules: { type: Array },
    validateOn: { type: String, default: 'blur' },
    noMargin: { type: Boolean, default: false },
    transparentDark: { type: Boolean, default: false },
    hint: { type: String },
    size: {
      type: String,
      default: 'medium',
      validator: value => ['small', 'medium', 'large'].indexOf(value) !== -1,
    },
  },

  data() {
    return {
      focussed: false,
      errors: []
    }
  },

  computed: {
    listeners() {
      let vm = this
      return {
        ...this.$listeners,
        input: event => {
          vm.$emit('input', event.target.value)
          if (this.validateOn === 'input') vm.validate(event.target.value)
        },
        focus: () => {
          vm.$emit('focus')
          vm.focussed = true
        },
        blur: event => {
          vm.$emit('blur')
          vm.focussed = false
          if (this.validateOn === 'blur') vm.validate(event.target.value)
        }
      }
    },

    hasError() {
      return this.errors.length > 0
    },

    classes() {
      return []
    },

    inputClasses() {
      return [
        this.bgClasses,
        this.shapeClasses,
        this.sizeClasses,
        this.inputBorderClasses,
        this.textColorClasses,
        this.textClasses,
        this.cursorClasses,
        this.shadowClasses,
        this.textSize
      ]
    },

    labelClasses() {
      return [
        this.textSize,
        this.textColorClasses,
      ]
    },

    prependClasses() {
      const borderClasses = 'border-t border-b border-l'
      let borderColor = 'border-gray-300'
      if (this.raised) borderColor = 'border-white'
      if (this.transparentDark) borderColor = 'border-black border-opacity-0'
      if (this.hasError) borderColor = 'border-red-500'
      return [
        borderClasses,
        borderColor,
        this.bgClasses,
        this.shadowClasses,
        this.textSize
      ]
    },

    appendClasses() {
      const borderClasses = 'border-t border-b border-r'
      let borderColor = 'border-gray-300'
      if (this.raised) borderColor = 'border-white'
      if (this.transparentDark) borderColor = 'border-black border-opacity-0'
      if (this.hasError) borderColor = 'border-red-500'
      return [
        borderClasses,
        borderColor,
        this.bgClasses,
        this.shadowClasses,
        this.textSize
      ]
    },

    bgClasses() {
      if (this.hasError) {
        if (this.transparentDark) return 'bg-black bg-opacity-25'
        return 'bg-red-100'
      }
      if (this.focussed && !this.raised) {
        if (this.transparentDark) return 'bg-black bg-opacity-25'
        return 'bg-gray-100'
      }
      if (this.raised) return 'bg-white'
      if (this.transparentDark) return 'bg-black bg-opacity-25'
      return 'bg-gray-300'
    },

    inputBorderClasses() {
      if (this.hasError) {
        if (this.prepend && this.append) return 'border-t border-b border-red-500'
        if (this.prepend) return 'border-t border-b border-r border-red-500'
        if (this.append) return 'border-t border-b border-l border-red-500'
        return 'border border-red-500'
      } else if (this.raised) {
        return 'border border-white'
      } else if (this.transparentDark) {
        if (this.prepend && this.append) return `border-t border-b border-black border-opacity-0`
        if (this.prepend) return `border-t border-b border-r border-black border-opacity-0`
        if (this.append) return `border-t border-b border-l border-black border-opacity-0`
        return `border border-black border-opacity-0`
      } else {
        if (this.prepend && this.append) return `border-t border-b border-gray-300`
        if (this.prepend) return `border-t border-b border-r border-gray-300`
        if (this.append) return `border-t border-b border-l border-gray-300`
        return `border border-gray-300`
      }
    },

    shapeClasses() {
      if (this.prepend && this.append) return ''
      if (this.prepend) return 'rounded-r'
      if (this.append) return 'rounded-l'
      return 'rounded'
    },

    textColorClasses() {
      if (this.hasError) return 'text-red-500'
      if (this.transparentDark) return 'text-white'
      return ''
    },

    textClasses() {
      if (this.disabled) return 'text-gray-600'
      if (this.uppercase) return 'uppercase'
      return ''
    },

    cursorClasses() {
      if (this.disabled) return 'cursor-not-allowed'
      return ''
    },

    shadowClasses() {
      if (this.raised) return 'shadow'
      return ''
    },

    textSize() {
      switch (this.size) {
        case 'large':
          return 'text-lg'
        case 'small':
          return 'text-sm'
        default:
          return 'text-base'
      }
    },

    sizeClasses() {
      switch (this.size) {
        case 'large':
          return 'h-16 px-4'
        case 'small':
          return 'h-8 px-4'
        default:
          return 'h-12 px-4'
      }
    }
  },

  methods: {
    validate(val) {
      this.errors = []
      if (this.rules && this.rules.length > 0) this.rules.forEach(rule => {
        let result = rule(val)
        if (typeof result === 'string') this.errors.push(result)
      })
    }
  }
}
</script>

<style scoped>
input, .prepend, .append {
  transition: all .3s ease;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

input:focus {
  outline: none;
}
</style>
