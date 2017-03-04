import Vue from 'vue';
import ViewPlanet from 'src/components/ViewPlanet.vue';

describe('ViewPlanet.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      template: '<div><view-planet></view-Planet></div>',
      components: { ViewPlanet },
    }).$mount();
    expect(vm.$el.querySelector('.randPlanetBtn').textContent).to.contain('Random Planet');
  });
});
