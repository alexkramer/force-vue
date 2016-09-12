<template>
  <div class="mdl-cell mdl-card mdl-shadow--4dp portfolio-card">
    <mdl-button class="randplanetBtn" v-mdl-ripple-effect colored icon raised v-on:click="fetchRandomPlanet">
      <i class="material-icons">public</i> Random planet
    </mdl-button>
    <mdl-textfield floating-label="Name" :value.sync="planetData.name"></mdl-textfield>
    <mdl-textfield floating-label="Rotation Period" :value.sync="planetData.rotation_period"></mdl-textfield>
    <mdl-textfield floating-label="Orbital Period" :value.sync="planetData.orbital_period"></mdl-textfield>
    <mdl-textfield floating-label="Diameter" :value.sync="planetData.diameter"></mdl-textfield>
    <mdl-textfield floating-label="Climate" :value.sync="planetData.climate"></mdl-textfield>
    <mdl-textfield floating-label="Gravity" :value.sync="planetData.gravity"></mdl-textfield>
    <mdl-textfield floating-label="terrain" :value.sync="planetData.terrain"></mdl-textfield>
    <mdl-textfield floating-label="Surface Water" :value.sync="planetData.surface_water"></mdl-textfield>
    <mdl-textfield floating-label="Population" :value.sync="planetData.population"></mdl-textfield>
  </div>
</template>

<script>
import { MdlButton, MdlTextfield, directives } from 'vue-mdl';
import planet from '../api/planet';

export default {
  components: {
    MdlButton,
    MdlTextfield,
  },
  directives,
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
};
</script>
