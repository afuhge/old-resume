<template>
  <div class="middlepart">
    <div class="subheadline">
      <h3 class="subheadline-title"><b class="title">BERUFLICHE LAUFBAHN</b></h3>
      <div style="margin-top:-5px;">
      <div class="card" v-for="work1 in work.work" :key="work1.name">
        <div class="container">
          <h3 class="m-0"><b>{{work1.name}}</b></h3>
          <h5 class="m-0">{{work1.university}}, {{work1.year}}</h5>
        </div>
      </div>
      </div>
    </div>
    <div class="subheadline">
      <h3 class="subheadline-title"><b class="title">SCHULISCHE LAUFBAHN</b></h3>
      <div style="margin-top:-5px;">
      <div class="card" v-for="ed in education.education" :key="ed.degree">
        <div class="container">
          <h3 class="m-0" v-if="ed.major.length>0"><b>{{ed.degree}} in {{ed.major}}</b></h3>
          <h3 class="m-0" v-else-if="ed.major.length<=0"><b>{{ed.degree}}</b></h3>
          <h5 class="m-0">{{ed.school}}, {{ed.year}}</h5>
          <div v-if="ed.title.length>0" style="margin-top: 15px;"><em> {{ed.title}}</em></div>
        </div>
      </div>
    </div>
    </div>

    <div class="subheadline">
      <h3 class="subheadline-title"><b class="title">LEHRE</b></h3>
      <div style="margin-top:-5px;">
      <div class="card" v-for="lehre in teaching.teaching" :key="lehre.name">
        <div class="container">
          <h3 class="m-0"><b>{{lehre.name}}</b></h3>
          <h5 class="m-0">{{lehre.university}}, {{lehre.year}}</h5>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import {Person, education, work, teaching} from "@/components/Person";

export default {
  name: "mainpart",
  data: function () {
    return {Person, education, work, teaching}
  }
}
</script>

<style scoped>
.middlepart {
  font-size: 28px; /* Increased text to enable scrolling */
  background-color: #bec9ca;
  height: 100%;
  overflow: auto;
}

.title {
  color:#0a5561;
}

.subheadline-title {
  margin-top: 30px;
}

.subheadline {
  font-size: 18px;
  text-align: left;
  margin-left: 20px;
  margin-right: 20px;
  margin-top:-5px;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 10px;
  width: 100%;
  margin-bottom: 20px;
}


.container {
  padding: 20px;
  border-radius: 10px;
  background-color: #f9f9f9c4;
}

h3 {
  color:black;
}
h6 {
  color:#737373;
}
h5 {
  color: gray;
}
h4 {
  color:black;
}
</style>
