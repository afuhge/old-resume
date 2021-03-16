<template>
  <div class="sidebar">
    <profile></profile>
    <contact></contact>
    <skills></skills>
  </div>
</template>


<script>
import {Person, sonstiges} from "@/components/Person";
import Contact from "@/components/sidebar/contact";
import Profile from "@/components/sidebar/profile";
import Skills from "@/components/sidebar/skills";

export default {
  name: "sidebar",
  components: {Skills, Profile, Contact},
  data: function () {
    return {Person, sonstiges}
  },


}
</script>

<style scoped>
.sidebar {
  height: 100%;
  background-color: #17889A;
  display: grid;
  border-right: solid 4px #017488;
}
</style>
