<template>
  <div id="app">
    <resume></resume>
  </div>
</template>

<script>

import Resume from "@/components/resume";
export default {
  name: 'App',
  components: {
    Resume,
  }
}
</script>

<style>
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  overflow: hidden;
}
</style>
