<template>
  <div id="app">
    <div class="mdl-grid portfolio-max-width">

    <select class="mdl-tabs__tab " v-model="selected">
      <option v-for="item in apiSelect">
        {{ item }}
      </option>
    </select>
      <view-person v-if="selected == 'Person'"></view-person>
      <view-planet v-if="selected == 'Planet'"></view-planet>
      <view-starship v-if="selected == 'Starship'"></view-starship>
    </div>
  </div>
</template>

<script>
import ViewPerson from './components/ViewPerson';
import ViewPlanet from './components/ViewPlanet';
import ViewStarship from './components/ViewStarship';

export default {
  components: {
    ViewPerson,
    ViewPlanet,
    ViewStarship,
  },
  data() {
    return {

      apiSelect: ['Person', 'Planet', 'Starship', 'Vehicle'],
      selected: 'Person',

    };
  },
};

</script>
