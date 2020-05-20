<template>
  <div>
    <transition name="switch" mode="out-in">
      <bb-icon
        v-if="copied"
        key="check"
        name="fas fa-check-circle"
        :class="[`cursor-pointer`, colorClass, sizeClass]"
      />
      <bb-icon
        v-else
        key="copy"
        name="far fa-clone"
        :class="[`cursor-pointer`, colorClass, sizeClass]"
        @click.native="copyToClipboard"
      />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'bbCopyBtn',

  props: {
    text: { type: String, required: true },
    color: { type: String, default: 'gray' },
    size: { type: String, default: 'md' }
  },

  data () {
    return {
      copied: false
    }
  },

  computed: {
    colorClass() {
      switch (this.color) {
        case 'primary':
          return 'text-primary-500 hover:text-primary-600'
        default:
          return 'text-gray-500 hover:text-gray-600'
      }
    },

    sizeClass() {
      switch (this.size) {
        case 'lg':
          return 'text-lg'
        case 'sm':
          return 'text-sm'
        default:
          return 'text-base'
      }
    }
  },

  methods: {
    copyToClipboard() {      
      let textarea = document.createElement('textarea')
      textarea.textContent = this.text
      document.body.appendChild(textarea)
      textarea.select()
    
      document.execCommand('cut')

      document.body.removeChild(textarea)
      
      this.copied = true
      this.baseSleep(2000).then(() => {
        this.copied = false
      })
    }
  }
}
</script>

<style scoped>
.switch-enter-active, .switch-leave-active {
  transition: all .1s;
}
.switch-enter, .switch-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: scale(0);
}
.input {
  width: 0px;
  height: 0px;
  resize: none;
  border: none;
  outline: none;
}
</style>
