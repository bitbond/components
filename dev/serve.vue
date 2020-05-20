<script>
import Vue from 'vue';
import { @bitbond/componentsSample } from '@/entry';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    @bitbond/componentsSample,
  }
});
</script>

<template>
  <div id="app">
    <@bitbond/components-sample />
  </div>
</template>
