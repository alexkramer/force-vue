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
    </div>
  </div>
</template>

<script>
import ViewPerson from './components/ViewPerson';
import ViewPlanet from './components/ViewPlanet';
export default {
  components: {
    ViewPerson,
    ViewPlanet,
  },
  data() {
    return {

      apiSelect: ['Person', 'Planet', 'Starships', 'Vehicle'],
      selected: 'Person',

    };
  },
};

</script>
