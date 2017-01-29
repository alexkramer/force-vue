<template>
  <div>
    <div class="mdl-cell mdl-card mdl-shadow--4dp portfolio-card">
      <button class="randPersonBtn mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" v-on:click="fetchRandomPerson">
        <i class="material-icons">face</i> Random Person
      </button>
      <div class="input mdl-js-textfield input--floating-label">
        <input type="text"
               class="mdl-textfield__input"
               id="personDataName"
               data-qa="nameTextbox"
               v-model="personData.name">
        <label for="personDataName" class="mdl-textfield__label">
          Name
        </label>
      </div>
      <div class="input mdl-js-textfield input--floating-label">
        <input type="text"
               class="mdl-textfield__input"
               id="personDataHeight"
               data-qa="heightTextbox"
               floating-label="Height"
               v-model="personData.height">
        <label for="personDataHeight" class="mdl-textfield__label">
          Height
        </label>
      </div>
      <div class="input mdl-js-textfield input--floating-label">
        <input type="text" c
               class="mdl-textfield__input"
               id="personDataMass"
               data-qa="massTextbox"
               v-model="personData.mass">
        <label for="personDataMass" class="mdl-textfield__label">
          Mass
        </label>
      </div>
      <div class="input mdl-js-textfield input--floating-label">
        <input type="text"
               class="mdl-textfield__input"
               id="personDataHair"
               data-qa="hairColorTextbox"
               v-model="personData.hair_color">
        <label for="personDataHair" class="mdl-textfield__label">
          Hair color
        </label>
      </div>
      <div class="input mdl-js-textfield input--floating-label">
        <input type="text"
               class="mdl-textfield__input"
               id="personDataEyes"
               data-qa="eyeColorTextbox"
               v-model="personData.eye_color">
        <label for="personDataEyes" class="mdl-textfield__label">
          Eye color
        </label>
      </div>
      <div class="input mdl-js-textfield input--floating-label">
        <input type="text"
               class="mdl-textfield__input"
               id="personDataDOB"
               data-qa="birthYearTextbox"
               v-model="personData.birth_year">
        <label for="personDataDOB" class="mdl-textfield__label">
          Birth Year
        </label>
      </div>
      <div class="input mdl-js-textfield input--floating-label">
        <input type="text"
               class="mdl-textfield__input"
               id="personDataGender"
               data-qa="genderTextbox"
               v-model="personData.gender">
        <label for="personDataGender" class="mdl-textfield__label">
          Gender
        </label>
      </div>
    </div>
    <div class="mdl-cell mdl-card mdl-shadow--4dp">
      <figure class="mdl-card__media">
        <div v-show="loading"
             class="mdl-spinner
                    mdl-spinner--single-color
                    mdl-js-spinner
                    is-active"></div>
        <img v-show="imageShow" :src.sync="personImage">
        <span>{{personImageMsg}}</span>
      </figure>
    </div>
  </div>
</template>

<script>
import person from '../api/person';

export default {
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
