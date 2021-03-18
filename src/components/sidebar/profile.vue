<template>
  <div class=" image">
    <div class="name">
      <h3><b>{{ Person.firstname.toUpperCase() }} {{ Person.lastname.toUpperCase() }}</b></h3>
    </div>
    <img src="~@/assets/bild.jpg" alt="profil"/>
  </div>
</template>

<script>
import {Person} from "@/components/Person";

export default {
  name: "profile",
  data: function() {
    return {
      Person
    }
  }
}
</script>

<style scoped>
.name {
  font-size: 18px;
  text-align: center;
  margin-bottom: 10px;
  color:white;

}

.image {
  padding-top:5px;
  padding-bottom: 10px;
}

img {
  margin-top:-6px;
  width: 55%;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

@media (max-width: 800px) {
  img {
    width: 33%;
  }
}

@media (max-width: 380px) {
  img {
    width: 90%;
  }
}

@media print {
  img {
    width: 55%;
  }
}

</style>
