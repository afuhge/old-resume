<template>
  <div class="skills">
    <div class="sidebar-title"><h3><b>FÄHIGKEITEN</b></h3></div>
    <div class="container">
      <div class="subskills"><b>Sprachen</b></div>
      <div class="subskills-container">
        <div class="skill-container" v-for="skill in Person.languages" :key="skill.languages">
          <div class="skill">{{ skill.skill1 }}</div>
          <div class="progressbar">
            <div :style="'width:' + skill.width + '%'"></div>
          </div>
        </div>
      </div>
      <div class="subskills"><b>Programmiersprachen</b></div>
      <div class="subskills-container">
        <div class="skill-container" v-for="skill in Person.programminglanguages" :key="skill.planguages">
          <div class="skill">{{ skill.skill1 }}</div>
          <div class="progressbar">
            <div :style="'width:' + skill.width + '%'"></div>
          </div>
        </div>
      </div>
      <div class="subskills"><b>Frameworks</b></div>
      <div class="subskills-container">
        <div class="skill-container" v-for="framework in Person.frameworks" :key="framework.framework">
          <div class="skill">{{ framework.framework }}</div>
          <div class="progressbar">
            <div :style="'width:' + framework.width + '%'"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="subskills"><b>Sonstige Kenntnisse</b></div>
    <div class="skill-container" style="margin-top: 10px;flex-wrap: wrap;">
      <div v-for="element in sonstiges.skills" :key="element.name">
        <b class="sonstiges">{{ element.name }}</b>
      </div>
    </div>
  </div>
</template>

<script>
import {Person, sonstiges} from "@/components/Person";
export default {
  name: "skills",
  data: function(){
    return {Person, sonstiges}
  }
}
</script>

<style scoped>
.container {
  margin-top: -10px;
}

.sidebar-title {
  color:white;
  font-size: 18px;
  text-align:center;
}

.subskills-container {
  margin-bottom: 20px;
}

.skill-container {
  display:flex;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
}

.subskills {
  color:#003037;
  font-size:18px; text-align: left;
  margin-left: 20px;
  margin-bottom: 10px;
}

.skill {
  color: white;
  width:37%;
  text-align: left;

}

.sonstiges {
  color: white;
  float: left;
  margin-right: 5px;
  margin-bottom:5px;
  border-radius: 10px;
  padding: 5px;
  border: solid 2px #0a5561;
  background-color: #0a5561;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

.skills {
  grid-row-start: 3;
  grid-row-end: 50;
  border-top: solid #017488;
}


.progressbar {
  background-color: #0a5561;
  border-radius: 10px;
  padding: 3px;
  height: 14px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  flex-grow: 1;
}


.progressbar > div {
  background-color: #f9f9f9;
  height: 8px;
  border-radius: 10px;

}
</style>
