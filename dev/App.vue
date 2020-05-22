<template>
  <div class="p-8">
    <h1 class="text-black text-3xl mb-8">Play with Bitbond components here</h1> 

    <bb-text-input v-model="text" label="A text input" placeholder="test me..." />
    <bb-btn>Click me</bb-btn>
  </div>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    text: ''
  }),

  watch: {
    text(newVal) {
      console.log(newVal)
    }
  }
}
</script>