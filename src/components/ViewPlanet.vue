<template>
  <div>
    <div class="mdl-card mdl-shadow--4dp portfolio-card">
      <button class="mdl-button
                     randPlanetBtn
                     mdl-js-button
                     mdl-button--raised
                     mdl-js-ripple-effect
                     mdl-button--colored"
              v-mdl
              @click="fetchRandomPlanet">
        <i class="material-icons">public</i> Random planet
      </button>
      <div v-mdl class="input mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input type="text"
               class="mdl-textfield__input"
               id="planetName"
               data-qa="nameTextbox"
               v-model="planetData.name">
        <label for="planetName" class="mdl-textfield__label">
          Name
        </label>
      </div>
      <div v-mdl class="input mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input type="text"
               class="mdl-textfield__input"
               id="planetRotation"
               data-qa="rotationPeriodTextbox"
               v-model="planetData.rotation_period">
        <label for="planetRotation" class="mdl-textfield__label">
          Rotation Period
        </label>
      </div>
      <div v-mdl class="input mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input type="text"
               class="mdl-textfield__input"
               id="orbitalPeriod"
               data-qa="orbitalPeriodTextbox"
               v-model="planetData.orbital_period">
        <label for="orbitalPeriod" class="mdl-textfield__label">
          Orbital Period
        </label>
      </div>
      <div v-mdl class="input mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input type="text"
               class="mdl-textfield__input"
               id="planetDiameter"
               data-qa="diameterTextbox"
               v-model="planetData.diameter">
        <label for="planetDiameter" class="mdl-textfield__label">
          Diameter
        </label>
      </div>
      <div v-mdl class="input mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input type="text"
               class="mdl-textfield__input"
               id="planetClimate"
               data-qa="climateTextbox"
               v-model="planetData.climate">
        <label for="planetClimate" class="mdl-textfield__label">
          Climate
        </label>
      </div>
      <div v-mdl class="input mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input type="text"
               class="mdl-textfield__input"
               id="gravity"
               data-qa="gravityTextbox"
               v-model="planetData.gravity">
        <label for="gravity" class="mdl-textfield__label">
          Gravity
        </label>
      </div>
      <div v-mdl class="input mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input type="text"
               class="mdl-textfield__input"
               id="planetTerrain"
               data-qa="terrainTextbox"
               v-model="planetData.terrain">
        <label for="planetTerrain" class="mdl-textfield__label">
          Terrain
        </label>
      </div>
      <div v-mdl class="input mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input type="text"
               class="mdl-textfield__input"
               id="surfaceWater"
               data-qa="surfaceWaterTextbox"
               v-model="planetData.surface_water">
        <label for="surfaceWater" class="mdl-textfield__label">
          Surface Water
        </label>
      </div>
      <div v-mdl class="input mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input type="text"
               class="mdl-textfield__input"
               id="planetPopulation"
               data-qa="populationTextbox"
               v-model="planetData.population">
        <label for="planetPopulation" class="mdl-textfield__label">
          Population
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import planet from '../api/planet';

export default {
  data() {
    return {
      planetData: {
        name: '',
        rotation_period: '',
        orbital_period: '',
        diameter: '',
        climate: '',
        gravity: '',
        terrain: '',
        surface_water: '',
        population: '',
      },
    };
  },
  methods: {
    fetchRandomPlanet() {
      const randomPlanetId = Math.floor((Math.random() * 61) + 1);
      planet.fetch(randomPlanetId).then((planetData) => {
        this.planetData = Object.assign(this.planetData, planetData);
      });
    },
  },
  updated() {
    const mdlInputs = document.querySelectorAll('.mdl-textfield');
    mdlInputs.forEach(value => value.MaterialTextfield.checkDirty());
  }
};
</script>
