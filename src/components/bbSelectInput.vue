<template>
  <div :class="[{ 'mb-6': !noMargin }]">
    <label v-if="label" :for="name" :class="labelClasses">
      {{ label }}
    </label>
    <div class="relative">
      <select
        :value="value"
        v-bind="$attrs"
        v-on="listeners"
        :name="name"
        :class="inputClasses">
        <option v-if="defaultText" value="" hidden>{{ defaultText }}</option>
        <option
          v-for="(option, i) in options"
          :key="i"
          :value="valFor(option)">
          {{ textFor(option) }}
        </option>
      </select>
      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
      </div>
    </div>
    <div class="relative">
      <div
        v-show="hasError"
        class="g-text-field-error text-red-500 text-sm absolute">
        {{ errors[0] }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "bbSelectInput",

  props: {
    options: { type: Array, required: true },
    value: { type: [String, Number], default: "" },
    label: { type: String, default: null },
    name: { type: String, default: "select" },
    noMargin: { type: Boolean, default: false },
    rules: { type: Array },
    validateOn: { type: String, default: "change" },
    defaultText: { type: String },
    size: {
      type: String,
      default: "medium",
      validator: value => ["small", "medium", "large"].indexOf(value) !== -1
    }
  },

  data() {
    return {
      errors: []
    };
  },

  computed: {
    listeners() {
      let vm = this;
      return {
        ...this.$listeners,
        input: event => {
          vm.$emit("input", event.target.value);
          vm.validate(event.target.value);
        }
      };
    },

    hasError() {
      return this.errors.length > 0;
    },

    textSize() {
      switch (this.size) {
        case "large":
          return "text-lg";
        case "small":
          return "text-sm";
        default:
          return "text-base";
      }
    },

    inputClasses() {
      return [
        'block appearance-none w-full pr-8 rounded leading-none focus:outline-none',
        this.bgClasses,
        this.shapeClasses,
        this.sizeClasses,
        this.borderClasses,
        this.textColorClasses,
        this.textClasses,
        this.cursorClasses,
        this.textSize
      ];
    },

    bgClasses() {
      if (this.hasError) return "bg-red-100";
      if (this.focussed) return "bg-gray-100";
      return "bg-gray-300";
    },

    borderClasses() {
      if (this.hasError) return "border border-red-500";
      return "border border-gray-300";
    },

    shapeClasses() {
      return "rounded";
    },

    sizeClasses() {
      switch (this.size) {
        case "large":
          return "h-16 px-4";
        case "small":
          return "h-8 px-4";
        default:
          return "h-12 px-4";
      }
    },

    textColorClasses() {
      if (this.hasError) return "text-red-500";
      return "";
    },

    textClasses() {
      if (this.disabled) return "text-gray-600";
      if (this.uppercase) return "uppercase";
      return "";
    },

    cursorClasses() {
      if (this.disabled) return "cursor-not-allowed";
      return "";
    },

    labelClasses() {
      return [this.textSize];
    }
  },

  methods: {
    valFor(option) {
      if (typeof option === "string" || option instanceof String) return option;
      return option.value;
    },

    textFor(option) {
      if (typeof option === "string" || option instanceof String) return option;
      return option.text;
    },

    validate(val) {
      this.errors = [];
      if (this.rules && this.rules.length > 0)
        this.rules.forEach(rule => {
          let result = rule(val);
          if (typeof result === "string") this.errors.push(result);
        });
    }
  }
};
</script>

<style scoped>
.bb-select-input {
  display: block;
  box-sizing: border-box;
  box-shadow: none;
  outline: 0;
  text-shadow: 0 0 0 #000;
}
.bb-select-input:focus,
.bb-select-input:active {
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  box-sizing: border-box;
  box-shadow: none;
  outline: 0;
  text-shadow: 0 0 0 #000;
}
</style>
