<template>
  <div class="mdl-cell mdl-card mdl-shadow--4dp portfolio-card">
    <mdl-button class="randPersonBtn" v-mdl-ripple-effect colored icon raised v-on:click="fetchRandomPerson">
      <i class="material-icons">face</i> Random Person
    </mdl-button>
    <mdl-textfield floating-label="Name" :value.sync="personData.name"></mdl-textfield>
    <mdl-textfield floating-label="Height" :value.sync="personData.height"></mdl-textfield>
    <mdl-textfield floating-label="Mass" :value.sync="personData.mass"></mdl-textfield>
    <mdl-textfield floating-label="Hair Color" :value.sync="personData.hair_color"></mdl-textfield>
    <mdl-textfield floating-label="Eye Color" :value.sync="personData.eye_color"></mdl-textfield>
    <mdl-textfield floating-label="Birth Year" :value.sync="personData.birth_year"></mdl-textfield>
    <mdl-textfield floating-label="Gender" :value.sync="personData.gender"></mdl-textfield>
  </div>
  <div class="mdl-cell mdl-card mdl-shadow--4dp">
    <figure class="mdl-card__media">
      <div v-show="loading" class="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active"></div>
      <img v-show="imageShow" :src.sync="personImage">
      <span>{{personImageMsg}}</span>
    </figure>
  </div>
</template>

<script>
import person from '../api/person';
import { MdlButton, MdlTextfield, directives } from 'vue-mdl';

export default {
  components: {
    MdlButton,
    MdlTextfield,
  },
  directives,
  data() {
    return {
      personData: {
        name: '',
        height: '',
        mass: '',
        hair_color: '',
        eye_color: '',
        birth_year: '',
        gender: '',
      },
      personImage: '',
      personImageMsg: '',
      imageShow: false,
      loading: false,
    };
  },
  methods: {
    fetchRandomPerson() {
      this.loading = true;
      this.imageShow = false;
      this.personImageMsg = '';
      const randomPersonId = Math.floor((Math.random() * 87) + 1);
      person.fetch(randomPersonId).then((personData) => {
        this.personData = Object.assign(this.personData, personData);
        person.getPicture(this.personData.name).then((data) => {
          this.loading = false;
          if (data) {
            this.personImage = data;
            this.imageShow = true;
          } else {
            this.personImage = '';
            this.personImageMsg = 'No image found.';
          }
        });
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: black;
}
figure img {
  width: 285px;
}
.mdl-card__media {
  background-color: #FFF;
}
</style>
