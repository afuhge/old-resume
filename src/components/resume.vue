<template>
  <div class="resume">
   <div class="left">
     <sidebar></sidebar>
   </div>
    <div class="right">
      <main-part></main-part>
    </div>
  </div>
</template>

<script>




import Sidebar from "@/components/sidebar/sidebar";
import MainPart from "@/components/mainContent/mainpart";
export default {
  name: "resume",
  components: {Sidebar, MainPart},
}
</script>

<style scoped>

.resume {
  font-family: 'Montserrat', sans-serif;
  display: flex;
  flex-direction: row;
  height: 100%;
}

.left {
  width: 40%;
}

.right {
  flex-grow: 1;
}


</style>
