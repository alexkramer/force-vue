<template>
  <div>
    <div class="mdl-cell mdl-card mdl-shadow--4dp portfolio-card">
      <button class="randStarshipBtn  mdl-button mdl-js-button mdl-button--raised
                     mdl-js-ripple-effect mdl-button--colored"
              v-on:click="fetchRandomStarship">
        <i class="material-icons">public</i> Random starship
      </button>
      <div class="input mdl-js-textfield input--floating-label">
        <input type="text"
               class="mdl-textfield__input"
               id="starshipName"
               data-qa="nameTextbox"
               v-model="starshipData.name">
        <label for="starshipName" class="mdl-textfield__label">
          Name
        </label>
      </div>
      <div class="input mdl-js-textfield input--floating-label">
        <input type="text"
               class="mdl-textfield__input"
               id="starshipModel"
               data-qa="modelTextbox"
               v-model="starshipData.model">
        <label for="starshipModel" class="mdl-textfield__label">
          Model
        </label>
      </div>
      <div class="input mdl-js-textfield input--floating-label">
        <input type="text"
               class="mdl-textfield__input"
               id="starshipManufacturer"
               data-qa="manufacturerTextbox"
               v-model="starshipData.manufacturer">
        <label for="starshipManufacturer" class="mdl-textfield__label">
          Manufacturer
        </label>
      </div>
      <div class="input mdl-js-textfield input--floating-label">
        <input type="text"
               class="mdl-textfield__input"
               id="starshipCost"
               data-qa="costInCreditsTextbox"
               v-model="starshipData.cost_in_credits">
        <label for="starshipCost" class="mdl-textfield__label">
          Cost in credits
        </label>
      </div>
      <div class="input mdl-js-textfield input--floating-label">
        <input type="text"
               class="mdl-textfield__input"
               id="starshipLength"
               data-qa="lengthTextbox"
               v-model="starshipData.length">
        <label for="starshipLength" class="mdl-textfield__label">
          Length
        </label>
      </div>
      <div class="input mdl-js-textfield input--floating-label">
        <input type="text"
               class="mdl-textfield__input"
               id="starshipMaxSpeed"
               data-qa="maxAtmosTextbox"
               v-model="starshipData.max_atmosphering_speed">
        <label for="starshipMaxSpeed" class="mdl-textfield__label">
          Max Atmospheric Speed
        </label>
      </div>
      <div class="input mdl-js-textfield input--floating-label">
        <input type="text"
               class="mdl-textfield__input"
               id="starshipCrew"
               data-qa="crewTextbox"
               v-model="starshipData.crew">
        <label for="starshipCrew" class="mdl-textfield__label">
          Crew
        </label>
      </div>
      <div class="input mdl-js-textfield input--floating-label">
        <input type="text"
               class="mdl-textfield__input"
               id="starshipPassengers"
               data-qa="passengersTextbox"
               v-model="starshipData.passengers">
        <label for="starshipPassengers" class="mdl-textfield__label">
          Passengers
        </label>
      </div>
      <div class="input mdl-js-textfield input--floating-label">
        <input type="text"
               class="mdl-textfield__input"
               id="starshipCargoCapacity"
               data-qa="cargoTextbox"
               v-model="starshipData.cargo_capacity">
        <label for="starshipCargoCapacity" class="mdl-textfield__label">
          Cargo capacity
        </label>
      </div>
      <div class="input mdl-js-textfield input--floating-label">
        <input type="text"
               class="mdl-textfield__input"
               id="starshipConsumables"
               data-qa="consumablesTextbox"
               v-model="starshipData.consumables">
        <label for="starshipConsumables" class="mdl-textfield__label">
          Consumables
        </label>
      </div>
      <div class="input mdl-js-textfield input--floating-label">
        <input type="text"
               class="mdl-textfield__input"
               id="starshipHyperdrive"
               data-qa="hyperdriveTextbox"
               v-model="starshipData.hyperdrive_rating">
        <label for="starshipHyperdrive" class="mdl-textfield__label">
          Hyperdrive rate
        </label>
      </div>
      <div class="input mdl-js-textfield input--floating-label">
        <input type="text"
               class="mdl-textfield__input"
               id="mglt"
               data-qa="mgltTextbox"
               v-model="starshipData.MGLT">
        <label for="mglt" class="mdl-textfield__label">
          MGLT
        </label>
      </div>
      <div class="input mdl-js-textfield input--floating-label">
        <input type="text"
               class="mdl-textfield__input"
               id="starshipClass"
               data-qa="starshipClassTextbox"
               v-model="starshipData.starship_class">
        <label for="starshipClass" class="mdl-textfield__label">
          Class
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import starship from '../api/starship';

export default {
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
