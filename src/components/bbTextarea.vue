<template>
  <div :class="[...classes, { 'mb-6': !noMargin }]">
    <div>
      <label v-if="label" :for="name" :class="labelClasses">{{ label }}
        <span v-if="required">*</span>
      </label>
      <label v-else :for="name" :class="labelClasses">
        <slot name="label" />
      </label>
      <textarea
        :class="['w-full', ...inputClasses]"
        :type="type"
        :name="name"
        :value="value"
        v-bind="$attrs"
        :disabled="disabled"
        v-on="listeners"
      />
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
  name: 'bbTextarea',

  props: {
    type: { type: String, default: 'text' },
    value: { type: [String, Number], default: '' },
    label: { type: String, default: null },
    name: { type: String, default: 'input' },
    required: { type: Boolean, default: false },
    uppercase: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    rules: { type: Array },
    validateOn: { type: String, default: 'blur' },
    noMargin: { type: Boolean, default: false },
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
        this.textSize
      ]
    },

    labelClasses() {
      return [
        this.textSize
      ]
    },

    bgClasses() {
      if (this.hasError) return 'bg-red-100'
      if (this.focussed) return 'bg-gray-100'
      return 'bg-gray-300'
    },

    inputBorderClasses() {
      if (this.hasError) return 'border border-red-500'
      return 'border border-gray-300'
    },

    shapeClasses() {
      return 'rounded'
    },

    textColorClasses() {
      if (this.hasError) return 'text-red-500'
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
          return 'px-4 py-2'
        case 'small':
          return 'px-4 py-2'
        default:
          return 'px-4 py-2'
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
textarea {
  transition: all .3s ease;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

textarea:focus {
  outline: none;
}
</style>
