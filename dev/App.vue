<template>
  <div class="p-8">
    <h1 class="font-black text-3xl mb-8">Play with Bitbond components here</h1>

    <bb-text-input v-model="text" label="A text input" placeholder="test me..." />
    <bb-btn>Click me</bb-btn>

    <bb-select-input v-model="select" :options="['a', 'b', 'c']" />
  </div>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    text: "",
    select: "a"
  }),

  watch: {
    text(newVal) {
      console.log(newVal);
    },

    select(newVal) {
      console.log(newVal);
    }
  }
};
</script>