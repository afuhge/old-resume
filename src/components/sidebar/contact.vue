<template>
  <div class="contact">
    <div class="sidebar-title"><h3><b>KONTAKT</b></h3></div>
    <div class="info">
      <div>
        <font-awesome-icon icon="user" fixed-width/>
      </div>
      <div class="info-text">Geboren am {{ Person.birthdate }}</div>
    </div>
    <div class="info">
      <div>
        <font-awesome-icon icon="envelope" fixed-width/>
      </div>
      <div class="info-text">{{ Person.email }}</div>
    </div>
    <div class="info">
      <div>
        <font-awesome-icon :icon="['fab', 'github']" fixed-width/>
      </div>
      <a class="info-text" :href="Person.github" style="color:white; text-decoration: none;">{{ Person.github }}</a>
    </div>
  </div>
</template>

<script>
import {Person} from "@/components/Person";

export default {
  name: "contact",
  data: function () {
    return {Person}
  },
}
</script>

<style scoped>

.contact {
  grid-row-start: 2;
  grid-row-end: 2;
  border-top: solid #017488;

}


.sidebar-title {
  color:white;
  font-size: 18px;
  text-align:center;
}

.info {
  color: white;
  display:flex;
  flex-direction: row;
  padding-left:20px;
  padding-right: 20px;
  align-items: center;
  margin-bottom: 10px;
}

.info-text {
  padding-left:20px;
  text-align: left;
}
</style>
