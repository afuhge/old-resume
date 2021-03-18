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
}

a.links {
  color:#2c3e50;
  text-decoration: none;
}

a.links:hover{
  text-decoration: underline;
}
</style>
