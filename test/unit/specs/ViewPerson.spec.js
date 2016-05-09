import Vue from 'vue';
import ViewPerson from 'src/components/ViewPerson';

describe('ViewPerson.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      template: '<div><view-person></view-person></div>',
      components: { ViewPerson },
    }).$mount();
    expect(vm.$el.querySelector('.randPersonBtn').textContent).to.contain('Random Person');
  });
});
