<template>
  <div class="fixed bottom-0 left-0 z-50 w-full p-4 mb-20">
    <div class="w-full sm:w-2/3 md:w-1/3 mx-auto flex items-center justify-between">
      <div :class="['shadow-lg rounded w-full flex items-center justify-between p-4', classes]">
        <div class="flex items-center">
          <bb-icon :name="icon" class="mr-4" size="2xl" />
          <h4 class="leading-none text-lg">
            {{ label }}
          </h4>
        </div>
        <div
          v-if="!persistant"
          data-test="dismiss-snackbar"
          class="cursor-pointer text-xs rounded font-medium uppercase"
          @click="$emit('dismiss')"
        >
          {{ $t('labels.dismiss') }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bbSnackbar',

  props: {
    label: { type: String, required: true },
    type: { type: String },
    persistant: { type: Boolean, default: false }
  },

  computed: {
    icon() {
      switch (this.type) {
        case 'success':
          return 'fas fa-check-circle'
        case 'warning':
          return 'fas fa-exclamation-triangle'
        case 'error':
          return 'fas fa-exclamation-triangle'
        default:
          return 'fas fa-info-circle'
      }
    },

    classes() {
      switch (this.type) {
        case 'success':
          return 'bg-green-500 text-white'
        case 'warning':
          return 'bg-orange-500 text-white'
        case 'error':
          return 'bg-red-500 text-white'
        default:
          return 'bg-primary-500 text-white'
      }
    }
  }
}
</script>

<style scoped>
</style>
