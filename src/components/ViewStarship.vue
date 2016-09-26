<template>
  <div class="mdl-cell mdl-card mdl-shadow--4dp portfolio-card">
    <mdl-button class="randStarshipBtn" v-mdl-ripple-effect colored icon raised v-on:click="fetchRandomStarship">
      <i class="material-icons">public</i> Random starship
    </mdl-button>
    <mdl-textfield data-qa="nameTextbox" floating-label="Name" :value.sync="starshipData.name"></mdl-textfield>
    <mdl-textfield data-qa="modelTextbox" floating-label="Model" :value.sync="starshipData.model"></mdl-textfield>
    <mdl-textfield data-qa="manufacturerTextbox" floating-label="Manufacturer" :value.sync="starshipData.manufacturer"></mdl-textfield>
    <mdl-textfield data-qa="costInCreditsTextbox" floating-label="Cost in Credits" :value.sync="starshipData.cost_in_credits"></mdl-textfield>
    <mdl-textfield data-qa="lengthTextbox" floating-label="Length" :value.sync="starshipData.length"></mdl-textfield>
    <mdl-textfield data-qa="maxAtmosTextbox" floating-label="Max Atmospheric Speed" :value.sync="starshipData.max_atmosphering_speed"></mdl-textfield>
    <mdl-textfield data-qa="crewTextbox" floating-label="Crew" :value.sync="starshipData.crew"></mdl-textfield>
    <mdl-textfield data-qa="passengersTextbox" floating-label="Passengers" :value.sync="starshipData.passengers"></mdl-textfield>
    <mdl-textfield data-qa="cargoTextbox" floating-label="Cargo capacity" :value.sync="starshipData.cargo_capacity"></mdl-textfield>
    <mdl-textfield data-qa="consumablesTextbox" floating-label="Consumables" :value.sync="starshipData.consumables"></mdl-textfield>
    <mdl-textfield data-qa="hyperdriveTextbox" floating-label="Hyperdrive rate" :value.sync="starshipData.hyperdrive_rating"></mdl-textfield>
    <mdl-textfield data-qa="mgltTextbox" floating-label="MGLT" :value.sync="starshipData.MGLT"></mdl-textfield>
    <mdl-textfield data-qa="starshipClassTextbox" floating-label="Starship Class" :value.sync="starshipData.starship_class"></mdl-textfield>
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
    fetchRandomStarship() {
      const randomStarshipId = Math.floor((Math.random() * 37) + 1);
      starship.fetch(randomStarshipId).then((starshipData) => {
        this.starshipData = Object.assign(this.starshipData, starshipData);
      });
    },
  },
};
</script>
