<template>
  <div class="site">
    <div class="grid-item1">
    </div>
  <div class="resume grid-item2">
   <div class="left">
     <sidebar></sidebar>
   </div>
    <div class="right">
      <main-part></main-part>
    </div>
  </div>
    <div class="grid-item3">
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
.site {
  display:grid;
  grid-template-columns: auto 1024px auto;
}
.grid-item1 {
  grid-column:1;
  background-color: #136e7c;
}
.grid-item2 {
  grid-column:2;
  box-shadow: 0 0 20px rgba(0,0,0, 0.2);
  z-index: 10;
}
.grid-item3{
  grid-column:3;
  background-color: #abb9ba;
}
.resume {
  font-family: 'Montserrat', sans-serif;
  display: flex;
  flex-direction: row;
}

.left {
  width: 40%;
}

.right {
  flex-grow: 1;
  background-color: #bec9ca;
}

@media (max-width: 1024px) {
  .site {
    display:grid;
    grid-template-columns: 0 100% 0;
  }
}

@media (max-width: 800px) {
  .site {
    display:grid;
    grid-template-columns: 0 100% 0;
  }

  .resume {
    flex-direction: column;
  }

  .left, .right {
    width: 100%;
  }
}

@media print {
  .grid-item1, .grid-item3 {
    display:none;
  }
  .site {
    display: block;

  }
  .left {
    width:40%
  }
  .right {
    flex-grow: 1;
  }

  .resume {
    flex-direction: row;
  }
}

</style>
