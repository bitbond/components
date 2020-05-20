<template>
  <div class="flex flex-col mb-6">
    <label v-if="label" :for="name" :class="labelClasses">{{ label }}
      <span v-if="required">*</span>
    </label>
    <label v-else :for="name" :class="labelClasses">
      <slot name="label" />
    </label>
    <select
      :class="['bb-select-input w-full leading-none', ...inputClasses]"
      :name="name"
      :value="value"
      v-bind="$attrs"
      v-on="listeners"
    >
      <option v-for="(option, i) in options" :key="i" :value="valFor(option)">
        {{ textFor(option) }}
      </option>
    </select>
    <div :class="['relative', labelClasses]">
      <div
        v-show="hasError"
        class="text-red-500 text-sm absolute"
      >
        {{ errors[0] }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bbSelectInput',

  props: {
    options: { type: Array, required: true },
    value: { type: [String, Number], default: '' },
    label: { type: String, default: null },
    name: { type: String, default: 'select' },
    required: { type: Boolean, default: false },
    rules: { type: Array },
    validateOn: { type: String, default: 'change' },
    size: {
      type: String,
      default: 'medium',
      validator: value => ['small', 'medium', 'large'].indexOf(value) !== -1,
    }
  },

  data() {
    return {
      errors: []
    }
  },

  computed: {
    listeners() {
      let vm = this
      return {
        ...this.$listeners,
        change: event => {
          vm.$emit('input', event.target.value)
          vm.validate(event.target.value)
        }
      }
    },

    hasError() {
      return this.errors.length > 0
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

    inputClasses() {
      return [
        this.bgClasses,
        this.shapeClasses,
        this.sizeClasses,
        this.borderClasses,
        this.textColorClasses,
        this.textClasses,
        this.cursorClasses,
        this.textSize
      ]
    },

    bgClasses() {
      if (this.hasError) return 'bg-red-100'
      if (this.focussed) return 'bg-gray-100'
      return 'bg-gray-300'
    },

    borderClasses() {
      if (this.hasError) return 'border border-red-500'
      return 'border border-gray-300'
    },

    shapeClasses() {
      return 'rounded'
    },

    sizeClasses() {
      switch (this.size) {
        case 'large':
          return 'h-16 px-4'
        case 'small':
          return 'h-8 px-4'
        default:
          return 'h-10 px-4'
      }
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

    labelClasses() {
      return [
        this.textSize
      ]
    }
  },

  methods: {
    valFor(option) {
      if (typeof option === 'string' || option instanceof String) return option
      return option.value
    },

    textFor(option) {
      if (typeof option === 'string' || option instanceof String) return option
      return option.text
    },

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
.bb-select-input {
  display: block;
  box-sizing: border-box;
  box-shadow: none;
  outline: 0;
  text-shadow: 0 0 0 #000;
}
.bb-select-input:focus, .bb-select-input:active {
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  box-sizing: border-box;
  box-shadow: none;
  outline: 0;
  text-shadow: 0 0 0 #000;
}
</style>
