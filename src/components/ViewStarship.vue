<template>
  <div class="mdl-cell mdl-card mdl-shadow--4dp portfolio-card">
    <mdl-button class="randStarshipBtn" v-mdl-ripple-effect colored icon raised v-on:click="fetchRandomStartship">
      <i class="material-icons">public</i> Random starship
    </mdl-button>
    <mdl-textfield floating-label="Name" :value.sync="starshipData.name"></mdl-textfield>
    <mdl-textfield floating-label="Model" :value.sync="starshipData.model"></mdl-textfield>
    <mdl-textfield floating-label="Manugacturer" :value.sync="starshipData.manufacturer"></mdl-textfield>
    <mdl-textfield floating-label="Cost in Credits" :value.sync="starshipData.cost_in_credits"></mdl-textfield>
    <mdl-textfield floating-label="length" :value.sync="starshipData.length"></mdl-textfield>
    <mdl-textfield floating-label="Max Atomphering Speed" :value.sync="starshipData.max_atmosphering_speed"></mdl-textfield>
    <mdl-textfield floating-label="Crew" :value.sync="starshipData.crew"></mdl-textfield>
    <mdl-textfield floating-label="Passengers" :value.sync="starshipData.passengers"></mdl-textfield>
    <mdl-textfield floating-label="Cargo capacity" :value.sync="starshipData.cargo_capacity"></mdl-textfield>
    <mdl-textfield floating-label="Consumables" :value.sync="starshipData.consumables"></mdl-textfield>
    <mdl-textfield floating-label="Hyperdrive rate" :value.sync="starshipData.hyperdrive_rating"></mdl-textfield>
    <mdl-textfield floating-label="MGLT" :value.sync="starshipData.MGLT"></mdl-textfield>
    <mdl-textfield floating-label="Startship Class" :value.sync="starshipData.starship_class"></mdl-textfield>
  </div>
</template>

<script>
import { MdlButton, MdlTextfield, directives } from 'vue-mdl';
import starship from '../api/starship';

export default {
  components: {
    MdlButton,
    MdlTextfield,
  },
  directives,
  data() {
    return {
      starshipData: {
        name: '',
        model: '',
        manufacturer: '',
        cost_in_credits: '',
        length: '',
        max_atmosphering_speed: '',
        crew: '',
        passengers: '',
        cargo_capacity: '',
        consumables: '',
        hyperdrive_rating: '',
        MGLT: '',
        starship_class: '',
        pilots: '',
      },
    };
  },
  methods: {
    fetchRandomStartship() {
      const randomStartshipId = Math.floor((Math.random() * 61) + 1);
      starship.fetch(randomStartshipId).then((starshipData) => {
        this.starshipData = Object.assign(this.starshipData, starshipData);
      });
    },
  },
};
</script>
