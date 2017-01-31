import Vue from 'vue';
import ViewStarship from 'src/components/ViewStarship.vue';

describe('ViewStarship.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      template: '<div><view-starship></view-starship></div>',
      components: { ViewStarship },
    }).$mount();
    expect(vm.$el.querySelector('.randStarshipBtn').textContent).to.contain('Random starship');
  });
});
